import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { projects } from '../constants';
import Wrapper from './Wrapper';

import { github } from '../assets';

function ProjectCard({ index, project }) {
  return (
    <Tilt className='w-full sm:w-[360px] max-w-[380px]'>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 1)}
        className='w-full p-5 bg-tertiary rounded-2xl'
      >
        <div className='relative w-full h-[250px]'>
          <img
            src={project.image}
            alt='project_image'
            className='w-full h-full rounded-2xl'
          />
          <div className='absolute top-3 right-3'>
            <div 
              className='black-gradient w-10 h-10 p-1 rounded-full flex justify-center items-center cursor-pointer'
              onClick={() => window.open(project.source_code_link, "_blank")}
            >
              <img
                src={github}
                alt='project_sr'
                className='object-contain'
              />
              
            </div>
          </div>
        </div>
        <div className='mt-6 space-y-5'>
          <h3 className='text-white font-bold text-2xl leading-3'>{project.name}</h3>
          <p className='text-secondary font-medium text-sm'>{project.description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-3'>
          {project.tags.map((tag, idx) => (
            <motion.p
              key={`project_${project.name}-tag_${tag.name}`}
              variants={fadeIn('left','spring',idx*0.5,0.75)}
              className={`text-sm text-secondary ${tag.color}`}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  )
}

function Project() {
  return (
    <Wrapper idName="project">
      <motion.div
        variants={textVariant(1)}
      >
        <p className='sm:text-lg text-sm text-secondary uppercase tracking-wider'>My work</p>
        <h2 className='text-white font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="mt-3 text-secondary text-base font-medium leading-7 max-w-3xl"
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>
      <div className='mt-16 flex flex-wrap gap-5'>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Project