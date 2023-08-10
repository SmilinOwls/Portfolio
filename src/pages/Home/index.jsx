import React from 'react';
import {
  Intro,
  About,
  Contact,
  Experience,
  Feedback,
  Project,
  Tech
} from './sections';

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Tech />
      <Project />
      <Feedback />
      <Contact />
    </>
  )
}

export default Home