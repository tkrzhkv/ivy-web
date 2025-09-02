"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.0 + i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  const text = "We are happy to see you here";

  return (
    <section
      id="hero-section"
      className="absolute inset-0 w-screen h-screen flex flex-col items-center justify-center text-center text-[#d6c3b3] overflow-hidden"
    >
      {/* Главный заголовок для SEO */}
      <h1 className="sr-only">Professional Wedding Photo Editing Service</h1>

      {/* Фоновое изображение */}
      <Image
        src="/images/hero.png"
        alt="Wedding photo background with editing service theme"
        fill
        priority
        aria-hidden="true"
        className="object-cover"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               100vw"
      />

      <div className="flex flex-col items-center relative z-10 text-center px-4">
        {/* Логотип */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <Image
            src="/logo_long.svg"
            alt="IVY STR. logo"
            width={400}
            height={200}
            priority
            className="w-[300px] md:w-[400px] lg:w-[600px]"
          />
        </motion.div>

        {/* Подзаголовок */}
        <h2 className="mt-8 italic font-cursive text-2xl md:text-5xl lg:text-5xl flex flex-wrap justify-center antialiased">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  );
}
