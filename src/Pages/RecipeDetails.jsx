import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';
import Swal from 'sweetalert2';

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [requestNotes, setRequestNotes] = useState('');

  const {
    _id,
    foodName,
    foodImage,
    ingredients,
    instruction,
    time,
    cuisine,
    categories,
    quantity,
    location,
    expireDate,
    donorName,
    donorEmail
  } = recipe;

  const handleRequest = async () => {
    const requestData = {
      recipeId: _id,
      foodName,
      foodImage,
      donorEmail,
      donorName,
      userEmail: user?.email,
      requestDate: new Date(),
      location,
      expireDate,
      notes: requestNotes,
      status: 'requested',
    };

    try {
      const res = await fetch('http://localhost:3000/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      const updateRes = await fetch(`http://localhost:3000/Food/${_id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'requested' }),
      });

      if (res.ok && updateRes.ok) {
        Swal.fire('Success', 'Recipe requested successfully!', 'success');
        setShowModal(false);
      } else {
        throw new Error();
      }
    } catch (err) {
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">{foodName}</h2>

        <p className="text-gray-600 mb-2">
          <strong>Cuisine:</strong> {cuisine}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Categories:</strong> {categories?.join(', ') || 'N/A'}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Cook Time:</strong> {time} min
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Quantity:</strong> {quantity}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Ingredients:</strong> {ingredients}
        </p>
        <p className="text-gray-800 mt-4 whitespace-pre-line">{instruction}</p>

        <div className="mt-6 text-right">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            📨 Request This Food
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4 relative overflow-y-auto max-h-[90vh]">
            <h3 className="text-xl font-bold text-center text-emerald-600">
              Confirm Food Request
            </h3>

            <input readOnly value={foodName} className="input input-bordered w-full" />

            {/* ✅ Show image instead of link */}
            <img
              src={foodImage}
              alt="Food"
              className="w-full h-48 object-cover rounded"
            />

            <input readOnly value={_id} className="input input-bordered w-full" />
            <input readOnly value={donorEmail || 'N/A'} className="input input-bordered w-full" />
            <input readOnly value={donorName || 'N/A'} className="input input-bordered w-full" />
            <input readOnly value={user?.email || 'N/A'} className="input input-bordered w-full" />
            <input
              readOnly
              value={new Date().toLocaleString()}
              className="input input-bordered w-full"
            />
            <input readOnly value={location || 'N/A'} className="input input-bordered w-full" />
            <input readOnly value={expireDate || 'N/A'} className="input input-bordered w-full" />
            <textarea
              rows="3"
              placeholder="Additional Notes (optional)"
              onChange={(e) => setRequestNotes(e.target.value)}
              className="textarea textarea-bordered w-full"
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={handleRequest}
                className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
              >
                Confirm Request
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
