import React from 'react';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Experience from '../../components/Experience';
import Feedback from '../../components/Feedback';
import Project from '../../components/Project';
import Tech from '../../components/Tech';

function Home() {
  return (
    <>
      <About />
      <Experience />
      <Tech/>
      <Project/>
      <Feedback/>
      <Contact/>
    </>
  )
}

export default Home