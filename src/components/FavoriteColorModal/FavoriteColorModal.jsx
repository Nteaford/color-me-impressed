import { Link } from 'react-router-dom';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';

export default function FavoriteColorModal({ color, hideFavoriteColorModal, showFCM, toggleStale }) {


    const showHideClassName = showFCM ? "modal display-block" : "modal display-none";


    async function handleClickDelete(color) {
        let colorID = color._id;
        const deletedColor = await colorsAPIInternal.deleteColor(colorID);
        hideFavoriteColorModal();
        toggleStale();
    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button className='modal-close' onClick={() => hideFavoriteColorModal()}>
                    X
                </button>
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
                <br />
                <div>
                    <Link to={`/palette/${color.hex.clean}`}>
                        <button className="modal-select"> Generate a Scheme for this Color</button>
                    </Link>
                </div>
                <br />
                <button className="modal-select" onClick={() => handleClickDelete(color)}>Delete</button>
            </section>
        </div >
    );
}