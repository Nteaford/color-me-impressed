import './SelectedFavoritesContainer';
import Color from '../Color/Color';
import { useNavigate } from 'react-router-dom';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';

export default function SelectedFavoritesContainer({ selected, handleColorSelect }) {
  // Use the navigate function to change routes programmatically
  const navigate = useNavigate();


  async function handleAddToFavorites(selected) {
    let saveStatus = await colorsAPIInternal.addColorsToFavorites(selected);
    navigate('/favorites');

  }

  return (
    <div className='SelectedFavoritesContainer'>
      <br />
      <h1> Selected Favorites</h1>
      <br />
      <div className="PSCPC">
        {selected.map((color, idx) => <Color color={color} key={idx} handleColorSelect={handleColorSelect} />)}
      </div>

      <br />
      <button
        onClick={() => handleAddToFavorites(selected)}
      >
        Add Favorites to my Account</button>

    </div>
  )
} 