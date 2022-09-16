import React from "react";


function Lights({ color, lit, setLit }) {
    return(
    <div>
        <div className="light"
            style={{ backgroundColor: color === lit ? color : "grey" }}
            onClick={() => setLit(color)}></div>
    </div>);
}
export default Lights;