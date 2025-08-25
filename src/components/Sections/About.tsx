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
      <div className="z-20 w-full max-w-[1440px] gap-8 flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:text-left w-full flex flex-col items-center justify-center">
          <div className="hidden mb-12 md:flex flex-col pr-[50px] md:leading-[44px] leading-[52px] text-black rotate-[-9deg] font-cursive font-black text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl">
            <p className="translate-x-[-40px]">Who</p>
            <p className="translate-x-[0px]">are</p>
            <p className="translate-x-[70px]">we?</p>
          </div>

          {/* Mobile заголовок */}
          <h2 className="block md:hidden font-cursive  font-black text-3xl sm:text-5xl leading-tight relative text-center">
            <span className="block rotate-0">Who are we?</span>
          </h2>
          <div
            style={{
              WebkitTextStroke: "1px #4a0e0e",
              WebkitTextFillColor: "#4a0e0e",
            }}
            className="space-y-4 sm:space-y-6 font-ivy_regular font-bold text-[10px] sm:text-[16px] md:text-[14px] lg:text-base leading-relaxed max-w-[500px]"
          >
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
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="hidden mb-6 md:flex flex-col items-center justify-center leading-[72px] text-black font-cursive font-black text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl relative">
            <p className="block rotate-[4deg]">What do</p>
            <p className="block mt-2 rotate-[9deg]">we do?</p>
          </div>

          {/* Mobile заголовок */}
          <h2 className="block md:hidden font-cursive font-black text-3xl sm:text-5xl leading-tight relative text-center">
            <span className="block rotate-0">What do we do?</span>
          </h2>

          {/* Текст */}
          <div
            style={{
              WebkitTextStroke: "1px #4a0e0e",
              WebkitTextFillColor: "#4a0e0e",
            }}
            className="space-y-4 sm:space-y-6 font-ivy_regular font-bold text-[10px] sm:text-[16px] md:text-[14px] lg:text-base leading-relaxed max-w-[500px] text-center md:text-left"
          >
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
      Logo
      <div className="absolute bottom-8 flex justify-center w-full">
        <Image
          src="/flowerLogo.svg"
          alt="IVY Logo"
          width={80}
          height={80}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-20 opacity-90"
        />
      </div>
    </section>
  );
}
