import "./NavBar.css";
import {Link} from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return(
            <nav className="navbar navbar-dark bg-dark fixed-top"> 
                <Link className="navbuttons" to="/colors"> Colors and Color Schemes </Link>
                &nbsp; | &nbsp;
                <Link className="navbuttons" to="favorites"> My Favorites </Link>
                &nbsp; | &nbsp;
                <div className="navbuttons">
                <p className="navwelcome">Welcome {user.name}! </p>
                &nbsp;
                <Link className="navbuttons"  onClick={handleLogOut} to=""> Log Out </Link>
                    
                </div>
            </nav>
    )

}