"use client";
import { Icon } from "@iconify/react";

import logo from "@/assets/logo/royal-safari-2.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import ShapeButton from "../components/ShapeButton";
import { PaymentIcon, SupportIcon } from "./svg-icons";
const helperLinks = [
  {
    id: 0,
    lavel: "Home",
    link: "/",
  },
  {
    id: 1,
    lavel: "Adventure",
    link: "/adventure",
  },
  {
    id: 2,
    lavel: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    lavel: "Contact us",
    link: "/contact",
  },
];
const countryLinks = [
  {
    id: 1,
    lavel: "Bangladesh",
    link: "/bangladesh",
  },
  {
    id: 2,
    lavel: "Thailand",
    link: "/thailand",
  },
  {
    id: 3,
    lavel: "nepal",
    link: "/Nepal",
  },
  {
    id: 4,
    lavel: "singapore",
    link: "/singapore",
  },
  {
    id: 5,
    lavel: "srilanka",
    link: "/srilanka",
  },
];
export default function Footer() {
  const pathname = usePathname();
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
      return toast.success("Subscribed successfuly!");
    } catch (error) {
      console.log(error);
    }
  };
  if (pathname.includes("/dashboard")) {
    return null;
  }
  return (
    <footer className="bg-footer-banner">
      <div className="container text-white pt-10 sm:pt-20">
        <div className="sm:hidden">
          <div>
            <Image
              loading="eager"
              src={logo}
              alt="logo"
              className="max-w-[109px] h-auto"
            />
            <p className="mt-6">Address : khilgaon, Dhaka, Bangladesh, 1219</p>
          </div>
          <div className="mt-7">
            <p>01898-334722 / 01898-334722</p>
            <div className="flex items-center gap-2 mt-3 group w-fit">
              <SupportIcon className="group-hover:text-orange-400" />
              <a
                className="group-hover:underline group-hover:text-orange-400"
                href="mailto:support@example.com"
              >
                support@example.com
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-[2fr_1.5fr_1fr] md:grid-cols-[2fr_1fr_1fr] xl:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 md:gap-8 mt-14 sm:mt-0">
          <div className="border-r border-gray-500 hidden sm:block">
            <div>
              <Image
                loading="eager"
                src={logo}
                alt="logo"
                className="max-w-[109px] h-auto"
              />
              <p className="mt-6">
                Address : khilgaon, Dhaka, Bangladesh, 1219
              </p>
            </div>
            <div className="mt-7">
              <p>01898-334722 / 01898-334722</p>
              <div className="flex items-center gap-2 mt-3 group w-fit">
                <SupportIcon className="group-hover:text-orange-400" />
                <a
                  className="group-hover:underline group-hover:text-orange-400"
                  href="mailto:info.royalsafaritours@gmail.com"
                >
                  info.royalsafaritours@gmail.com
                </a>
              </div>
            </div>
          </div>

          <ul className="sm:border-r border-gray-500 space-y-3 ">
            {helperLinks.map((link) => (
              <li
                className="hover:text-orange-400 hoverEffect uppercase font-medium"
                key={link.id}
              >
                <Link href={link.link}>{link.lavel}</Link>
              </li>
            ))}
          </ul>

          <ul className="xl:border-r border-gray-500 space-y-3">
            {countryLinks.map((link) => (
              <li
                className="hover:text-orange-400 hoverEffect uppercase font-medium"
                key={link.id}
              >
                <Link href={link.link}>{link.lavel}</Link>
              </li>
            ))}
          </ul>
          {/* for desktop social media links */}
          <div className="hidden lg:block border-r border-gray-500 lg:pt-36 xl:pt-0">
            <h4 className="uppercase font-medium">Follow US</h4>
            <ul className="mt-4 grid grid-cols-4 xl:grid-cols-2 w-fit gap-x-4 gap-y-2.5">
              <li>
                <a
                  href="#"
                  className="bg-green p-4 block transtion-all duration-300 rounded-sm hover:bg-black w-full h-full"
                >
                  <Icon icon="prime:twitter" width="19" height="19" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/royalsafaritour"
                  className="bg-green p-4 block transtion-all duration-300 rounded-sm hover:bg-black w-full h-full"
                  target="_blank"
                >
                  <Icon icon="uiw:facebook" width="18" height="18" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/royal.safari.tours?igsh=ZmU3YXkxbzdxMDlt"
                  className="bg-green p-4 block transtion-all duration-300 rounded-sm hover:bg-black  w-full h-full"
                  target="_blank"
                >
                  <Icon icon="mdi:instagram" width="21" height="21" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-green p-4 block transtion-all duration-300 rounded-sm hover:bg-black w-full h-full"
                >
                  <Icon icon="mdi:youtube" width="21" height="21" />
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h5 className="uppercase font-medium">
              Get Update On New Tours & Blog News
            </h5>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b focus:outline-none py-2"
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b focus:outline-none py-2"
             
               
              />
              <ShapeButton
                name="SEND MAIL"
                className="group-hover:text-black hoverEffect"
              />
            </form>
          </div>
        </div>
        {/* for mobile social media links */}
        <div className="w-fit mx-auto text-center lg:hidden mt-14">
          <h4 className="uppercase font-medium">Follow US</h4>
          <ul className="mt-4 grid grid-cols-4 gap-4">
            <li>
              <a
                href="#"
                className="bg-green p-4 block h-full w-full transtion-all duration-300 rounded-sm hover:bg-black hover:scale-110"
              >
                <Icon icon="prime:twitter" width="19" height="19" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/royalsafaritour"
                className="bg-green p-4 block h-full w-full transtion-all duration-300 rounded-sm hover:bg-black hover:scale-110"
                target="_blank"
              >
                <Icon icon="uiw:facebook" width="18" height="18" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/royal.safari.tours?igsh=ZmU3YXkxbzdxMDlt"
                className="bg-green p-4 block h-full w-full transtion-all duration-300 rounded-sm hover:bg-black hover:scale-110"
                target="_blank"
              >
                <Icon icon="mdi:instagram" width="21" height="21" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-green p-4 block h-full w-full transtion-all duration-300 rounded-sm hover:bg-black hover:scale-110"
              >
                <Icon icon="mdi:youtube" width="21" height="21" />
              </a>
            </li>
          </ul>
        </div>
        <div className="py-10 border-t border-gray-600 mt-10 relative flex flex-col sm:flex-row items-center gap-3 justify-between lg:flex-col">
          <div className="text-center">
            Powered By{" "}
            <a
              className="hover:text-orange-400 hover:underline"
              href="https://awtomatig.com/"
            >
              AWTOMATIG
            </a>
          </div>
          <div className="lg:absolute top-1/2 lg:-translate-y-1/2 right-0 ">
            <PaymentIcon className="scale-90 xl:scale-100" />
          </div>
          {/* <div className="text-center">
            Powerby{" "}
            <a
              className="hover:text-orange-400 hover:underline"
              href="https://awtomatig.com/"
            >
              Awtomatig
            </a>
          </div>
          <div className="lg:absolute top-1/2 lg:-translate-y-1/2 right-0 w-fit mx-auto mt-3 lg:mt-0">
            <PaymentIcon className="scale-90 xl:scale-100" />
          </div> */}
        </div>
      </div>
    </footer>
  );
}
