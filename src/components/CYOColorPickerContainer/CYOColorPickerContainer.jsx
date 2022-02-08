import './CYOColorPickerContainer.css';
import { useState } from 'react';
import CYOColorModal from '../CYOColorModal/CYOColorModal';
import * as colorsAPI from '../../utilities/colors-api';

export default function CYOColorPickerContainer({handleColorSelect}) {
  const [show, setShow] = useState(false);
  const [cyoColor, setCYOColor] = useState(null);

  function showModal() {
    setShow(true);
  };

  function hideModal() {
    setShow(false);
  };

  async function fetchCYOPick(selectedColor) {
    const fetchedCyoColor = await colorsAPI.fetchCYOColor(selectedColor);
    setCYOColor(fetchedCyoColor);
    hideModal();
  }


  return (
    <div>
      <h1>Choose Your Own Color</h1>
      {cyoColor ?
        <div className='CYOCP'>
          <div
            className='colorbox'
            onClick={()=> handleColorSelect(cyoColor)}
            style={{
              backgroundColor: `${cyoColor.name.closest_named_hex}`
            }}
          >
            <p>{cyoColor.name.value}</p>
          </div>
        </div>


        :

        <div> Select a Color</div>
      }
      <CYOColorModal setShow={setShow} show={show} hideModal={hideModal} fetchCYOPick={fetchCYOPick} cyoColor={cyoColor} setCYOColor={setCYOColor} />
      <button type="button" onClick={showModal}>
        Open
      </button>

    </div>
  )
}
