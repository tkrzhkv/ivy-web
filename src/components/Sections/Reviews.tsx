"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowIcon } from "@/components/Icons/ArrowIcon";

const testimonials = [
  {
    id: 1,
    text: "Consistent and tailored editing services. Nothing less. So so good!",
    name: "BOND PHOTO STUDIO",
    image: "/professional-photographer-headshot.png",
  },
  {
    id: 2,
    text: "Working with the Ivy Streets was an absolute pleasure...",
    name: "MAX EVANS, PHOTOGRAPHER",
    image: "/male-photographer-with-beard.png",
  },
  {
    id: 3,
    text: "Outstanding service and attention to detail...",
    name: "SARAH JOHNSON, CREATIVE DIRECTOR",
    image: "/female-creative-director.png",
  },
  {
    id: 4,
    text: "Professional, reliable, and incredibly talented...",
    name: "DAVID CHEN, WEDDING PHOTOGRAPHER",
    image: "/asian-male-photographer.png",
  },
];

export default function Reviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full flex justify-center items-center py-20">
      <Image
        src="/images/redBg.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
        quality={70}
      />
      <div className="max-w-7xl w-full relative px-4 lg:px-16">
        {/* Заголовок */}
        <div className="text-start mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white font-ivy_regular">
            HERE&apos;S WHAT OUR SATISFIED <br /> CUSTOMERS HAVE TO SAY:
          </h2>
        </div>

        {/* Контейнер для свайпера */}
        <div className="relative w-full max-w-[400px] sm:max-w-[800px] mx-auto overflow-auto">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={32}
            slidesPerView={2}
            loop={true}
            className="!overflow-visible mb-8"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex w-full justify-center gap-6 sm:gap-12 pt-8 px-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#EBE7DF] hover:bg-[#f6f6f9] text-white px-2 sm:px-12 py-2 cursor-pointer"
            >
              <ArrowIcon width="142" height="40" color="#4a0e0e" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-[#EBE7DF] hover:bg-[#f6f6f9] text-white px-2 sm:px-12 cursor-pointer"
            >
              <ArrowIcon isRight width="142" height="40" color="#4a0e0e" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white p-6 sm:p-8 h-[550px] sm:h-[600px] shadow-lg flex flex-col w-full">
      <div className="text-center mb-6">
        <h3 className="text-lg sm:text-xl font-light text-gray-400 tracking-[0.3em]">
          REVIEW
        </h3>
      </div>
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-gray-200">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="text-gray-800 text-center leading-relaxed text-sm sm:text-base flex-1 px-2">
        {testimonial.text}
      </p>
      <div className="text-center mt-6">
        <p className="text-gray-800 font-semibold text-xs sm:text-sm tracking-wide">
          {testimonial.name}
        </p>
      </div>
    </div>
  );
}
