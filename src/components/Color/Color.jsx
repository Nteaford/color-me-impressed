import './Color.css';


export default function Color({color, handleColorSelect}) {
 
    return(
    <div 
        className='colorbox' 
        onClick={()=> handleColorSelect(color)}
        style={{
        backgroundColor: `${color.name.closest_named_hex}`
        }}
    >
        <p>{color.name.value}</p>
    </div> 
 );
}
