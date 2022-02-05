import { useState, useEffect, useRef } from 'react';
import './PSColorPickerContainer.css';
import Color from '../Color/Color';


export default function PSColorPickerContainer ({randColors}) {   
    const [colors,setColors] = useState(randColors);
    
    useEffect(function() {
        if (randColors.length !== 16) {setColors([...randColors]) }
        },);

    
    const squareColors = colors.map((color, idx) => 
    <Color color={color} key ={idx} /> )
    
    
    return (
        <div>
            <br />
            <br />
            <h1>Check out these Colors!</h1>
            <hr />
            <div className="PSCPC">
                {squareColors}
            </div>
        </div>
    );
}