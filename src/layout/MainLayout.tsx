import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Navbar/Navbar";
import Footer from "../pages/SharedPages/Footer/Footer";
import { TopBanner } from "../components/TopBanner/TopBanner";

const MainLayout = () => {
  return (
    <div>
      <TopBanner />
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
