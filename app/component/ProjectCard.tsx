"use client"
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
interface Card {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl:string,
  previewUrl ?:string,
}

const ProjectCard: React.FC<Card> = ({ imgUrl, title, description, gitUrl,previewUrl }) => {
    const [showVeiw,setShowView] = useState(true)
    const [showGit, setShowGit] = useState(true);
    useEffect(() => {
      if (previewUrl === "null") {
        setShowView(false);
      }
      if (gitUrl ==="null"){
        setShowGit(false)
      }
    }, [previewUrl,gitUrl]);
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {showGit ? (<Link
            href={gitUrl}
            className="h-14 w-14  border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>) :null}
          {showVeiw ? (
            <Link
              href={previewUrl || "defaultUrl"}
              className="h-14 w-14 ml-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
