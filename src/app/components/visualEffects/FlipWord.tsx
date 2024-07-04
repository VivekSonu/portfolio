import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWord() {
  const words = ["In the binary symphony of life, I am the glitch that rewrites fate.", "I am the echo in the digital cathedral, where algorithms whisper secrets to the binary gods."];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} /> <br />
        Full Stack Software Developer
      </div>
    </div>
  );
}
