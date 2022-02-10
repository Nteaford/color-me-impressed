import './PaletteColor.css';

export default function PaletteColor({color}) {
    return(
        <div
        className='colorbox' 
        // onClick={() => showFavoriteColorModal(color)}
        style={{
        background: `linear-gradient(to bottom, ${color.name.closest_named_hex} 50%, ${color.hex.value} 50%)`
        }}
    >
        <p className='top'>{color.name.value}</p>
        <p className='bottom'>{color.hex.value}</p>
    </div> 
 );
}