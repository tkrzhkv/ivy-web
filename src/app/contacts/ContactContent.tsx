"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import gsap from "gsap";

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2.2, ease: "power3.out" },
    );
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errorSending, setSendingError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email or phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          setLoading(false);
          formRef.current?.reset();
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        },
        () => {
          setLoading(false);
          setSendingError("Error sending message, please try again.");
        },
      );
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col lg:flex-row font-ivy_regular bg-[#4b0d17] pt-20 lg:pt-0 text-[#4b0d17]"
    >
      {/* Left Side - Info */}
      <div className="bg-[#4b0d17] text-[#cdbfb2] p-6 sm:p-8 lg:p-12 flex-1 flex flex-col justify-center">
        <div className="w-full text-center lg:text-left px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end rotate-[-9deg] text-4xl sm:text-5xl lg:text-6xl font-cursive font-bold pb-8 mb-8">
            <h1>Contact</h1>
            <p className="sm:ml-6">Us!</p>
          </div>
          <p className="uppercase font-ivy_normal_bold mb-4 tracking-wide">
            You can reach us anytime
          </p>
          <div className="flex gap-4 sm:gap-6 mb-4 justify-center lg:justify-start">
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </div>
          <p className="uppercase font-ivy_normal_bold mb-2 sm:mb-4 tracking-wide">
            Phone: +16469156082
          </p>
          <p className="uppercase font-ivy_normal_bold mb-2 sm:mb-4 tracking-wide">
            Email: hello@theivystreets.com
          </p>
          <p className="uppercase font-ivy_normal_bold tracking-wide">
            Address: 88 Regent Street, Jersey City, NJ 07302
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full bg-[#F5F5F0] p-6 sm:p-8 lg:p-12 flex-1 flex flex-col justify-center items-center">
        <Image
          src="/flowerLogo.svg"
          alt="ivy-streets"
          width={50}
          height={50}
          quality={20}
          className="relative top-4 lg:-top-8 mb-12 lg:mb-4"
        />
        <div className="w-full max-w-md">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full space-y-4"
          >
            {/* Email */}
            <div className="relative">
              <label className="block text-xs uppercase tracking-wide text-[#4b0d17] mb-1">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white px-3 py-2 sm:py-3 outline-none text-sm ${
                  errors.email ? "border border-red-500" : ""
                }`}
                placeholder="EMAIL"
              />
              {errors.email && (
                <span className="absolute left-0 -bottom-4 text-xs text-red-500">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Name */}
            <div className="relative">
              <label className="block text-xs uppercase tracking-wide text-[#4b0d17] mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-white px-3 py-2 sm:py-3 outline-none text-sm ${
                  errors.name ? "border border-red-500" : ""
                }`}
                placeholder="YOUR NAME"
              />
              {errors.name && (
                <span className="absolute left-0 -bottom-4 text-xs text-red-500">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block text-xs uppercase tracking-wide text-[#5b0a0a] mb-1">
                How can we help?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full bg-white px-3 pt-2 pb-6 outline-none text-sm ${
                  errors.message ? "border border-red-500" : ""
                }`}
                placeholder="TELL US A LITTLE ABOUT A PROJECT..."
              />
              {errors.message && (
                <span className="absolute left-0 -bottom-4 text-xs text-red-600">
                  {errors.message}
                </span>
              )}
            </div>

            {/*)}*/}
            {/* Submit */}
            <div className="flex flex-col justify-center items-center relative">
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer max-w-[150px] py-3 bg-[#4b0d17] text-white font-semibold uppercase tracking-wider hover:bg-[#5A2433] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send"}
              </button>
              {!errorSending && (
                <span className="mt-4 text-xs text-red-600">
                  {errorSending}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
