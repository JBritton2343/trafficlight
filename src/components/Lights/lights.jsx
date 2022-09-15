import React from "react";

const Lights = ({color, lit, setLit}) =>{
    <div>
        <div className="lights" 
        style={{backgroundColor: color === lit? color: "grey"}}
        onClick={()=>setLit(color)}>{color}</div>
    </div>
}
export default Lights;