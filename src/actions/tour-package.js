"use server";
import { db_connect } from "@/database";
import { TourPackageModel } from "@/database/models/tourPackageModel";

export const getTourPackages = async (page = 1) => {
  const limit = 6;
  const skip = (Number(page) - 1) * Number(limit);
  try {
    await db_connect();
    const tourPackageData = await TourPackageModel.find()
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 })
      .lean();
    const total = await TourPackageModel.countDocuments();
    const tourPackageDataWithPagination = {
      data: tourPackageData,
      pagination: {
        page: page,
        limit: limit,
        total: total,
        totalPages: Math.ceil(total / limit),
      },
    };
    return JSON.parse(JSON.stringify(tourPackageDataWithPagination));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getTourPackageBySlug = async (slug) => {
  try {
    await db_connect();
    const tourPackageData = await TourPackageModel.findOne({ slug: slug })
      .sort({ createdAt: -1 })
      .lean();
    return JSON.parse(JSON.stringify(tourPackageData));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getTourPackageByLocation = async (location = "all") => {
  try {
    await db_connect();
    const tourPackageData = await TourPackageModel.find({
      location: location == "all" ? /./ : location,
    })
      .sort({ createdAt: -1 })
      .lean();
    return JSON.parse(JSON.stringify(tourPackageData));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
