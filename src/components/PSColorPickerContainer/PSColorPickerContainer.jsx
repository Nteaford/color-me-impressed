import './PSColorPickerContainer.css';
import Color from '../Color/Color';


export default function PSColorPickerContainer ({randColors}) {
   const colors = randColors.map((color, idx) => <Color color={color} key ={idx}/> );
    
    return (
        <div>
            <br />
            <br />
            <h1>Check out these Colors!</h1>
            <hr />
            <div className="PSCPC">
                {colors}
            </div>
        </div>
    );
}