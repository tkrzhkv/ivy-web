"use client";

import Image from "next/image";

type Service = {
  id: string;
  title: string;
  price: string;
  description: string;
  img: string;
};

const services: Service[] = [
  {
    id: "1",
    title: "Color correction",
    price: "[ COLOR CORRECTION – $0.30 PER PHOTO ]",
    description:
      "WE CAREFULLY CRAFT A COLOR LOOK THAT\nFITS YOUR STYLE AND ENHANCES THE MOOD\nOF THE SHOOT. WORKING WITH RAW FILES,\nWE ADJUST EXPOSURE, WHITE BALANCE,\nTONES, CONTRAST, AND MORE — TO GIVE\nYOUR IMAGES THE BEST POSSIBLE FINISH.",
    img: "/images/services/service1.jpg",
  },
  {
    id: "2",
    title: "Retouching",
    price: "[ RETOUCHING – $0.30 PER PHOTO ]",
    description:
      "WE DELIVER CLEAN, POLISHED IMAGES\nWHILE PRESERVING A NATURAL LOOK.\nOUR RETOUCHING INCLUDES SKIN\nSMOOTHING, BODY SHAPING, REMOVAL\nOF DISTRACTING ELEMENTS, AND FINAL\nREFINEMENTS TO MAKE EACH PHOTO\nSHINE.",
    img: "/images/services/service2.jpg",
  },
  {
    id: "3",
    title: "Culling",
    price: "[ CULLING – $25 PER 1,000 PHOTOS ]",
    description:
      "WE TAKE THE TIME-CONSUMING TASK\nOF SELECTING THE BEST SHOTS OFF\nYOUR PLATE, SO YOU CAN FOCUS ON\nWHAT MATTERS MOST.\nCLEAN, EFFICIENT, AND TAILORED TO\nYOUR PREFERENCES — WE HELP\nSTREAMLINE YOUR WORKFLOW FROM\nTHE START.",
    img: "/images/services/service3.jpg",
  },
];

export default function Services() {
  return (
    <section className="w-screen">
      <div className="flex flex-col sm:flex-row w-full">
        {/* Левая колонка */}
        <div className="w-full sm:w-[30%] p-6 sm:p-12 flex flex-col justify-between bg-black">
          <div className="w-full flex flex-col justify-center items-center md:items-start">
            <div className="gap-4 text-center md:text-start pt-12 sm:gap-8 text-[#D6C3B3]">
              <p className="text-lg sm:text-2xl md:text-4xl font-bold font-ivy_regular">
                SERVICES
              </p>
              <p className="text-lg sm:text-2xl md:text-4xl font-bold font-ivy_regular">
                AND
              </p>
              <p className="text-lg sm:text-2xl md:text-4xl font-bold font-ivy_regular">
                PRICING
              </p>
            </div>
            <div className="space-y-3 px-8 md:px-0 text-center sm:text-start mb-12 md:mb-0 mt-10 md:mt-30 tracking-[4px] sm:space-y-6 text-white font-ivy_normal_regular font-[400] text-xs sm:text-base max-w-[490px]">
              <p>
                WE’RE A TEAM OF PROFESSIONAL EDITORS SPECIALIZING IN WEDDING
                PHOTOGRAPHY.
              </p>
              <p>
                OUR SERVICES INCLUDE COLOR CORRECTION, CULLING, AND RETOUCHING —
                FROM SKIN WORK AND LIGHT BODY SHAPING TO OVERALL IMAGE
                ENHANCEMENT.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full mb-10 sm:mt-0">
            <Image
              src="/logo_beige.svg"
              alt="IVY Logo"
              width={80}
              height={80}
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 opacity-90"
            />
          </div>
        </div>

        {/* Карточки сервисов */}
        <div className="w-full sm:w-[70%] flex flex-col md:flex-row">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col w-full ${
                // Переворачиваем только на sm+ экранах
                index % 2 === 1 ? "sm:flex-col-reverse" : ""
              }`}
            >
              {/* Изображение */}
              <div className="relative w-full aspect-[2/4] sm:h-1/2">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  quality={20}
                />
              </div>

              {/* Текст */}
              <div className="flex flex-col justify-center items-center w-full  bg-white p-4 min-h-[400px] sm:min-h-auto sm:h-1/2">
                <h2 className="text-3xl sm:text-xl md:text-3xl font-cursive font-bold mb-3 text-black text-center">
                  {service.title}
                </h2>
                <p className="mb-8 sm:mb-2 text-[14px] sm:text-xs font-ivy_normal_bold text-[#4a0e0e] text-center">
                  {service.price}
                </p>
                <p className="text-[9px] sm:text-[10px] font-ivy_normal_bold whitespace-pre-line text-black text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
