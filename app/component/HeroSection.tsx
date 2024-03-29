"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeroSection = () => {
  const downloadCV = () => {
    <Link href={"/public/Ray-Lei-Cover-Letter.docx"}></Link>;
  };

  return (
    <section className="lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 ">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ray",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] test-base  sm:text-lg lg:text-xl mb-6">
            I am a Software Development student at the Southern Alberta
            Institute of Technology (SAIT), graduating in April 2024. I am
            confident that the skills and experience I possess would provide
            value to your team.
          </p>
          <Link href={"#contact"}>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-5">
              Hire me
            </button>
          </Link>

          <a
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border-white border md:mt-3 "
            href="/Qiaomu-Lei-Cover-Letter.pdf"
            download="Qiaomu-Lei-Cover-Letter.pdf"
          >
            Download CV
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative mt-5 md:mt-0">
            <Image
              src="/He programmer b cfd31db3-5660-4108-9c34-c213c6cbb966.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
