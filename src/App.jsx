import { PersonalData } from "./components/PersonalData/PersonalData";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";
import { About } from "./components/About/About";
import { useState } from "react"; //importamos el hook useState para poder usarlo
import { CV } from "./Cv/Cv"; // importamos la constante de CV para poder usarla de forma global
import "./App.css";
import { Langua } from "./components/More/Languag/Languages";
import { Knowledge } from "./components/More/Knowledge/Knowledge";

const { personal, education, experience, languages, knowledge } = CV; //

function App() {
  const [showEducation, setShowEducation] = useState(true); // devuelve el estado actual y actualiza setShowEducation (el button)
  return (
    <div className="App">
      <PersonalData personal={personal} />
      {/*traemos la informacion del componente por props */}

      <About aboutMe={personal.aboutMe} />
      <div className="buttonExperience">
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(true)}>
          {/*le decimos que al hacer click cambie setshow de false a true */}
          Education
        </button>

        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(false)}>
          Experience
        </button>
      </div>
      <div>
        {showEducation ? ( //aqui le decimos que informacion tiene que mostrar, dependiendo de si el button este en true o false
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
