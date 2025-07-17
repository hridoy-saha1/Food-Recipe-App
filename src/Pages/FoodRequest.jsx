import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

const FoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.email) {
      const token = localStorage.getItem('token');

      fetch(`https://food-request.vercel.app/my-requests?email=${user.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // ✅ Include JWT in header
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            throw new Error('Unauthorized access');
          }
          return res.json();
        })
        .then((data) => {
          setRequests(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching requests:', err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        📨 My Requested Foods
      </h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't requested any food yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {requests.map((food) => (
            <div
              key={food._id}
              className="bg-white rounded-lg shadow p-4 space-y-2"
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold text-emerald-700">
                {food.foodName}
              </h3>

              <p className="text-sm text-gray-600">
                <strong>Donor:</strong> {food.donorName}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Pickup:</strong> {food.location}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Expire:</strong>{' '}
                {new Date(food.expireDate).toLocaleString()}
              </p>

              <p className="text-sm text-gray-600">
                <strong>Requested:</strong>{' '}
                {new Date(food.requestDate).toLocaleString()}
              </p>

              <p className="text-sm text-gray-600">
                <strong>Status:</strong>{' '}
                <span className="text-orange-600 font-semibold">
                  {food.status}
                </span>
              </p>

              {food.notes && (
                <p className="text-xs text-gray-500">
                  <strong>Notes:</strong> {food.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodRequest;
