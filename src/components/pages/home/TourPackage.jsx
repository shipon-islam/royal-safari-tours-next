import CommonHeading from "@/components/CommonHeading";
import TourCard2 from "@/components/TourCard2";
import { adventureCollections } from "@/constants/adventure_collection";

export default function TourPackage() {
  return (
    <div className="bg-body">
      <div className="container py-14 max-w-[1520px]">
        <CommonHeading
          title="Unforgettable tours tailored for thrill-seekers."
          subtitle="Royal Picks"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 xxs:gap-4 lg:gap-10 pt-20">
          {adventureCollections.slice(0, 6).map((tour_package) => (
            <TourCard2
              key={tour_package.id}
              type="green"
              tour_package={tour_package}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
