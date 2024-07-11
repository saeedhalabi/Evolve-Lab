import React from "react";

const IdeaSubmission = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column idea--submission-container">
      <h1 className="text-uppercase idea-text mt-5">Idea Submission</h1>
      {/* Form */}
      <div className="container mt-5 form-content">
        <form className="text-center">
          <div className="mb-3">
            <label className="form-label visually-hidden">Text Input</label>
            <input
              type="text"
              className="form-control"
              id="textInput"
              placeholder="Title..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label visually-hidden">Textarea</label>
            <textarea
              className="form-control"
              id="textArea"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label visually-hidden">Dropdown</label>
            <select className="form-select" id="dropdown">
              <option defaultValue>Choose a Category</option>
              <option value="tech">TECHNOLOGY</option>
              <option value="business">BUSINESS</option>
              <option value="design">DESIGN</option>
              <option value="marketing">MARKETING</option>
              <option value="product">PRODUCT</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 ml-4 border-0 submit-btn">
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default IdeaSubmission;
