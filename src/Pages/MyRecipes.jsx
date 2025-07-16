import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import UpdateModal from '../Components/UpdateModal';
import Swal from 'sweetalert2';

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://food-request.vercel.app/my-Food?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setRecipes(data);
        })
        .catch(err => {
          console.error("Failed to fetch recipes", err);
        });
    }
  }, [user]);

  const handleEditClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  const handleRecipeUpdated = (updatedRecipe) => {
    setRecipes((prev) =>
      prev.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
    handleModalClose();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://food-request.vercel.app/Food/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setRecipes((prev) => prev.filter((r) => r._id !== id));
              Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <title>My Recipes</title>
      <div className="p-6 overflow-x-auto">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">🍽️ Manage Your Foods</h2>
        <table className="min-w-full bg-white border rounded-lg shadow-sm">
          <thead>
            <tr className="bg-emerald-100 text-sm text-gray-700">
              <th className="py-3 px-4 border">Image</th>
              <th className="py-3 px-4 border">Food Name</th>
            
              <th className="py-3 px-4 border">Location</th>
              <th className="py-3 px-4 border">Quantity</th>
              <th className="py-3 px-4 border">Expire Date</th>
              <th className="py-3 px-4 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <tr key={recipe._id} className="text-sm text-gray-800">
                  <td className="py-2 px-4 border">
                    <img
                      src={recipe.foodImage}
                      alt={recipe.foodName}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border">{recipe.foodName}</td>
                  
                  <td className="py-2 px-4 border">{recipe.location || '-'}</td>
                  <td className="py-2 px-4 border">{recipe.quantity || '-'}</td>
                  <td className="py-2 px-4 border">
                    {recipe.expireDate
                      ? new Date(recipe.expireDate).toLocaleDateString()
                      : '-'}
                  </td>
                  <td className="py-2 px-4 border text-center space-x-2">
                    <button
                      onClick={() => handleEditClick(recipe)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(recipe._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-6">
                  You haven't added any recipes yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && selectedRecipe && (
        <UpdateModal
          recipe={selectedRecipe}
          onClose={handleModalClose}
          onUpdated={handleRecipeUpdated}
        />
      )}
    </>
  );
};

export default MyRecipes;
