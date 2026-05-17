import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/pages/about-us/AboutSection";
import CustomerReviews from "@/components/pages/about-us/CustomerReviews";
import OurFacilities from "@/components/pages/about-us/OurFacilities";
import Sponsors from "@/components/pages/about-us/Sponsors";
import TeamSection from "@/components/pages/about-us/TeamSection";
export default function AboutUs() {
  return (
    <div>
      <HeroSection banner="/images/banners/camping.webp">
        <div>
          <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin uppercase">
            About Us
          </h5>
        </div>
      </HeroSection>
      <AboutSection />
      <TeamSection />
      <OurFacilities />
      <CustomerReviews />
      <Sponsors />
    </div>
  );
}
