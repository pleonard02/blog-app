import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { AuthContext } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import NotFoundPage from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NavBar from "./components/NavBar";
import recipeBlogLogo from "./assets/recipe_blog_logo.png";

function App() {
    const { isAuthenticated, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <header>
                <div className="flex flex-row items-end gap-3 px-6 py-4">
                    <img
                        src={recipeBlogLogo}
                        alt=""
                        className="h-24 w-24 object-contain"
                    />

                    <h2 className="m-0 pb-1 text-4xl leading-none font-[Homemade_Apple] font-medium text-[#a3a380]">
                        Tl;dr Kitchen
                    </h2>
                </div>

                <NavBar />
            </header>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blogs/:slug" element={<BlogPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route
                    path="/admin"
                    element={
                        isAuthenticated ? (
                            <AdminPage />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />

                {/* Catch-all route for pages that do not exist */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;