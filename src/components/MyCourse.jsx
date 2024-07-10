import MyCourseCard from "./MyCourseCard";

const myCoursesData = [
  {
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
    title:
      "Job ready MERN full-stack web development course (lifetime + certificate)",
    author: "Namaste MERN Sir ",
    progress: 75,
  },
  {
    image:
      "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
    title:
      "Job ready Next JS full stack web development course (lifetime + certificate)",
    author: "Namaste NextJs sir",
    progress: 55,
  },
  // Add more course data here...
];

const MyCourse = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap ">
        {myCoursesData.map((course, index) => (
          <MyCourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
