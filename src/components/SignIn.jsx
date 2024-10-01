import React from 'react';
import { AtSign, Lock, User } from 'lucide-react';

const SignIn = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-orange-50">
      <div className="flex  rounded-lg shadow-md overflow-hidden "style={{ backgroundColor: '#FFEFE0', width: '600', height: '100' }}>
        
        {/* Left side - Form */}
        <div className="p-8 w-80  ">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <form>
            <div className="mb-4 relative  ">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400  " size={18} />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            
            <div className="mb-4 relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Password"
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
        </div>

        {/* Right side - Illustration */}
        <div className="bg-cyan-50 w-80 flex justify-center items-center">
  <img src="rectangle28.png" alt="Description of the image" className="w-834 h-1117" />
</div>


      </div>
    // </div>
  );
};

export default SignIn;
