import React from "react";

import "../../Styles.css";
const Lights = ({color, lit, setLit}) =>{
    <div>
        <div className="light" 
        style={{backgroundColor: color === lit? color: "grey"}}
        onClick={()=>setLit(color)}></div>
    </div>
}
export default Lights;