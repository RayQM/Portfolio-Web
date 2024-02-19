"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { title } from "process";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const AboutSection = () => {
  const [tab, setTab] = useState<string>("About Me");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const TAB_DATA: TabData[] = [
    {
      title: "About Me",
      id: "About Me",
      content: (
        <p className="text-base lg:text-lg h-96 break-words overflow-y-auto">
          I am a Software Development student at the Southern Alberta Institute
          of Technology (SAIT), graduating in April 2024. I am confident that
          the skills and experience I possess would provide value to your team.
        </p>
      ),
    },
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc md:grid md:grid-cols-2 pl-2 space-y-2">
          <li className="mt-2">HTML,CSS</li>
          <li>REACT.JS/REACT Native</li>
          <li>NEXT.JS</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>SQL/SQL Plus/PL-SQL/noSQL</li>
          <li>FireBase/MongoDB</li>
          <li>C#</li>
          <li>JAVA</li>
          <li>Data Structure</li>
          <li>Git/Github</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc  pl-2 space-y-6 h-96 overflow-y-auto">
          <li className="text-lg">
            Diploma. Information Technology
            <ul className="ml-4">
              <li className="text-sm text-[#adb7be]">
                (Southern Alberta Institute of Technology)
              </li>
            </ul>
          </li>
          <li className="text-lg">
            Mechanical Technician- Machinist
            <ul className="ml-4">
              <li className="text-sm text-[#adb7be]">(Canadore College) </li>
            </ul>
          </li>
          <li className="text-lg">
            Aircraft struct repair tech
            <ul className="ml-4">
              <li className="text-sm text-[#adb7be]">(Canadore College) </li>
            </ul>
          </li>
          <li className="text-lg">
            English as a second language
            <ul className="ml-4">
              <li className="text-sm text-[#adb7be]">(Canadore College) </li>
            </ul>
          </li>
          <li className="text-lg">
            Aircraft struct repair tech
            <ul className="ml-4">
              <li className="text-sm text-[#adb7be]">
                (Guangzhou Civil Aviation College)
              </li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "Experience",
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/pixlr-image-generator-8b4b387f-c3f2-4ca6-9c89-0a99f5484610.png"
          alt="skill check"
          width={500}
          height={500}
        />
        <div>
          <div className="flex flex-row mt-5 gap-2">
            <TabButton
              selectTab={() => handleTabChange("About Me")}
              active={tab === "About Me"}
              children="About"
            />
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              children="Skills"
            />
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              children="education"
            />
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
              children="Experience"
            />
          </div>
          <div className="mt-8 h-96">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
