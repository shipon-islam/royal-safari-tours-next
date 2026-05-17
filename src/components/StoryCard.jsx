import Image from "next/image";
import { UseTourState } from "../context/TourContextProvider";

export default function StoryCard({ story }) {
  const { categoryChangeHandler } = UseTourState();
  const handleClick = (country) => {
    const toursId = document.getElementById("tour_packages");
    categoryChangeHandler(country);
    if (toursId) {
      toursId.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      onClick={() => handleClick(story.country)}
      className="relative max-w-[400px] h-[160px] xxs:h-[200px] sm:h-[350px]  md:h-[400px] xl:h-[500px]  after:bg-orange-500/50 after:h-full after:w-full after:absolute after:top-0 after:left-0 after:z-10 overflow-hidden rounded-full after:translate-y-full hover:after:translate-y-0 after:transition-transform after:duration-300 cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={story.image}
        alt="story"
        className="object-cover w-full h-full "
      />
      <h1 className="absolute left-1/2 -translate-x-1/2 bottom-18 md:bottom-24 z-20 text-white font-bold text-sm xxs:text-lg sm:text-xl md:text-2xl xl:text-4xl uppercase">
        {story.country}
      </h1>
    </div>
  );
}
