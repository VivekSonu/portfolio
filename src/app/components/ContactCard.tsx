'use client'
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import {motion} from "framer-motion";
import { sendEmail } from '@/actions/sendEmail'; 
import { Input } from './ui/input';
import { cn } from '@/utils/cn';
import { TextArea } from './ui/textarea';
import { IconBrandDiscord, IconBrandGithub, IconBrandGoogle, IconBrandInstagram, IconBrandLinkedin, IconBrandOnlyfans } from '@tabler/icons-react';
import Button from './ui/button';
export default function ContactCard() {
  

    
  return (
    <motion.section
      id="contact"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: false,
      }}
    >
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get in touch
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Please contact me directly at{" "}
          <a href="mailto:viveksonu37@gmail.com" className="underline">
            viveksonu37@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <form
          className="my-8"
          action={async (FormData) => {
            console.log("Running on client");
            console.log(FormData.get("email"));
            console.log(FormData.get("message"));

            // await sendEmail(FormData);

            try {
              await sendEmail(FormData);
              alert("Thank you! Your message has been sent.");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <div className="flex flex-col gap-y-3 ">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              maxLength={500}
              className="h-14 rounded-lg border px-4 border-black/10"
            />
            <TextArea
              placeholder="Enter your message"
              name="message"
              id="mssg"
              required
            ></TextArea>
            <button
              type="submit"
              className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focul:scale-110 hover:scale-110"
            >
              Send{" "}
              <span className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                <FaPaperPlane />
              </span>
            </button>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              <a href="https://github.com/VivekSonu" target="_blank">GitHub </a>
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              <a href="https://www.linkedin.com/in/vivek-kumar-singh-aa5b24186" target="_blank">Linkedin </a>
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">              
              <a href="https://www.instagram.com/_viveksonu37/" target="_blank">Instagram </a>
            </span>
            <BottomGradient />
          </button>
        </div>

        </form>
      </div>
    </motion.section>
  );
}


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};