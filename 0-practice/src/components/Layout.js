import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Navbar } from 'react-bootstrap';

const Layout = () => {
    return (
        <>
     <Header />
      <Navbar />
      <Outlet />
      
        </>
    );
};
export default Layout;
