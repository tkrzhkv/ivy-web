"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="absolute inset-0 w-screen h-screen flex flex-col items-center justify-center text-center text-[#d6c3b3] overflow-hidden"
    >
      <Image
        src="/images/hero.png"
        alt="Background"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               100vw"
      />
      <div className="flex flex-col items-center relative z-0 text-center px-4">
        <Image
          src="/logo_long.svg"
          alt="IVY STR."
          width={400}
          height={200}
          priority
          className="w-[300px] md:w-[600px] lg:w-[900px]"
        />
        <p className="mt-8 italic font-cursive text-3xl md:text-5xl lg:text-7xl">
          We are happy to see you here
        </p>
      </div>
    </section>
  );
}
