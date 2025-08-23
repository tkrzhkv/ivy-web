"use client";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section
      id="content-section"
      className="relative w-screen min-h-screen flex-shrink-0 flex flex-col justify-center items-center bg-[#f5f0ea] text-[#4a0e0e] px-6 md:px-12 md:py-20"
    >
      {/* Background */}
      <Image
        src="/images/paperBg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Main content */}
      <div className="max-w-[1440px] z-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Column */}
        <div className="text-center md:text-left w-full flex flex-col items-center md:items-start justify-center">
          <h2 className="hidden md:block font-cursive font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight relative text-center">
            <span className="block rotate-[-9deg]">Who</span>
            <span className="block mt-2 rotate-[-9deg]">are</span>
            <span className="block mt-2 rotate-[-9deg]">we?</span>
          </h2>

          {/* Mobile заголовок */}
          <h2 className="block md:hidden font-cursive  font-black text-3xl sm:text-5xl leading-tight relative text-center">
            <span className="block rotate-0">Who are we?</span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-6 font-ivy_regular font-bold text-[10px] sm:text-[16px] md:text-base leading-relaxed max-w-[500px]">
            <p>
              WE’RE A TEAM OF PRO EDITORS WHO SPECIALIZE IN WEDDING PHOTOGRAPHY.
            </p>
            <p>
              MANY OF US HAVE SHOT WEDDINGS OURSELVES, SO WE GET WHAT MATTERS –
              STYLE, CONSISTENCY, AND FAST TURNAROUND.
            </p>
            <p>
              OUR GOAL IS TO MAKE YOUR WORK SHINE WHILE SAVING YOU HOURS BEHIND
              THE SCREEN.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-left w-full flex flex-col items-center md:items-start justify-center">
          <h2 className="hidden md:block font-cursive font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight relative">
            <span className="block rotate-[4deg]">What do</span>
            <span className="block mt-2 rotate-[4deg]">we do?</span>
          </h2>
          <h2 className="block md:hidden font-cursive font-black text-3xl sm:text-5xl leading-tight relative text-center">
            <span className="block rotate-0">What do we do?</span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-6 font-ivy_regular font-bold text-[10px] sm:text-[16px] md:text-base leading-relaxed max-w-[500px]">
            <p>WE WORK WITH YOUR RAW FILES OR LIGHTROOM CATALOGS.</p>
            <p>
              BEFORE EDITING THE FULL GALLERY, WE START WITH A COLOR TEST – THIS
              GIVES YOU FULL CONTROL TO APPROVE THE STYLE BEFORE WE MOVE
              FORWARD.
            </p>
            <p>
              WE ALSO OFFER CULLING AND RETOUCHING TO STREAMLINE YOUR WORKFLOW
              AND SAVE YOU HOURS BEHIND THE SCREEN.
            </p>
          </div>
        </div>
      </div>

      {/* Logo */}
      {/*<div className="absolute bottom-10 flex justify-center w-full">*/}
      {/*  <Image*/}
      {/*    src="/flowerLogo.svg"*/}
      {/*    alt="IVY Logo"*/}
      {/*    width={100}*/}
      {/*    height={100}*/}
      {/*    className="opacity-90"*/}
      {/*  />*/}
      {/*</div>*/}
    </section>
  );
}
