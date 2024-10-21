import ClientLogo from "@/sections/ClientLogo";
import Hero from "@/sections/Hero";
import Navigation from "@/sections/Navigation";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <ClientLogo/>
      <Testimonials />
      <Services />
      <Portfolio />
    </>
  );
}
