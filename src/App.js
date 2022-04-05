import React from 'react';
import './App.css';

function App() {
  const color = ["blue", "red", "yellow", "orange", "purple", "pink", "brown", "white", "black"]
  let [colors, setColors] = React.useState("white");

  function newColor(){ //función para el cambio de color
    let col = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[col]; //cambia el color del background
    setColors(color[col]); //modifica la variable colors para que acepte el nombre
  }

  return (
    <div className="App">
      <div id='content'>
        <p id='text'>Actual Color: {colors}</p>
        <button onClick={() => newColor()}>Change Color</button>
      </div>
    </div>
  );
}

export default App;
