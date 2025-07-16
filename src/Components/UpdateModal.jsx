import { useState } from 'react';
import Swal from 'sweetalert2';

const UpdateModal = ({ recipe, onClose, onUpdated }) => {
    const [formData, setFormData] = useState({ ...recipe });
    const { _id } = recipe;
    console.log(_id)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { _id, ...dataToUpdate } = formData; // remove _id

        fetch(`https://food-request.vercel.app/Food/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(dataToUpdate) // send cleaned data
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // onUpdated(); // optional: trigger parent refresh
                    onClose();   // close modal
                }
            });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded w-full max-w-xl relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-xl">×</button>
                <h2 className="text-xl font-semibold mb-4">Edit Recipe</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Title"
                    />
                    <input
                        name="photo"
                        value={formData.photo}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Photo URL"
                    />
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Ingredients"
                    />
                    <textarea
                        name="instruction"
                        value={formData.instruction}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Instructions"
                    />
                    <input
                        name="time"
                        type="number"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Time (minutes)"
                    />
                    <input
                        name="cuisine"
                        value={formData.cuisine}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Cuisine"
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;
