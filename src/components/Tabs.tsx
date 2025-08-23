"use client";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-[1440px] pt-[120px] h-screen mx-auto flex flex-col items-center relative px-2 sm:px-6">
      <div className="relative w-full flex flex-col md:flex-row justify-center gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex-1 min-w-[80px] sm:min-w-[80px] py-4 sm:py-5 cursor-pointer border-2 uppercase tracking-wide text-[12px] sm:text-[14px] md:text-[16px] text-center transition
        ${
          activeTab === tab.id
            ? "bg-[#4a0e0e] text-white border-[#4a0e0e]"
            : "border-[#4a0e0e] text-[#4a0e0e] hover:bg-[#4a0e0e]/10"
        }`}
          >
            {tab.label}

            {/* Анимация клика внутри кнопки */}
            {tab.id === "delivery" && (
              <motion.div
                initial={{ y: 0, scale: 1, opacity: 1 }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [1, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-2/3 md:left-4/5 -translate-x-1/2 -translate-y-1/2"
              >
                <MousePointerClick className="w-5 sm:w-8 h-5 sm:h-8 text-[#4a0e0e]" />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="w-full max-w-[800px] mt-20 flex-1  text-[14px] text-center md:text-left sm:text-xl space-y-4 leading-relaxed text-[#1a0f0f] font-ivy_regular">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
