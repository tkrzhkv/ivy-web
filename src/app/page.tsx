"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import ChooseUs from "@/components/Sections/ChooseUs";
import WorkflowSection from "@/components/Sections/WorkflowSection";

gsap.registerPlugin(Observer);

export default function Page() {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".panel");
    let currentIndex = 0;
    let animating = false;

    // Добавляем переменные для debounce
    let lastScrollTime = 0;
    const scrollDelay = 800; // задержка в миллисекундах

    // начальные позиции
    sections.forEach((sec, i) => {
      if (i === 1) gsap.set(sec, { yPercent: 100 }); // 2-я секция снизу
      if (i === 2) gsap.set(sec, { xPercent: 100 }); // 3-я секция справа
      if (i === 3) gsap.set(sec, { yPercent: 100 }); // 4-я секция снизу
    });

    const goToSection = (index: number) => {
      if (animating) return;
      index = gsap.utils.clamp(0, sections.length - 1, index);
      if (index === currentIndex) return;

      animating = true;
      const curr = sections[currentIndex];
      const next = sections[index];

      // 0 → 1 вертикально
      if (currentIndex === 0 && index === 1) {
        gsap.to(next, {
          yPercent: 0,
          duration: 1,
          onComplete: () => {
            currentIndex = index;
            animating = false;
            // Обновляем время последней прокрутки после завершения анимации
            lastScrollTime = Date.now();
          },
        });
      }
      // 1 → 0 вертикально вверх
      else if (currentIndex === 1 && index === 0) {
        gsap.to(curr, {
          yPercent: 100,
          duration: 1,
          onComplete: () => {
            currentIndex = index;
            animating = false;
            lastScrollTime = Date.now();
          },
        });
      }
      // 1 → 2 горизонтально
      else if (currentIndex === 1 && index === 2) {
        gsap.to(next, {
          xPercent: 0,
          duration: 1,
          onComplete: () => {
            currentIndex = index;
            animating = false;
            lastScrollTime = Date.now();
          },
        });
      }
      // 2 → 1 горизонтально назад
      else if (currentIndex === 2 && index === 1) {
        gsap.to(curr, {
          xPercent: 100,
          duration: 1,
          onComplete: () => {
            currentIndex = index;
            animating = false;
            lastScrollTime = Date.now();
          },
        });
      }
      // 2 → 3 вертикально вниз
      else if (currentIndex === 2 && index === 3) {
        gsap.to(next, {
          yPercent: 0,
          duration: 1,
          onComplete: () => {
            currentIndex = index;
            animating = false;
            lastScrollTime = Date.now();
          },
        });
      }
      // 3 → 2 вертикально вверх
      else if (currentIndex === 3 && index === 2) {
        gsap.to(curr, {
          yPercent: 100,
          duration: 1,
          onComplete: () => {
            currentIndex = index;
            animating = false;
            lastScrollTime = Date.now();
          },
        });
      }
    };

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: 1,
      tolerance: 10,
      preventDefault: true,
      onUp: () => {
        // Проверяем и debounce, и флаг анимации
        if (!animating && Date.now() - lastScrollTime > scrollDelay) {
          goToSection(currentIndex - 1);
        }
      },
      onDown: () => {
        // Проверяем и debounce, и флаг анимации
        if (!animating && Date.now() - lastScrollTime > scrollDelay) {
          goToSection(currentIndex + 1);
        }
      },
    });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <section className="panel w-full absolute inset-0 h-screen flex items-center justify-center text-white text-4xl">
        <Hero />
      </section>
      <section className="panel absolute inset-0 h-screen flex items-center justify-center text-white text-4xl">
        <About />
      </section>
      <section className="panel absolute inset-0 h-screen flex items-center justify-center text-white text-4xl">
        <ChooseUs />
      </section>
      <section className="panel absolute inset-0 h-screen flex items-center justify-center text-black text-4xl bg-[#f5f0ea]">
        <WorkflowSection />
      </section>
    </div>
  );
}
