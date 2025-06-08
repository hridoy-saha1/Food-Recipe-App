import React from 'react';
import { Link } from 'react-router';

const AllCard = ({recipe}) => {
    const {title,photo,cuisine,time,categories,_id}=recipe;
     
    return (
       
      

     
        <div className="bg-white flex-col w-full justify-items-center items-center
         rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
          <img
            src={photo}
            alt="Recipe"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h3>
          
            <p className="text-sm my-4   font-bold text-gray-600">🔥 Category: {categories}</p>
          <p className="text-sm mb-4 font-bold text-gray-600"> Cuisine: {cuisine}</p>
          
         <div className='flex justify-around gap-2' >
             <p className="text-sm mr-4 font-bold text-gray-600 mb-4">Cook:⏱️{time}Min </p>
          <Link
            to={`/recipeDetails/${_id}`}
            className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            See Details
          </Link>
         </div>
        </div>
       
      
  
    );
};

export default AllCard;