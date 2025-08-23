"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import ChooseUs from "@/components/Sections/ChooseUs";
import WorkflowSection from "@/components/Sections/WorkflowSection";

gsap.registerPlugin(Observer);

const animConfig = {
  duration: 0.6,
  ease: "power2.out",
};

export default function Page() {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".panel");
    let currentIndex = 0;
    let animating = false;
    let lastScrollTime = 0;
    const scrollDelay = 400;

    // начальные позиции
    sections.forEach((sec, i) => {
      if (i === 1) gsap.set(sec, { yPercent: 100 });
      if (i === 2) gsap.set(sec, { xPercent: 100 });
      if (i === 3) gsap.set(sec, { yPercent: 100 });
    });

    const animate = (
      target: gsap.TweenTarget,
      props: gsap.TweenVars,
      onComplete?: () => void,
    ) => {
      animating = true;
      gsap.to(target, {
        ...animConfig,
        ...props,
        onComplete: () => {
          onComplete?.();
          animating = false;
          lastScrollTime = Date.now();
        },
      });
    };

    const goToSection = (index: number) => {
      if (animating) return;
      index = gsap.utils.clamp(0, sections.length - 1, index);
      if (index === currentIndex) return;

      const curr = sections[currentIndex];
      const next = sections[index];

      // схема переходов
      const transitions: Record<string, () => void> = {
        "0-1": () =>
          animate(next, { yPercent: 0 }, () => (currentIndex = index)),
        "1-0": () =>
          animate(curr, { yPercent: 100 }, () => (currentIndex = index)),
        "1-2": () =>
          animate(next, { xPercent: 0 }, () => (currentIndex = index)),
        "2-1": () =>
          animate(curr, { xPercent: 100 }, () => (currentIndex = index)),
        "2-3": () =>
          animate(next, { yPercent: 0 }, () => (currentIndex = index)),
        "3-2": () =>
          animate(curr, { yPercent: 100 }, () => (currentIndex = index)),
      };

      const key = `${currentIndex}-${index}`;
      if (transitions[key]) transitions[key]();
    };

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: 2,
      tolerance: 0,
      preventDefault: true,
      onUp: (self) => {
        const isTouch = self.event.type.startsWith("touch");
        if (!animating && Date.now() - lastScrollTime > scrollDelay) {
          if (isTouch) {
            goToSection(currentIndex + 1); // свайп вниз
          } else {
            goToSection(currentIndex - 1); // колесо вверх
          }
        }
      },
      onDown: (self) => {
        const isTouch = self.event.type.startsWith("touch");
        if (!animating && Date.now() - lastScrollTime > scrollDelay) {
          if (isTouch) {
            goToSection(currentIndex - 1); // свайп вверх
          } else {
            goToSection(currentIndex + 1); // колесо вниз
          }
        }
      },
    });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <section className="panel fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <Hero />
      </section>
      <section className="panel fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <About />
      </section>
      <section className="panel fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <ChooseUs />
      </section>
      <section className="panel fixed top-0 left-0 w-full h-full flex items-center justify-center bg-amber-50">
        <WorkflowSection />
      </section>
    </div>
  );
}
