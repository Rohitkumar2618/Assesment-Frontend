import React from "react";
import CourseCard from "./CourseCard";

const Courses = ({ courses }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
