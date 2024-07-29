import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IdeaSubmission = ({ onIdeaSubmit }) => {
  // State variables to manage form input values and error/success messages
  const [title, setTitle] = useState(""); // Title of the idea
  const [description, setDescription] = useState(""); // Description of the idea
  const [selectedCategory, setSelectedCategory] = useState(""); // Selected category of the idea
  const [error, setError] = useState(""); // Error message
  const [success, setSuccess] = useState(false); // Success message state

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if all fields are filled
    if (!title || !description || !selectedCategory) {
      setError("All fields are required."); // Set error message if any field is empty
      setSuccess(false); // Reset success message
      setTimeout(() => {
        setError(""); // Clear error message after 5 seconds
      }, 5000);
    } else {
      setError(""); // Clear any existing error message
      setSuccess(true); // Set success message
      const newIdea = {
        title,
        description,
        selectedCategory,
      };
      onIdeaSubmit(newIdea); // Call the onIdeaSubmit function passed via props with the new idea

      // Reset form fields
      setTitle("");
      setDescription("");
      setSelectedCategory("");
      setTimeout(() => {
        setSuccess(false); // Clear success message after 5 seconds
      }, 5000);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column idea--submission-container"
      id="createIdea"
    >
      <AnimatePresence>
        {/* Display error message with animation */}
        {error && (
          <motion.div
            initial={{ y: -50, opacity: 0 }} // Initial animation state
            animate={{ y: 0, opacity: 1 }} // Animation state on enter
            exit={{ y: -50, opacity: 0 }} // Animation state on exit
            transition={{ duration: 0.5 }} // Animation duration
            className="alert alert-danger sticky-alert"
            role="alert"
          >
            <div className="d-flex gap-4">
              <span>
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
              <div className="d-flex flex-column gap-2">
                <h6 className="mb-0">Enter valid information</h6>
                <p className="mb-0">{error}</p>
              </div>
            </div>
          </motion.div>
        )}
        {/* Display success message with animation */}
        {success && (
          <motion.div
            initial={{ y: -50, opacity: 0 }} // Initial animation state
            animate={{ y: 0, opacity: 1 }} // Animation state on enter
            exit={{ y: -50, opacity: 0 }} // Animation state on exit
            transition={{ duration: 0.5 }} // Animation duration
            className="alert alert-success sticky-alert"
            role="alert"
          >
            <div className="d-flex gap-4">
              <span>
                <i className="fa-regular fa-circle-check"></i>
              </span>
              <div>Information Submitted</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-uppercase idea-text mt-5">Idea Submission</h1>
      <div className="container mt-5 form-content">
        <form className="text-center" onSubmit={handleSubmit}>
          {/* Input for the idea title */}
          <div className="mb-3">
            <label className="form-label visually-hidden">Text Input</label>
            <input
              type="text"
              className="form-control"
              id="textInput"
              placeholder="Title..."
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          {/* Textarea for the idea description */}
          <div className="mb-3">
            <label className="form-label visually-hidden">Textarea</label>
            <textarea
              className="form-control"
              id="textArea"
              rows="3"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/* Dropdown for selecting the idea category */}
          <div className="mb-3">
            <label className="form-label visually-hidden" htmlFor="dropdown">
              Dropdown
            </label>
            <select
              className="form-select"
              id="dropdown"
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              <option defaultValue>Choose a Category</option>
              <option value="tech">TECHNOLOGY</option>
              <option value="business">BUSINESS</option>
              <option value="design">DESIGN</option>
              <option value="marketing">MARKETING</option>
              <option value="product">PRODUCT</option>
            </select>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="px-4 py-2 ml-4 mt-4 border-0 submit-btn"
          >
            Submit Idea
          </button>
        </form>
      </div>
      {/* Inline styling for sticky alerts */}
      <style jsx>{`
        .sticky-alert {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          margin-top: 0;
          border-radius: 0;
        }
      `}</style>
    </div>
  );
};

export default IdeaSubmission;
