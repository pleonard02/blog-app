import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function NavBar() {

    const {isAuthenticated, logout} = useAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate("/");
    };

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `rounded-lg px-4 py-2 font-semibold transition ${
            isActive
            ? "bg-[#bb8588] text-[#efebce]"
            : "text-[#5f5e49] hover:bg-[#d6ce93]"
        }`;

    return (
        <nav className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-[#d6ce93] bg-[#efebce] p-2 shadow-md">
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
                        className="rounded-lg bg-[#a3a380] px-4 py-2 font-semibold text-white transition hover:bg-[#bb8588]"
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