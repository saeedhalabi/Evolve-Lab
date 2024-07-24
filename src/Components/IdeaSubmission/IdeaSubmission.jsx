import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IdeaSubmission = ({ onIdeaSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !description || !selectedCategory) {
      setError("All fields are required.");
      setSuccess(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      setError("");
      setSuccess(true);
      const newIdea = {
        title,
        description,
        selectedCategory,
      };
      onIdeaSubmit(newIdea);
      setTitle("");
      setDescription("");
      setSelectedCategory("");
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column idea--submission-container">
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
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
        {success && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
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
          <button
            type="submit"
            className="px-4 py-2 ml-4 mt-4 border-0 submit-btn"
          >
            Submit Idea
          </button>
        </form>
      </div>
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
