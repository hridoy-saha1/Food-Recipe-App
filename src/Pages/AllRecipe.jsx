import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllCard from '../Components/AllCard';

const AllRecipe = () => {
  const allRecipes = useLoaderData();

  const [sortOrder, setSortOrder] = useState('asc');
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Filter + sort recipes
  const availableRecipes = allRecipes
    .filter(recipe =>
      recipe.status === 'available' &&
      recipe.foodName.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.expireDate);
      const dateB = new Date(b.expireDate);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <>
      <title>All Recipe</title>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          🍽️ All Available Food
        </h2>

       
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
         
          <input
            type="text"
            placeholder="Search by food name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full md:w-1/3"
          />

          
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort by Expire Date:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          
          <button
            onClick={() => setIsTwoColumn(prev => !prev)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {isTwoColumn ? '🔳 3 Column Layout' : '🔲 2 Column Layout'}
          </button>
        </div>

      
        <div
          className={`grid gap-6 ${
            isTwoColumn
              ? 'grid-cols-1 sm:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {availableRecipes.length > 0 ? (
            availableRecipes.map((recipe) => (
              <AllCard key={recipe._id} recipe={recipe} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No food found matching your search.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AllRecipe;
