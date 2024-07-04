
import { cn } from "@/utils/cn";
import { FC, ReactNode } from "react";
import {animate, motion} from "framer-motion";

interface CardProps{
    title?:string;
    children:ReactNode;
    className?:string;
}


const Card: FC<CardProps> =({title,children,className})=>{
   return <motion.div 
   initial={{ opacity: 0, y: 50 }}
   transition={{ duration: 0.65 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once:false }}
   className={cn("relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden",className)}>
    <div className="flex flex-col gap-y-6">
        {title?(
            <div className="font-pixel">
                <p className="uppercase text-lg items-center justify-start">{title}</p>
            </div>
        ):null}
        {children}
    </div>
   </motion.div>
};

export default Card;
