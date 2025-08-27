"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import ChooseUs from "@/components/Sections/ChooseUs";
import WorkflowSection from "@/components/Sections/WorkflowSection";
import Services from "@/components/Sections/Services";
import Steps from "@/components/Sections/Steps";
import Reviews from "@/components/Sections/Reviews";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // имитация загрузки Hero (заменишь на реальную загрузку)
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    // Анимации появления
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Горизонтальная анимация ChooseUs
    gsap.to(".chooseus-track", {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".chooseus-wrapper",
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
      },
    });
  }, [loading]);

  return (
    <div id="wrapper">
      <div id="content" className="relative">
        {/* 🔹 Лоадер */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#3a0e0e] transition-opacity duration-1000 ${
            loading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative flex flex-col items-center">
            {/* Лого */}
            <Image
              src="/logo_short.svg"
              alt="Logo"
              width={48}
              height={48}
              className="w-48 h-48 animate-pulse"
            />

            {/* Точки */}
            <div className="flex absolute top-[101px] -right-[19px] space-x-2 mt-4">
              <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:0ms]" />
              <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:200ms]" />
              <span className="w-[2px] h-[2px] bg-[#EBE7DF] rounded-full animate-pulse [animation-delay:400ms]" />
            </div>
          </div>
        </div>

        {/* 🔹 Контент */}
        <main className="w-screen bg-[#F6F6F8]">
          <section className="reveal min-h-screen flex items-center justify-center">
            <Hero />
          </section>
          <section className="chooseus-wrapper min-h-screen overflow-hidden">
            <div className="chooseus-track h-full flex">
              <section className="reveal min-h-screen flex items-center justify-center">
                <About />
              </section>
              <div className="w-screen flex items-center justify-center">
                <ChooseUs />
              </div>
            </div>
          </section>
          <section className="reveal min-h-screen flex items-center justify-center">
            <WorkflowSection />
          </section>
          <section className="reveal min-h-screen flex items-center justify-center">
            <Services />
          </section>
          <Steps />
          <Reviews />
        </main>
      </div>
    </div>
  );
}
