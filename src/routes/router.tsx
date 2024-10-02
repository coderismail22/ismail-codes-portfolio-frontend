import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/SharedPages/NotFound/NotFound";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />, // Render NotFound component within MainLayout
  },
]);
