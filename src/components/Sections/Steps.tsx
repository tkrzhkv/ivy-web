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
    stepNumber: "step\none",
    title: "UPLOAD",
    description: "YOUR PICTURES",
    img: "/images/steps/step1.png",
  },
  {
    id: "2",
    stepNumber: "step\ntwo",
    title: "PAY",
    description: "THE INVOICE",
    img: "/images/steps/step2.png",
  },
  {
    id: "3",
    stepNumber: "step\nthree",
    title: "RECEIVE",
    description: "EDITED PHOTOS",
    img: "/images/steps/step3.png",
  },
];

export default function Steps() {
  return (
    <section className="w-full max-w-[1240px] px-4 sm:px-6 lg:px-20 py-8 sm:py-26 flex flex-col items-center mx-auto text-black overflow-x-hidden">
      {/* Заголовок */}
      <h3
        style={{
          WebkitTextStroke: "2px black",
          WebkitTextFillColor: "black",
        }}
        className="font-ivy_regular pt-20 md:pt-0 text-2xl sm:text-3xl lg:text-5xl text-center"
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
            <div className="relative mt-20 w-full max-w-[350px] mb-4 lg:mb-0">
              <div className="border-4 sm:border-8 border-white shadow-lg">
                <Image
                  src={step.img || "/placeholder.svg"}
                  alt={step.title}
                  width={400}
                  height={500}
                  className="w-full max-w-[350px] h-auto object-cover"
                  quality={70}
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
                  text-4xl  lg:text-7xl font-cursive text-black whitespace-pre-line
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

        <div className="w-full relative mb-20 md:w-[900px] mt-35 sm:mt-16 lg:mt-30 bg-[#d4c5b8] py-6">
          <button className="absolute left-1/2 md:left-3/5 -translate-x-1/2 -top-1.5 sm:-top-12 lg:-top-4 bg-[#600f16] cursor-pointer text-white font-ivy_normal_bold text-lg sm:text-xl lg:text-2xl px-12 sm:px-12 lg:px-30 py-4 sm:py-6 shadow-md hover:bg-[#4a0e0e] transition-colors whitespace-nowrap">
            TRY IT NOW
          </button>

          <p
            className="
        absolute -top-60 -right-70 rotate-[9deg]
        text-4xl sm:text-2xl lg:text-7xl font-cursive text-[#600f16] whitespace-pre-line"
          >
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
