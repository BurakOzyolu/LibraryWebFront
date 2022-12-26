import { Outlet } from "react-router-dom";
import ContactUs from "../Template/ContactUs";
import Footer from "../Template/Footer";
import NavBar from "../Template/Navbar";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
};

export default Layout;
