import React, { MouseEventHandler } from "react";
interface TabButton {
  active: Boolean;
  selectTab: MouseEventHandler<HTMLSpanElement>;
  children: string;
}

const TabButton: React.FC<TabButton> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-sm lg:text-2xl font-semibold hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
