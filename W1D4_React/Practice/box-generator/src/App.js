import { useState } from "react";
import "./App.css";
import ColorForm from "./components/ColorForm";
import Color from "./components/Color";

function App() {
    const [colors, setColors] = useState([])
    // const [height, setHeight] = useState(200)
    // const [width, setWidth] = useState(200)
    const addColor = (newColor) => {
        setColors([...colors, newColor]);
        console.log(colors);
    };
    return (
        <div className="App">
            <ColorForm addColor={addColor} /* boxHeight={h => setHeight(h)} boxWidth={w => setWidth(w)} */ />
            {colors.map((color,i) => {
              return <Color key={i} boxColor={color} /* height={height} width={width} *//>
            })}
        </div>
    );
}

export default App;
