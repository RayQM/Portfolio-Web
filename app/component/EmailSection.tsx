"use client";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
const EmailSection = () => {
  



  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-52 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/RayQM">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/qiaomu-lei-382962258/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        
        <p className=" border border-white h-24 w-9/12 rounded-3xl flex justify-center items-center text-3xl bg-[#ADB7BE]">
          <Image src="/email.png" alt="Email Icon" width={40} height={40} className="mr-2"></Image><a className="hover:text-gray-500 ">Qiaomulei@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default EmailSection;
