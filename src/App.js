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
      if (showSection==="about") {
        return <About about={personalData.aboutMe} />
      }
  })

  return (
    <div className="App">
      <header>
          <img src={personalData.image} alt="" />
          <div className="dataImg">
            <h1>Welcome to my CV</h1>
            <h1>{personalData.name}</h1>
      </div>
      </header>
      <div className='cardButton'>
        <button className='buttonChange' onClick={() => setshowSection("edu")}>Education</button>
        <button className='buttonChange' onClick={() => setshowSection("exp")}>Experience</button>
        <button className='buttonChange' onClick={() => setshowSection("more")}>More</button>
        <button className='buttonChange' onClick={() => setshowSection("about")}>About me</button>
      </div>
      <div className='section'>
        {change(showSection)}
      </div>
      <footer>
        <h1><a className='h1' href={personalData.gitHub}>See my GitHub</a></h1>
      </footer>
    </div>
  );
}

export default App;
