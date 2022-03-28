import './App.css';

import { CV } from "./CV/cv";

import React from "react";
import { useState } from 'react';
import PersonalData from './components/PersonalData/PersonalData';
import Education from './components/Education_Experience/Education';
import Experience from './components/Education_Experience/Experience';
import Habilities from './components/More/Habilities';
import About from './components/About/About';
import Languages from './components/More/Languages';

const { personalData, education, experience, languages, habilities } = CV;

function App() {

  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <PersonalData data={personalData} />
      <About about={personalData.aboutMe} />
      {/* <Education education={education} />
        <Experience experience={experience} /> */}
      <button className='buttonChange' onClick={() => setShowEducation(true)}>Education</button>
      <button className='buttonChange' onClick={() => setShowEducation(false)}>Experience</button>
      {/* <button className='buttonChange' onClick={() => setShowEducation(more)}>More</button> */}
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <div className='sectionCard2'>
        <div className='languages'>
          <h2>Languages: </h2>
          <Languages languages={languages} />
        </div>
        <div className='languages'>
          <h2>Habilities: </h2>
          <Habilities habilities={habilities} />
        </div>
      </div>
    </div>
  );
}

export default App;
