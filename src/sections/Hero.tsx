import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        className="h-full w-full pt-36 relative flex items-center
       justify-center flex-col
      "
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
        bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        />
        <p>We are Creative Strategist</p>
        <div
          className="bg-gradient-to-r from-primary to-secondary-foreground
        text-transparent bg-clip-text relative
      "
        >
          <h1 className="text-7xl font-bold text-center sm:text-9xl md:text-[200px]">
            Company
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-40px]">
          <Image
            src={"/assets/bg.jpg"}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-t-2xl border-2 border-muted"
          />
        </div>
        <div
          className="bottom-0 top-[50%] bg-gradient-to-t
      dark:from-background left-0 right-0 absolute z-10
      "
        ></div>
      </section>
    </div>
  );
};

export default Hero;