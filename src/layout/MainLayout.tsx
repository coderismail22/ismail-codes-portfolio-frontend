import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Navbar/Navbar";
import Footer from "../pages/SharedPages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
