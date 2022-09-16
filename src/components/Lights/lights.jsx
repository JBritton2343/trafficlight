import React from "react";
import "../../App.css"

function Lights({ color, lit, setLit }) {
    return(
    <div>
        <div className="Light"
            style={{ backgroundColor: color === lit ? color : "grey" }}
            onClick={() => setLit(color)}></div>
    </div>);
}
export default Lights;