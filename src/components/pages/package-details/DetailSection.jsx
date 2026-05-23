"use client";
import Rating from "@/components/Rating";
import {
  BookingCardIcon,
  FireIcon,
  PaymentIcon2,
} from "@/components/svg-icons";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
export default function DetailSection({ tourPackage }) {
  const [tabIndex, setTabIndex] = useState(1);
  const [cartItem, setCartItem] = useState(1);

  return (
    <section className="container py-6 sm:py-20 relative">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-2 xl:grid-cols-[1fr_1.2fr] gap-10 sm:w-[90%] md:w-[70%] lg:w-full mx-auto">
          <div>
            <Image
              src={`/api/uploads/tour-packages/${tourPackage.image}`}
              alt={tourPackage?.title || "package image"}
              width={1000}
              height={770}
              loading="eager"
              className=" max-h-[770px] h-full  w-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <Rating
                rating={tourPackage?.rating}
                className="text-yellow-400 size-4 sm:size-5"
              />
              <div className="flexs hidden gap-2 items-center">
                <FireIcon />
                <p className="text-green font-medium text-sm xxs:text-base">
                  29 sold In Last 7 Hours
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-xl sm:text-2xl md:text-3xl my-6">
                Official Prices May Vary!
              </h5>
              <p className="leading-[26px]">{tourPackage?.shortDescription}</p>
            </div>
            <div className="flex  items-center gap-2 sm:gap-10 mt-8">
              <h5 className="font-bold">Duration</h5>
              <button className="bg-black text-white px-10 py-2 font-semibold capitalize">
                {tourPackage?.duration}
               
              </button>
            </div>
            <div className="mt-15 md:mt-48 max-w-[550px] text-sm lg:text-sm xl:text-base">
              <div className="sflex flex-col xxs:flex-row gap-2 sm:gap-2  items-center justify-between hidden">
                <button className="flex items-center gap-1 font-medium">
                  <Icon icon="mdi-light:heart" width="22" height="22" />
                  <span>Add to wishlist</span>
                </button>
                <button className="flex items-center gap-1 font-medium">
                  <Icon icon="picon:loop" width="20" height="20" />
                  <span>Add to compare</span>
                </button>
                <button className="flex items-center gap-1 font-medium">
                  <Icon icon="mynaui:share" width="20" height="20" />
                  <span>Share</span>
                </button>
              </div>
              <div className="flexs flex-row hidden  gap-2 mt-10">
                <div className="border border-black bg-white py-2 px-2 flex items-center justify-center gap-8 font-medium text-lg w-fit text-gray-600 sm:min-w-36">
                  <button
                    className="hover:text-orange hoverEffect cursor-pointer"
                    onClick={() =>
                      setCartItem((prev) => (prev <= 0 ? prev : prev - 1))
                    }
                  >
                    <Icon icon="typcn:minus" width="18" height="18" />
                  </button>
                  <span className="text-gray-900">
                    {cartItem < 10 ? "0" + cartItem : cartItem}
                  </span>
                  <button
                    className="hover:text-green hoverEffect cursor-pointer"
                    onClick={() => setCartItem((prev) => prev + 1)}
                  >
                    <Icon icon="typcn:plus" width="18" height="18" />
                  </button>
                </div>
                <button
                  // onClick={() => cartShowHandler(true)}
                  className="block w-full px-8 py-4 font-medium bg-green text-white cursor-pointer hover:bg-black hoverEffect"
                >
                  Add to cart
                </button>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=8801898334733"
                className="flex items-center justify-center gap-4 w-full px-8 py-4 font-medium bg-green text-white mt-4 cursor-pointer hover:bg-black hoverEffect text-xl rounded-md"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="akar-icons:whatsapp-fill" width="25" height="25" />
                <span>+8801898-334733</span>
              </a>
              <hr className="border-1 border-gray-200 mt-8" />
              <ul className="space-y-5 mt-4 text-sm sm:text-base hidden">
                <li className="flex  gap-2 items-center">
                  <Icon
                    icon="material-symbols:delivery-truck-speed-outline"
                    width="25"
                    height="25"
                    className="text-gray-500"
                  />
                  <span>
                    <strong className="text-gray-600">
                      Estimated Travel Window
                    </strong>
                  </span>
                </li>
                <li className="flex  gap-2 items-center">
                  <BookingCardIcon className="size-5" />
                  <span>
                    <strong className="text-gray-600">
                      Estimated Travel Window
                    </strong>
                  </span>
                </li>
              </ul>
              <PaymentIcon2 className="mt-8 w-full xxs:w-fit scale-90" />
              <p className="font-medium text-lg mt-8">About your query!!</p>
            </div>
          </div>
        </div>
        <div className="border-x border-t border-gray-300 mt-8 min-h-[600px]">
          <div className="border-b border-gray-300 space-x-5 sm:space-x-15 md:space-x-20 pl-5 text-sm xxs:text-base sm:pl-8">
            <button
              onClick={() => setTabIndex(1)}
              className={`py-2 font-bold hover:text-green  hoverEffect hover:border-green cursor-pointer border-b-2 relative top-[1px] ${
                tabIndex === 1
                  ? "border-green text-green"
                  : "border-transparent"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setTabIndex(2)}
              className={`py-2 font-bold hover:text-green  hoverEffect hover:border-green cursor-pointer border-b-2 relative top-[1px] ${
                tabIndex === 2
                  ? "border-green text-green"
                  : "border-transparent"
              }`}
            >
              Additional{" "}
              <span className="hidden sm:inline-block">Information</span>
            </button>
          </div>
          {tabIndex === 1 && (
            <div
              className="p-4 sm:p-8 ql-editor"
              dangerouslySetInnerHTML={{
                __html: tourPackage?.description
                  .replace(/&nbsp;/g, " ")
                  .replace(/<p><\/p>/g, ""),
              }}
            />
          )}
          {tabIndex === 2 && (
            <div
              label="Additional Information"
              className="p-4 sm:p-8 ql-editor"
              dangerouslySetInnerHTML={{
                __html: tourPackage?.additionalInfo
                  .replace(/&nbsp;/g, " ")
                  .replace(/<p><\/p>/g, ""),
              }}
            />
          )}
          {tabIndex === 3 && (
            <div label="Reviews" className="p-4 sm:p-8">
              <div>
                <h5 className="font-bold">Top Three Reviews (Anonymous)</h5>
                <ul className="mt-8 space-y-8">
                  <li className="flex gap-4">
                    <Image
                      src="/images/avatar.jpg"
                      alt="avatar"
                      className="rounded-full h-fit max-w-[37px] object-cover"
                    />
                    <div>
                      <Rating rating={5} className="text-yellow-400" />
                      <p className="mt-1">
                        From the moment we landed to the final goodbye,
                        everything was perfectly arranged. The Gardens by the
                        Bay took my breath away and Sentosa Island was a blast
                        for my kids. Our guide was friendly and super helpful. I
                        can’t wait to book another trip with Royal Safari Tours!
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      src="/images/avatar.jpg"
                      alt="avatar"
                      className="rounded-full h-fit max-w-[37px] object-cover"
                    />
                    <div>
                      <Rating rating={4} className="text-yellow-400" />
                      <p className="mt-1">
                        The hotel was top-notch and located right in the heart
                        of the city. We had zero stress during the trip –
                        everything from airport pickup to city tours was smooth.
                        Loved the night safari and the river cruise! Highly
                        recommended for first-time travelers to Singapore.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Image
                      src="/images/avatar.jpg"
                      alt="avatar"
                      className="rounded-full h-fit max-w-[37px] object-cover"
                    />
                    <div>
                      <Rating rating={4} className="text-yellow-400" />
                      <p className="mt-1">
                        I wasn’t sure about group tours before, but this changed
                        my mind. Royal Safari made sure every detail was
                        covered. The local food guide and Marina Bay Sands light
                        show were highlights! Would’ve loved one more day, but
                        overall a great value tour.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
