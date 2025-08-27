"use client";
import "swiper/css";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowIcon } from "@/components/Icons/ArrowIcon";
import type { Swiper as SwiperType } from "swiper";

const samples = [
  { id: 1, image: "/images/img.png" },
  { id: 2, image: "/images/img.png" },
  { id: 3, image: "/images/img.png" },
  { id: 4, image: "/images/img.png" },
];

export default function SamplesPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <main className=" h-screen w-full pt-20 bg-[#EBE7DF]">
      <div className="w-full max-w-[1440px] flex flex-col items-center mx-auto pt-10 sm:pt-8">
        <h1 className="underline font-ivy_regular text-2xl sm:text-4xl text-black">
          SAMPLES
        </h1>

        <div className="w-full max-w-[300px] sm:max-w-[500px] mb-10 sm:mb-10 flex text-[#4a0e0e] text-3xl sm:text-5xl font-cursive items-center justify-between  sm:pt-10">
          <p>before</p>
          <p>after</p>
        </div>

        <div className="relative w-full max-w-[350px] sm:max-w-[550px] mx-auto overflow-x-auto">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={10}
            slidesPerView={2}
            slidesPerGroup={2}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="!overflow-visible"
          >
            {samples.map((sample) => (
              <SwiperSlide key={sample.id}>
                <div className="relative w-full h-[300px] sm:h-[350px] max-w-[250px]">
                  <Image
                    src={sample.image}
                    alt="sample"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки поверх слайдера */}
          <div className="flex w-full justify-center gap-6 sm:gap-12 pt-10 px-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#4a0e0e] hover:bg-[#6a0e0e] text-white px-2 sm:px-12 py-2 cursor-pointer"
            >
              <ArrowIcon width="142" height="40" color="#EBE7DF" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-[#4a0e0e] hover:bg-[#6a0e0e] text-white px-2 sm:px-12 cursor-pointer"
            >
              <ArrowIcon isRight width="142" height="40" color="#EBE7DF" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
