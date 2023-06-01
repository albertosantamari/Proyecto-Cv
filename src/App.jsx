import { PersonalData } from "./components/PersonalData/PersonalData";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";
import { About } from "./components/About/About";
import { useState } from "react";
import { CV } from "./Cv/Cv";
import "./App.css";
import { Langua } from "./components/More/Languag/Languages";
import { Knowledge } from "./components/More/Knowledge/Knowledge";

const { personal, education, experience, languages, knowledge } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <PersonalData personal={personal} />

      <About aboutMe={personal.aboutMe} />
      <div className="buttonExperience">
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(true)}>
          Education
        </button>

        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(false)}>
          Experience
        </button>
      </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <Langua languages={languages} />
      <Knowledge knowledge={knowledge} />
    </div>
  );
}

export default App;
