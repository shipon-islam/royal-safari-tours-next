"use client"
import ShapeButton from "@/components/ShapeButton";
import ShapeInput from "@/components/ShapeInput";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Subscription() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      return toast.error("Please add your name");
    }
    if (!email) {
      return toast.error("Please add a valid gmail");
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    if (!isValid) {
      return toast.error("Please add a valid gmail");
    }
    try {
      const res = await fetch("/api/subscriber", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 409) {
        setEmail("");
        setName("");
        return toast.error("You have already Subscribed!");
      }
      const data = await res.json();
      setEmail("");
      setName("");
      return toast.success("Subscribe successfuly!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-light">
      <div
        style={{
          clipPath:
            "polygon(52% 0, 77% 2%, 100% 1%, 100% 98%, 59% 99%, 36% 97%, 0 99%, 0 0, 24% 2%)",
        }}
        className="bg-banner-subscription"
      >
        <div className="container max-w-[1520px] min-h-[394px] grid place-content-center py-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] xl:grid-cols-2 items-center gap-20 lg:gap-8 xl:gap-20">
            <div>
              <p className="text-white text-center lg:text-left text-3xl md:text-4xl font-semibold font-palanquin leading-[72px] xl:w-[80%]">
                From peaks to paths, explore the world through our curated
                updates.
              </p>
            </div>

            <div className="w-full">
              <form
              onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-10 justify-center items-center lg:justify-start"
                action="#"
              >
                <div className="flex xxs:gap-4 sm:gap-10">
                  <ShapeInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                  <ShapeInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>

                <ShapeButton
                  className="group-hover:text-orange-400 hoverEffect"
                  name="SUBSCRIPTION"
                />
              </form>
              <p className="text-white text-sm mt-4 text-center lg:text-left">
                Get Travel Deals & Inspo in Your Inbox
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
