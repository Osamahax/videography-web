import TitleSec from "@/components/TitleSec";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceCard } from "@/lib/constants";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Services = () => {
  return (
    <section id="services"
      className="flex justify-center items-center relative
        flex-col gap-4 md:mt-20"
    >
      <TitleSec title="WHAT WE DO"/>
      <p className="text-muted-foreground text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum natus
        inventore optio sequi deserunt minus autem explicabo! Vero, voluptatum
        beatae.
      </p>
      <div className="flex justify-center gap-10 flex-wrap mt-6">
        {serviceCard.map((service) => (
          <Card
            className="w-[300px] h-[450px]
                flex flex-col justify-between border-2 border-primary
            "
          >
            <CardHeader>
              <CardTitle
                className="text-2xl font-bold
                    "
              >
                {service.title}
              </CardTitle>
              <CardDescription>
                <span>
                  <Image
                    className="dark:invert"
                    src={service.logo}
                    width={30}
                    height={30}
                    alt="video camera"
                  />
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-md text-muted-foreground">
                {service.description}
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              {service.features.map((feature)=>(
                <div
                  key={feature}
                  className="flex gap-2 items-center"
                >
                  <Check className="text-muted-foreground" />
                  <p>{feature}</p>
                </div>
              ))}
            <Link href={'#contact'}
              className="w-full text-center 
              bg-primary p-2 rounded-md hover:bg-primary/20"
            >Request A Quote</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
