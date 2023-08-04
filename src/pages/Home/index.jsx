import React from 'react';
import About from '../../components/About';
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
    </>
  )
}

export default Home