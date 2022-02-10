import './PaletteContainer.css'
import PaletteColor from '../PaletteColor/PaletteColor'

export default function PaletteContainer({ colors }) {


    
    return (
        <div className='PaletteContainer'>
        
         {colors && colors.map((color, idx) => <PaletteColor color={color} key={idx} />)}
        </div>
        
    )
}