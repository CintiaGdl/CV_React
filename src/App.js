import './App.css';

import { CV } from "./CV/cv";

import React from "react";
import PersonalData from './components/PersonalData/PersonalData';
import Education from './components/Education_Experience/Education';

const { personalData, education, experience, languages, habilities } = CV;

function App() {
  return (
    <div className="App">
        <PersonalData data={personalData} />
        {/* <About data={personalData} /> */}
        <Education education={education} />
        {/* <Experience experience={experience} />
	      <More
        languages={languages}
        habilities={habilities}
	      /> */}
    </div>
  );
}

export default App;
