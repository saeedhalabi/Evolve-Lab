import React, { useState } from "react";
import IdeaImage from "../../assets/Paid idea-rafiki 1.png";
import Vote from "../Vote/Vote";

const FilterIdea = ({ submittedIdeas }) => {
  const [filteredIdeas, setFilteredIdeas] = useState([]);
  const [votes, setVotes] = useState({});

  // Function to filter ideas based on category
  const filterIdeasByCategory = category => {
    if (category === "All") {
      setFilteredIdeas(submittedIdeas);
    } else {
      const filtered = submittedIdeas.filter(
        idea => idea.selectedCategory.toLowerCase() === category.toLowerCase()
      );
      setFilteredIdeas(filtered);
    }
  };

  // Function to handle upvote
  const handleUpvote = index => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [index]: {
        ...prevVotes[index],
        upvotes: (prevVotes[index]?.upvotes || 0) + 1,
      },
    }));
  };

  // Function to handle downvote
  const handleDownvote = index => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [index]: {
        ...prevVotes[index],
        downvotes: (prevVotes[index]?.downvotes || 0) + 1,
      },
    }));
  };

  return (
    <div className="filter-idea-background" id="all-ideas">
      <div className="container max-width-container">
        <main className="d-flex align-items-center justify-content-center flex-column">
          {/* Buttons to filter ideas by category */}
          <div
            className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-5"
            id="category"
          >
            <button
              className="btn btn-warning rounded-pill px-4"
              onClick={() => filterIdeasByCategory("All")}
            >
              All
            </button>
            <button
              className="btn btn-warning px-4 rounded-pill"
              onClick={() => filterIdeasByCategory("Tech")}
            >
              Tech
            </button>
            <button
              className="btn btn-warning px-4 rounded-pill"
              onClick={() => filterIdeasByCategory("Business")}
            >
              Business
            </button>
            <button
              className="btn btn-warning px-4 rounded-pill"
              onClick={() => filterIdeasByCategory("Popular")}
            >
              Popular
            </button>
          </div>

          {/* Image container */}
          <div className="image-container mt-5">
            <img
              src={IdeaImage}
              alt="Paid Idea Image"
              style={{ maxWidth: "100%" }}
            />
          </div>

          {/* Title for ideas */}
          <div className="idea-title mt-5">
            <h1>Ideas Shared</h1>
          </div>

          {/* Display filtered ideas */}
          <div className="filtered-ideas mt-4">
            {/* Show message if no ideas match the filter */}
            {filteredIdeas.length === 0 && (
              <p className="text-center">
                No ideas found for the selected category.
              </p>
            )}

            {/* Map through filtered ideas and display each */}
            {filteredIdeas.map((idea, index) => (
              <div key={index} className="card modern-card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{idea.title}</h5>
                  <p className="card-text">{idea.description}</p>
                  <p className="card-text category">
                    Category: {idea.selectedCategory}
                  </p>
                  {/* Pass down vote counts and handlers */}
                  <Vote
                    upvotes={votes[index]?.upvotes || 0}
                    downvotes={votes[index]?.downvotes || 0}
                    onUpvote={() => handleUpvote(index)}
                    onDownvote={() => handleDownvote(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FilterIdea;
