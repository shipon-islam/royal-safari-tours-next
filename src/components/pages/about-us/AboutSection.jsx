import Link from "next/link";
export default function AboutSection() {
  return (
    <section className="container ">
      <div className="text-center max-w-[1400px] mx-auto py-10 md:py-14 lg:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-montagu">
          Who We Are
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-10">
          <Link href="/contact" className="font-semibold text-green">
            Royal Safari Tours
          </Link>{" "}
          is a Khilgaon-based travel agency dedicated to delivering premium yet
          affordable tour experiences across South Asia and beyond. From the
          vibrant streets of Kathmandu to the serene coasts of the Maldives, our
          journeys are designed to inspire, excite, and rejuvenate.Founded by
          passionate travelers, we bring deep regional knowledge and heartfelt
          hospitality to every itinerary.
        </p>
      </div>
    </section>
  );
}
