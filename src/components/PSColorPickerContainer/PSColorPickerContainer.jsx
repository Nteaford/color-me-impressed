import { useState, useEffect, useRef } from 'react';
import './PSColorPickerContainer.css';
import Color from '../Color/Color';


export default function PSColorPickerContainer ({randColors}) {   
    const [colors,setColors] = useState(randColors);
    const [status, setStatus] = useState(false);
    
    useEffect(function() {
        if (randColors.length !== 16) {
            setColors([...randColors]);
        }
        if (colors.length === 16) {
            setStatus(true);

        }
    },);
        
    
    
    const squareColors = colors.map((color, idx) => 
    <Color color={color} key ={idx} /> )
    
    if (status === true) {
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
    );} else {
    return (
        <div>
            <br />
            <br />
            <h1>Your Random Colors are Loading...</h1>
            <hr />

        </div>
    );
}
}