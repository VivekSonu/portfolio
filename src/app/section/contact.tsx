import React from 'react'

import Heading from '../components/heading/heading'
import ContactCard from '../components/ContactCard'
import { BsArrowUp } from "react-icons/bs";

export default function Contact() {
  return (
    <footer id="contact" className="pt-24 px-3 lg:px-8 ">
      <Heading number="03" title_1="Contact" title_2="" />
        <div className="">
        <ContactCard/>
        </div>
        <div className="flex justify-center"><BsArrowUp className='bg-white text-center size-5 '/></div>
        <p className="text-center text-xs pt-8 text-white">© 2024 Vivek Kumar Singh.</p>
    </footer>
  )
}
