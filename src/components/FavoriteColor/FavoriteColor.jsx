import './FavoriteColor.css';


export default function FavoriteColor({color, showFavoriteColorModal}) {
 
    return(
    <div 
        className='colorbox' 
        onClick={() => showFavoriteColorModal(color)}
        style={{
        backgroundColor: `${color.name.closest_named_hex}`
        }}
    >
        <p>{color.name.value}</p>
    </div> 
 );
}
