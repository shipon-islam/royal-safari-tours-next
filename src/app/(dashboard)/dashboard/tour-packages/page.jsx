import { getTourPackages } from "@/actions/tour-package";
import TourCardPage from "@/components/dashboard/tour-packages/TourCardPage";
export default async function TourPackages({ searchParams }) {
  const { page} = await searchParams;
  const { data: tourPackages ,pagination} = await getTourPackages( page);

 
  return (
    <div>
      <TourCardPage tourPackages={tourPackages} pagination={pagination} />
    </div>
  );
}
