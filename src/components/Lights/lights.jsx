import React from "react";

const lightObj = {
    borderRadius: '50%',
    width: '200px',
    height: '20px',
    margin: 'auto',
    marginTop: '7px',
    border: '3px solid blue'
}
function Lights({ color, lit, setLit }) {
    <div>
        <div className="light"
            style={{ backgroundColor: color === lit ? color : "grey", lightObj }}
            onClick={() => setLit(color)}></div>
    </div>;
}
export default Lights;