"use client";
//import WaterWaveWrapper from "./components/visualEffects/water-wave-wrapper";
import Landing from "./section/landing";

import AboutSection from "./section/about";
import ResumeCard from "./components/cards/resume";
import FeaturedSection from "./section/featured";
import Contact from "./section/contact";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { AuroraBackgrounds } from "./components/visualEffects/AuroraBackground";
import LandingMob from "./section/landingmob";

//Dynamic import WaterWaveWrapper to ensure it's only used in the client-side environment
const WaterWaveWrapper = dynamic(
  () => import("./components/visualEffects/water-wave-wrapper"),
  { ssr: false }
);

export default function Home() {
  const [width, setWidth] = useState(650);
  const breakpoint = 500;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    console.log(width)
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  if (width > breakpoint) {
    return (
 <>
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="4"
        perturbance="3"
        resolution="4048"
      >
        {() => (
          <div>
            <div className="pb-8">
              {/* <Cursor/> */}
              <Landing key={0} />
              <AboutSection key={1} />
              <FeaturedSection key={2} />
              <Contact key={3} />
            </div>
          </div>
        )}
      </WaterWaveWrapper>
    </>
    );
  } else {
    return (
      <>
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="3"
        perturbance="3"
        resolution="2048"
      >
        {() => (
          <div>
            <div className="pb-8">
              {/* <Cursor/> */}
              <LandingMob key={0} />
              <AboutSection key={1} />
              <FeaturedSection key={2} />
              <Contact key={3} />
            </div>
          </div>
        )}
      </WaterWaveWrapper>
    </>
    );
  }



    // <>
    //   <WaterWaveWrapper
    //     imageUrl=""
    //     dropRadius="4"
    //     perturbance="3"
    //     resolution="4048"
    //   >
    //     {() => (
    //       <div>
    //         <div className="pb-8">
    //           {/* <Cursor/> */}
    //           <Landing key={0} />
    //           <AboutSection key={1} />
    //           <FeaturedSection key={2} />
    //           <Contact key={3} />
    //         </div>
    //       </div>
    //     )}
    //   </WaterWaveWrapper>
    // </>
  
  // const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 700;
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // console.log(mousePosition);

  // useEffect(() => {
  //   const mouseMove = (e: MouseEvent) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", mouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x,
  //     y: mousePosition.y,
  //   },
  // };
  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   console.log(width)
  //   return () => window.removeEventListener("resize", handleResize);
  // },[width] );
  // if (width > breakpoint) {
  //   return (
  //     <>
  //       <WaterWaveWrapper
  //         imageUrl=""
  //         dropRadius="4"
  //         perturbance="3"
  //         resolution="4048"
  //       >
  //         {() => (
  //           <div>
  //             <div className="pb-8">
  //               {/* <Cursor/> */}
  //               <Landing key={0} />
  //               <AboutSection key={1} />
  //               <FeaturedSection key={2} />
  //               <Contact key={3} />
  //             </div>
  //           </div>
  //         )}
  //       </WaterWaveWrapper>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <WaterWaveWrapper
  //         imageUrl=""
  //         dropRadius="4"
  //         perturbance="3"
  //         resolution="4048"
  //       >
  //         {() => (
  //           <div>
  //             <div className="pb-8">
  //               {/* <Cursor/> */}
  //               <LandingMob key={0}/>
  //               <AboutSection key={1} />
  //               <FeaturedSection key={2} />
  //               <Contact key={3} />
  //             </div>
  //           </div>
  //         )}
  //       </WaterWaveWrapper>
  //     </>
  //   );
  // }
}

// return (
//   <>
//     {/* <div className="h-[50vh] bg-slate-200 ">
//       <motion.div
//         className=" h-[32px] w-[32px] fixed left-0 top-0 "
//         style={{
//           backgroundImage: "url('/bug-svgrepo-com.svg')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "30px 30px",
//         }}
//         animate={{ x: mousePosition.x, y: mousePosition.y }}
//       ></motion.div>
//     </div> */}
//     <WaterWaveWrapper
//       imageUrl=""
//       dropRadius="4"
//       perturbance="3"
//       resolution="4048"
//     >
//       {() => (
//         <div>
//           <div className="pb-8">
//             {/* <Cursor/> */}
//             <Landing  key={0}/>
//             <AboutSection  key={1}/>
//             <FeaturedSection key={2}/>
//             <Contact key={3}/>
//           </div>
//         </div>
//       )}
//     </WaterWaveWrapper>
//   </>

// <div className="h-screen flex items-center justify-center bg-white">
//   <h1 className="text-sm">Hello World</h1>

//   <motion.div className=" h-[32px] w-[32px] border rounded-[50%] fixed left-0 top-0 " style={{backgroundImage:"url('/bug-svgrepo-com.svg')",backgroundRepeat:"no-repeat",backgroundSize:"30px 30px"}} animate={{x:mousePosition.x,y:mousePosition.y}}>
//   {/* <Image
//         src=""
//         height="1000"
//         width="1000"
//         className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//         alt=""
//       /> */}
//   </motion.div>
// </div>
//   );
// }

// import React, { useState, useEffect } from 'react';

// const MyComponent = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const breakpoint = 700;

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   if (width > breakpoint) {
//     return (
//       <div>
//         <h3>Component 1</h3>
//         <p>Current width is {width}px</p>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3>Component 2</h3>
//         <p>Current width is {width}px</p>
//       </div>
//     );
//   }
// };

// export default MyComponent;
