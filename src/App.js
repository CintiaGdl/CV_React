import './App.css';

import { CV } from "./CV/cv";

import React from "react";
import { useState } from 'react';
import PersonalData from './components/PersonalData/PersonalData';
import Education from './components/Education_Experience/Education';
import Experience from './components/Education_Experience/Experience';
import Habilities from './components/More/Habilities';
// import About from './components/About/About';
import Languages from './components/More/Languages';

const { personalData, education, experience, languages, habilities } = CV;

function App() {
  
  const [showSection, setshowSection] = useState("edu");

  const change = (() => {
      if (showSection==="edu") {
          return <Education education={education} />
      }
      if (showSection==="exp") {
        return <Experience experience={experience} />
      }
      if (showSection==="more") {
        return (
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
        )
      }
  })

  return (
    <div className="App">
      <PersonalData data={personalData} />
      {/* <About about={personalData.aboutMe} /> */}
      {/* <Education education={education} />
        <Experience experience={experience} /> */}
      <div className='cardButton'>
        <button className='buttonChange' onClick={() => setshowSection("edu")}>Education</button>
        <button className='buttonChange' onClick={() => setshowSection("exp")}>Experience</button>
        <button className='buttonChange' onClick={() => setshowSection("more")}>More</button>
      </div>
      <div>
       {/*  {(showEducation==="edu") ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )} */}
        {change(showSection)}
      </div>
      {/* <div className='sectionCard2'>
        <div className='languages'>
          <h2>Languages: </h2>
          <Languages languages={languages} />
        </div>
        <div className='languages'>
          <h2>Habilities: </h2>
          <Habilities habilities={habilities} />
        </div>
      </div> */}
    </div>
  );
}

export default App;
