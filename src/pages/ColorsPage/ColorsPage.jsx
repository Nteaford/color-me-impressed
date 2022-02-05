import "./ColorsPage.css";
import { useState, useEffect, useRef } from 'react';
import PSColorPickerContainer from '../../components/PSColorPickerContainer/PSColorPickerContainer';
import CYOColorPickerContainer from '../../components/CYOColorPickerContainer/CYOColorPickerContainer';
import * as colorsAPIExternal from '../../utilities/colors-api-external';
const fetch = require('node-fetch');
const BASE_URL = 'https://www.thecolorapi.com';

export default function ColorsPage( {user}) {
  const [randColors,setRandColors] = useState([]);
  
  useEffect(async function() {
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
    const randColorsAPI = await colorsAPIExternal.fetchPSColors(psColors); 
    setRandColors(randColorsAPI);
  },[]);
    

  return (
    <>
    <br />
    <br />
    <h1> Colors Page </h1>

    <PSColorPickerContainer randColors={randColors} />
    
    <hr />
    <CYOColorPickerContainer />
    </>
  );
}




