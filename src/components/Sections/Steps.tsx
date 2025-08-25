"use client";

import Image from "next/image";

type Step = {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  img: string;
};

const steps: Step[] = [
  {
    id: "1",
    stepNumber: "step\none", // перенос строки
    title: "UPLOAD",
    description: "YOUR PICTURES",
    img: "/images/step1.jpg",
  },
  {
    id: "2",
    stepNumber: "step\ntwo",
    title: "PAY",
    description: "THE INVOICE",
    img: "/images/step2.jpg",
  },
  {
    id: "3",
    stepNumber: "step\nthree",
    title: "RECEIVE",
    description: "EDITED PHOTOS",
    img: "/images/step3.jpg",
  },
];

export default function Steps() {
  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-20 py-8 sm:py-16 flex flex-col items-center mx-auto text-black">
      {/* Заголовок */}
      <h3
        style={{
          WebkitTextStroke: "2px black",
          WebkitTextFillColor: "black",
        }}
        className="font-ivy_regular text-2xl sm:text-3xl lg:text-5xl text-center"
      >
        FEW SIMPLE STEPS
      </h3>
      <p className="font-ivy_normal_medium text-base sm:text-lg lg:text-2xl mt-2 text-center sm:text-left sm:pl-[400px]">
        HOW TO START WORKING WITH
      </p>

      {/* Карточки */}
      <div className="mt-8 sm:mt-12 flex flex-col w-full gap-8 sm:gap-0">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center relative`}
          >
            {/* Фото */}
            <div className="relative w-full lg:w-1/2 mb-4 lg:mb-0">
              <div className="border-4 sm:border-8 border-white shadow-lg">
                <Image
                  src={step.img || "/placeholder.svg"}
                  alt={step.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p
                className={`
                  absolute -top-3 sm:-top-5 
                  ${
                    Number(step.id) === 2
                      ? "left-2 sm:-left-10 lg:-left-20 -rotate-3 sm:-rotate-9"
                      : "right-2 sm:-right-10 lg:-right-20 rotate-3 sm:rotate-9"
                  } 
                  text-lg sm:text-2xl lg:text-7xl font-cursive text-black whitespace-pre-line
                `}
              >
                {step.stepNumber}
              </p>
            </div>

            <div className="w-full lg:w-1/2 bg-[#d4c5b8] py-3 sm:py-2 flex justify-center">
              <p className="text-lg sm:text-xl lg:text-3xl font-ivy_normal_bold tracking-wide text-center">
                <span className="text-black font-ivy_regular">
                  {step.title}{" "}
                </span>
                <span className="text-[#600f16] text-base sm:text-xl">
                  {step.description}
                </span>
              </p>
            </div>
          </div>
        ))}

        <div className="w-full sm:w-2/3 mt-8 sm:mt-16 lg:mt-30 bg-[#d4c5b8] py-6 flex justify-center relative">
          <button className="bg-[#600f16] cursor-pointer absolute -top-3 sm:-top-4 right-2 sm:right-0 text-white font-ivy_normal_bold text-lg sm:text-xl lg:text-2xl px-6 sm:px-12 lg:px-30 py-3 sm:py-6 shadow-md hover:bg-[#4a0e0e] transition-colors">
            TRY IT NOW
          </button>
          <p className="absolute -top-20 sm:-top-32 lg:-top-40 -right-4 sm:-right-20 lg:-right-80 rotate-3 sm:rotate-6 lg:rotate-9 text-lg sm:text-2xl lg:text-7xl font-cursive text-[#600f16] whitespace-pre-line">
            the
            <br />
            main
            <br />
            step
          </p>
        </div>
      </div>
    </section>
  );
}
