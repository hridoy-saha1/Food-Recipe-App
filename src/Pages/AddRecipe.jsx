import React, { useContext, useRef } from 'react';
import Swal from 'sweetalert2';

import { AuthContext } from '../Firebase/AuthProvider';
import { useMutation } from '@tanstack/react-query';

const addFood = async (foodData) => {
  const token=localStorage.getItem('token')
  const response = await fetch('https://food-request.vercel.app/Food', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
       Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(foodData),
  });

  if (!response.ok) {
    throw new Error('Failed to add recipe');
  }

  return response.json();
};

const AddRecipe = () => {
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);

  const mutation = useMutation({
    mutationFn: addFood,
    onSuccess: () => {
      Swal.fire({
        title: 'Recipe (Food) Added Successfully!',
        icon: 'success',
      });
      if (formRef.current) formRef.current.reset();
    },
    onError: (error) => {
      Swal.fire({
        title: 'Failed to add recipe',
        icon: 'error',
        text: error.message,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !user.email) {
      Swal.fire({
        title: 'You must be logged in to add a recipe',
        icon: 'error',
      });
      return;
    }

    const form = e.target;
    const foodData = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      quantity: parseInt(form.quantity.value),
      location: form.location.value,
      expireDate: form.expireDate.value,
      notes: form.notes.value,
      donorName: user.displayName,
      donorEmail: user.email,
      donorImage: user.photoURL,
      userEmail: user.email,
      status: 'available',
      createdAt: new Date().toISOString(),
    };

    mutation.mutate(foodData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Add a Food</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Food Name</label>
          <input
            type="text"
            name="foodName"
            placeholder="Enter food name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="foodImage"
            placeholder="Enter image URL"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="e.g., 10"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Pickup Location</label>
          <input
            type="text"
            name="location"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Expire Date & Time</label>
          <input
            type="datetime-local"
            name="expireDate"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Additional Notes</label>
          <textarea
            name="notes"
            rows="3"
            className="w-full border rounded px-3 py-2"
            placeholder="e.g., Spicy, Halal, Vegan"
          />
        </div>

        <div className="flex items-center gap-4">
          <img src={user?.photoURL} alt="User" className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-sm font-medium">{user?.displayName}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={mutation.isLoading}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
          >
            {mutation.isLoading ? 'Submitting...' : 'Submit Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
