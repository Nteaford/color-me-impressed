import './FavoriteColor.css';


export default function FavoriteColor({color, handleFavoriteSelect}) {
 
    return(
    <div 
        className='colorbox' 
        onClick={()=> handleFavoriteSelect(color)}
        style={{
        backgroundColor: `${color.name.closest_named_hex}`
        }}
    >
        <p>{color.name.value}</p>
    </div> 
 );
}
