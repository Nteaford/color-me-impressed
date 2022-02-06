import './CYOColorPickerContainer.css';
import {useState} from 'react';
import CYOColorModal from '../CYOColorModal/CYOColorModal';

export default function CYOColorPickerContainer () {
    const [show, setShow] = useState(false);

    function showModal() {
        setShow(true);
      };
    
      function hideModal() {
        setShow(false);
    };


    return (
    <div>
        <h1>React Modal</h1>
        <CYOColorModal setShow={setShow} show = {show} hideModal={hideModal} />
        <button type="button" onClick={showModal}>
          Open
        </button>

    </div>
    )
}