import './App.css';

import { CV } from "./CV/cv";

import React from "react";
import { useState } from 'react';
import PersonalData from './components/PersonalData/PersonalData';
import Education from './components/Education_Experience/Education';
import Experience from './components/Education_Experience/Experience';

const { personalData, education, experience, languages, habilities } = CV;

function App() {

  const [showEducation, setShowEducation ] = useState(true);

  return (
    <div className="App">
        <PersonalData data={personalData} />
        {/* <About data={personalData} /> */}
        {/* <Education education={education} />
        <Experience experience={experience} /> */}
	      {/* <More
        languages={languages}
        habilities={habilities}
	      /> */}
        <button className='buttonChange' onClick={() => setShowEducation(true)}>Education</button>
        <button className='buttonChange' onClick={() => setShowEducation(false)}>Experience</button>
        <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
}

export default App;
