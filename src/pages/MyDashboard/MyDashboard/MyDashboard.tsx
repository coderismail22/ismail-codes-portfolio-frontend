import { Outlet } from "react-router-dom";
import MyDashboardNavbar from "../MyDashboardNavbar/MyDashboardNavbar";

const MyDashboard = () => {
  return (
    <div>
      <MyDashboardNavbar />
      <Outlet />
    </div>
  );
};

export default MyDashboard;
