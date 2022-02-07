const BASE_URL = 'https://www.thecolorapi.com';
    
  export async function fetchPSColors(psColors) {
    const colorPromises = [];
    for (let color of psColors) {
      let colorPromise = fetch(`${BASE_URL}/id?hex=${color}`).then(res => res.json())
      colorPromises.push(colorPromise);
    }
    const final = await Promise.all(colorPromises);
    return final;
  }

  export async function fetchCYOColor(newCYOPick) {
      const cyoColor = await fetch(`${BASE_URL}/id?hex=${newCYOPick}`).then(res => res.json())
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






//HelperFunction
async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
}