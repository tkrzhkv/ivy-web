"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import ChooseUs from "@/components/Sections/ChooseUs";
import WorkflowSection from "@/components/Sections/WorkflowSection";
import Services from "@/components/Sections/Services";
import Steps from "@/components/Sections/Steps";
import Reviews from "@/components/Sections/Reviews";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Page() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper", // обёртка всей страницы
      content: "#content", // контент для smooth
      smooth: 1, // скорость скролла, >1 = медленнее
      effects: true, // анимации ScrollTrigger сохраняются
    });

    return () => smoother.kill();
  }, []);

  useEffect(() => {
    // 🔹 Анимация появления (fade + slide-up) для всех .reveal
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

    // 🔹 Горизонтальная анимация для ChooseUs
    gsap.to(".chooseus-track", {
      xPercent: -100, // уедет влево на ширину экрана
      ease: "none",
      scrollTrigger: {
        trigger: ".chooseus-wrapper",
        start: "top top",
        end: "+=1500", // длина скролла
        scrub: true, // плавность
        pin: true, // фиксируем секцию
      },
    });
  }, []);

  return (
    <div id="wrapper">
      <div id="content">
        <main className="w-screen bg-[#F6F6F8]">
          {/* 1. Hero */}
          <section className="reveal min-h-screen flex items-center justify-center">
            <Hero />
          </section>
          {/* 2. About */}
          {/* 3. ChooseUs — горизонтальный скролл */}
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
          {/* 4. WorkflowSection */}
          <section className="reveal min-h-screen flex items-center justify-center">
            <WorkflowSection />
          </section>
          {/* 5. Services */}
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
