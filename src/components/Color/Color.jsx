import './Color.css';


export default function Color({color, handleColorSelect}) {
 
    return(
    <div 
        className='colorbox' 
        onClick={()=> handleColorSelect(color)}
        style={{
        backgroundColor: `${color.hex.value}`
        }}
    >
        <p>{color.hex.value}</p>
    </div> 
 );
}
