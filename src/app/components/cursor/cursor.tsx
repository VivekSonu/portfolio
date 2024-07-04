import React, { FC } from 'react'
import AnimatedCursor from 'react-animated-cursor';

// interface CursorProps{
//     color:string;
// }

const Cursor=({})=>{
    return <AnimatedCursor
    innerSize={8}
    outerSize={25}
    innerScale={1}
    outerScale={2.7}
    outerAlpha={0}
    outerStyle={{
      border: '1px solid #fff',
      zIndex:5001
    }}
    innerStyle={{
      backgroundColor: '#fff',
      zIndex:5001
    }}
  />
}

export default Cursor;
