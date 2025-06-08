import { useLoaderData } from 'react-router';
import { useState } from 'react';

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const { _id, title, photo, ingredients, instruction, time, cuisine, categories, likeCount: initialLikeCount } = recipe;

  const [likeCount, setLikeCount] = useState(initialLikeCount || 0);

  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/recipes/${_id}/like`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        setLikeCount(prev => prev + 1);
      }
    } catch (err) {
      console.error("Like error:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <img src={photo} alt={title} className="w-full h-64 object-cover rounded-xl mb-4" />
      <h2 className="text-3xl ml-72 font-bold text-emerald-600 mb-7">{title}</h2>

      <p className="text-gray-600 text-sm mb-5"><strong>Cuisine:</strong> {cuisine}</p>
      <p className="text-gray-600 text-sm mb-5"><strong>Categories:</strong> {categories}</p>
      <p className="text-gray-600 text-sm mb-5"><strong>Cook Time:</strong> {time} min</p>
      <p className="text-gray-600 text-sm mb-5"><strong>Ingredient:</strong> {ingredients}</p>
      <p className="text-gray-800 mt-4">{instruction}</p>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-emerald-700 font-semibold text-lg">
          {likeCount} people interested in this recipe
        </p>
        <button
          onClick={handleLike}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
        >
          👍 Like
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
