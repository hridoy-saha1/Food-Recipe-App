import Swal from "sweetalert2";

const MyRecipeCard = ({ recipe, onEdit, onDelete }) => {
    const handleDelete = () => {


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
                fetch(`https://recipe-database-server.vercel.app/recipes/${recipe._id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    onDelete(recipe._id);
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                }
            });
            }
        });
        
    };

    return (
        <div className="bg-white shadow p-4 rounded">
            <img src={recipe.photo} alt={recipe.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{recipe.cuisine}</p>
            <div className="flex justify-between mt-4">
                <button onClick={() => onEdit(recipe)} className="text-yellow-600">Edit</button>
                <button onClick={handleDelete} className="text-red-600">Delete</button>
            </div>
        </div>
    );
};

export default MyRecipeCard;
