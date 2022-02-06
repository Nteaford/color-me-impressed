import "./ColorsPage.css";
import { useState, useEffect, useRef } from 'react';
import PSColorPickerContainer from '../../components/PSColorPickerContainer/PSColorPickerContainer';
import CYOColorPickerContainer from '../../components/CYOColorPickerContainer/CYOColorPickerContainer';
const BASE_URL = 'https://www.thecolorapi.com';

export default function ColorsPage( {user}) {
  
    

  return (
    <>
    <br />
    <br />
    <h1> Colors Page </h1>

    <PSColorPickerContainer user={user} />
    
    <hr />
    <CYOColorPickerContainer />
    </>
  );
}




