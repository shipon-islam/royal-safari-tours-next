"use client"
import CommonHeading from "@/components/CommonHeading";
import ShapeButton from "@/components/ShapeButton";
import TourCard from "@/components/TourCard";
import { UseTourState } from "@/context/TourContextProvider";
import { useState } from "react";
export default function NatureAndBeyond() {
  const { packages, categoryChangeHandler, activeTab } = UseTourState();
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="bg-body">
      <div className="container max-w-[1520px] py-14">
        <CommonHeading
          title="Nature & Beyond"
          subtitle="Unforgettable Journeys"
        />
        <div className="flex flex-wrap justify-center gap-4 w-fit mx-auto my-8">
          <ShapeButton
            name="All"
            className={`group-hover:text-black hoverEffect ${
              activeTab === "all" ? "!text-black" : ""
            }`}
            onClick={() => categoryChangeHandler("all")}
          />
          <ShapeButton
            name="Bangladesh"
            className={`group-hover:text-black hoverEffect ${
              activeTab === "bangladesh" ? "!text-black" : ""
            }`}
            onClick={() => categoryChangeHandler("bangladesh")}
          />
          <ShapeButton
            name="Thailand"
            className={`group-hover:text-black hoverEffect ${
              activeTab === "thailand" ? "!text-black" : ""
            }`}
            onClick={() => categoryChangeHandler("thailand")}
          />
          <ShapeButton
            name="Nepal"
            className={`group-hover:text-black hoverEffect ${
              activeTab === "nepal" ? "!text-black" : ""
            }`}
            onClick={() => categoryChangeHandler("nepal")}
          />
          <ShapeButton
            name="Srilanka"
            className={`group-hover:text-black hoverEffect ${
              activeTab === "srilanka" ? "!text-black" : ""
            }`}
            onClick={() => categoryChangeHandler("srilanka")}
          />
          <ShapeButton
            name="Maldives"
            className={`group-hover:text-black hoverEffect ${
              activeTab === "maldives" ? "!text-black" : ""
            }`}
            onClick={() => categoryChangeHandler("maldives")}
          />
        </div>

        <div
          id="tour_packages"
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 xxs:gap-4 lg:gap-10 pt-20"
        >
          {packages
            .slice(0, showMore ? packages.length : 6)
            .map((tour_package) => (
              <TourCard key={tour_package.id} tour_package={tour_package} />
            ))}
        </div>
        {packages.length > 6 && (
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
