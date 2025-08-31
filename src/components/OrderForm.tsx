"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function OrderForm({ onClose }: { onClose: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>();
  const [openCalendar, setOpenCalendar] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    files: "",
    contact: "",
    instagram: "",
    notes: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.files.trim()) {
      newErrors.files = "Link to files is required";
    } else if (
      !formData.files.startsWith("http") &&
      !formData.files.startsWith("www")
    ) {
      newErrors.files = "Please enter a valid URL";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Email or phone is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;

      if (
        !emailRegex.test(formData.contact) &&
        !phoneRegex.test(formData.contact)
      ) {
        newErrors.contact = "Please enter a valid email or phone number";
      }
    }

    if (!selected) {
      newErrors.deadline = "Please select a deadline";
    }

    if (!formData.instagram.trim()) {
      newErrors.instagram = "Instagram handle is required";
    } else if (!formData.instagram.startsWith("@")) {
      newErrors.instagram = "Instagram handle should start with @";
    }

    if (!formData.notes.trim()) {
      newErrors.notes = "Notes are required";
    } else if (formData.notes.trim().length < 10) {
      newErrors.notes = "Notes must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const deadlineInput = formRef.current?.elements.namedItem(
      "deadline",
    ) as HTMLInputElement;
    if (deadlineInput && selected) {
      deadlineInput.value = selected.toISOString().split("T")[0];
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          setLoading(false);
          formRef.current?.reset();
          onClose();
          setSelected(undefined);
          setFormData({
            name: "",
            files: "",
            contact: "",
            instagram: "",
            notes: "",
          });
          setErrors({});
        },
        () => {
          setLoading(false);
          alert("Error occured during order. Please try again.");
        },
      );
  };

  return (
    <div className="bg-[#efeae4] flex flex-col items-center justify-center w-full relative font-ivy_regular text-sm">
      <Image
        src="/flowerLogo.svg"
        alt="ivy-streets"
        width={50}
        height={50}
        quality={20}
        className="relative -top-5"
      />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 w-full flex flex-col gap-2 max-w-lg text-[#4b0d17]"
      >
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
            className={`w-full bg-white px-3 py-3 outline-none text-sm ${
              errors.name ? "border border-red-500" : ""
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <span className="absolute left-0 -bottom-4 text-xs text-red-500">
              {errors.name}
            </span>
          )}
        </div>

        {/* Files */}
        <div className="relative">
          <label className="block text-xs uppercase tracking-wide text-[#4b0d17] mb-1">
            Link to Raw Files or LR Catalog
          </label>
          <input
            type="text"
            name="files"
            value={formData.files}
            onChange={handleChange}
            className={`w-full bg-white px-3 py-3 outline-none text-sm ${
              errors.files ? "border border-red-500" : ""
            }`}
            placeholder="www."
          />
          {errors.files && (
            <span className="absolute left-0 -bottom-4 text-xs text-red-500">
              {errors.files}
            </span>
          )}
        </div>

        {/* Contact */}
        <div className="relative">
          <label className="block text-xs uppercase tracking-wide text-[#4b0d17] mb-1">
            Your Email or Phone
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className={`w-full bg-white px-3 py-3 outline-none text-sm ${
              errors.contact ? "border border-red-500" : ""
            }`}
            placeholder="your@mail.com"
          />
          {errors.contact && (
            <span className="absolute left-0 -bottom-4 text-xs text-red-500">
              {errors.contact}
            </span>
          )}
        </div>

        {/* Deadline */}
        <div className="relative">
          <label className="block text-xs uppercase tracking-wide text-[#4b0d17] mb-1">
            Project Deadline
          </label>
          <input type="hidden" name="deadline" />
          <button
            type="button"
            onClick={() => {
              setOpenCalendar((prev) => !prev);
              // Очищаем ошибку при открытии календаря
              if (errors.deadline) {
                setErrors((prev) => ({
                  ...prev,
                  deadline: "",
                }));
              }
            }}
            className={`w-full bg-white px-3 text-[#4b0d17${selected ? "100" : "80"}] py-3 text-left outline-none text-sm cursor-pointer transition ${
              errors.deadline ? "border border-red-500" : ""
            }`}
          >
            {selected
              ? selected.toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })
              : "00/00/00"}
          </button>
          {errors.deadline && (
            <span className="absolute left-0 -bottom-4 text-xs text-red-500">
              {errors.deadline}
            </span>
          )}

          {openCalendar && (
            <div className="absolute -top-20 mt-2 z-50 bg-white shadow-lg p-2">
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={(date) => {
                  setSelected(date);
                  setOpenCalendar(false);
                  // Очищаем ошибку при выборе даты
                  if (errors.deadline) {
                    setErrors((prev) => ({
                      ...prev,
                      deadline: "",
                    }));
                  }
                }}
                classNames={{
                  caption: "text-[#4b0d17] font-semibold mb-2",
                  head_cell: "text-[#4b0d17] font-bold text-xs",
                  day: "rounded-md hover:bg-[#4b0d17]/10 text-sm w-9 h-9",
                  selected: `bg-[#4b0d17] text-white`,
                  today: "underline text-[#4b0d17]",
                  chevron: "text-[#4b0d17]",
                }}
              />
            </div>
          )}
        </div>

        {/* Instagram */}
        <div className="relative">
          <label className="block text-xs uppercase tracking-wide text-[#4b0d17] mb-1">
            Instagram Handle
          </label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className={`w-full bg-white px-3 py-3 outline-none text-sm ${
              errors.instagram ? "border border-red-500" : ""
            }`}
            placeholder="@"
          />
          {errors.instagram && (
            <span className="absolute left-0 -bottom-4 text-xs text-red-500">
              {errors.instagram}
            </span>
          )}
        </div>

        {/* Notes */}
        <div className="relative">
          <label className="block text-xs uppercase tracking-wide text-[#5b0a0a] mb-1">
            Notes for Us
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className={`w-full bg-white px-3 py-3 outline-none text-sm ${
              errors.notes ? "border border-red-500" : ""
            }`}
            placeholder="Tell us a little more..."
          />
          {errors.notes && (
            <span className="absolute left-0 -bottom-4 text-xs text-red-600">
              {errors.notes}
            </span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer bg-[#5b0a0a] text-white py-3 uppercase tracking-wider font-semibold hover:bg-[#400707] transition disabled:opacity-60 text-sm mt-4"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
