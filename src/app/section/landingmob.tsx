"use client"
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { TypewriterEffects } from "../components/visualEffects/TypewriterEffect ";
import {animate, motion} from "framer-motion";
import Socials from "../components/ui/socials";


const fadeInAnimationVariants={
  initial:{
    opacity:0,
    x:100,
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      delay:1.5,duration:1.5,
    }
  },
}

export default function LandingMob() {
  return (
    <div id="home" className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 ">
        {/* <div className="text-white flex flex-col justify-center item-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
            <div>
                <span>Vivek</span>
            </div>
            <div>
                <span>Kumar</span>
            </div>
            <div className='relative '>
                <span>Singh</span>
                <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] p-5 absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-nor">
                    <span>Empowering innovation</span>
                    <br />
                    <span>through inspired design</span>
                    <br />
                    <span>where challenges spark creativity</span>
                    <br />
                    <span>Full Stack Software Developer</span>
                    <br />
                </div>
            </div>
        </div> */}
        <div className="h-[40rem] flex flex-col items-center justify-center overflow-hidden rounded-md ">
          <Socials />
          <TypewriterEffects />
          <motion.h1
            variants={fadeInAnimationVariants}
            initial={{ opacity: 0, x: -50 }}
            transition={{ delay: 0.9, duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-lg  lg:text-xl text-white pt-3 "
          >
            I am
          </motion.h1>
          <motion.h1
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-20"
          >
            Singh,Vivek
          </motion.h1>
          {/* <TextGenerateEffects/> */}
          <motion.h1
            variants={fadeInAnimationVariants}
            initial={{ opacity: 0, x: -50 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" sm:text-lg md:text-  lg:text-xl text-white pt-3 mb-0"
          >
            A Full Stack Software Developer
          </motion.h1>
          {/* <TextRevealCard
            text="You know the business"
            revealText="I know the chemistry"
          ></TextRevealCard> */}
          <motion.div
            variants={fadeInAnimationVariants}
            initial={{ opacity: 0, x: 50 }}
            transition={{ delay: 1.8, duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-[40rem] h-40 relative border border-transparent rounded-b-full rounded-t-xl overflow-hidden "
          >
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className=" w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full border border-transparent rounded-b-full rounded-t-xl bg-black [mask-image:radial-gradient(200px_90px_at_top,transparent_20%,white)]">
              {/* <TextRevealCards/> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-20 "
          >
            <div className="container_mouse text-[#565659]">
              <span className="mouse-btn border-black/5">
                <span className="mouse-scroll"></span>
              </span>
              <span className="text-[10px]">Scroll Down</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
