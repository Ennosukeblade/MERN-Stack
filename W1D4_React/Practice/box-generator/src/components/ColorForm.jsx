import React, { useState } from "react";

const ColorForm = (props) => {
    const [color, setColor] = useState("#ffffff");
    // const [height, setHeight] = useState(0)
    // const [width, setWidth] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addColor(color)
        // props.boxHeight(height)
        // props.boxWidth(width)

        // reset to white after submission
        setColor("#ffffff");
    };
    return (
        <>
            <form className="colorForm" onSubmit={handleSubmit}>
                <label htmlFor="color">Color</label>
                <input
                    type="color"
                    id="color"
                    onChange={(e) => setColor(e.target.value)}
                    // value accept only hexadecimal
                    value={color}
                />
                {/* <label htmlFor="height">H</label>
                <input type="number" id="height" onChange={(e) => setHeight(e.target.value)}/>
                <p>x</p>
                <label htmlFor="width">W</label>
                <input type="number" id="width" onChange={(e) => setWidth(e.target.value)}/>*/}
                <button>Add</button> 
            </form>
        </>
    );
};

export default ColorForm;
