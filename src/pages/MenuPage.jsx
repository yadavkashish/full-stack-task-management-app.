//menu
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [itemAdded, setItemAdded] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setItemAdded(item.id);
    setTimeout(() => setItemAdded(null), 1500);
  };

  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`container mx-auto p-8 min-h-screen ${
        filteredMenuItems.length === 0
          ? 'bg-white'
          : 'bg-cover bg-center bg-no-repeat'
      }`}
      style={{
        backgroundImage:
          filteredMenuItems.length > 0
            ? 'url("https://th.bing.com/th/id/OIP.cXBui69qMnZAYj3duBjNcAHaNK?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7")'
            
            : 'none',
      }}
    >
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-md shadow-md flex justify-between items-center mb-6 p-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-md">
          Explore Our Menu
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for dishes"
              value={searchQuery}
              onChange={handleSearch}
              className="p-2 border border-gray-300 rounded w-64 pl-10 focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition duration-200"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
              />
            </svg>
          </div>
          <div className="relative">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => navigate('/cart')}
            >
              Cart ({useSelector((state) => state.cart.length)})
            </button>
          </div>
        </div>
      </header>

      {/* Menu Items Section */}
      {filteredMenuItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <img
            src="https://i.pinimg.com/originals/f1/f1/f7/f1f1f720f39ff4b8a53b7cfcb29d7509.gif"
            alt="Dish not found"
            className="w-64 h-64 object-cover mb-4"
          />
          <p className="text-2xl font-semibold text-gray-600">Dish not found !!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredMenuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 border border-gray-200 rounded shadow-lg transform transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-lg font-bold mb-4">₹{item.price.toFixed(2)}</p>
              <button
                className={`relative flex items-center justify-center px-6 py-3 rounded-lg text-white w-full font-bold transition-transform transform ${
                  item.inCart
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 hover:scale-105'
                } ${itemAdded === item.id ? 'animate-bounce' : ''}`}
                onClick={() => handleAddToCart(item)}
                disabled={item.inCart}
              >
                {item.inCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage;


