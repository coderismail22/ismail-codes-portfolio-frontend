import { Outlet } from "react-router-dom";
import MyDashboardNavbar from "../MyDashboardNavbar/MyDashboardNavbar";

const MyDashboard = () => {
  return (
    <div className="bg-[#2D2E2F] ">
      <MyDashboardNavbar />
      <Outlet />
    </div>
  );
};

export default MyDashboard;
