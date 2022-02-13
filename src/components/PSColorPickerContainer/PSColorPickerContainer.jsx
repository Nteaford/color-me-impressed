import { useState, useEffect, useRef } from 'react';
import './PSColorPickerContainer.css';
import * as colorsAPIExternal from '../../utilities/colors-api-external';
import Color from '../Color/Color';


export default function PSColorPickerContainer({ user, handleColorSelect }) {
  const [randColors, setRandColors] = useState([]);
  const [status, setStatus] = useState(false);


  function handleRandomColors() {
    let psColors = [];
    function generatePSColors() {
      //generate random hex code 
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      while (randomColor.length < 6) {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
      }
      console.log(randomColor);
      psColors.push(randomColor);
      //base case
      if (psColors.length < 16) {
        return generatePSColors();
      } else {
        console.log(psColors);
        return psColors;
      }
    }
    return generatePSColors();
  }


  async function apiFetch(psColors) {
    const randColorsAPI = await colorsAPIExternal.fetchPSColors(psColors);
    setRandColors(randColorsAPI);
    setStatus(true);
  }



  return (

    <>
      {status ?

        <div>
          <br />
          <br />
          <br />

          <div className="PSCPC">
            {randColors.map((color, idx) => <Color color={color} key={idx} handleColorSelect={handleColorSelect} />)}
          </div>
          <br />
          <button onClick={() => apiFetch(handleRandomColors())}> Show me new colors </button>
        </div>

        :

        <div>
          <br />
          <br />
          <h1>Click the button below to generate random colors...</h1>
          <br />
          <button onClick={() => apiFetch(handleRandomColors())}> Generate Colors </button>


        </div>
      }
    </>
  )

}