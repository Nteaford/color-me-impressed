import './SelectedFavoritesContainer';
import {useState} from "react";
import Color from '../Color/Color';
import * as colorsAPI from '../../utilities/colors-api';

export default function SelectedFavoritesContainer({selected, handleColorSelect}) {
  const [added, setAdded] = useState(false);

  async function handleAddToFavorites(selected) {
    await colorsAPI.addColorsToFavorites(selected);
    setAdded(true);
    

  }

    return(
       <div className='SelectedFavoritesContainer'>
        <br />
        <h1> Selected Favorites</h1>
        <div className="PSCPC">
            {selected.map((color, idx) => <Color color={color} key={idx} handleColorSelect={handleColorSelect} />)}
          </div>

        <button
        onClick={() => handleAddToFavorites(selected)}
        > 
        Add Favorites to my Account</button>

       </div>
    )
} 