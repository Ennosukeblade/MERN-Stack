import React from "react";
import { useParams } from "react-router-dom";

const DisplayParam = () => {
    const { element } = useParams();
    return isNaN(element) ? (
        <div>The word is: {element}</div>
    ) : (
        <div>The number is: {element}</div>
    );
};

export default DisplayParam;
