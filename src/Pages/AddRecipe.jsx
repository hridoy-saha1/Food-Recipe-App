import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/AuthProvider'; // adjust the path if needed

const AddRecipe = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !user.email) {
      Swal.fire({
        title: "You must be logged in to add a recipe",
        icon: "error",
      });
      return;
    }

    const form = e.target;

    // Basic fields
    const title = form.title.value;
    const photo = form.photo.value;
    const ingredients = form.ingredients.value;
    const instruction = form.instruction.value;
    const time = form.time.value;
    const cuisine = form.cuisine.value;

    // Get checked categories
    const categories = Array.from(
      form.querySelectorAll('input[name="categories"]:checked')
    ).map((checkbox) => checkbox.value);

    const recipe = {
      title,
      photo,
      ingredients,
      instruction,
      time: parseInt(time),
      cuisine,
      categories,
      likeCount: 0,
      userEmail: user.email, // ✅ This is critical
    };

    // Submit to server
    fetch('https://recipe-database-server.vercel.app/recipes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            title: 'Recipe Added Successfully!',
            icon: 'success',
          });
          form.reset();
        } else {
          Swal.fire({
            title: 'Failed to add recipe',
            icon: 'error',
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: 'Network error',
          icon: 'error',
        });
      });
  };

  return (
   <>
   <title>Add Recipe</title>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-8 text-green-700 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Image URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter image URL"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Recipe Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter recipe title"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Ingredients</label>
          <textarea
            rows="4"
            name="ingredients"
            placeholder="List ingredients separated by commas"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            required
          ></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Instructions</label>
          <textarea
            rows="6"
            name="instruction"
            placeholder="Write cooking instructions"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            required
          ></textarea>
        </div>

        {/* Cuisine Type */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Cuisine Type</label>
          <select
            name="cuisine"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          >
            <option value="">Select Cuisine</option>
            <option>Italian</option>
            <option>Bengali</option>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Others</option>
          </select>
        </div>

        {/* Preparation Time */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Preparation Time (minutes)</label>
          <input
            type="number"
            name="time"
            placeholder="e.g., 30"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Categories</label>
          <div className="flex flex-wrap gap-4">
            {[
              "Appetizer",
              "Main Course",
              "Side Dish",
              "Dessert",
              "Fast Food",
              "Snack",
              "Beverage"
            ].map((cat) => (
              <label key={cat} className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span className="text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Like Count */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Like Count</label>
          <input
            type="number"
            name="likeCount"
            value="0"
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded-md px-4 py-2 cursor-not-allowed"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
   </>
  );
};

export default AddRecipe;
