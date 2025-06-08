import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import MyRecipeCard from '../Components/MyRecipeCard';
import UpdateModal from '../Components/UpdateModal';

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-recipes?email=${user.email}`)
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

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <MyRecipeCard
            key={recipe._id}
            recipe={recipe}
            onEdit={handleEditClick}
            onDelete={(deletedId) =>
              setRecipes((prev) => prev.filter((r) => r._id !== deletedId))
            }
          />
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">
          You haven't added any recipes yet.
        </p>
      )}

      {showModal && selectedRecipe && (
        <UpdateModal
          recipe={selectedRecipe}
          onClose={handleModalClose}
          onUpdated={handleRecipeUpdated}
        />
      )}
    </div>
  );
};

export default MyRecipes;
