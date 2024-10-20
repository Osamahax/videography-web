import ClientLogo from "@/sections/ClientLogo";
import Hero from "@/sections/Hero";
import Navigation from "@/sections/Navigation";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <ClientLogo/>
      <Testimonials />
    </>
  );
}
