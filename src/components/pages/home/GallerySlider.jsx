"use client"
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const slideItems = [
  "Frompeakstopaths1.webp",
  "Frompeakstopaths3.webp",
  "Frompeakstopaths4.webp",
  "Frompeakstopaths5.webp",
  "Frompeakstopaths6.webp",
  "Frompeakstopaths7.webp",
  "Frompeakstopaths8.webp",
  "Frompeakstopaths9.webp",
  "Frompeakstopaths11.webp",
  "Frompeakstopaths12.webp",
  "Frompeakstopaths13.webp",
  "Frompeakstopaths14.webp",
  "Frompeakstopaths15.webp",
  "Frompeakstopaths16.webp",
  "Frompeakstopaths17.webp",
  "Frompeakstopaths18.webp",
  "Frompeakstopaths19.webp",
  "Frompeakstopaths20.webp",
];
export default function GallerySlider() {
  return (
    <div className=" py-8 hidden md:block">
      <div className="relative ">
        <Swiper
          modules={[FreeMode, Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          pagination={false}
          freeMode={true}
          speed={4000}
          breakpoints={{
            // When window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // When window width is >= 1280px
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // When window width is >= 1280px
            1536: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {slideItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  className="w-full h-[350px] object-cover"
                  src={`/images/home-gallery/${item}`}
                  alt="banner"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
