import './SelectedFavoritesContainer';
import Color from '../Color/Color';

export default function selectedFavoriesContainer({selected, handleColorSelect}) {



    return(
       <div className='SelectedFavoritesContainer'>
        <br />
        <h1> Selected Favorites</h1>
        <div className="PSCPC">
            {selected.map((color, idx) => <Color color={color} key={idx} handleColorSelect={handleColorSelect} />)}
          </div>

        <button
        onClick={()=> alert('click')}
        > 
        Add Favorites to my Account</button>

       </div>
    )
} 