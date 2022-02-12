import './GeneratedPaletteContainer.css';
import PaletteColor from '../PaletteColor/PaletteColor';

export default function GeneratedPaletteContainer({palette}) {
    
    return (

        <div className='PaletteContainer'>
         {palette.colors && palette.colors.map((color, idx) => <PaletteColor color={color} key={idx} />)}
        </div>
    )
}