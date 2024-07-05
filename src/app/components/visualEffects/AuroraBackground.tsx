"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Landing from "@/app/section/landing";
import LandingMob from "@/app/section/landingmob";

export function AuroraBackgrounds() {
  return (
    <>
      <AuroraBackground>
        <div
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <LandingMob />
        </div>
      </AuroraBackground>
    </>
  );
}


// initial={{ opacity: 0.0, y: 40 }}
// whileInView={{ opacity: 1, y: 0 }}
// transition={{
//   delay: 0.3,
//   duration: 0.8,
//   ease: "easeInOut",
// }}