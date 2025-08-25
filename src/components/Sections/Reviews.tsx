"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    text: "Consistent and tailored editing services. Nothing less. So so good!",
    name: "BOND PHOTO STUDIO",
    image: "/professional-photographer-headshot.png",
  },
  {
    id: 2,
    text: "Working with the Ivy Streets was an absolute pleasure. They were able to handle a large volume of images within a tight deadline, without compromising on quality. The edited photos were beautiful!",
    name: "MAX EVANS, PHOTOGRAPHER",
    image: "/male-photographer-with-beard.png",
  },
  {
    id: 3,
    text: "Outstanding service and attention to detail. The team delivered exactly what we needed and exceeded our expectations in every way.",
    name: "SARAH JOHNSON, CREATIVE DIRECTOR",
    image: "/female-creative-director.png",
  },
  {
    id: 4,
    text: "Professional, reliable, and incredibly talented. I wouldn't trust my photo editing to anyone else.",
    name: "DAVID CHEN, WEDDING PHOTOGRAPHER",
    image: "/asian-male-photographer.png",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="relative w-screen h-screen flex-shrink-0 flex justify-center items-center text-[#d6c3b3] py-20">
      <Image
        src="/images/redBg.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
        quality={70}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wide">
            HERE&apos;S WHAT OUR SATISFIED
            <br />
            CUSTOMERS HAVE TO SAY:
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            // variant="outline"
            // size="lg"
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white border-2 border-gray-300 hover:bg-gray-50 p-4 rounded-none hidden lg:flex"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          {/* Cards Container */}
          <div className="flex gap-8 max-w-4xl mx-auto px-4 lg:px-16">
            {/* Mobile: Single Card */}
            <div className="lg:hidden w-full">
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </div>

            {/* Desktop: Two Cards */}
            <div className="hidden lg:flex gap-8 w-full">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="flex-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            // variant="outline"
            // size="lg"
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white border-2 border-gray-300 hover:bg-gray-50 p-4 rounded-none hidden lg:flex"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            // variant="outline"
            // size="sm"
            onClick={prevSlide}
            className="bg-white border-2 border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-none"
          >
            <ChevronLeft className="h-4 w-4 text-gray-800" />
          </button>
          <button
            // variant="outline"
            // size="sm"
            onClick={nextSlide}
            className="bg-white border-2 border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-none"
          >
            <ChevronRight className="h-4 w-4 text-gray-800" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
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
    <div className="bg-white p-8 h-[650px] sm:p-12 shadow-lg min-h-[400px] flex flex-col">
      {/* Review Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-light text-gray-400 tracking-[0.3em] font-ivy_regular">
          REVIEW
        </h3>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="flex-1 flex items-start justify-center mb-8">
        <p className="text-gray-800 font-ivy_normal_medium text-center leading-relaxed text-sm sm:text-base max-w-sm">
          {testimonial.text}
        </p>
      </div>

      {/* Customer Name */}
      <div className="text-center">
        <p className="text-gray-800 font-semibold text-sm tracking-wide">
          {testimonial.name}
        </p>
      </div>
    </div>
  );
}
