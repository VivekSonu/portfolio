import { FC } from "react";
import SvgCurve from "../visualEffects/svg-curve";
import {animate, motion} from "framer-motion";



interface HeadingProps {
  number: string;
  title_1: string;
  title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    transition={{  duration: 0.65 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative my-10 px-8 z-[5000]">
      {/* Number */}
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
      </div>

      {/* heading text wrapper */}
      <div className="flex items-center justify-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[11vw] 2xl:text-[17vw]  lg:text-[5vw] leading-[100%] text-primary-foreground italic">
            {title_1}
        </p>
        {/* <HeadingAnimatedSvg text="LEARN MORE ABOUT OUR FEATURED PROJECT"/> */}
        <p className="text-[11vw] 2xl:text-[17vw] lg:text-[5vw] leading-[100%] text-primary-foreground italic">
            {title_2}
        </p>
      </div>
      {/* Svg curve */}
      <SvgCurve/>
    </motion.div>
  );
};

export default Heading;
