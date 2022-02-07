import './CYOColorPickerContainer.css';
import { useState } from 'react';
import CYOColorModal from '../CYOColorModal/CYOColorModal';
import * as colorsAPIExternal from '../../utilities/colors-api-external';

export default function CYOColorPickerContainer() {
  const [show, setShow] = useState(false);
  const [cyoColor, setCYOColor] = useState(null);

  function showModal() {
    setShow(true);
  };

  function hideModal() {
    setShow(false);
  };

  async function fetchCYOPick(selectedColor) {
    console.log("selectedColor", selectedColor);
    const fetchedCyoColor = await colorsAPIExternal.fetchCYOColor(selectedColor);
    setCYOColor(fetchedCyoColor);
    hideModal();
  }


  return (
    <div>
      <h1>Choose Your Own Color</h1>
      <CYOColorModal setShow={setShow} show={show} hideModal={hideModal} fetchCYOPick={fetchCYOPick} cyoColor={cyoColor} setCYOColor={setCYOColor} />
      <button type="button" onClick={showModal}>
        Open
      </button>

      {cyoColor ?
        <div
          className='colorbox'
          style={{
            backgroundColor: `${cyoColor.name.closest_named_hex}`
          }}
        >
          <p>{cyoColor.name.value}</p>
        </div>

        :

        <div> Select a Color</div>
      }
    </div>
  )
}
