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
          I have some expertise in the CNC business and was infatuated with CNC
          programming; I enjoyed developing a code to complete the blueprint,
          but it is difficult to achieve because it requires a large amount of
          assets to be applied. After much thinking, I took the adult decision
          to change my career path to information technology.<br></br>
          Throughout my training, I practiced and became skilled in the theories
          and skills required to perform the tasks of my position. During my
          training, I expanded my knowledge of programming fundamentals by
          working with C#, Java, and SQL databases, as well as newer
          technologies such as Python and JavaScript. We provided a network
          course that covered the fundamentals. I am learning the fundamentals
          of web programming, such as HTML, CSS, and JavaScript, as well as
          industry-standard tools like TypeScript and React.JS.
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
        <ul className="list-disc pl-2 space-y-6 h-96 break-words overflow-y-auto">
          <li className="space-y-4">
            <h2 className="text-2xl">Intershipe</h2>
            <ul className="ml-4">
              <li className="text-lg">Frontend developer -- ToolBoxesAI</li>
              <ul className="list-disc  pl-2 ">
                <li className="text-sm text-[#adb7be]">
                  Experienced in react express with TypeScript
                </li>
                <li className="text-sm text-[#adb7be]">
                  learned Material-UI, Emotion , Axios, Chart.js,
                  Next-Videos,Tailwind CSS
                </li>
              </ul>
            </ul>
            <h2 className="text-2xl">Volunteer</h2>
            <ul className="ml-4">
              <li className="text-lg">Backend developer --Empowered Futures</li>
              <ul className="list-disc  pl-2 ">
                <li className="text-sm text-[#adb7be]">
                  Full-stack development platform with Next.js
                </li>
                <li className="text-sm text-[#adb7be]">
                  UI/UX development using React.js
                </li>
                <li className="text-sm text-[#adb7be]">
                  API abstraction and utilization with GraphQL
                </li>
                <li className="text-sm text-[#adb7be]">
                  Data permanence with PostgresSQL
                </li>
              </ul>
            </ul>
          </li>
          <li className="space-y-4">
            <h2 className="text-2xl">Work Experience</h2>
            <ul className="ml-4">
              <li className="mb-2 text-lg">
                CNC Machine operator --Standard Manufacturers Services Limited
              </li>
              <ul className="list-disc  pl-2 ">
                <li className="text-sm text-[#adb7be]">
                  Experienced in CNC lathe and CNC milling machine
                </li>
                <li className="text-sm text-[#adb7be]">
                  Capable of efficient in interpretation engineer drawing and
                  machine program.
                </li>
                <li className="text-sm text-[#adb7be]">
                  Make changes to the offset as needed.
                </li>
                <li className="text-sm text-[#adb7be]">
                  Complete inspection of parts and report.
                </li>
              </ul>
            </ul>
            <ul className="ml-4">
              <li className="mb-2 text-lg">
                CNC Machine operator --North Bay Machining Centre
              </li>
              <ul className="list-disc  pl-2 ">
                <li className="text-sm text-[#adb7be]">
                  Experienced in CNC lathe(Doosan 300M) CNC milling machine(Haas
                  VF4) surface grinders drilling machine, table saw.
                </li>
                <li className="text-sm text-[#adb7be]">
                  Capable of efficient in interpretation engineer drawing and
                  machine program.
                </li>
                <li className="text-sm text-[#adb7be]">
                  Make changes to the offset as needed.
                </li>
                <li className="text-sm text-[#adb7be]">
                  Complete inspection of parts and report.
                </li>
              </ul>
            </ul>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section className="text-white lg:py-32" id="about">
      <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-3xl"
          src="/pixlr-image-generator-aa1974a3-4493-4fd0-815a-8e2ce97eb7ed.png"
          alt="skill check"
          width={500}
          height={500}
        />
        <div>
          <div className="flex flex-row mt-5 gap-2">
            <TabButton
              selectTab={() => handleTabChange("About Me")}
              active={tab === "About Me"}
              
            >About</TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              
            >Skills</TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              
            >Education</TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >Experience</TabButton>
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
