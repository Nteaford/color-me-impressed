import Color from '../Color/Color';
import { useState, useEffect, useRef } from 'react';

export default function ColorHelper ({user, randColors, setStatus}) {   

    useEffect( () => {setStatus(true)},[])

    
    return (
        <div>
            <h4>Check out these Colors!</h4>
            <hr />
            <div className="PSCPC">
                {randColors.map((color, idx) => <Color color={color} key ={idx} /> )}
            </div>
        </div>
    );
}