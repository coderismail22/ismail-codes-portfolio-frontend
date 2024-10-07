import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Navbar/Navbar";
import Footer from "../pages/SharedPages/Footer/Footer";
import { TopBanner } from "../components/TopBanner/TopBanner";
import Loader from "../components/Loader/Loader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed (2 seconds in this case)

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return <Loader />; // Show loader while the site is loading
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <TopBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
