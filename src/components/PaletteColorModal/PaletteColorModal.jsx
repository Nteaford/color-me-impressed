import './PaletteColorModal.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';


export default function PaletteColorModal({ color, hideFavoriteColorModal, showFCM
    // , toggleStale
 }) {


    const showHideClassName = showFCM ? "modal display-block" : "modal display-none";


    // async function handleClickDelete(color) {
    //     let colorID = color._id;
    //     const deletedColor = await colorsAPIInternal.deleteColor(colorID);
    //     hideFavoriteColorModal();
    //     toggleStale();
    // }


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
                {/* <footer>
                    <button onClick={() => handleClickDelete(color)}>Delete</button>
                </footer> */}
            </section>
        </div >
    );
}