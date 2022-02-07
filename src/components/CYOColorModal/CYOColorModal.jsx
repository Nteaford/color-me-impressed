import './CYOColorModal.css';
import { useState } from 'react';
import * as colorsAPIExternal from '../../utilities/colors-api-external';

export default function CYOColorModal({ hideModal, show, fetchCYOPick, cyoColor, setCYOColor }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    function handleChange(evt) {
        const newCYOPick = evt.target.value;
        console.log(newCYOPick);
        setCYOColor(newCYOPick);
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
                            value={cyoColor}
                            placeholder="#0000ff"
                            onChange={handleChange}
                        />
                        <button type="button" onClick={fetchCYOPick}>
                            Select this Color
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}