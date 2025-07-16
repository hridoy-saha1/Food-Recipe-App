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

  const formattedExpireDate = expireDate
    ? new Date(expireDate).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : 'N/A';

  const badgeColor =
    status === 'available'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 text-base max-w-md w-full mx-auto overflow-hidden">
      <div className="flex items-center gap-2 p-4">
        <img
          src={foodImage}
          alt={foodName}
          className="w-28 h-28 rounded-2xl object-cover"
        />

        <div className="flex-1 space-y-1">
          <h3 className="font-semibold text-gray-900 text-lg truncate">{foodName}</h3>
          <p className="text-gray-700 text-sm">📍 <span className="font-medium">{location}</span></p>
          <p className="text-gray-700 text-sm">🍽️ <span className="font-medium">{quantity}</span></p>
          <p className="text-gray-500 text-sm">⏳ <span className="font-medium">{formattedExpireDate}</span></p>
        </div>
      </div>

      <div className="px-4 pb-4 flex justify-between items-center">
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${badgeColor}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <Link
          to={`/recipeDetails/${_id}`}
          className="text-emerald-600 text-sm font-medium hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
