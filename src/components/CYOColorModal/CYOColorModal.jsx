import './CYOColorModal.css';
import { useState } from 'react';


export default function CYOColorModal({ hideModal, show, fetchCYOPick, cyoColor, setCYOColor }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [selectedColor, setSelectedColor] = useState("");

    function handleChange(evt) {
        let newCYOPick = evt.target.value;
        newCYOPick = newCYOPick.substring(1);
        setSelectedColor(newCYOPick);
    }


    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button className="modal-close" type="button" onClick={() => hideModal()}>
                    X
                </button>
                <h1>Select a color from this picker:</h1>
                <br />
                <input
                    className='modal-select-color'
                    type="color"
                    id="colorpicker-hex"
                    value={`#${selectedColor}`}
                    placeholder="#0000ff"
                    onChange={handleChange}
                />
                <br />
                <br />
                <br />
                <button className="modal-select" type="button" onClick={() => fetchCYOPick(selectedColor)}>
                    Select this Color
                </button>
            </section>
        </div>
    );
}