import React, {useState} from "react";
import Lights from "./components/Lights/Lights.jsx";
import "./App.css";


function App() {
  const colors = ["red", "yellow", "green"];
  const [lit, setLit]=useState("red");
  return (
    <div className="App">
      {colors.map((color)=>{
        return(
        <Lights color={color} lit={lit} setLit={setLit} key={Math.random()}/>);
    
      })}

      
      
      
    </div>
  );
}

export default App;
