import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setUserDetails(docSnap.data());
            } else {
              console.log("User not found in the database");
            }
          } catch (error) {
            console.error("Error fetching user data:", error.message);
          }
        } else {
          console.log("User is not logged in");
        }
      });
    };

    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/login");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Company Logo */}
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/564x/5d/f4/18/5df418287735c4bc97bc8e4100d0a451.jpg"
              alt="Company Logo"
              className="h-10 rounded-full cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Middle - Search Bar */}
          <div className="flex items-center flex-grow mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right side - Links and User Image */}
          <div className="flex items-center space-x-4">
            <Link to="/courses" className="text-gray-700 hover:text-blue-500">
              Course
            </Link>
            {userDetails ? (
              <>
                <Link
                  to="/mycourse"
                  className="text-gray-700 hover:text-blue-500"
                >
                  My Course
                </Link>
                <Link
                  to="/test"
                  className="text-red-300 font-semibold hover:text-blue-500"
                >
                  practice questions
                </Link>
                <Link to="/profile">
                  <img
                    src={userDetails.photo}
                    alt="User"
                    className="h-10 w-10 rounded-full object-cover cursor-pointer"
                  />
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-500">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
