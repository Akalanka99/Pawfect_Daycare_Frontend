import React, { useState } from 'react';
import { AtSign, Lock, User } from 'lucide-react';
import axios from 'axios';
import { useToast } from './Toast/ToastService';
import { UserCheck} from 'react-feather'


const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const toast=useToast();

  

  const handleSubmit = async (e) => {
    

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        name,
        email,
        password,
      });
      setMessage("User registered successfully");
      toast.open(
        <div className='flex gap-2  bg-orange-400 text-orange-800 p-4 rounded-lg shadow-lg'>
            <UserCheck size={40} />
            <div>
                <h3 className='font-bold'>Registered</h3>
                <p className='text-sm'>User registered successfully</p>
            </div>
        </div>
    );
      console.log(response.data);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        setMessage(error.response.data);
        console.log(error.response.data);
      } else {
        setMessage(error);
        console.log('An error occurred');
      }
      toast.open(
        <div className='flex gap-2  bg-red-400 text-red-800 p-4 rounded-lg shadow-lg'>
            <UserCheck size={40} />
            <div>
                <h3 className='font-bold'>Error</h3>
                <p className='text-sm'>An error occurred</p>
            </div>
        </div>
    );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50">
      <div className="flex  rounded-lg shadow-md overflow-hidden ">
        
        {/* Left side - Form */}
        <div className="p-8 w-80  ">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
       
        <form >
          <div className="mb-4 relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4 relative">
            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
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
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Register
          </button>
        </form>
        </div>

        {/* Right side - Illustration */}
        <div className="bg-cyan-50 w-80 flex justify-center items-center">
        <img src="rectangle28.png" alt="Description of the image" className="w-834 h-1117" />
        </div>


        </div>
        // </div>
  );
};

export default RegisterForm;
