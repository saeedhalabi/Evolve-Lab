import React, { useState } from "react";
import Hero from "./Components/Hero/Hero";
import IdeaSubmission from "./Components/IdeaSubmission/IdeaSubmission";
import FilterIdea from "./Components/FilterIdea/FilterIdea";
import Comments from "./Components/Comments/Comments";
import Footer from "./Components/Footer/Footer";
const App = () => {
  const [submittedIdeas, setSubmittedIdeas] = useState([]);

  const handleIdeaSubmission = newIdea => {
    setSubmittedIdeas([...submittedIdeas, newIdea]);
  };

  return (
    <>
      <Hero />
      <IdeaSubmission onIdeaSubmit={handleIdeaSubmission} />
      <FilterIdea submittedIdeas={submittedIdeas} />
      <Comments label="Comment" />
      <Footer />
    </>
  );
};

export default App;
