import Image from "next/image";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";
import AboutSection from "./component/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className=" container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <AboutSection />

      </div>
    </main>
  );
}
