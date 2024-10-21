import TitleSec from "@/components/TitleSec";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
const serviceCard = [
  {
    title: "Photography",
    description:
      "Photo content that ensures you remain competitive and relevant on social and beyond",
    logo: "/social/camera-shutter.svg",
  },
  {
    title: "Video Production",
    description:
      "Video content that ensures you remain competitive and relevant on social and beyond",
    logo: "/social/video-camera.svg",
  },
  {
    title: "Creative Content",
    description:
      "The art of storytelling begins with our talented content creators",
    logo: "/social/story.svg",
  },
];

const Services = () => {
  return (
    <section
      className="flex justify-center items-center relative
        flex-col gap-4 md:mt-20"
    >
      <TitleSec title="WHAT WE DO"/>
      <p className="text-muted-foreground text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum natus
        inventore optio sequi deserunt minus autem explicabo! Vero, voluptatum
        beatae.
      </p>
      <div className="flex items-center justify-center gap-10 flex-wrap mt-6">
        {serviceCard.map((service) => (
          <Card
            className="w-[300px]
                flex flex-col justify-between border-2 border-primary
            "
          >
            <CardHeader>
              <CardTitle
                className="text-3xl font-bold
                    "
              >
                {service.title}
              </CardTitle>
              <CardDescription>
                <span>
                  <Image
                    className="dark:invert"
                    src={service.logo}
                    width={40}
                    height={40}
                    alt="video camera"
                  />
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-muted-foreground">
                {service.description}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
