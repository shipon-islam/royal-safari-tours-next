import HeroSection from "@/components/HeroSection";
import DetailSection from "@/components/pages/package-details/DetailSection";
import { tour_packages } from "@/constants/tours_package";
export default async function PackageDetails({ params }) {
  const { id } = await params;
  const packages = tour_packages.find((item) => item.id == id);
  return (
    <>
      <HeroSection banner="/images/banners/contact.webp">
        <div>
          <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin">
            Product
          </h5>
        </div>
      </HeroSection>
      <DetailSection packages={packages} />
    </>
  );
}
