import Image from "next/image";

export default function FacilityCard({ facility }) {
  return (
    <div className="flex gap-8">
      <Image
        src={facility.image}
        alt={facility.title}
        className="w-14 h-14 xxs:w-18 xxs:h-18 sm:w-20 sm:h-20"
      />
      <div>
        <h3 className="font-bold text-xl sm:text-2xl capitalize mb-3">
          {facility.title}
        </h3>
        <p>{facility.desc}</p>
      </div>
    </div>
  );
}
