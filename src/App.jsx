import React, { useState } from "react";
import Hero from "./Components/Hero/Hero";
import IdeaSubmission from "./Components/IdeaSubmission/IdeaSubmission";
import FilterIdea from "./Components/FilterIdea/FilterIdea";

const App = () => {
  const [submittedIdeas, setSubmittedIdeas] = useState([]);

  // Function to handle submission of new idea from IdeaSubmission component
  const handleIdeaSubmission = newIdea => {
    setSubmittedIdeas([...submittedIdeas, newIdea]);
  };

  return (
    <>
      <Hero />
      <IdeaSubmission onIdeaSubmit={handleIdeaSubmission} />
      <FilterIdea submittedIdeas={submittedIdeas} />
    </>
  );
};

export default App;
