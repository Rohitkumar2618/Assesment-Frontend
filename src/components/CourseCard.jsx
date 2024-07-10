import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  image,
  title,
  courseDescription,
  originalPrice,
  discountedPrice,
  id,
}) => {
  return (
    <div className="w-64 h-80 rounded overflow-hidden shadow-lg m-4">
      <Link to={`/course/${id}`}>
        <img className="w-full h-32 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 truncate">{title}</div>
          <p className="text-gray-700 text-sm truncate">{courseDescription}</p>
        </div>
      </Link>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <div>
          <span className="text-gray-500 line-through text-sm">
            {originalPrice}
          </span>
          <span className="ml-2 text-red-500 text-lg">{discountedPrice}</span>
        </div>
        <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
