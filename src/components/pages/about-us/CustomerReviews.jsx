"use client";
import CommonHeading from "@/components/CommonHeading";
import Rating from "@/components/Rating";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    id: 1,
    name: "John Hendry",
    position: "Tour Manager",
    avatar: "/images/customers/john.webp",
    rating: 3,
    reviewText:
      "Vitae elementum curabitur vitae nunc sed. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Blandit massa enim nec dui nunc mattis enim ut tellus.",
  },
  {
    id: 2,
    name: "Sharolyn",
    position: "Designer",
    avatar: "/images/customers/sharolyn.webp",
    rating: 3,
    reviewText:
      "Proin fermentum leo vel orci porta non pulvinar neque. Lectus mauris ultrices eros in cursus turpis. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.",
  },
  {
    id: 3,
    name: "John Hendry",
    position: "Tour Manager",
    avatar: "/images/customers/john.webp",
    rating: 3,
    reviewText:
      "Vitae elementum curabitur vitae nunc sed. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Blandit massa enim nec dui nunc mattis enim ut tellus.",
  },
  {
    id: 4,
    name: "Sharolyn",
    position: "Designer",
    avatar: "/images/customers/sharolyn.webp",
    rating: 3,
    reviewText:
      "Proin fermentum leo vel orci porta non pulvinar neque. Lectus mauris ultrices eros in cursus turpis. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.",
  },
];
export default function CustomerReviews() {
  return (
    <section className="bg-about-banner min-h-187.5">
      <div className="container">
        <div className="pt-20">
          <CommonHeading
            title="Customer Says"
            subtitle="Our Clients Words"
            color="text-white"
          />
        </div>
        <div className="max-w-325 mx-auto mt-24">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            slidesPerView={1}
            spaceBetween={100}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={false}
            speed={1000}
            breakpoints={{
              // When window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className=" w-full">
                <div className="text-white flex flex-col justify-center items-center text-center gap-5">
                  <p>{review.reviewText}</p>

                  <Rating rating={review.rating} className="text-green" />
                  <Image
                    width={75}
                    height={75}
                    className="h-full w-full max-w-18.75 max-h-18.75 object-cover rounded-full"
                    src={review.avatar}
                    alt="banner"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h5>{review.name}</h5>
                    <hr className="border-white/80 border w-15 h-px" />
                    <h5>{review.position}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
