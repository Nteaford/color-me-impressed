import { useState, useEffect, useRef } from 'react';
import './PSColorPickerContainer.css';
import * as colorsAPIExternal from '../../utilities/colors-api-external';
import Color from '../Color/Color';
const fetch = require('node-fetch');


export default function PSColorPickerContainer ({user}) {   
    const [randColors,setRandColors] = useState([]);
  
    async function handleRandomColors(){
        let psColors = [];
        function generatePSColors() {
          //generate random hex code 
          let randomColor = Math.floor(Math.random()*16777215).toString(16);
          psColors.push(randomColor);
          //base case
          if (psColors.length < 16) {
            return generatePSColors();  
          } else {
            return psColors;
          }
        }
        generatePSColors();
        // return setRandColors(psColors);
        //this await function causes problems with the rerender of the page -- troubleshooted with tong and when randColorsAPI is changed to a hardcoded array, the component will rerender
        const randColorsAPI = await colorsAPIExternal.fetchPSColors(psColors); 
        setRandColors(randColorsAPI, console.log(randColors));
    }

    // function generateBoxes(randColors) {
    // const squareColors = randColors.map((color, idx) => 
    // <Color color={color} key ={idx} /> );
    // return squareColors;
    // }
    if (randColors.length > 0) {
    return (
        <div>
            <h4>Check out these Colors!</h4>
            <hr />
            <div className="PSCPC">
                {randColors.map((color, idx) => <Color color={color} key ={idx} /> )}
            </div>
        </div>
    );} else {
    return (
        <div>
            <br />
            <br />
            <h1>Click the button below to generate random colors...</h1>
            <br />
            <button onClick={handleRandomColors}> Generate Colors </button>
            <hr />

        </div>
    );
}
}