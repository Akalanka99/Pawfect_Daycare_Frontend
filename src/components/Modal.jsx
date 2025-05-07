import React, { useState, useEffect, useRef } from "react";
import { UserCheck } from "react-feather";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useToast } from "./Toast/ToastService";

const SignInModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const modalRef = useRef(null);

  // Monitor Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  // Close Modal Function
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  // Handle Email and Password Login
  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const authInfo = {
        userID: user.uid,
        name: user.displayName || user.email,
        isAuth: true,
        provider: "password",
      };

      localStorage.setItem("auth", JSON.stringify(authInfo));
      toast.open(
        <div className="flex gap-2 bg-orange-400 text-orange-800 p-4 rounded-lg shadow-lg">
          <UserCheck size={40} />
          <div>
            <h3 className="font-bold">Authenticated</h3>
            <p className="text-sm">Login successful</p>
          </div>
        </div>
      );
      closeModal();
      navigate("/", { replace: true });
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
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const authInfo = {
        userID: user.uid,
        name: user.displayName,
        isAuth: true,
        provider: "google.com",
      };

      localStorage.setItem("auth", JSON.stringify(authInfo));
      toast.open(
        <div className="flex gap-2 bg-orange-400 text-orange-800 p-4 rounded-lg shadow-lg">
          <UserCheck size={40} />
          <div>
            <h3 className="font-bold">Authenticated</h3>
            <p className="text-sm">Google login successful</p>
          </div>
        </div>
      );
      closeModal();
      navigate("/");
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog
      ref={modalRef}
      id="my_modal_5"
      className="modal modal-middle sm:modal-middle"
    >
      <div className="modal-box p-0 rounded-lg overflow-hidden">
        <div className="flex">
          {/* Left Side - Form */}
          <div className="w-1/2 p-8 bg-white">
            {!user && (
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
                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#1B4A7B] text-white py-2 rounded hover:bg-orange-600 transition duration-300"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-center mt-4">
                  Don’t have an account?{" "}
                  <span
                    onClick={() => {
                      closeModal();
                      navigate("/registerform");
                    }}
                    className="text-blue-500 ml-1 cursor-pointer hover:underline"
                  >
                    Register
                  </span>
                </p>
                <button
                  type="button"
                  onClick={handleGoogle}
                  disabled={loading}
                  className="w-full bg-red-500 text-white py-2 rounded-md mt-4  bg-red transition duration-300"
                >
                  {loading ? "Signing in..." : "Sign in with Google"}
                </button>
              </>
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
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};

export default SignInModal;
