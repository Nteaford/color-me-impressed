import "./ColorsPage.css";
import { useState, useEffect, useRef } from 'react';
import PSColorPickerContainer from '../../components/PSColorPickerContainer/PSColorPickerContainer';
import CYOColorPickerContainer from '../../components/CYOColorPickerContainer/CYOColorPickerContainer';
import SelectedFavoritesContainer from '../../components/SelectedFavoritesContainer/SelectedFavoritesContainer';

export default function ColorsPage({ user }) {
  const [selected, setSelected] = useState([]);

  function handleColorSelect(color) {
    //only removes the second to last or the end, otherwise it places the one I select at the end
    if (selected.length > 0) {
      if (selected.includes(color)) {
        let newArray = selected.filter(selectedColor => selectedColor !== color);
        setSelected(newArray);
      } else {
        setSelected([...selected, color]);
      }
    } else {
      setSelected([color]);
    }
  }



  return (
    <div className="colorspage">
      <main>

        <PSColorPickerContainer user={user} handleColorSelect={handleColorSelect} />

        <hr />
        <CYOColorPickerContainer handleColorSelect={handleColorSelect} />
      </main>

      <aside className="colorspage">
        <div>
          <SelectedFavoritesContainer selected={selected} setSelected={setSelected} handleColorSelect={handleColorSelect} />
        </div>
      </aside>


    </div>


  );
}
