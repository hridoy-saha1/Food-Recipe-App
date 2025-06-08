import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-lime-100 via-green-100 to-emerald-200 text-gray-800 mt-16 shadow-xl pt-14 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Logo and About */}
        <div>
          <h2 className="text-4xl font-extrabold text-green-700 mb-3 flex items-center gap-2">
            <span role="img" aria-label="spoon">🍴</span> CraveCraft
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Explore flavors, share your secret recipes, and discover global cuisines — all in one place.
          </p>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-800">📞 Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:hello@cravecraft.com" className="hover:underline">hello@cravecraft.com</a></li>
            <li>Phone: +880 1234 567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-800">🌐 Connect With Us</h3>
          <div className="flex space-x-5 text-2xl text-green-700">
            <a href="#" aria-label="Facebook" className="hover:text-green-900 transition-all duration-200">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-900 transition-all duration-200">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-green-900 transition-all duration-200">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Divider & Bottom Text */}
      <div className="mt-10 border-t border-green-300 pt-5 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} <span className="font-bold text-green-800">CraveCraft</span> — Made with 💚 by Foodies, for Foodies.
      </div>
    </footer>
  );
};

export default Footer;
