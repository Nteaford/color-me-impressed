import './CYOColorModal.css';
import { useState } from 'react';


export default function CYOColorModal({ hideModal, show, fetchCYOPick, cyoColor, setCYOColor }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [selectedColor, setSelectedColor] = useState("");

    function handleChange(evt) {
        let newCYOPick = evt.target.value;
        newCYOPick = newCYOPick.substring(1);
        console.log(newCYOPick);
        setSelectedColor(newCYOPick);
    }


    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="CYOCP">
                    <form action="/color/">
                        <label htmlFor="colorpicker">Select a color from this picker:</label>
                        <input
                            type="color"
                            id="colorpicker-hex"
                            value={`#${selectedColor}`}
                            placeholder="#0000ff"
                            onChange={handleChange}
                        />
                        <button type="button" onClick={() =>fetchCYOPick(selectedColor)}>
                            Select this Color
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}