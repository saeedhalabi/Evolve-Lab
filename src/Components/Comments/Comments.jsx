import React, { useRef } from "react";

const Comments = ({ label }) => {
  const textareaRef = useRef(null);
  const messageRef = useRef(null);

  const checkSubmission = () => {
    // Show message immediately
    if (textareaRef.current.value.trim() === "") {
      messageRef.current.textContent = "Error: Please enter a comment.";
      messageRef.current.className = "popup-message error";
    } else {
      messageRef.current.textContent = "Thanks for the submission!";
      messageRef.current.className = "popup-message success";
      textareaRef.current.value = ""; // Clear textarea after submission
    }

    // Hide message after 4 seconds
    setTimeout(() => {
      messageRef.current.textContent = "";
      messageRef.current.className = "popup-message";
    }, 4000);
  };

  return (
    <div className="comments-container" id="comments">
      <textarea
        placeholder="Comment your thoughts..."
        className="comments-textarea"
        ref={textareaRef}
      ></textarea>
      <button className="comments-button" onClick={checkSubmission}>
        {label}
      </button>
      <div ref={messageRef} className="popup-message"></div>
    </div>
  );
};

export default Comments;
