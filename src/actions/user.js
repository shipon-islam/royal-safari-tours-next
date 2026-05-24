"use server";
import { db_connect } from "@/database";
import { UserModel } from "@/database/models/userModel";

export const getUsers = async (page = 1) => {
  try {
    const limit = 10;
    const currentPage = Math.max(1, Number(page) || 1);

    const skip = (currentPage - 1) * limit;
    await db_connect();
    const [userData, total] = await Promise.all([
      UserModel.find().skip(skip).limit(limit).sort({ createdAt: -1 }).lean(),

      UserModel.countDocuments(),
    ]);
    const users = JSON.parse(JSON.stringify(userData));
    return {
      success: true,
      data: users,
      pagination: {
        page: currentPage,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Get Users Error:", error);

    return {
      success: false,
      message: "Failed to fetch users",
    };
  }
};
