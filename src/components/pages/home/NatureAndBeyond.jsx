"use client";
import CommonHeading from "@/components/CommonHeading";
import ShapeButton from "@/components/ShapeButton";
import TourCard from "@/components/TourCard";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
export default function NatureAndBeyond({ tourPackages, locations }) {
  const searchParams = useSearchParams();

  const [showMore, setShowMore] = useState(false);
  const queryLocation = searchParams.get("location") || "all";
  return (
    <div className="bg-body">
      <div className="container max-w-[1520px] py-14">
        <CommonHeading
          title="Nature & Beyond"
          subtitle="Unforgettable Journeys"
        />
        <div className="flex flex-wrap justify-center gap-4 w-fit mx-auto my-8">
          <Link scroll={false} href={`/?location=all`}>
            <ShapeButton
              name="All"
              className={`group-hover:text-black hoverEffect  ${
                queryLocation && queryLocation.toLowerCase() === "all"
                  ? "text-black!"
                  : ""
              }`}
            />
          </Link>
          {locations.map((location) => (
            <Link
              scroll={false}
              href={`/?location=${location.country}`}
              key={location._id}
            >
              <ShapeButton
                name={location.country}
                className={`group-hover:text-black hoverEffect capitalize ${
                  queryLocation &&
                  queryLocation.toLowerCase() === location.country.toLowerCase()
                    ? "text-black!"
                    : ""
                }`}
              />
            </Link>
          ))}
        </div>
        {tourPackages.length === 0 && (
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
          {tourPackages
            .slice(0, showMore ? tourPackages.length : 6)
            .map((tour_package) => (
              <TourCard key={tour_package._id} tour_package={tour_package} />
            ))}
        </div>
        {tourPackages.length > 6 && (
          <div className="mx-auto block w-fit mt-5">
            <ShapeButton
              onClick={() => setShowMore((prev) => !prev)}
              name={showMore ? "SEE LESS" : "SEE MORE"}
              className="!text-orange "
            />
          </div>
        )}
      </div>
    </div>
  );
}
