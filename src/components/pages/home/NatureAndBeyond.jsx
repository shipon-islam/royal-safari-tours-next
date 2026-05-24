"use client";
import CommonHeading from "@/components/CommonHeading";
import ShapeButton from "@/components/ShapeButton";
import TourCard from "@/components/TourCard";
import { UseTourState } from "@/context/TourContextProvider";
import Image from "next/image";
import { useState } from "react";
export default function NatureAndBeyond({ tourPackages, locations }) {
  const [showMore, setShowMore] = useState(false);
  const { location: queryLocation, categoryChangeHandler } = UseTourState();

  const packages =
    queryLocation?.toLowerCase() === "all"
      ? tourPackages
      : tourPackages?.filter(
          (pkg) => pkg.location.toLowerCase() === queryLocation.toLowerCase(),
        );

  return (
    <div className="bg-body">
      <div className="container max-w-380 py-14">
        <CommonHeading
          title="Nature & Beyond"
          subtitle="Unforgettable Journeys"
        />
        <div className="flex flex-wrap justify-center gap-4 w-fit mx-auto my-8">
          <ShapeButton
            name="All"
            onClick={() => categoryChangeHandler("all")}
            className={`group-hover:text-black hoverEffect  ${
              queryLocation && queryLocation.toLowerCase() === "all"
                ? "text-black!"
                : ""
            }`}
          />

          {locations.map((location) => (
            <ShapeButton
              key={location._id}
              name={location.country}
              className={`group-hover:text-black hoverEffect capitalize ${
                queryLocation &&
                queryLocation.toLowerCase() === location.country.toLowerCase()
                  ? "text-black!"
                  : ""
              }`}
              onClick={() => categoryChangeHandler(location.country)}
            />
          ))}
        </div>
        {packages.length === 0 && (
          <div className="w-fit mx-auto text-center">
            <Image
              src="/images/dashboard/empty.png"
              width={400}
              height={400}
              alt="empty"
            />
            <p className="text-gray-500 text-xl mt-8 font-inter">
              There is no tour package here!
            </p>
          </div>
        )}
        <div
          id="tour_packages"
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 xxs:gap-4 lg:gap-10 pt-20"
        >
          {packages
            .slice(0, showMore ? packages.length : 6)
            .map((tour_package) => (
              <TourCard key={tour_package._id} tour_package={tour_package} />
            ))}
        </div>
        {packages.length > 6 && (
          <div className="mx-auto block w-fit mt-5">
            <ShapeButton
              onClick={() => setShowMore((prev) => !prev)}
              name={showMore ? "SEE LESS" : "SEE MORE"}
              className="text-orange! "
            />
          </div>
        )}
      </div>
    </div>
  );
}
