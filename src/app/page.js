import { getTourLocations } from "@/actions/tour-location";
import { getTourPackageByLocation } from "@/actions/tour-package";
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

export default async function Home({ searchParams }) {
  const { location } = await searchParams;
  const locations = await getTourLocations();
  const tourPackages = await getTourPackageByLocation();
  const filteredTourPackages = location
    ? location === "all"
      ? tourPackages
      : tourPackages.filter(
          (pkg) => pkg.location.toLowerCase() === location.toLowerCase(),
        )
    : tourPackages;
  return (
    <main>
      <Hero />
      <TravelPartner />
      <SharedStories locations={locations} />
      {/* <Facilities /> */}
      <NatureAndBeyond
        tourPackages={filteredTourPackages}
        locations={locations}
      />
      <TourPackage />
      <Memories />
      <TravelCategory />

      <Testimonials />
      <Subscription />
      <GallerySlider />
    </main>
  );
}
