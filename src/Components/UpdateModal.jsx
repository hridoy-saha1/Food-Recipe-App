import { useState } from 'react';
import Swal from 'sweetalert2';

const UpdateModal = ({ recipe, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({ ...recipe });
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { _id, ...dataToUpdate } = formData;

    fetch(`https://food-request.vercel.app/Food/${_id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(dataToUpdate)
    })
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          onUpdated(formData);
        }
        onClose();
      })
      .catch(err => {
        Swal.fire("Error", "Update failed", "error");
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">×</button>
        <h2 className="text-xl font-semibold mb-4">Edit Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="foodName" value={formData.foodName} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Food Name" />
          <input name="foodImage" value={formData.foodImage} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Image URL" />
          <input name="location" value={formData.location} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Location" />
          <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Quantity" />
          <input name="expireDate" value={formData.expireDate} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Expire Date" />
          {/* Add more fields as needed */}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
