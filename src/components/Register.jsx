import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        const photo = photoFile ? URL.createObjectURL(photoFile) : photoURL;
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: photo,
        });
        navigate("/profile");
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
    setPhotoPreview(e.target.value);
  };

  const handlePhotoFileChange = (e) => {
    const file = e.target.files[0];
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h3>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            First name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Last name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Profile Photo URL
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste URL"
            value={photoURL}
            onChange={handlePhotoURLChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            OR Upload Profile Photo
          </label>
          <input
            type="file"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handlePhotoFileChange}
            accept="image/*"
          />
        </div>

        {photoPreview && (
          <div className="mb-4 flex justify-center">
            <img
              src={photoPreview}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        )}

        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </div>
        <p className="text-sm text-center text-gray-600">
          Already registered?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
