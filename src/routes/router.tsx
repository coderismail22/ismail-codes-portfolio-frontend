import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/SharedPages/NotFound/NotFound";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Projects from "@/pages/Projects/Projects/Projects";
import Blog from "@/pages/Blog/Blog/Blog";
import BlogPostDetail from "@/pages/Blog/BlogPostDetails/BlogPostDetails";
import Note from "@/pages/Note/Note/Note";
import Notes from "@/pages/Note/Notes/Notes";
import FullNote from "@/pages/Note/FullNote/FullNote";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogPostDetail />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/note/:id",
        element: <FullNote />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // Render NotFound component within MainLayout
  },
]);
