import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Firebase/AuthProvider";
import { Tooltip } from "react-tooltip";
import photo from "../assets/photo/logo.jpg"

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, [theme]);

  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

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
        <NavLink to="/allRecipe" className="hover:text-lime-900 transition">Available Food</NavLink>
      </li>
      <li className="m-4">
        <NavLink to="/addrecipe" className="hover:text-lime-900 transition">Add Food</NavLink>
      </li>
      <li className="m-4">
        <NavLink to="/my-recipes" className="hover:text-lime-900 transition">My Food</NavLink>
      </li>
      <li className="m-4">
        <NavLink to="/food-request" >My Food Request</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 shadow-lg px-6 py-4 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
       
        <div  className="text-2xl flex w-10 h-10 gap-4 font-extrabold tracking-wide">
         <img  src={photo} alt="" />
           <p> CraveCraft</p>
        </div>

       
        <ul className="hidden lg:flex space-x-8 font-semibold">{links}</ul>

       
        <div className="flex items-center gap-4">
        
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />

          
          {user ? (
            <div>
              <div className="h-10 w-10">
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-white"
                  data-tooltip-id="userTooltip"
                  data-tooltip-place="bottom"
                />
              </div>
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
                className="px-3 py-1 text-sm lg:px-5 lg:py-2 rounded-full font-semibold bg-blue-300 text-white shadow hover:scale-105 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-3 py-1 text-sm lg:px-5 lg:py-2 rounded-full font-semibold bg-white text-green-700 border-2 border-green-700 hover:bg-green-700 hover:text-white hover:scale-105 transition"
              >
                Register
              </NavLink>
            </>
          )}

          
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
