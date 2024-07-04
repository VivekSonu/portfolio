import React from 'react'
import Button from './button'
import { SiDiscord, SiFacebook, SiGithub, SiUdemy } from 'react-icons/si'
import { RiYoutubeFill } from 'react-icons/ri'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import {animate, motion} from "framer-motion";

export default function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      transition={{ delay: 1.8, duration: 1.5 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true }}
      className="flex items-center flex-wrap gap-3"
    >
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </motion.div>
  );
}

const socials=[

    // {
    //     icon:<RiYoutubeFill className="w-5 h-5" />,
    //     link:"https://www.udemy.com/user/Viv",
    //     username:"Viv"
    // },
    {
        icon:<FaLinkedin className="w-4 h-4" />,
        link:"https://www.linkedin.com/in/vivek-kumar-singh-aa5b24186",
        username:"Viv"
    },
    {
        icon:<FaInstagram className="w-4 h-4" />,
        link:"https://www.instagram.com/_viveksonu37/",
        username:"Viv"
    },
    {
      icon:<SiGithub className="w-4 h-4" />,
      link:"https://github.com/VivekSonu",
      username:"Viv"
  },
]