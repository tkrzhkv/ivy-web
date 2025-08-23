"use client";
import Image from "next/image";

export default function ThirdSection() {
  return (
    <section
      id="third-section"
      className="relative w-screen h-screen flex-shrink-0 flex justify-center items-center text-[#d6c3b3] py-20 border-t-[40px] border-[#7D6962]"
    >
      <Image
        src="/images/brownBg.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
        quality={100}
      />

      <div className="z-20 w-full flex flex-col items-center justify-center">
        <h2 className="font-cursive bottom-5 relative font-black text-5xl md:text-6xl lg:text-9xl leading-tight rotate-[-9deg] text-center">
          <span>Why</span> <br />
          <span>choose</span> <br />
          <span>us?</span>
        </h2>
        <p className="font-cursive mt-12 text-9xl animate-up-down">↓</p>
      </div>
    </section>
  );
}
