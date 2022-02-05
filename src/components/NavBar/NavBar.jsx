import "./NavBar.css";
import {Link} from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return(
            <nav> 
                <Link to="/colors"> Colors and Color Schemes </Link>
                &nbsp; | &nbsp;
                <Link to="favorites"> My Favorites </Link>
                &nbsp; | &nbsp;
                Welcome {user.name}!
                &nbsp;
                <Link onClick={handleLogOut} to=""> Log Out </Link>
            </nav>
    )

}