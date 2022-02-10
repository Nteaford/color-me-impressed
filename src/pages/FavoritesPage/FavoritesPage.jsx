import "./FavoritesPage.css";
import { checkToken } from '../../utilities/users-service';
import { useState, useEffect, useRef } from 'react';
import FavoriteColorsContainer from '../../components/FavoriteColorsContainer/FavoriteColorsContainer';
import FavoritePalettesContainer from '../../components/FavoritePalettesContainer/FavoritePalettesContainer';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';

export default function FavoritesPage() {
  const [favoriteColors, setFavoriteColors] = useState([]);
  const [favoritePalettes, setFavoritePalettes] = useState([]);

  useEffect(function () {

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
    <div className="favoritespage">
      <main>
      <br />
      <br />
      <br />
      <h1>
        My Colors/Palettes Page
      </h1>
      <br />
      <br />

      <div>
        <h3>My Saved Colors</h3>
        <br />
        <br />
        <FavoriteColorsContainer favoriteColors={favoriteColors} />
      </div>
      </main>

      <aside>
      <br />
      <br />
        <h3>My Palettes</h3>
        <br />
        <br />
        <FavoritePalettesContainer favoriteColors={favoriteColors} />
      </aside>

    </div>
  );
}

