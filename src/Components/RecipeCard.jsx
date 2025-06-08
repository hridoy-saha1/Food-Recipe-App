import React from 'react';
import { Link } from 'react-router';

const RecipeCard = ({ recipes }) => {
  const { _id, title, photo, cuisine, likeCount } = recipes;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
      <img
        src={photo || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center space-y-2">
        <h3 className="text-xl font-bold text-blue-600">{title}</h3>
        <div className='flex justify-between w-full px-4'>
          <p className="text-sm text-gray-600">
            <strong>Cuisine:</strong> {cuisine}
          </p>
          <p className="text-sm text-gray-600">
            ❤️ <strong>{likeCount || 0}</strong> Likes
          </p>
        </div>
        <Link
          to={`/recipeDetails/${_id}`}
          className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
