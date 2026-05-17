
import { SuitcaseIcon, SuitcaseRedIcon } from "@/components/svg-icons";
import Link from "next/link";
export default function OurFacilities() {
  return (
    <section className="container mt-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row  items-center md:items-start gap-4">
          <SuitcaseIcon className="h-fit" />
          <div>
            <h1 className="font-bold text-3xl text-center md:text-left md:text-4xl lg:text-5xl  font-montagu">
              What We Offer
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center md:text-left">
              We specialize in{" "}
              <span className="text-green">
                curated group tours, custom travel packages, and family-friendly
                escapes
              </span>{" "}
              with all-in-one services including flights, hotels, guided tours,
              and transport, so you never have to worry about a thing. <br />
              We’ve proudly served over 1,800 happy travelers, completed 1,500+
              custom itineraries, and continue to explore new destinations to
              bring you unforgettable memories.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-20">
          <SuitcaseRedIcon className="h-fit max-w-[55px] max-h-[50px]" />
          <div>
            <h1 className="font-bold text-3xl text-center md:text-left md:text-4xl lg:text-5xl font-montagu">
              Why Travel With Us
            </h1>
            <ul className="mt-6 text-lg sm:text-xl lg:text-2xl space-y-5 md:list-disc ml-6 text-center md:text-left">
              <li>Personalized planning with a human touch</li>
              <li>Handpicked local experiences and reliable accommodations </li>
              <li>Transparent pricing with no hidden fees</li>
              <li>
                Friendly support from first inquiry to post-tour follow-up
              </li>
            </ul>
          </div>
        </div>
        <p className="text-lg sm:text-xl lg:text-2xl text-center pt-24 pb-10 max-w-[1200px] mx-auto">
          Whether it’s your first adventure or your fiftieth,{" "}
          <Link href="/contact" className="text-green font-semibold">
            Royal Safari Tours
          </Link>{" "}
          is your trusted partner in exploring the world.
        </p>
      </div>
    </section>
  );
}
