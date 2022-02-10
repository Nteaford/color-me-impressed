import sendRequest from './send-request';
const COLOR_API_URL = 'https://www.thecolorapi.com';

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
  export async function fetchMonoPalette(colorHex) {
      const monoPaletteResponse = await fetch(`${COLOR_API_URL}/scheme?hex=${colorHex}&mode=monochrome&count=5`).then(res => res.json())
      return monoPaletteResponse;
    }
  export async function fetchAnalPalette(colorHex) {
      const analPaletteResponse = await fetch(`${COLOR_API_URL}/scheme?hex=${colorHex}&mode=analogic&count=5`).then(res => res.json())
      return analPaletteResponse;
    }
  export async function fetchCompPalette(colorHex) {
      const compPaletteResponse = await fetch(`${COLOR_API_URL}/scheme?hex=${colorHex}&mode=complement&count=5`).then(res => res.json())
      return compPaletteResponse;
    }
  export async function fetchSplitPalette(colorHex) {
      const splitPaletteResponse = await fetch(`${COLOR_API_URL}/scheme?hex=${colorHex}&mode=analogic-complement&count=5`).then(res => res.json())
      return splitPaletteResponse;
    }
  export async function fetchTriPalette(colorHex) {
      const triPaletteResponse = await fetch(`${COLOR_API_URL}/scheme?hex=${colorHex}&mode=triad&count=5`).then(res => res.json())
      return triPaletteResponse;
    }
  export async function fetchQuadPalette(colorHex) {
      const quadPaletteResponse = await fetch(`${COLOR_API_URL}/scheme?hex=${colorHex}&mode=quad&count=5`).then(res => res.json())
      return quadPaletteResponse;
    }
  
    
