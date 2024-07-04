import Image from "next/image";
import MyImg from "@/assets/images/gallery/img-3.jpg";
import { cn } from "@/utils/cn";
import Card from "../ui/card";


export default function MeCard() {
  return (
    <Card key={3} className="2xl:h-full ">
        <div className="w-full h-[300px] sm:h-[500px]  overflow-hidden">
            {/* background image */}
            <Image
               src={MyImg}
               alt="V"
               className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
            />
            {/* Tags */}
            {/* <div className="absolute top-[65%] space-y-2">
               <Tag 
                 text="Hello, universe 👏" 
                 className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
                />
               <Tag 
                 text="I'm V" 
                 className="rounded-tr-2xl rounded-br-2xl  rounded-bl-2xl"
                />
               <Tag 
                 text="Full stack developer" 
                 className="rounded-tl-2xl rounded-tr-2xl  rounded-br-2xl rounded-bl-2xl"
                />
                <Tag text="Online instruction" className="rounded 3xl"/>
            </div> */}
        </div>
    </Card>
  )
}

const Tag=({text,className}:{text:string,className:string})=>{
    return(
       <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3 rounded-full",className)}>
        <p className="text-primary-foreground leading-[110%] font-bold">
            {text}
        </p>
       </div>
    )
}