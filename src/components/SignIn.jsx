import React, { useState, useContext } from 'react';
import { AtSign, Lock, User } from 'lucide-react';
import { useToast } from './Toast/ToastService';
import { UserCheck } from 'react-feather';
import { useNavigate, Link, useLocation, Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Import Firebase Auth methods
import { auth } from    '../firebase/firebase'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toast = useToast();


  // Handle Email and Password Login
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  console.log(authInfo);
      const authInfo = {
        userID: user.uid,
        name: user.displayName || user.email,
        isAuth: true,
        provider: 'password',
      };

      localStorage.setItem('auth', JSON.stringify(authInfo));
      toast.open(
        <div className='flex gap-2 bg-orange-400 text-orange-800 p-4 rounded-lg shadow-lg'>
          <UserCheck size={40} />
          <div>
            <h3 className='font-bold'>Authenticated</h3>
            <p className='text-sm'>Login successful</p>
          </div>
        </div>
      );

      navigate('/reservation', { replace: true });
    } catch (error) {
      setError(error.message);
      toast.open(
        <div className='flex gap-2 bg-red-400 text-red-800 p-4 rounded-lg shadow-lg'>
          <UserCheck size={40} />
          <div>
            <h3 className='font-bold'>Unauthenticated</h3>
            <p className='text-sm'>Invalid credentials</p>
          </div>
        </div>
      );
    }
  };

  // Handle Google Login
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const authInfo = {
        userID: user.uid,
        name: user.displayName,
        isAuth: true,
        provider: 'google.com',
      };

      localStorage.setItem('auth', JSON.stringify(authInfo));
      toast.open(
        <div className='flex gap-2 bg-orange-400 text-orange-800 p-4 rounded-lg shadow-lg'>
          <UserCheck size={40} />
          <div>
            <h3 className='font-bold'>Authenticated</h3>
            <p className='text-sm'>Google login successful</p>
          </div>
        </div>
      );

      navigate('/');
    } catch (error) {
      setError(error.message);
      toast.open(
        <div className='flex gap-2 bg-red-400 text-red-800 p-4 rounded-lg shadow-lg'>
          <UserCheck size={40} />
          <div>
            <h3 className='font-bold'>Unauthenticated</h3>
            <p className='text-sm'>Error during Google login</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 w-80 bg-[#58B5C6]">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4 relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition duration-300"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
