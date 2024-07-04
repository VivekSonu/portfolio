import  featuredData  from '@/app/data/featured'
import { cn } from '@/utils/cn';
import React, { useState } from 'react'
import FeaturedCard from '../cards/featured/featured-card';



export default function ExpandableFeatured() {
  const [hoverdIndex,setHoverdIndex]=useState<number|null>(null);
  console.log("the hovered card is: ",hoverdIndex);
  const handleMouseEnter=(index:number)=>{
    setHoverdIndex(index);
  };
  const handleMouseLeave=()=>{
    setHoverdIndex(null);
  }
  return (
    <div className='w-full grid lg:flex lg:justify-between lg:gap-x-4'>
        {featuredData.slice(1).map((featured,i)=>(
            <div 
              key={i} 
              className={cn(
                'relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out ',
                i===hoverdIndex? "lg:w=[40%]":"lg:w-[33%]"            
              )}
              onMouseEnter={()=>handleMouseEnter(i)}
              onMouseLeave={()=>handleMouseLeave()}
              >
                <FeaturedCard 
                  active={i===hoverdIndex} 
                  title={featured.title} 
                  tag={featured.tag} 
                  video={featured.video}/>
            </div>
        ))}
    </div>
  )
}
