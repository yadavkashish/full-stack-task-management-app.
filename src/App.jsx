// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import EditMenuItem from './components/EditMenuItem';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/edit/:id" element={<EditMenuItem />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

