"use client";
import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";
interface TabButton {
  active: Boolean;
  selectTab: MouseEventHandler<HTMLSpanElement>;
  children: string;
}
 const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };
const TabButton: React.FC<TabButton> = ({ active, selectTab, children }) => {
 
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-sm lg:text-2xl font-semibold hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
