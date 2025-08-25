"use client";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [hasClicked, setHasClicked] = useState(false);

  const centerIndex = Math.floor(tabs.length / 2);

  const handleClick = (id: string) => {
    setActiveTab(id);
    setHasClicked(true); // скрываем анимацию
  };

  return (
    <div className="w-full max-w-[1440px] pt-16 md:pt-[120px] h-screen mx-auto flex flex-col items-center relative px-2 sm:px-6">
      <div className="relative w-full flex flex-col md:flex-row justify-center gap-2 sm:gap-4">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const showHint = !hasClicked && index === centerIndex;

          return (
            <motion.button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`relative flex-1 min-w-[80px] sm:min-w-[80px] py-4 sm:py-5 cursor-pointer border-2 uppercase tracking-wide text-[12px] sm:text-[14px] md:text-[16px] text-center transition
                ${
                  isActive
                    ? "bg-[#4a0e0e] text-white border-[#4a0e0e]"
                    : "border-[#4a0e0e] text-[#4a0e0e] hover:bg-[#4a0e0e]/10"
                }`}
            >
              {tab.label}

              {/* Показ подсказки до клика */}
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    key="hint"
                    initial={{ y: 0, scale: 1, opacity: 0 }}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0, 1, 0.8],
                    }}
                    exit={{ opacity: 0, y: 0, scale: 1 }}
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
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <div className="w-full max-w-[800px] mt-20 md:mt-40 flex-1 text-[14px] text-center md:text-left sm:text-xl space-y-4 leading-relaxed text-[#1a0f0f] font-ivy_regular">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
