import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About";
import Class from "@/components/Class";
import Trainers from "@/components/Trainers";
import Planes from "@/components/Planes";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Class />
      <Trainers />
      <Planes />
      <Blog />
      <Footer />
    </>
  );
}
