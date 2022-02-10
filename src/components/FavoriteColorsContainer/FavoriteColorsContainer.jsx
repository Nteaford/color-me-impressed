import './FavoriteColorsContainer.css'
import { useState } from "react";
import FavoriteColor from '../FavoriteColor/FavoriteColor';
import FavoriteColorModal from '../FavoriteColorModal/FavoriteColorModal';

export default function FavoriteColorsContainer({ favoriteColors, toggleStale }) {
  const [showFCM, setShowFCM] = useState(false);
  const [colorSelected, setColorSelected] = useState('');

  function showFavoriteColorModal(color) {
    setShowFCM(true);
    setColorSelected(color);
  };

  function hideFavoriteColorModal() {
    setShowFCM(false);
    setColorSelected("");
  };


  return (

    <div className="FCC">
  
        {favoriteColors.map((color, idx) => <FavoriteColor color={color} key={idx} showFavoriteColorModal={showFavoriteColorModal} />
        )}
        {colorSelected && 
           <FavoriteColorModal color={colorSelected} hideFavoriteColorModal={hideFavoriteColorModal} showFCM={showFCM} toggleStale={toggleStale} />
          
        }

    </div>
  )

}




