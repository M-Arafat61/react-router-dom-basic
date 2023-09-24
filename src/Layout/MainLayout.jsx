import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const MainLayout = () => {
  return (
    <div className='max-w-screen-xl m-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
