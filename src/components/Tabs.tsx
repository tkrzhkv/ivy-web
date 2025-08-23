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
    <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center relative px-4 sm:px-6">
      <div className="flex justify-center w-full mb-8 relative gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-[80px] sm:min-w-[80px] py-2 sm:py-5 cursor-pointer border-2 uppercase tracking-wide text-sm sm:text-[25px] text-center transition
              ${
                activeTab === tab.id
                  ? "bg-[#4a0e0e] text-white border-[#4a0e0e]"
                  : "border-[#4a0e0e] text-[#4a0e0e] hover:bg-[#4a0e0e]/10"
              }`}
          >
            {tab.label}
          </motion.button>
        ))}

        {activeTab === tabs[0].id && (
          <motion.div
            initial={{ x: -40, y: -30, scale: 1, opacity: 1 }}
            animate={{
              x: [-40, 80, 80],
              y: [-30, 50, 50],
              scale: [1, 1, 2],
              opacity: [1, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
            className="absolute"
          >
            <MousePointerClick className="w-5 sm:w-8 h-5 sm:h-8 text-[#4a0e0e]" />
          </motion.div>
        )}
      </div>

      <div className="w-full max-w-[800px] mt-20 flex-1 text-left text-base sm:text-2xl space-y-4 leading-relaxed text-[#1a0f0f] font-ivy_regular">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
