import React, { useState } from "react";

export const TrafficLight = () => {
  const [color , setColor] = useState("red");
  return (
    <div>
      <div id="topSection"></div>
      <div id="box">
        <div className={color=="red"?"red light glow": "red light"} onClick={()=>setColor("red")}></div>
        <div className={color=="yellow"?"yellow light glow": "yellow light"}onClick={()=>setColor("yellow")}></div>
        <div className={color=="green"?"green light glow": "green light"} onClick={()=>setColor("green")}></div>
      </div>
    </div>
  );
};
