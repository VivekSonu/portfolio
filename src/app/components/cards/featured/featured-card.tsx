import { FC, ReactNode } from "react";
import Header from "./header";
import Video from "./video";
import {animate, motion} from "framer-motion";


interface FeaturedCardProps{
    logo?:ReactNode;
    title:string;
    tag:string;
    video:string;
    active:boolean;
}

const FeaturedCard:FC<FeaturedCardProps>=({logo,title,tag,video,active})=>{
    return <motion.div 
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.65 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    className="link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
        {/* Header */}
        <Header title={title} tag={tag}/>
        {/* Body */}
        <div className="relative flex float-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl ">
            {/* Video */}
            <Video video={video} active={active}/>
        </div>
    </motion.div>
};

export default FeaturedCard;