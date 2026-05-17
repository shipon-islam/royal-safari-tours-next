"use client"
import china from "@/assets/story/china.webp";
import maldives from "@/assets/story/maldives.webp";
import nepal from "@/assets/story/nepal.webp";
import srilanka from "@/assets/story/srilanka.webp";
import thailand from "@/assets/story/thailand.webp";
import StoryCard from "@/components/StoryCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const stories = [
  { id: 1, image: china, country: "china" },
  { id: 2, image: maldives, country: "maldives" },
  { id: 3, image: srilanka, country: "srilanka" },
  { id: 4, image: nepal, country: "Nepal" },
  { id: 5, image: thailand, country: "Thailand" },
];

export default function SharedStories() {
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
          {stories.map((story) => (
            <SwiperSlide className=" py-8" key={story.id}>
              <StoryCard story={story} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
