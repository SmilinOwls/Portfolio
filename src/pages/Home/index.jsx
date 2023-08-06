import React from 'react';
import { 
  About, 
  Contact, 
  Experience, 
  Feedback, 
  Project, 
  Tech
} from '../../components';

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