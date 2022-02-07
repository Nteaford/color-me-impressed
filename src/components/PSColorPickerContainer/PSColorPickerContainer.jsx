import { useState, useEffect, useRef } from 'react';
import './PSColorPickerContainer.css';
import * as colorsAPIExternal from '../../utilities/colors-api-external';
import Color from '../Color/Color';


export default function PSColorPickerContainer({ user }) {
  const [randColors, setRandColors] = useState([]);
  const [status, setStatus] = useState(false);


  function handleRandomColors() {
    let psColors = [];
    function generatePSColors() {
      //generate random hex code 
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      psColors.push(randomColor);
      //base case
      if (psColors.length < 16) {
        return generatePSColors();
      } else {
        return psColors;
      }
    }
    return generatePSColors();
    // return setRandColors(psColors);
    //this await function causes problems with the rerender of the page -- troubleshooted with tong and when randColorsAPI is changed to a hardcoded array, the component will rerender
    // const randColorsAPI = await colorsAPIExternal.fetchPSColors(psColors); 
    // setRandColors(randColorsAPI, console.log(randColorsAPI));
  }


  async function apiFetch(psColors) {
    console.log(psColors);
    const randColorsAPI = await colorsAPIExternal.fetchPSColors(psColors);
    console.log("pre state variable set", randColors);
    setRandColors(randColorsAPI);
    setStatus(true);
  }

  // apiFetch(handleRandomColors());

  console.log("onload/afterclick load", randColors);


  return (

    <>
      {status ?

        <div>
          <h4>Check out these Colors!</h4>
          <hr />
          <div className="PSCPC">
            {randColors.map((color, idx) => <Color color={color} key={idx} />)}
          </div>
        </div>

        :

        <div>
          <br />
          <br />
          <h1>Click the button below to generate random colors...</h1>
          <br />
          <button onClick={() => apiFetch(handleRandomColors())}> Generate Colors </button>
          <hr />

        </div>
      }
    </>
  )

}