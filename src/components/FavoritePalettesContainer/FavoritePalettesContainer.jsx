import { useState, useEffect } from "react";
import SavedPalettesContainer from "../SavedPalettesContainer/SavedPalettesContainer";
import FavoritePaletteModal from "../FavoritePaletteModal/FavoritePaletteModal";

export default function FavoritePalettesContainer({ favoritePalettes, toggleStale }) {
  const [showFPM, setShowFPM] = useState(false);
  const [paletteSelected, setPaletteSelected] = useState('');

  function showFavoritePaletteModal(palette) {
    setShowFPM(true);
    setPaletteSelected(palette);
  };

  function hideFavoritePaletteModal() {
    setShowFPM(false);
    setPaletteSelected("");
  };

  return (
    <div>

      {favoritePalettes.map((palette, idx) => <div> <SavedPalettesContainer palette={palette} key={idx} showFavoritePaletteModal={showFavoritePaletteModal} /> <br/> </div>)}


      <FavoritePaletteModal palette={paletteSelected} hideFavoritePaletteModal={hideFavoritePaletteModal} showFPM={showFPM} toggleStale={toggleStale} />

    </div>
  )
}