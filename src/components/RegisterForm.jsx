import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from './context/Authprovider';
import { useGetUserInfo } from '../pages/hooks/useGetUserInfo';

const RegisterForm = () => {
  const { createUser, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleSignup = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        alert('Signup successfully!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Sign in with Google
  const handleGoogle = () => {
    loginwithGoogle()
      .then((result) => {
        const authInfo = {
          userID: result.user.uid,
          name: result.user.displayName,
          isAuth: true,
          provider: 'google.com',
        };
        localStorage.setItem('auth', JSON.stringify(authInfo));
        alert('Login successfully!');
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const { isAuth } = useGetUserInfo();
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex rounded-lg shadow-md overflow-hidden bg-[#58B5C6]">
        {/* Left side - Form */}
        <div className="p-8 w-80">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignup}>
            <div className="mb-4 relative">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-6 relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1B4A7B] text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Register
            </button>
          </form>
          <div className="mt-4">
            <p>
              Already have an account?{' '}
              <span 
                onClick={() => document.getElementById("my_modal_5").showModal()} 
                className="text-orange-500 cursor-pointer underline"
                  >
                   Login here
                 </span>
            </p>
            <button
              onClick={handleGoogle}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Sign in with Google
            </button>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="bg-cyan-50 w-80 flex justify-center items-center">
          <img src="rectangle28.png" alt="Illustration" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
