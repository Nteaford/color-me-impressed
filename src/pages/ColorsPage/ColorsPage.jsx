import "./ColorsPage.css";
import { useState, useEffect, useRef } from 'react';
import PSColorPickerContainer from "../../components/PSColorPickerContainer/PSColorPickerContainer";
import CYOColorPickerContainer from "../../components/CYOColorPickerContainer/CYOColorPickerContainer";
const fetch = require('node-fetch');
const BASE_URL = 'https://www.thecolorapi.com';

export default function ColorsPage( {user}) {
  const [randColors,setRandColors] = useState([]);
  
  useEffect(function() {
    let psColors = [];
    function generatePSColors() {
      //generate random hex code 
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      psColors.push(randomColor);
      console.log(psColors);
      //base case
      if (psColors.length < 16) {
        return generatePSColors();  
      } else {
        // return setRandColors(psColors);
        let randColorsAPI= [];
        
        psColors.forEach(async function(color) {
          await fetch(`${BASE_URL}/id?hex=${color}`)
          .then(response => response.json())
          .then(function(colorObject) {
          randColorsAPI.push(colorObject);
          })
        return setRandColors(randColorsAPI);
        });      
      }
    }  
    generatePSColors();
    
  },[]);


  return (
    <>
    <br />
    <br />
    <h1> Colors Page </h1>

    <PSColorPickerContainer randColors={randColors}/>
    
    <hr />
    <CYOColorPickerContainer />
    </>
  );
}




