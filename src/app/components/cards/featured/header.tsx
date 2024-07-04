
import { FC } from "react";

interface headerProps{
    title:string;
    tag:string;
}

const Header : FC<headerProps>=({title,tag})=>{
    return <div className="flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border border-border ">
        {/* Title */}
        <div>
            <p className="text-lg font-medium leading-3 text-primary-foreground">
                {title}
            </p>
        </div>
        {/* Tag */}
        <div>
            <p className="text-lg font-medium leading-3 font-pixel text-secondary-foreground">
                {tag}
            </p>
        </div>
    </div>
}

export default Header