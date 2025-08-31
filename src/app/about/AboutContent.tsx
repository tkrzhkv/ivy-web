"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2.2, ease: "power3.out" },
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#4B0D17] text-white flex flex-col justify-start items-center px-4 py-25 md:pt-15"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left space-y-8 md:space-y-12">
        <h1 className="font-cursive text-6xl -rotate-12 md:text-5xl lg:text-6xl text-white md:mb-30">
          About <br /> Us!
        </h1>

        <div className="space-y-6 font-ivy_regular text-center md:space-y-8 text-xs md:text-base lg:text-md leading-relaxed tracking-wide">
          <p className="uppercase">
            WE ARE A TEAM OF WEDDING PROFESSIONALS WITH OVER 7 YEARS OF
            EXPERIENCE.
          </p>
          <p className="uppercase">
            OUR GOAL IS TO ALLEVIATE PHOTO EDITING STRESS, LETTING YOU FOCUS ON
            CAPTURING MOMENTS.
          </p>
          <p className="uppercase">
            WE LOOK FORWARD TO COLLABORATING AND BEING PART OF YOUR PHOTOGRAPHY
            JOURNEY.
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-sm text-center font-ivy_regular md:text-xl lg:text-2xl tracking-wider uppercase">
            LET&apos;S CREATE MAGIC TOGETHER!
          </p>
        </div>
      </div>

      <div className="">
        <Image
          src="/logo_long_white.svg"
          alt="IVY Logo"
          width={120}
          height={120}
          className="w-40 h-40 sm:w-60 sm:h-60 md:w-60 md:h-60 opacity-90 "
        />
      </div>
    </div>
  );
}
