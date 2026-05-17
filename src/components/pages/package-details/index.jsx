import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import DetailSection from "./DetailSection";
export default function PackageDetails() {
  const location = useLocation();
  const packages = location?.state?.tour_package;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
