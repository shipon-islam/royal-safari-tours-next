import { getTourLocations } from "@/actions/tour-location";
import { getTourPackageBySlug } from "@/actions/tour-package";
import TourPackageForm from "@/components/dashboard/tour-packages/TourPackageForm";

export default async function TourPackageEdit({ params }) {
  const { slug } = await params;
  const tourPackage = await getTourPackageBySlug(slug);
  const locations=await getTourLocations()
  return (
    <div>
      <TourPackageForm tourPackage={tourPackage} locations={locations} />
    </div>
  );
}