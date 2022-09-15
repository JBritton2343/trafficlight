import React, {useState} from "react";
import Lights from "./components/Lights/lights.jsx";
import "./App.css"

function App() {
  const colors = ["vermillion", "amber", "emerald"];
  const [lit, setLit]=useState("vermillion");
  return (
    <div className="App">
      {colors.map((color)=>{
        return<Lights color={color} lit={lit} setLit={setLit}/>
      })}

      

      
    </div>
  );
}

export default App;
