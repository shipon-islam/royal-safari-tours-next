import HeroSection from "../../components/HeroSection";
import AboutSection from "./AboutSection";
import CustomerReviews from "./CustomerReviews";
import OurFacilities from "./OurFacilities";
import Sponsors from "./Sponsors";
import TeamSection from "./TeamSection";
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
