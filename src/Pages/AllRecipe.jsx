import React from 'react';
import { useLoaderData } from 'react-router';
import AllCard from '../Components/AllCard';

const AllRecipe = () => {
    const recipes=useLoaderData();
    return (
    
     <>
     <title>All Recipe</title>
        <div className="max-w-7xl mx-auto px-4 py-10" >
         <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        🍽️ All Recipes
      </h2>
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
                {
                recipes.map((recipe)=>(<AllCard recipe={recipe} ></AllCard>))
            }
            </div>
        </div>
     
     </>
    );
};

export default AllRecipe;