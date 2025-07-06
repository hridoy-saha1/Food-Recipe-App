import React from 'react';
import { Link } from 'react-router';

const AllCard = ({ recipe }) => {
  const {
    foodName,
    foodImage,
    cuisine,
    time,
    categories,
    _id,
    location,
    quantity,
    expireDate
  } = recipe;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-emerald-700 truncate">
          {foodName}
        </h3>

        {categories?.length > 0 && (
          <p className="text-sm text-gray-600 font-medium">
            🍴 <span className="font-semibold">Category:</span>{' '}
            {Array.isArray(categories) ? categories.join(', ') : categories}
          </p>
        )}

        {cuisine && (
          <p className="text-sm text-gray-600 font-medium">
            🌍 <span className="font-semibold">Cuisine:</span> {cuisine}
          </p>
        )}

        {quantity && (
          <p className="text-sm text-gray-600 font-medium">
            📦 <span className="font-semibold">Quantity:</span> {quantity}
          </p>
        )}

        {location && (
          <p className="text-sm text-gray-600 font-medium">
            📍 <span className="font-semibold">Location:</span> {location}
          </p>
        )}

        {expireDate && (
          <p className="text-sm text-gray-600 font-medium">
            ⏳ <span className="font-semibold">Expire Date:</span>{' '}
            {new Date(expireDate).toLocaleDateString()}
          </p>
        )}

        {time && (
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm text-gray-500 font-semibold">
              ⏱️ {time} Min
            </span>

            <Link
              to={`/recipeDetails/${_id}`}
              className="bg-emerald-600 text-white text-sm px-4 py-2 rounded hover:bg-emerald-700 transition"
            >
              See Details
            </Link>
          </div>
        )}

        {!time && (
          <div className="flex justify-end items-center mt-3">
            <Link
              to={`/recipeDetails/${_id}`}
              className="bg-emerald-600 text-white text-sm px-4 py-2 rounded hover:bg-emerald-700 transition"
            >
              See Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCard;
