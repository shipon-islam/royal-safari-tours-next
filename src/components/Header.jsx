"use client";
import royal_logo from "@/assets/logo/royal-logo.png";
import royal_logo2 from "@/assets/logo/royal-safari-2.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
  {
    id: 1,
    pathname: "HOME",
    path: "/",
  },
  {
    id: 2,
    pathname: "ADVENTURE",
    path: "/adventure",
  },
  {
    id: 4,
    pathname: "ABOUT US",
    path: "/about-us",
  },
  {
    id: 5,
    pathname: "CONTACT",
    path: "/contact",
  },
];
export default function Header() {
  const [isShowNav, setIsShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (pathname.includes("/dashboard")) {
    return null;
  }
  return (
    <>
      <header className="fixed w-full top-0 z-[999] font-inter">
        <div
          className={`relative ${
            scrolled
              ? "bg-lightGray lg:bg-lightGray text-[#161616]"
              : pathname === "/"
                ? "text-[#161616] bg-transparent"
                : "text-white bg-transparent"
          }`}
        >
          <nav className="container mx-auto py-2 ">
            <div className="flex flex-row-reverse lg:flex-row justify-between h-32  items-center ">
              <div className="absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:static">
                <Link href="/" className="">
                  <Image
                    loading="eager"
                    src={royal_logo}
                    alt="Logo"
                    className="w-30 xxs:w-36 sm:w-40 h-auto object-cover"
                  />
                </Link>
              </div>
              <ul className="hidden xl:absolute left-1/2 xl:-translate-x-1/2 lg:flex space-x-18 text-xl">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className={`hover:text-orange-400 transition-colors duration-300 ${
                        pathname == link.path && "text-orange-400"
                      }`}
                    >
                      {link.pathname}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsShowNav((prev) => !prev)}
                className={`cursor-pointer lg:hidden z-[1010]  mr-6 ${
                  scrolled
                    ? isShowNav
                      ? "text-white"
                      : "text-black"
                    : "text-white"
                }`}
              >
                <Icon
                  icon="akar-icons:three-line-horizontal"
                  width="32"
                  height="32"
                />
              </button>
              {/* for mobile */}
              <div
                className={`lg:hidden absolute z-[1000] top-0 right-0  transition-all duration-300 header-gradient w-full h-screen  origin-top ${
                  isShowNav
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="mx-auto">
                  <Image
                    loading="eager"
                    src={royal_logo2}
                    alt="Logo"
                    className="size-20 sm:size-24 mx-auto  object-cover my-6"
                  />
                  <hr className="border-white/50" />
                  <ul className=" text-center  space-y-8 sm:space-y-12 px-5 text-3xl sm:text-4xl mt-8 sm:mt-16">
                    {links.map((link) => (
                      <li key={link.id}>
                        <Link
                          onClick={() => setIsShowNav((prev) => !prev)}
                          href={link.path}
                          className={`hover:text-white transition-colors duration-300 ${
                            pathname == link.path ? "text-white" : "text-black"
                          }`}
                        >
                          {link.pathname}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=8801898334733"
                    className="w-fit text-nowrap flex items-center justify-center gap-2  px-8 py-3 font-medium bg-green text-white  cursor-pointer hover:bg-black hoverEffect text-xl rounded-md absolute bottom-28 left-1/2 -translate-x-1/2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      icon="akar-icons:whatsapp-fill"
                      width="21"
                      height="21"
                    />
                    <span>+8801898-334733</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
