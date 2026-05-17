"use client"
import frame from "@/assets/frame.png";
import light_frame from "@/assets/light-frame.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
export default function TourCard({ tour_package, frameType = "white", type }) {
  if (type == "green") {
    return (
      <div className="bg-white rounded-md px-3 sm:px-4 pt-3 pb-5">
        <div>
          <div className="max-w-[570px] relative block">
            <Image
              src={tour_package.image}
              alt={tour_package.title}
              width={500}
              height={300}
              className={`w-full h-[150px] sm:h-[200px]  object-cover ${
                type === "green" ? "md:h-[362px]" : "md:h-[462px]"
              }`}
            />
            {frameType === "light" ? (
              <Image
               width={500}
              height={300}
                src={light_frame}
                alt="frame"
                className="absolute top-0  w-full h-full"
              />
            ) : (
              <Image
               width={500}
              height={300}
                src={frame}
                alt="frame"
                className="absolute top-0 w-full h-full"
              />
            )}
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
  return (
    <div className="bg-white rounded-md px-3 sm:px-4 pt-3 pb-5">
      <div>
        <Link
         
          href={`/packages/${tour_package.id}`}
          className="max-w-[570px] relative block"
        >
          <Image
           width={500}
              height={300}
            src={tour_package.image}
            alt={tour_package.title}
            className={`w-full h-[150px] sm:h-[200px]  object-cover md:h-[462px]`}
          />
          {frameType === "light" ? (
            <Image
             width={500}
              height={300}
              src={light_frame}
              alt="frame"
              className="absolute top-0  w-full h-full"
            />
          ) : (
            <Image
             width={500}
              height={300}
              src={frame}
              alt="frame"
              className="absolute top-0 w-full h-full"
            />
          )}
        </Link>
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm xxs:text-base sm:text-xl capitalize">
              {tour_package.title}
            </h4>

            <Rating
              rating={tour_package.rating}
              className="text-orange size-3 sm:size-4 hidden sm:block"
            />
          </div>
          <div>
            <Rating
              rating={tour_package.rating}
              className="text-orange size-3 sm:size-4  sm:hidden"
            />
            <div className="flex gap-4 mt-2 text-sm sm:text-base">
              <p className="flex">
                <Icon icon="tabler:currency-taka" width="20" height="20" />
                {tour_package.price}
              </p>

              {tour_package?.priceOff && (
                <p className="line-through text-gray-400 flex">
                  <Icon icon="tabler:currency-taka" width="20" height="20" />
                  {tour_package?.priceOff}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
