import { Outlet } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  return (
    <div className='relative z-0 bg-primary'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default AppLayout