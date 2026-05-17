"use client";

import HeroSection from "@/components/HeroSection";
import AdvanturePackages from "@/components/pages/adventure/AdvanturePackages";

export default function Adventure() {
  return (
    <div>
      <HeroSection banner="/images/adventure/hp4.webp">
        <div>
          <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin uppercase">
            Collections
          </h5>
        </div>
      </HeroSection>
      <AdvanturePackages />
    </div>
  );
}
