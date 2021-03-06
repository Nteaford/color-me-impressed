import './FavoritePaletteModal.css';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';

export default function FavoritePaletteModal({ palette, hideFavoritePaletteModal, showFPM, toggleStale }) {
    const showHideClassName = showFPM ? "modal display-block" : "modal display-none";

    async function handleClickDelete(palette) {
        let paletteID = palette._id;
        console.log(paletteID);
        const deletedPalette = await colorsAPIInternal.deletePaletteFromFavorites(paletteID);
        hideFavoritePaletteModal();
        toggleStale();
    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">

                <button className='modal-close' onClick={() => hideFavoritePaletteModal()}>
                    X
                </button>

                <br />

                <div className='colorscontainer'>
                    {palette.colors && palette.colors.map(color =>
                        <div>
                            <div className='palettecolor'>
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
                            </div>
                        </div>
                    )}
                </div>
                <br />
                <div>
                    <button onClick={() => handleClickDelete(palette)}>Delete</button>
                </div>
            </section>
        </div >
    );
}