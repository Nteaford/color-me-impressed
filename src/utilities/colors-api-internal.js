import sendRequest from './send-request';
const COLORS_URL = '/api/colors';
const PALETTES_URL = '/api/palettes';

//colors

// Add one or multiple colors to your favorites
 export function addColorsToFavorites(colors) {
  return sendRequest(`${COLORS_URL}/add`, 'POST', colors);
}
// Delete a colors from your favorites
 export function deleteColor(colorID) {
  return sendRequest(`${COLORS_URL}/${colorID}`, 'DELETE');
}

//palettes

// Add one palette to your favorites
 export function addPaletteToFavorites(palette) {
  return sendRequest(`${PALETTES_URL}/add`, 'POST', palette);
}


// Delete a palette from your favorites
 export function deletePaletteFromFavorites(paletteID) {
  return sendRequest(`${PALETTES_URL}/${paletteID}`, 'DELETE');
}


// Collect saved colors from Database
 export function getFavoriteColors() {
  return sendRequest(`${COLORS_URL}`);
}
// Collect saved palettes from Database
 export function getFavoritePalettes() {
  return sendRequest(`${PALETTES_URL}`);
}
