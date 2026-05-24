import { getTourPackageBySlug } from "@/actions/tour-package";
import HeroSection from "@/components/HeroSection";
import DetailSection from "@/components/pages/package-details/DetailSection";
import toast from "react-hot-toast";
export default async function PackageDetails({ params }) {
  const { id } = await params;
  const result = await getTourPackageBySlug(id);
  if (!result.success) {
    return toast.error(result.message || "Failed to fetch tour package details");
  }
  return (
    <>
      <HeroSection banner="/images/banners/contact.webp">
        <div>
          <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin">
            Products
          </h5>
        </div>
      </HeroSection>
      <DetailSection tourPackage={result.data} />
    </>
  );
}
