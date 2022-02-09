import sendRequest from './send-request';

const COLOR_API_URL = 'https://www.thecolorapi.com';
const BASE_URL = '/api/colors';


    


//external API
  export async function fetchPSColors(psColors) {
    const colorPromises = [];
    for (let color of psColors) {
      let colorPromise = fetch(`${COLOR_API_URL}/id?hex=${color}`).then(res => res.json())
      colorPromises.push(colorPromise);
    }
    const final = await Promise.all(colorPromises);
    return final;
  }

  export async function fetchCYOColor(newCYOPick) {
      const cyoColor = await fetch(`${COLOR_API_URL}/id?hex=${newCYOPick}`).then(res => res.json())
      return cyoColor;

    }
