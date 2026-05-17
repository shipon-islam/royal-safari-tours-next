import HeroSection from "@/components/HeroSection";
import Sponsors from "@/components/pages/about-us/Sponsors";
import ContactForm from "@/components/pages/contact/ContactForm";

export default function page() {
  return (
    <div>
      <HeroSection banner="/images/banners/contact.webp">
        <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin uppercase">
          Contact
        </h5>
      </HeroSection>
      <ContactForm />
      <Sponsors />
    </div>
  );
}
