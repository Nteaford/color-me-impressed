import './FavoriteColorsContainer.css'
import FavoriteColor from '../FavoriteColor/FavoriteColor';

export default function FavoriteColorsContainer({favoriteColors}) {



return(

<div className="FCC">
            {favoriteColors.map((color, idx) => <FavoriteColor color={color} key={idx}  />)}
          </div>
)

}




