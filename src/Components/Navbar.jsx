import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router"; 
import { AuthContext } from "../Firebase/AuthProvider";
import { Tooltip } from "react-tooltip";
import photo from "../assets/photo/logo.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Theme State
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut().then(() => {
      console.log("Logged out");
    });
  };

  // Navbar links based on login status
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-lime-900 transition">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableFood" className="hover:text-lime-900 transition">Available Food</NavLink>
      </li>
      <li>
        <NavLink to="/menuContent" className="hover:text-lime-900 transition">MenuContent</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/addFood" className="hover:text-lime-900 transition">Add Food</NavLink>
          </li>
          <li>
            <NavLink to="/my-recipes" className="hover:text-lime-900 transition">My Food</NavLink>
          </li>
          <li>
            <NavLink to="/food-request" className="hover:text-lime-900 transition">My Food Request</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 shadow-lg px-6 py-4 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 font-extrabold text-xl tracking-wide">
          <img src={photo} alt="logo" className="w-10 h-10 rounded-full" />
          <p>CraveCraft</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-semibold">{links}</ul>

        {/* Right side items */}
        <div className="flex items-center gap-4">
          {/* Theme Switch */}
          <input
            type="checkbox"
            className="toggle theme-controller"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />

          {/* Auth Buttons / User Profile */}
          {user ? (
            <div>
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="avatar"
                className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-white"
                data-tooltip-id="userTooltip"
              />
              <Tooltip
                id="userTooltip"
                clickable
                className="z-50 bg-white text-black px-4 py-2 rounded shadow-lg"
              >
                <div className="text-center">
                  <p className="font-semibold">{user.displayName || "No Name"}</p>
                  <button
                    onClick={handleLogout}
                    className="mt-2 text-red-600 hover:underline"
                  >
                    Logout
                  </button>
                </div>
              </Tooltip>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-full font-semibold bg-blue-300 text-white shadow hover:scale-105 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 rounded-full font-semibold bg-white text-green-700 border-2 border-green-700 hover:bg-green-700 hover:text-white hover:scale-105 transition"
              >
                Register
              </NavLink>
            </>
          )}

          {/* Mobile Menu Toggle */}
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 text-white px-6 py-4 space-y-4 font-semibold">
          {links}
          {!user && (
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
