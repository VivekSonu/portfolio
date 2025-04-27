import React from 'react'
import Card from '../ui/card'
import SignatureImg from '@/assets/images/me/signature.png'
import MyImg from "@/assets/images/gallery/img-3.jpg";
import Image from 'next/image'
import {animate, motion} from "framer-motion";

import { FaDownload } from 'react-icons/fa'

import Button from '../ui/button'
import Socials from '../ui/socials'
import MeCard from './me';

export default function ResumeCard() {
    return (
      <Card
        key={4}
        className="md:h-full 2xl:h-full rounded-r-2xl prl-0 !justify-between"
      >
        <MeCard />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.65 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-lg xl:text-2xl font-medium text-primary-foreground"
        >
          Full-stack software developer and data enthusiast, blending a year of
          industry experience with a passion for creating dynamic web
          applications. From front-end elegance to back-end robustness, my skill
          set covers the complete spectrum of web development. With an added
          knack for data visualization and analytics, I bring a holistic
          approach to building impactful digital solutions. Ready to turn your
          web ideas into vibrant realities. Let&apos;s create some online magic!
        </motion.p>

        {/* Signature */}
        {/* Socials and resume btn */}
        <div className="flex items-center justify-between  md:botton-6 md:left-6 md:w-[calc(100%-48px)]">
          {/* Socials */}
          {/* <Socials /> */}
          <Button>
            <FaDownload />
            <button onClick={
              ()=>{
                alert('Will upload shortly.');
              }
              }>
              Resume
            </button>
          </Button>
        </div>
      </Card>
    );
  }
  
