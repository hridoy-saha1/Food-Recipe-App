import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../Components/RecipeCard';
import BannerSlider from '../Components/BannerSlider';
import ExtraSections from '../Components/ExtraSections';
import { Link } from 'react-router';

const Home = () => {
  const topRecipes = useLoaderData();

  return (

   <>
   <title>Home</title>
    <div className="container mx-auto px-4 py-6">
     
      <BannerSlider />

     
      <h1 className="text-3xl font-bold mb-6 text-center">🔥 Top Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {topRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipes={recipe} />
        ))}
      </div>

      <div className="text-center mb-8">
        <Link to="/allRecipe">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            See All Recipes
          </button>
        </Link>
      </div>

      {/* 💡 Extra Info Section */}
      <ExtraSections />
    </div>
    </>
  );
};

export default Home;
