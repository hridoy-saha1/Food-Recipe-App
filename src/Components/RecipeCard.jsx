import React from 'react';
import { Link } from 'react-router';

const RecipeCard = ({ recipes }) => {
  const {
    _id,
    foodName,
    foodImage,
    location,
    quantity,
    status,
    expireDate,
  } = recipes;

  // Optional: format date nicely
  const formattedExpireDate = expireDate
    ? new Date(expireDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'N/A';

  // Set badge color based on status
  const statusColor =
    status === 'available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform transition-transform hover:scale-105 duration-300 relative">
      {/* ✅ Food Image */}
      <img
        src={foodImage || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={foodName}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col gap-2">
        {/* ✅ Food Name */}
        <h3 className="text-lg font-bold text-center text-green-700 truncate">
          {foodName}
        </h3>

        {/* ✅ Info */}
        <div className="text-sm text-gray-600 space-y-1 px-1">
          <p>
            📍 <span className="font-medium">Location:</span>{' '}
            {location || 'N/A'}
          </p>
          <p>
            🍽️ <span className="font-medium">Quantity:</span>{' '}
            {quantity || 0}
          </p>
          <p>
            ⏳ <span className="font-medium">Expires:</span>{' '}
            {formattedExpireDate}
          </p>
        </div>

        {/* ✅ Status Badge */}
        <div className="mt-2">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusColor}`}
          >
            {status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Unknown'}
          </span>
        </div>

        {/* ✅ View Details Button */}
        <Link
          to={`/recipeDetails/${_id}`}
          className="mt-4 inline-block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
