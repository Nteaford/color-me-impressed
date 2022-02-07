import './CYOColorPickerContainer.css';
import {useState} from 'react';
import CYOColorModal from '../CYOColorModal/CYOColorModal';

export default function CYOColorPickerContainer () {
    const [show, setShow] = useState(false);
    const [cyoColor, setcyoColor] = useState('');

    function showModal() {
        setShow(true);
      };
    
      function hideModal() {
        setShow(false);
    };

    function handleCYOPick(evt) {
      setcyoColor(evt.target.value);
    }


    return (
    <div>
        <h1>React Modal</h1>
        <CYOColorModal setShow={setShow} show = {show} hideModal={hideModal} handleCYOPick={handleCYOPick} />
        <button type="button" onClick={showModal}>
          Open
        </button>

    </div>
    )
}