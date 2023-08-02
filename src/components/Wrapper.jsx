import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

function Wrapper({idName, children}) {
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25}}
        className='relative z-0 mx-auto sm:p-16 p-6'
    >
      <span className='hash-span' id={idName}>&nbsp;</span>
      {children}
    </motion.section>
  )
}

export default Wrapper