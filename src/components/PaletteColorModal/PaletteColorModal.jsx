import './PaletteColorModal.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';


export default function PaletteColorModal({ color, hideFavoriteColorModal, showFCM }) {
    const showHideClassName = showFCM ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <header>
                    <div>
                        <button onClick={() => hideFavoriteColorModal()}>
                            Close
                        </button>
                    </div>
                </header>
                <div
                    className='colorbox'
                    style={{
                        backgroundColor: `${color.hex.value}`
                    }}>

                </div>

                <div>
                    <br />
                    Hex Value: {color.hex.value}
                    <br />
                    RGB Value: {color.rgb.value}
                    <br />
                    CMYK Value: {color.cmyk.value}
                    <br />
                </div>
            </section>
        </div >
    );
}