import Intro from './Intro';
import NavBar from './NavBar';

function Header() {
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <NavBar/>
      <Intro/>
    </div>
  )
}

export default Header