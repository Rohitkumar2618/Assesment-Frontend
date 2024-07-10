import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <img
          className="w-full h-64 object-cover mb-4 rounded"
          src={course.image}
          alt={course.title}
        />
        <p className="text-gray-700 mb-2">Instructor: {course.author}</p>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 line-through text-lg mr-2">
            {course.originalPrice}
          </span>
          <span className="text-red-500 text-2xl">
            {course.discountedPrice}
          </span>
        </div>
        <p className="mt-4">{course.courseDescription}</p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
