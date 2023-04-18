import React, { useState } from 'react';
import human from "../assets/human.jpeg";
import shrek from "../assets/image.jpeg";
const RenderPic = () => {
    const[isHuman,setHuman] = useState(true)
    const change = () => {
      setHuman(true);
    }
    return (
        <>
        <div>{isHuman ? <img src= {human}  width={200}/> : <img src= {shrek} width={200} /> }</div>
        <button onClick={() => setHuman(false)}>shrek</button>
        {/* вариация */}
        <button onClick={change}>human</button>
        </>
    );
};

export default RenderPic;