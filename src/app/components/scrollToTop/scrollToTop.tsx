'use client'
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import "./style.css";
import { cn } from '@/utils/cn';

export default function scrollTop() {
    return (
        <ScrollToTop className={cn("scrollToUp bg-white")} smooth top={100}/>
    )
}
