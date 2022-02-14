import "./FavoritesPage.css";
import { checkToken } from '../../utilities/users-service';
import { useState, useEffect, useRef } from 'react';
import FavoriteColorsContainer from '../../components/FavoriteColorsContainer/FavoriteColorsContainer';
import FavoritePalettesContainer from '../../components/FavoritePalettesContainer/FavoritePalettesContainer';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';

export default function FavoritesPage() {
  const [favoriteColors, setFavoriteColors] = useState([]);
  const [favoritePalettes, setFavoritePalettes] = useState([]);
  const [isStale, setIsStale] = useState(false);

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
  }, [isStale]);

  function toggleStale() {
    setIsStale(!isStale);
  }





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
          <h3>My Colors</h3>
          <br />
          <br />
            <FavoriteColorsContainer favoriteColors={favoriteColors} toggleStale={toggleStale} />
        </div>
      </main>

      <aside>
          <br />
        <h3>My Palettes</h3>
          <br />
        <FavoritePalettesContainer favoritePalettes={favoritePalettes} toggleStale={toggleStale} />
      </aside>

    </div>
  );
}

