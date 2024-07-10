import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TestOfWeek = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation or processing here if needed

    // Show a toast message
    toast.success("Your response has been submitted!");

    // Redirect to MyCourse page after a delay to allow user to see the toast
    setTimeout(() => {
      navigate("/mycourse");
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Test of the Week</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Question 1: What is HTML?
          </label>
          <input
            type="text"
            name="question1"
            value={answers.question1}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Question 2: What is an HTML element?
          </label>
          <input
            type="text"
            name="question2"
            value={answers.question2}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Question 3: What are HTML attributes?
          </label>
          <input
            type="text"
            name="question3"
            value={answers.question3}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Question 4: What is the purpose of the &lt;head&gt; tag in HTML?
          </label>
          <input
            type="text"
            name="question4"
            value={answers.question4}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Question 5: How do you create a hyperlink in HTML?
          </label>
          <input
            type="text"
            name="question5"
            value={answers.question5}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TestOfWeek;
