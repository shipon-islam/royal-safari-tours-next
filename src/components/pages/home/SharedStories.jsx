"use client";
import StoryCard from "@/components/StoryCard";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function SharedStories({ locations }) {
  return (
    <div className="bg-body">
      <div className="container grid lg:grid-cols-[1fr_2fr] items-center gap-5 xl:gap-8 py-16">
        <div className="xl:w-[85%] text-center lg:text-left">
          <h4 className="text-2xl sm:text-3xl font-mansalva">
            Beautiful Destinations Await
          </h4>
          <h1 className="font-bold text-3xl sm:text-4xl xl:text-5xl mt-8 mb-14">
            Photos Taken. Stories Shared.
          </h1>
          <p>
            Whether you're chasing sunrises in Nepal, soaking in the culture of
            Sri Lanka, or joining a business expo in China, we craft tours that
            go far beyond the ordinary.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={false}
          speed={1000}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {locations?.map((story) => (
            <SwiperSlide className=" py-8" key={story.id}>
              <StoryCard story={story} />
            </SwiperSlide>
          ))}
          {locations?.length === 0 && (
            <div className="w-fit mx-auto text-center">
              <Image
                src="/images/dashboard/empty.png"
                width={400}
                height={400}
                alt="empty"
              />
              <p className="text-gray-500 text-xl mt-8 font-inter">
                There is no tour location yet!
              </p>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
