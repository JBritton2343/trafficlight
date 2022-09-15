import React from "react";
import "./lights"

const Lights = ({color, lit, setLit}) =>{
    <div>
        <div className="Light" 
        style={{backgroundColor: color === lit? color: "grey"}}
        onClick={()=>setLit(color)}>{color}</div>
    </div>
}
export default Lights;