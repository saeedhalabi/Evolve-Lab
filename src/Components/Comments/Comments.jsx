import React from "react";

const Comments = () => {
  return (
    <div className="comments-container">
      <textarea placeholder="Comments..." className="comments-textarea"></textarea>
      <button className="comments-button">Comment</button>
    </div>
  );
};

export default Comments;
