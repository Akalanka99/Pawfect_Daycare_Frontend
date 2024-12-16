import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Modal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Logging in with:", email, password);
      navigate(from, { replace: true });
    } else {
      setErrorMessage("Please provide valid email & password!");
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box p-0 rounded-lg overflow-hidden">
        {/* Flex container for split layout */}
        <div className="flex">
          {/* Left Side - Form */}
          <div className="w-1/2 p-8 bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSubmit}>
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
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="w-full bg-[#1B4A7B] text-white py-2 rounded hover:bg-orange-600 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <p className="text-center mt-4">
           Don’t have an account?
           <span
    onClick={() => {
      document.getElementById("my_modal_5").close();
      navigate("/registerform");
    }}
    className="text-blue-500 ml-1 cursor-pointer hover:underline"
  >
    Register
  </span>
</p>

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
          onClick={() => document.getElementById("my_modal_5").close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
