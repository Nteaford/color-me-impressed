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



  // export async function fetchScheme(selectedColor) {
  //   let newScheme = [];  
  //         fetch(`${BASE_URL}/id?hex=${color}`)
  //         .then(response => response.json())
  //         .then(function(colorObject) {
  //         randColorsAPI.push(colorObject);
  //         })
  //       });      
  //     ]);
  //     return randColorsAPI;
  //   }



  //internal API

// Add one or multiple colors to your favorites
console.log(`${BASE_URL}/add`);
 export function addColorsToFavorites(colors) {
  return sendRequest(`${BASE_URL}/add`, 'POST', colors);
}

