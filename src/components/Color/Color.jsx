import './Color.css';


export default function Color({color}) {
 
    return(
    <div 
        className='colorbox' 
        style={{
        backgroundColor: `${color.name.closest_named_hex}`
        }}
    >
        <p>{color.name.value}</p>
    </div> 
 );
}
