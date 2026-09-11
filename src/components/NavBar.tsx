import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function NavBar() {

    const {isAuthenticated, logout} = useAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div>
            <nav>
                <NavLink 
                    to="/"
                    style={({ isActive }) => ({color:  isActive ? "red" : "purple"})}
                >
                Home
                </NavLink>
                <NavLink 
                    to="/blogs"
                    style={({ isActive}) => ({color: isActive ? "red" : "purple"})}
                >
                    Blog
                </NavLink>

                {isAuthenticated ? <button onClick={onLogout}>Sign Out</button>
                : <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    )
}

export default NavBar;