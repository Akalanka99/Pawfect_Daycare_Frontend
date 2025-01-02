import React, { useState, useEffect } from 'react';
import { UserCheck } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useToast } from './Toast/ToastService';

const SignInModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  // Monitor Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle Email and Password Login
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const authInfo = {
        userID: user.uid,
        name: user.displayName || user.email,
        isAuth: true,
        provider: 'password',
      };

      localStorage.setItem('auth', JSON.stringify(authInfo));
      toast.open(
        <div className="flex gap-2 bg-orange-400 text-orange-800 p-4 rounded-lg shadow-lg">
          <UserCheck size={40} />
          <div>
            <h3 className="font-bold">Authenticated</h3>
            <p className="text-sm">Login successful</p>
          </div>
        </div>
      );

      navigate('/', { replace: true });
    } catch (error) {
      setError(error.message);
      toast.open(
        <div className="flex gap-2 bg-red-400 text-red-800 p-4 rounded-lg shadow-lg">
          <UserCheck size={40} />
          <div>
            <h3 className="font-bold">Unauthenticated</h3>
            <p className="text-sm">Invalid credentials</p>
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
        <div className="flex gap-2 bg-orange-400 text-orange-800 p-4 rounded-lg shadow-lg">
          <UserCheck size={40} />
          <div>
            <h3 className="font-bold">Authenticated</h3>
            <p className="text-sm">Google login successful</p>
          </div>
        </div>
      );

      navigate('/');
    } catch (error) {
      setError(error.message);
      toast.open(
        <div className="flex gap-2 bg-red-400 text-red-800 p-4 rounded-lg shadow-lg">
          <UserCheck size={40} />
          <div>
            <h3 className="font-bold">Unauthenticated</h3>
            <p className="text-sm">Error during Google login</p>
          </div>
        </div>
      );
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('auth');
      toast.open(
        <div className="flex gap-2 bg-green-400 text-green-800 p-4 rounded-lg shadow-lg">
          <UserCheck size={40} />
          <div>
            <h3 className="font-bold">Logged Out</h3>
            <p className="text-sm">You have been logged out successfully</p>
          </div>
        </div>
      );
      setUser(null);
      navigate('/'); // Optional: Redirect after logout
    } catch (error) {
      setError(error.message);
      toast.open(
        <div className="flex gap-2 bg-red-400 text-red-800 p-4 rounded-lg shadow-lg">
          <UserCheck size={40} />
          <div>
            <h3 className="font-bold">Error</h3>
            <p className="text-sm">Failed to log out</p>
          </div>
        </div>
      );
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box p-0 rounded-lg overflow-hidden">
        <div className="flex">
          {/* Left Side - Form */}
          <div className="w-1/2 p-8 bg-white">
            {!user ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                  <button
                    type="submit"
                    className="w-full bg-[#1B4A7B] text-white py-2 rounded hover:bg-orange-600 transition duration-300"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-center mt-4">
                  Don’t have an account?{' '}
                  <span
                    onClick={() => {
                      document.getElementById('my_modal_5').close();
                      navigate('/registerform');
                    }}
                    className="text-blue-500 ml-1 cursor-pointer hover:underline"
                  >
                    Register
                  </span>
                </p>
                <button
                  type="button"
                  onClick={handleGoogle}
                  className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition duration-300"
                >
                  Sign in with Google
                </button>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">Welcome, {user.displayName || user.email}</h2>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 bg-cyan-50 flex items-center justify-center">
            <img
              src="rectangle28.png"
              alt="Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => document.getElementById('my_modal_5').close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};

export default SignInModal;
