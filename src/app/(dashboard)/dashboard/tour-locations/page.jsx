import { getTourLocationsByPagination } from '@/actions/tour-location';
import TourLocationCardPage from '@/components/dashboard/location/TourLocationPage';
export default async function TourLocation({ searchParams }) {
  const { page } = await searchParams;
  const { data: tourPackages, pagination } = await getTourLocationsByPagination(page);
  return (
    <div>
      <TourLocationCardPage tourPackages={tourPackages} pagination={pagination} />
    </div>
  )
}
