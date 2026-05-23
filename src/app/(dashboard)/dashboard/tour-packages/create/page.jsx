import { getTourLocations } from "@/actions/tour-location";
import TourPackageForm from "@/components/dashboard/tour-packages/TourPackageForm";

export default async function BlogEdit() {
  const locations=await getTourLocations()

  return (
    <div>
      <TourPackageForm locations={locations} />
    </div>
  );
}