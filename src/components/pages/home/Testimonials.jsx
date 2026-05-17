"use client"
import bangladesh from "@/assets/testimonials/bangladesh.png";
import bangladeshi_person from "@/assets/testimonials/bangladeshi-person.png";
import srilanka from "@/assets/testimonials/srilanka.png";
import thailand from "@/assets/testimonials/thailand.png";
import CommonHeading from "@/components/CommonHeading";
import Rating from "@/components/Rating";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const slideItems = [
  {
    id: 1,
    image: bangladesh,
    review: {
      name: "Titus",
      countryName: "Bangladesh",
      avatar: bangladeshi_person,
      rating: 3,
      feedback: `"Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Nisl
suscipit adipiscing bibendum est ultricies integer quis. Viverra nibh
cras pulvinar mattis. Erat nam at lectus urna duis convallis convallis
tellus id. Lectus proin nibh nisl condimentum id venenatis."`,
    },
  },
  {
    id: 2,
    image: srilanka,
    review: {
      name: "Titus",
      countryName: "Srilanka",
      avatar: bangladeshi_person,
      rating: 4,
      feedback: `"Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Nisl
suscipit adipiscing bibendum est ultricies integer quis. Viverra nibh
cras pulvinar mattis. Erat nam at lectus urna duis convallis convallis
tellus id. Lectus proin nibh nisl condimentum id venenatis."`,
    },
  },
  {
    id: 3,
    image: thailand,
    review: {
      name: "Titus",
      countryName: "Thailand",
      avatar: bangladeshi_person,
      rating: 3,
      feedback: `"Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Nisl
suscipit adipiscing bibendum est ultricies integer quis. Viverra nibh
cras pulvinar mattis. Erat nam at lectus urna duis convallis convallis
tellus id. Lectus proin nibh nisl condimentum id venenatis."`,
    },
  },
];
export default function Testimonials() {
  return (
    <div className="bg-body2 ">
      <div className="container py-10">
        <CommonHeading title="Testimonials" subtitle="Hear From our clients" />
        <div className="relative md:px-8 lg:px-20 py-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={false}
            navigation={{
              nextEl: ".custom-next2",
              prevEl: ".custom-prev2",
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
          >
            {slideItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid md:grid-cols-[3fr_2fr] gap-10">
                  <div>
                    <Image
                      className="w-full h-full object-contain "
                      src={item.image}
                      alt="banner"
                    />
                  </div>

                  <div className="grid place-items-center">
                    <Image
                      className="max-w-[130px] md:max-w-[170px] md:max-h-[170px] object-cover rounded-full "
                      src={item.review.avatar}
                      alt="banner"
                    />
                    <h2 className="text-lg md:text-xl font-bold mt-4">
                      {item.review.countryName}
                    </h2>
                    <p className="py-4 text-center text-sm md:text-base">
                      {item.review.feedback}
                    </p>
                    <h5 className="font-semibold">{item.review.name}</h5>
                    <Rating
                      rating={item.review.rating}
                      className="size-4 md:size-5 text-green mt-2"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden md:flex gap-x-4 justify-between w-full absolute left-0 -translate-y-1/2 top-1/2 z-10">
            <button className="custom-prev2 cursor-pointer border rounded-full bg-green hoverEffect border-none">
              <Icon
                icon="solar:arrow-left-linear"
                width="25"
                height="25"
                className="relative right-4"
              />
            </button>
            <button className="custom-next2 cursor-pointer border rounded-full bg-green hoverEffect border-none">
              <Icon
                icon="solar:arrow-right-linear"
                width="25"
                height="25"
                className="relative left-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
