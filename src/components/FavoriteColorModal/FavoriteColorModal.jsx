import './FavoriteColorModal.css';
import { useState } from 'react';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';


export default function FavoriteColorModal({ color, hideFavoriteColorModal, showFCM }) {


    const showHideClassName = showFCM ? "modal display-block" : "modal display-none";
 

    //handleclickdelete{ colorsapi --> request to "/api/colors/delete"  route there that triggers controller to delete the dealio
    async function handleClickDelete(color) {
        let colorID = color._id;
        const deletedColor = await colorsAPIInternal.deleteColor(colorID);
        console.log("end of process", deletedColor);
        hideFavoriteColorModal();
    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div>
                    <div>
                        <button onClick={()=> hideFavoriteColorModal()}>
                            Close
                            </button>
                    </div>
                    <div
                        className='colorbox'
                        style={{
                            backgroundColor: `${color.name.closest_named_hex}`
                        }}>
                        {color.name.value}

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
                    <div>
                        <form action="/color/">
                            <button>Generate a Scheme for this Color</button>
                        </form>
                    </div>
                    <div>
                        <button onClick={()=> handleClickDelete(color)}>Delete</button>
                    </div>
                </div>
            </section>
        </div>
    );
}