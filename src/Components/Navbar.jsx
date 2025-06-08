import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Firebase/AuthProvider";
import ThemeToggleButton from "./ThemeToggleButton";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logOut().then(() => {
            console.log("Logged out");
        });
    };

    const links = (
        <>
            <li className="m-4">
                <NavLink to="/" className="hover:text-lime-900 transition">Home</NavLink>
            </li>
            <li className="m-4">
                <NavLink to="/allRecipe" className="hover:text-lime-900 transition">All Recipe</NavLink>
            </li>
            <li className="m-4">
                <NavLink to="/addrecipe" className="hover:text-lime-900 transition">Add Recipe</NavLink>
            </li>
            <li className="m-4">
                <NavLink to="/my-recipes" className="hover:text-lime-900 transition">My Recipe</NavLink>
            </li>
        </>
    );

    return (
        <nav className="bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 shadow-lg px-6 py-4 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-extrabold tracking-wide">
                    🍴 CraveCraft
                </NavLink>

                {/* Desktop Links */}
                <ul className="hidden lg:flex space-x-8 font-semibold">{links}</ul>

                {/* User Avatar or Login/Register */}
                <div className="hidden lg:flex items-center space-x-4">
                    {user ? (
                        <div
                            className="relative"
                            onMouseEnter={() => setIsMenuOpen(true)}
                        // onMouseLeave={() => setIsMenuOpen(false)}
                        >
                            <img
                                src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                                alt="avatar"
                                className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-white"
                            />
                            {isMenuOpen && (
                                <div className="absolute right-0 top-12 bg-white text-gray-800 rounded shadow-lg w-48 p-3 z-50">
                                    <p className="font-semibold">{user.displayName || "No Name"}</p>
                                    <button
                                        onClick={handleLogout}
                                        className="mt-2 w-full text-left text-red-600 hover:underline"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className="px-5 py-2 rounded-full font-semibold bg-blue-300 text-white shadow-lg hover:shadow-emerald-400 hover:scale-105 transition"
                            >
                                Login
                            </NavLink>
                            <div className="flex items-center gap-4">
                                {/* other nav items */}
                                <ThemeToggleButton />
                            </div>
                            <NavLink
                                to="/register"
                                className="px-5 py-2 rounded-full font-semibold bg-white text-green-700 border-2 border-green-700 hover:bg-green-700 hover:text-white hover:scale-105 transition"
                            >
                                Register
                            </NavLink>
                        </>
                    )}
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded hover:bg-lime-400 transition"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="lg:hidden bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 text-white px-6 py-4 space-y-4 font-semibold">
                    {links}
                    {user ? (
                        <li className="flex flex-col gap-2">
                            <span className="font-semibold">{user.displayName}</span>
                            <button
                                onClick={handleLogout}
                                className="text-red-600 hover:underline"
                            >
                                Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink
                                    to="/login"
                                    className="block px-4 py-2 border border-white rounded hover:bg-white hover:text-green-700 transition font-semibold"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className="block px-4 py-2 bg-white text-green-700 rounded hover:bg-lime-200 transition font-semibold"
                                >
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
