import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/SharedPages/NotFound/NotFound";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Projects from "@/pages/Projects/Projects/Projects";
import Blog from "@/pages/Blog/Blog/Blog";
import BlogPostDetail from "@/pages/Blog/BlogPostDetails/BlogPostDetails";
import Notes from "@/pages/Note/Notes/Notes";
import FullNote from "@/pages/Note/FullNote/FullNote";
import Contact from "@/pages/Contact/Contact/Contact";
import MyDashboard from "@/pages/MyDashboard/MyDashboard/MyDashboard";
import MyProfile from "@/pages/MyDashboard/MyProfile/MyProfile";
import PublishNewPost from "@/pages/MyDashboard/PublishNewPost/PublishNewPost";
import MyMarkdownEditor from "@/pages/MyDashboard/MyMarkdownEditor/MyMarkdownEditor";
import MyBlogPosts from "@/pages/MyDashboard/MyBlogPosts/MyBlogPosts";
import MyNotes from "@/pages/MyDashboard/MyNotes/MyNotes";
import MyProjectEditor from "@/pages/MyDashboard/MyProjectEditor/MyProjectEditor";
import MyProjects from "@/pages/MyDashboard/MyProjects/MyProjects";
import Login from "@/pages/SharedPages/Login/Login";
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
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/mylogin",
    element: <Login />,
  },
  {
    path: "/mysecretdashboard",
    element: <MyDashboard />,
    children: [
      {
        path: "my-profile",
        element: <MyProfile />, // Wrap each admin route with ProtectedRoute
      },
      {
        path: "my-project-editor",
        element: <MyProjectEditor />,
      },
      {
        path: "my-rich-text-editor",
        element: <PublishNewPost />,
      },
      {
        path: "my-markdown-editor",
        element: <MyMarkdownEditor />,
      },
      {
        path: "my-projects",
        element: <MyProjects />,
      },
      {
        path: "my-blog-posts",
        element: <MyBlogPosts />,
      },
      {
        path: "my-notes",
        element: <MyNotes />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // Render NotFound component within MainLayout
  },
]);
