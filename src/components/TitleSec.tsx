import React from "react";
type Props ={
    title: string;
}
const TitleSec = ({title}:Props) => {
  return (
    <>
      <div
        className="w-full
        blur-[120px]
        rounded-full
        h-32
        absolute
        bg-secondary-foreground/50
        -z-10
        top-56
        "
      />
      <div
        className="mt-20
      px-4
      sm:px-6
      flex
      flex-col
      overflow-visible
      "
      >
        <div
          className="bg-gradient-to-r from-primary to-secondary-foreground
        text-transparent bg-clip-text relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default TitleSec;
