"use server";
import { db_connect } from "@/database";
import { TourLocationModel } from "@/database/models/tourLocationModel";

export const getTourLocations = async () => {
  try {
    await db_connect();
    const tourLocationData = await TourLocationModel.find()
      .sort({ createdAt: -1 })
      .lean();
    return JSON.parse(JSON.stringify(tourLocationData));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getTourLocationsByPagination = async (page = 1) => {
  const limit = 6;
  const skip = (Number(page) - 1) * Number(limit);
  try {
    await db_connect();
    const tourLocationData = await TourLocationModel.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    const total = await TourLocationModel.countDocuments();
    const tourLocationWithPagination = {
      data: tourLocationData,
      pagination: {
        page: page,
        limit: limit,
        total: total,
        totalPages: Math.ceil(total / limit),
      },
    };
    return JSON.parse(JSON.stringify(tourLocationWithPagination));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getTourLocationBySlug = async (slug) => {
  try {
    await db_connect();
    const tourLocationData = await TourLocationModel.findOne({ slug: slug })
      .sort({ createdAt: -1 })
      .lean();
    return JSON.parse(JSON.stringify(tourLocationData));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
