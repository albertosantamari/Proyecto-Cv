import { PersonalData } from "./components/PersonalData/PersonalData";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";
// import { About } from "./components/About/About";
import { useState } from "react";
import { CV } from "./Cv/Cv";
import "./App.css";

const { personal, education, experience } = CV;

function App() {
  return (
    <div className="App">
      <PersonalData personal={personal} />
      {/* <About aboutme={aboutMe} /> */}
      <Education education={education} />
      <Experience experience={experience} />
    </div>
  );
}

export default App;
