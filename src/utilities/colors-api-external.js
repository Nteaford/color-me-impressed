const BASE_URL = 'https://www.thecolorapi.com';
const fetch = require('node-fetch');

export async function fetchPSColors(psColors) {
  let randColorsAPI = [];  
  // await Promise.all([
      psColors.forEach(async function(color) {
        fetch(`${BASE_URL}/id?hex=${color}`)
        .then(response => response.json())
        .then(function(colorObject) {
        randColorsAPI.push(colorObject);
        })
      });      
    // ]);
    return randColorsAPI;
  }
    




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