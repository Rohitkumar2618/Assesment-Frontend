import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import MyCourse from "./components/MyCourse";
import TestOfWeek from "./components/TestOfWeek";
import Register from "./components/Register";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";

const coursesData = [
  {
    id: 1,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
    title:
      "Job ready MERN full-stack web development course (lifetime + certificate)",

    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    author: "Ayanshu",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "React, Node, Express JS, Mongo DB with 10+ projects",
  },
  {
    id: 2,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=9",
    title: "Job ready DSA mastery course (now with 150 solution videos)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Master DSA concepts for technical interviews",
  },
  {
    id: 3,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
    title:
      "Job ready Next JS full stack web development course (lifetime + certificate)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Become a skilled full-stack web developer with NEXT JS",
  },
  {
    id: 1,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
    title:
      "Job ready MERN full-stack web development course (lifetime + certificate)",

    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    author: "Ayanshu",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "React, Node, Express JS, Mongo DB with 10+ projects",
  },
  {
    id: 2,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=9",
    title: "Job ready DSA mastery course (now with 150 solution videos)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Master DSA concepts for technical interviews",
  },
  {
    id: 3,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
    title:
      "Job ready Next JS full stack web development course (lifetime + certificate)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Become a skilled full-stack web developer with NEXT JS",
  },
  {
    id: 1,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
    title:
      "Job ready MERN full-stack web development course (lifetime + certificate)",

    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    author: "Ayanshu",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "React, Node, Express JS, Mongo DB with 10+ projects",
  },
  {
    id: 2,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=9",
    title: "Job ready DSA mastery course (now with 150 solution videos)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Master DSA concepts for technical interviews",
  },
  {
    id: 3,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
    title:
      "Job ready Next JS full stack web development course (lifetime + certificate)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Become a skilled full-stack web developer with NEXT JS",
  },
  {
    id: 1,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
    title:
      "Job ready MERN full-stack web development course (lifetime + certificate)",

    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    author: "Ayanshu",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "React, Node, Express JS, Mongo DB with 10+ projects",
  },
  {
    id: 2,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=9",
    title: "Job ready DSA mastery course (now with 150 solution videos)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Master DSA concepts for technical interviews",
  },
  {
    id: 3,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
    title:
      "Job ready Next JS full stack web development course (lifetime + certificate)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Become a skilled full-stack web developer with NEXT JS",
  },
  {
    id: 1,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
    title:
      "Job ready MERN full-stack web development course (lifetime + certificate)",

    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    author: "Ayanshu",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "React, Node, Express JS, Mongo DB with 10+ projects",
  },
  {
    id: 2,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=9",
    title: "Job ready DSA mastery course (now with 150 solution videos)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Master DSA concepts for technical interviews",
  },
  {
    id: 3,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
    title:
      "Job ready Next JS full stack web development course (lifetime + certificate)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Become a skilled full-stack web developer with NEXT JS",
  },
  {
    id: 1,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
    title:
      "Job ready MERN full-stack web development course (lifetime + certificate)",

    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    author: "Ayanshu",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "React, Node, Express JS, Mongo DB with 10+ projects",
  },
  {
    id: 2,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=9",
    title: "Job ready DSA mastery course (now with 150 solution videos)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Master DSA concepts for technical interviews",
  },
  {
    id: 3,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
    title:
      "Job ready Next JS full stack web development course (lifetime + certificate)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Become a skilled full-stack web developer with NEXT JS",
  },
  {
    id: 1,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
    title:
      "Job ready MERN full-stack web development course (lifetime + certificate)",

    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    author: "Ayanshu",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "React, Node, Express JS, Mongo DB with 10+ projects",
  },
  {
    id: 2,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=9",
    title: "Job ready DSA mastery course (now with 150 solution videos)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Master DSA concepts for technical interviews",
  },
  {
    id: 3,
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
    title:
      "Job ready Next JS full stack web development course (lifetime + certificate)",
    author: "Deepanshu",
    originalPrice: "₹8,090",
    discountedPrice: "₹999",
    authorImage: "path-to-author-image-1.jpg",
    courseDescription: "Become a skilled full-stack web developer with NEXT JS",
  },
  // Add more courses here...
];

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Navbar user={user} />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Courses courses={coursesData} />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />

              <Route
                path="/courses"
                element={<Courses courses={coursesData} />}
              />
              <Route
                path="/course/:id"
                element={<CourseDetail courses={coursesData} />}
              />
              <Route
                path="/mycourse"
                element={user ? <MyCourse /> : <Navigate to="/" />}
              />
              <Route path="/test" element={<TestOfWeek />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
