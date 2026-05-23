"use client";
import frame from "@/assets/frame.png";
import Image from "next/image";
import Rating from "./Rating";
export default function TourCard2({ tour_package }) {
  return (
    <div className="bg-white rounded-md px-3 sm:px-4 pt-3 pb-5">
      <div>
        <div className="max-w-[570px] relative block">
          <Image
            src={tour_package.image}
            alt={tour_package.title}
            width={500}
            height={300}
            className={`w-full h-[150px] sm:h-[200px]  object-cover
                md:h-[362px]
              `}
          />

          <Image
            width={500}
            height={300}
            src={frame}
            alt="frame"
            className="absolute top-0 w-full h-full"
          />
        </div>
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm xxs:text-base sm:text-xl">
              {tour_package.title}
            </h4>
          </div>
          <div>
            <Rating
              rating={tour_package.rating}
              className={` size-3 sm:size-4 block text-green`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
