import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function NavBar() {

    const {isAuthenticated, logout} = useAuth();
    const navigate = useNavigate();

    const onLogout = async () => {
        await logout();
        navigate("/");
    };

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `w-full rounded-lg px-4 py-2 text-center font-semibold transition sm:w-auto ${
        isActive
            ? "bg-[#bb8588] text-[#efebce]"
            : "bg-[#fffdf1]/70 text-[#5f5e49] hover:bg-[#d6ce93]"
    }`;

    return (
        <nav
            className={`mx-auto grid w-[calc(100%-1.5rem)] gap-2 rounded-2xl border-2 border-[#d6ce93] bg-[#efebce] p-2 shadow-md sm:flex sm:w-fit sm:flex-wrap ${
                isAuthenticated ? "grid-cols-2" : "grid-cols-3"
            }`}
        >
            <NavLink to="/" className={navLinkClasses}>
                Home
            </NavLink>

            <NavLink to="/blogs" className={navLinkClasses}>
                Recipes
            </NavLink>

            {isAuthenticated ? (
                <>
                    <NavLink to="/admin" className={navLinkClasses}>
                        Admin
                    </NavLink>

                    <button
                        type="button"
                        onClick={onLogout}
                        className="w-full rounded-lg bg-[#a3a380] px-4 py-2 font-semibold text-white transition hover:bg-[#bb8588] sm:w-auto"
                    >
                        Sign Out
                    </button>
                </>
            ) : (
                <NavLink to="/login" className={navLinkClasses}>
                    Login
                </NavLink>
            )}
        </nav>
    );
}

export default NavBar;