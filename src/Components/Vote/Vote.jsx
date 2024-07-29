import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Vote = ({ upvotes, downvotes, onUpvote, onDownvote }) => {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-5 pb-2">
      <button
        className="btn custom-btn px-4 px-sm-3 py-2 py-sm-1 rounded-pill border-0"
        onClick={onUpvote}
      >
        <i className="fas fa-arrow-up"></i> Upvote ({upvotes})
      </button>
      <button
        className="btn custom-btn px-4 px-sm-3 py-2 py-sm-1 rounded-pill border-0"
        onClick={onDownvote}
      >
        <i className="fas fa-arrow-down"></i> Downvote ({downvotes})
      </button>
    </div>
  );
};

export default Vote;
