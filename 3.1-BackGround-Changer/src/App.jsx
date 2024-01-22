import { useState } from "react";

function App() {
  const [color, useColor] = useState("gray");
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'pink', 'brown'];


  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="flex justify-center items-center h-screen text-5xl font-bold text-white">Harsh Seth</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
          {
            colors.map((color) => (
              <button 
                key={color}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                onClick={() => useColor(color)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor : color}}>{color}</button>
            ))
          }
          {/* <button 
          onClick={() => useColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "red"}}>Red</button>
          <button 
          onClick={() => useColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "green"}}>Green</button>
          <button 
          onClick={() => useColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "yellow"}}>Yellow</button>
          <button 
          onClick={() => useColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "blue"}}>Blue</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
