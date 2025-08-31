"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import ChooseUs from "@/components/Sections/ChooseUs";
import WorkflowSection from "@/components/Sections/WorkflowSection";
import Services from "@/components/Sections/Services";
import Steps from "@/components/Sections/Steps";
import Reviews from "@/components/Sections/Reviews";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    // Чистим все триггеры перед созданием новых
    ScrollTrigger.getAll().forEach((t) => t.kill());

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

    // Горизонтальная анимация ChooseUs только на десктопе
    if (window.innerWidth >= 768) {
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
    }

    // ✅ cleanup при размонтировании
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="wrapper">
      <div id="content" className="relative">
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
