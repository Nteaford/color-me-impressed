import "./FavoritesPage.css";
import { checkToken } from '../../utilities/users-service';
import { useState, useEffect, useRef } from 'react';
import FavoriteColorsContainer from '../../components/FavoriteColorsContainer/FavoriteColorsContainer';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';

export default function FavoritesPage() {
  const [favoriteColors, setFavoriteColors] = useState([]);
  const [favoritePalettes, setFavoritePalettes] = useState([]);

  useEffect(function() {
    
    async function getFavoriteColors() {
      const favoriteColorsFetch = await colorsAPIInternal.getFavoriteColors();
      setFavoriteColors(favoriteColorsFetch);
    }
    async function getFavoritePalettes() {
      const favoritePalattesFetch = await colorsAPIInternal.getFavoritePalettes();
      setFavoritePalettes(favoritePalattesFetch);
    }


    getFavoriteColors();
    getFavoritePalettes();
  }, []);



  return (
    <div>
    <br />
    <br />
    <br />
    <h1>
      Favorites Page
    </h1>

    <div>
      <FavoriteColorsContainer favoriteColors={favoriteColors} />
    </div>

    </div>
  );
}

