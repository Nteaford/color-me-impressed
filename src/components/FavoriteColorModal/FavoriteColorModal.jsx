import './FavoriteColorModal.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';


export default function FavoriteColorModal({ color, hideFavoriteColorModal, showFCM, toggleStale }) {


    const showHideClassName = showFCM ? "modal display-block" : "modal display-none";

    const colorHex = color.name.closest_named_hex.substring(1);

    async function handleClickDelete(color) {
        let colorID = color._id;
        const deletedColor = await colorsAPIInternal.deleteColor(colorID);
        hideFavoriteColorModal();
        toggleStale();
    }


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
                            backgroundColor: `${color.name.closest_named_hex}`
                        }}>

                    </div>

                    <div>
                        <br />
                        Hex Value: {color.name.closest_named_hex}
                        <br />
                    </div>
                    <div>
                        <Link to= {`/palette/${colorHex}`}>
                            <button> Generate a Scheme for this Color</button>
                        </Link>
                    </div>
                <footer>
                    <button onClick={() => handleClickDelete(color)}>Delete</button>
                </footer>
            </section>
        </div >
    );
}