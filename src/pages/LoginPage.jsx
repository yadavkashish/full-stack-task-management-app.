import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (token) => {
    // Store the mock token in localStorage
    localStorage.setItem('jwtToken', token);

    // Navigate to the menu page after successful login
    navigate('/menu');
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100"
      style={{
        backgroundImage: 'url("https://th.bing.com/th/id/R.dd5d9fbdd03a3b47d21baa8633231e67?rik=a3iMyOmV0XwEwA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fFood-HD-Wallpapers-04864.jpg&ehk=oCGq87EnzGa53wpyGPk3aNhI03hKYPPWLQVzqCKdPe0%3d&risl=&pid=ImgRaw&r=0")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <LoginForm onLogin={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;

