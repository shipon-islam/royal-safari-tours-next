
import CommonHeading from "@/components/CommonHeading";
import CounterWithText from "@/components/CounterWithText";
import ShapeButton from "@/components/ShapeButton";
import Link from "next/link";
export default function TravelPartner() {
  return (
    <section className="pt-40 pb-8 bg-body">
      <div className="container">
        <CommonHeading
          title={
            <>
              Your Trusted
              <br /> Travel Partner
            </>
          }
          subtitle={"Start Exploring"}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 xxs:gap-8">
          <CounterWithText
            className=""
            title="Tours Successfully Operated"
            score={1560}
          />
          <CounterWithText
            className=""
            title="Satisfied Travelers & Families"
            score={1823}
          />
          <CounterWithText
            className=""
            title="Custom Tour Packages"
            score={1500}
          />
          <CounterWithText
            className=""
            title="Photos Taken. Stories Shared."
            score={2000}
          />
        </div>
        <div></div>
        <div className="mx-auto w-fit mt-20 sm:mt-32">
          <Link href="/about-us">
            <ShapeButton
              name="TRAVEL GUIDE"
              className="group-hover:text-black hoverEffect"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
