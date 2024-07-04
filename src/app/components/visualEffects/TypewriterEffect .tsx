"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffects() {
  const words = [
    {
      text: "<",
      className: "  text-blue-500 dark:text-gray-700",
    },
    {
      text: "Hello ",
      className: "text-blue-500 dark:text-gray-700",
    },
    {
      text: "World ",
      className: "text-blue-500 dark:text-gray-700",
    },
    // {
    //   text: ",",
    //   className: "text-blue-500 dark:text-gray-700",
    // },
    // {
    //     text: "I ",
    //     className: "text-blue-500 dark:text-gray-700",
    // },
    // {
    //     text: "am ",
    //     className: "text-blue-500 dark:text-gray-700",
    // },
    {
        text: "/>",
        className: "text-blue-500 dark:text-gray-700",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <TypewriterEffect words={words} />
    </div>
  );
}
// “In the binary symphony of life, I am the glitch that rewrites fate.”


// “I am the compiler of dreams, translating imagination into executable reality.”
// “My keyboard is a bridge between logic and poetry, where syntax blooms into art.”
// “In the binary forest, I am the whispering wind that rearranges the leaves of code.”
// “I navigate the neural networks of possibility, debugging destiny’s tangled threads.”
// “My IDE is a canvas, and each line of code paints a pixel of innovation.”