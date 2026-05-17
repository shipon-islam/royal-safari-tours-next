import bicycle from "@/assets/png-icons/bicycle.png";
import boating from "@/assets/png-icons/boating.png";
import climbing from "@/assets/png-icons/climbing.png";
import hiking from "@/assets/png-icons/hiking.png";
import orienting from "@/assets/png-icons/orienting.png";
import walk from "@/assets/png-icons/walk.png";
import FacilityCard from "@/components/FacilityCard";

const facilities = [
  {
    id: 1,
    image: hiking,
    title: "hiking",
    desc: "Traverse scenic trails and ancient paths that tell stories with every step.",
  },
  {
    id: 2,
    image: climbing,
    title: "climbing",
    desc: "Scale new heights and discover panoramic views that reward every effort.",
  },
  {
    id: 3,
    image: walk,
    title: "Walking",
    desc: "Stroll through vibrant streets or tranquil nature, one peaceful moment at a time.",
  },
  {
    id: 4,
    image: bicycle,
    title: "Cycling",
    desc: "Pedal past landscapes, culture, and charm — the journey is half the joy.",
  },
  {
    id: 5,
    image: boating,
    title: "Boating",
    desc: "Glide across crystal waters, where calm meets breathtaking surroundings.",
  },
  {
    id: 6,
    image: orienting,
    title: "Orienteering",
    desc: "Navigate through adventure as you connect with nature and your inner explorer.",
  },
];
export default function Facilities() {
  return (
    <div className="bg-white">
      <div
        style={{
          clipPath:
            "polygon(52% 0, 77% 2%, 100% 1%, 100% 98%, 59% 99%, 36% 97%, 0 99%, 0 0, 24% 2%)",
        }}
        className="bg-lightGray"
      >
        <div className="container py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-20 ">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </div>
  );
}
