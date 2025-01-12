// src/components/cart.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  const handleQuantityChange = (item, quantity) => {
    if (quantity <= 0) return;
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    setIsAnimating(true); // Start animation

    setTimeout(() => {
      setIsAnimating(false); // Stop animation
      setOrderPlaced(true); // Display "Order Placed!"

      const today = new Date().toLocaleDateString(); // Capture the current date
      const newOrders = cartItems.map((item) => ({
        ...item,
        orderDate: today, // Add the order date
      }));

      setOrderHistory((prevHistory) => [...prevHistory, ...newOrders]); // Update order history
    }, 2000);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
  
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center p-23">
          <img
            src="https://media.tenor.com/YhrpldzQZdsAAAAi/hungry.gif"
            alt="Empty Cart"
            className="w-48 h-48 mb-4"
          />
          <p className="text-lg text-gray-600 m-9">Your cart is empty! Add items to get started.</p>
        </div>
      ) : (
        <div>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-16 p-2 border border-gray-300 rounded"
                    onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                    disabled={orderPlaced} // Disable input if order is placed
                  />
                  <button
                    className={`bg-red-500 text-white px-4 py-2 rounded ${
                      orderPlaced ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => handleRemoveFromCart(item)}
                    disabled={orderPlaced} // Disable button if order is placed
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
  
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Subtotal: ₹{calculateSubtotal().toFixed(2)}</h2>
  
            {!orderPlaced ? (
              <div className="relative">
                <button
                  onClick={handlePlaceOrder}
                  className={`relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded mt-4 transform transition-transform ${
                    isAnimating ? 'cursor-not-allowed opacity-70' : 'hover:scale-105 active:scale-95'
                  }`}
                  disabled={isAnimating}
                >
                  {isAnimating ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            ) : (
              <p className="mt-6 text-green-600 text-xl font-bold">Order Placed Successfully!</p>
            )}
          </div>
        </div>
      )}
  
      {orderHistory.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <ul className="space-y-4">
            {orderHistory.map((order) => (
              <li
                key={order.id + order.orderDate} // Unique key
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="text-lg font-semibold">{order.name}</h3>
                  <p className="text-gray-500">Quantity: {order.quantity}</p>
                  <p className="text-gray-400 text-sm">Ordered on: {order.orderDate}</p>
                </div>
                <p className="text-lg font-bold">₹{order.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}  

export default Cart;







