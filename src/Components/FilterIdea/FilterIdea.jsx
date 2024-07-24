import React, { useState } from "react";
import IdeaImage from "../../assets/Paid idea-rafiki 1.png";

const FilterIdea = ({ submittedIdeas }) => {
  // State to manage filtered ideas
  const [filteredIdeas, setFilteredIdeas] = useState([]);

  // Function to filter ideas based on category
  const filterIdeasByCategory = category => {
    if (category === "All") {
      // Show all ideas if category is "All"
      setFilteredIdeas(submittedIdeas);
    } else {
      // Filter ideas matching the selected category
      const filtered = submittedIdeas.filter(
        idea => idea.selectedCategory.toLowerCase() === category.toLowerCase()
      );
      setFilteredIdeas(filtered);
    }
  };

  return (
    <div className="filter-idea-background">
      <div className="container max-width-container">
        <main className="d-flex align-items-center justify-content-center flex-column">
          {/* Buttons to filter ideas by category */}
          <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-5">
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
              <div key={index} className="card text-bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">{idea.title}</h5>
                  <p className="card-text">{idea.description}</p>
                  <p className="card-text">Category: {idea.selectedCategory}</p>
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
