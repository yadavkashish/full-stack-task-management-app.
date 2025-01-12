// src/components/EditMenuItem.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMenuItem } from '../Redux/slices/menuSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditMenuItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItem = useSelector((state) =>
    state.menu.find((item) => item.id === parseInt(id))
  );

  const [updatedItem, setUpdatedItem] = useState({ name: '', description: '', price: '', image: '' });

  useEffect(() => {
    if (menuItem) {
      setUpdatedItem({
        name: menuItem.name,
        description: menuItem.description,
        price: menuItem.price,
        image: menuItem.image,
      });
    }
  }, [menuItem]);

  const handleUpdate = () => {
    if (updatedItem.name && updatedItem.description && updatedItem.price) {
      dispatch(updateMenuItem({ id: parseInt(id), ...updatedItem }));
      navigate('/menu'); // Redirect to MenuPage after update
    } else {
      alert('Please provide complete details.');
    }
  };

  if (!menuItem) {
    return <div>Item not found!</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Menu Item</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Edit Item</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Item Name"
            className="p-2 border border-gray-300 rounded"
            value={updatedItem.name}
            onChange={(e) => setUpdatedItem({ ...updatedItem, name: e.target.value })}
          />
          <textarea
            placeholder="Description"
            className="p-2 border border-gray-300 rounded"
            value={updatedItem.description}
            onChange={(e) => setUpdatedItem({ ...updatedItem, description: e.target.value })}
          ></textarea>
          <input
            type="number"
            placeholder="Price"
            className="p-2 border border-gray-300 rounded"
            value={updatedItem.price}
            onChange={(e) => setUpdatedItem({ ...updatedItem, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-2 border border-gray-300 rounded"
            value={updatedItem.image}
            onChange={(e) => setUpdatedItem({ ...updatedItem, image: e.target.value })}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded mt-4"
          onClick={handleUpdate}
        >
          Update Item
        </button>
      </div>
    </div>
  );
};

export default EditMenuItem;
