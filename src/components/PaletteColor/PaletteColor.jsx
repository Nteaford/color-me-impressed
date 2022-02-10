import './PaletteColor.css';

export default function PaletteColor({color}) {
    return(
        <div
        className='colorbox' 
        // onClick={() => showFavoriteColorModal(color)}
        style={{
        background: `${color.hex.value}`
        }}
    >
        <p>{color.hex.value}</p>
    </div> 
 );
}