import boating from "@/assets/png-icons/boating.png";
import island_travel from "@/assets/png-icons/island_travel.png";
import forest from "@/assets/png-icons/road_11508960.png";
import rudder from "@/assets/png-icons/rudder_3446411.png";
import ShapeButton from "@/components/ShapeButton";
import Image from "next/image";
import Link from "next/link";

const travels = [
  {
    id: 1,
    title: "ZipZap Travel",
    image: rudder,
  },
  {
    id: 2,
    title: "Boat Travel",
    image: boating,
  },
  {
    id: 3,
    title: "Island Travel",
    image: island_travel,
  },
  {
    id: 4,
    title: "Forest Travel",
    image: forest,
  },
];
export default function TravelCategory() {
  return (
    <div className="bg-body2 py-24">
      <div className="container pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {travels.map((travel) => (
            <div
              key={travel.id}
              className={`${
                travels.length !== travel.id
                  ? travel.id === 2
                    ? "border-r-none md:border-r"
                    : travel.id === 3
                    ? "border-r md:border-r-transparent lg:border-r-gray-400"
                    : "border-r"
                  : ""
              }  border-r-gray-400`}
            >
              <div className="w-fit mx-auto text-center">
                <Image
                  src={travel.image}
                  alt={travel.title}
                  className="max-w-[70px] xxs:max-w-[90px] sm:max-w-[120px] md:max-w-[156px]"
                />
                <h4 className="font-bold text-sm sm:text-base md:text-xl capitalize mt-8">
                  {travel.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[600px] mx-auto text-center space-y-8">
        <p className="text-lg">
          Whether you're ziplining through the treetops, cruising calm waters,
          or exploring hidden islands, every journey with us is crafted for
          wonder. Set your sights on the extraordinary, your next great
          adventure awaits.
        </p>
        <Link href="/contact">
          <ShapeButton
            name="BOOK TO START"
            className="group-hover:text-black "
          />
        </Link>
      </div>
    </div>
  );
}
