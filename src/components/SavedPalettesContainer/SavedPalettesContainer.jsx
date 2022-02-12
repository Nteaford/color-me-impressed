import './SavedPalettesContainer.css'
import PaletteColor from '../PaletteColor/PaletteColor';

export default function SavedPalettesContainer({ palette, showFavoritePaletteModal }) {

    return (
        <div onClick={() => showFavoritePaletteModal(palette)}>

            <div className='PaletteContainer'>
                {palette && palette.colors.map((color, idx) => <PaletteColor color={color} key={idx} />)}
            </div>
        </div>
    )
}