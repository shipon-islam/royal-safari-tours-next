"use client"
import hp1 from "@/assets/home/hp1.webp";
import hp2 from "@/assets/home/hp2.webp";
import hp3 from "@/assets/home/hp3.webp";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const slideItems = [
  { id: 1, title: "Your Next Great Journey Starts Here", image: hp1 },
  { id: 2, title: "Discover the World, One Adventure at a Time", image: hp2 },
  {
    id: 3,
    title: "Where Every Trip Becomes a Story Worth Telling",
    image: hp3,
  },
];
export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={false}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          effect="fade"
          speed={1000}
          className="mySwiper2 h-[55vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
        >
          {slideItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full text-white text-center">
                <div className="absolute top-[60%] md:top-[50%] xl:top-[40%] left-1/2 -translate-1/2 w-full px-4 lg:px-8">
                  <h5 className="pb-5 md:pb-10 lg:pb-15 font-mansalva text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                    Explore Beyond Borders
                  </h5>

                  <h1 className="font-young text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                    {item.title}
                  </h1>
                </div>

                <Image
                  className="w-full h-full object-cover "
                  src={item.image}
                  alt="banner"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bg-white absolute -bottom-32 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0  z-10 rounded-t-4xl sm:rounded-t-none sm:rounded-l-4xl w-[98%] xxs:w-[92%] sm:w-fit">
          <div className="grid sm:grid-cols-[4fr_100px] items-center justify-center gap-8 relative !w-full px-12 py-4">
            <div className="w-fit mx-auto">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="mt-4 w-[200px] xxs:w-[250px] sm:w-[400px] md:w-[500px] lg:w-[700px] "
              >
                {slideItems.map((item) => (
                  <SwiperSlide key={item.id} className="cursor-pointer">
                    <Image
                      src={item.image}
                      alt={`thumb-${item.id}`}
                      className="w-[98px] h-[90px] xxs:h-[120px] sm:h-[160px] sm:w-[250px] md:w-[180px] md:h-[200px] lg:w-[200px] lg:h-[230px]  object-cover border rounded-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex gap-x-4 justify-between absolute left-0 sm:static !w-full sm:px-8 z-10 px-1.5 xxs:px-3">
              <button className="custom-prev cursor-pointer border rounded-full hover:bg-green hoverEffect">
                <Icon icon="solar:arrow-left-linear" width="25" height="25" />
              </button>
              <button className="custom-next cursor-pointer border rounded-full hover:bg-green hoverEffect">
                <Icon icon="solar:arrow-right-linear" width="25" height="25" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
