import React from "react";

const MyCourseCard = ({ image, title, author, progress }) => {
  return (
    <div className="w-64 h-80 rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-32 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 truncate">{title}</div>
        <p className="text-gray-700 text-sm">{author}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="text-sm text-gray-500">Progress: {progress}%</div>
      </div>
    </div>
  );
};

export default MyCourseCard;
