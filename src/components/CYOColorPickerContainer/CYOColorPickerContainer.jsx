import './CYOColorPickerContainer.css';
import { useState } from 'react';
import CYOColorModal from '../CYOColorModal/CYOColorModal';

export default function CYOColorPickerContainer() {
  const [show, setShow] = useState(false);
  const [cyoColor, setcyoColor] = useState("");

  function showModal() {
    setShow(true);
  };

  function hideModal() {
    setShow(false);
  };

  async function fetchCYOPick(cyoColor) {
    const fetchedCyoColor = await colorsAPIExternal.fetchCYOColor(newCYOPick);
    setcyoColor(fetchedCyoColor);
  }


  return (
    <>
      {cyoColor ?
        <div>
          <h1>Choose Your Own Color</h1>
          <CYOColorModal setShow={setShow} show={show} hideModal={hideModal} fetchCYOPick={fetchCYOPick} cyoColor={cyoColor} setcyoColor={setcyoColor} />
          <button type="button" onClick={showModal}>
            Open
          </button>

          <div 
        className='colorbox' 
        style={{
        backgroundColor: `${cyoColor.name.closest_named_hex}`
        }}
    >
        <p>{cyoColor.name.value}</p>
    </div> 



        </div>

        :

        <div>
          <h1>Choose Your Own Color</h1>
          <CYOColorModal setShow={setShow} show={show} hideModal={hideModal} handleCYOPick={handleCYOPick} cyoColor={cyoColor} />
          <button type="button" onClick={showModal}>
            Open
          </button>

        </div>
      }
    </>
  )
}

