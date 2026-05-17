import Image from "next/image";
import Marquee from "react-fast-marquee";
const sponsorLogos = [
  {
    id: 1,
    logo: "/images/sponsors/Fly-far-international.png",
    name: "Fly far international",
  },
  {
    id: 2,
    logo: "/images/sponsors/Grand-Sultan-Sylhet.png",
    name: "Grand Sultan Sylhet",
  },
  {
    id: 3,
    logo: "/images/sponsors/Himalayan-Club-tours.png",
    name: "Himalayan Club tours",
  },
  { id: 4, logo: "/images/sponsors/Kaani-Group.png", name: "Kaani Group" },
  {
    id: 5,
    logo: "/images/sponsors/Ramada-Wyndham.png",
    name: "Ramada Wyndham",
  },
  {
    id: 6,
    logo: "/images/sponsors/Travel-Champ.png",
    name: "Travel Champ",
  },
];
export default function Sponsors() {
  return (
    <div className="bg-black">
      <Marquee
        speed={50}
        gradient={false}
        autoFill={true}
        className="container "
      >
        <ul className=" flex gap-x-4 md:gap-x-14 items-center  px-10!  py-8">
          {sponsorLogos.map((logos) => (
            <li key={logos.id}>
              <Image
                src={logos.logo}
                className={`w-auto h-full max-h-36.5 object-cover  rounded-md px-4 py-2`}
                alt={logos.name}
                width={300}
                height={180}
              />
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}
