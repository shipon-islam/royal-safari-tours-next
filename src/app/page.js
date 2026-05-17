
import Facilities from "@/components/pages/home/Facilities";
import GallerySlider from "@/components/pages/home/GallerySlider";
import Hero from "@/components/pages/home/Hero";
import Memories from "@/components/pages/home/Memories";
import NatureAndBeyond from "@/components/pages/home/NatureAndBeyond";
import SharedStories from "@/components/pages/home/SharedStories";
import Subscription from "@/components/pages/home/Subscription";
import Testimonials from "@/components/pages/home/Testimonials";
import TourPackage from "@/components/pages/home/TourPackage";
import TravelCategory from "@/components/pages/home/TravelCategory";
import TravelPartner from "@/components/pages/home/TravelPartner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TravelPartner />
      <SharedStories />
      <Facilities />
      <TourPackage />
      <Memories />
      <TravelCategory />
      <NatureAndBeyond />
      <Testimonials />
      <Subscription />
      <GallerySlider />
    </main>
  );
}
