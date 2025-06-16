import React from 'react';
import { Link } from 'react-router';
import photo from '../assets/astro.jpg'
import Lottie from 'lottie-react';
import cookingAnimation from "../assets/Animation/Cooking.json"


const Error = () => {
  return (
    <>
      <title>Error</title>
      <div>

        <Lottie
          animationData={cookingAnimation}
          loop={true}
          autoplay={true}
          style={{ height: 250 }}
        />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 p-6">
          <div className="relative mb-8">
            <img
              src={photo}
              alt="Floating"
              className="w-48 h-48 animate-floating"
            />
          </div>
          <h1 className="text-7xl font-extrabold mb-4">404</h1>
          <p className="text-xl mb-6">Oops! Page not found.</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Go Back Home
          </Link>
        </div>


      </div>
    </>
  );
};

export default Error;