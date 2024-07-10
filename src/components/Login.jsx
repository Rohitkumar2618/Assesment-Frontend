import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate("/profile");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Enter correct password", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Login
        </h3>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>

        <p className="mb-4 text-sm text-center text-gray-600">
          New user?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
