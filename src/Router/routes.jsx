import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Preojects/Projects";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AddProject from "../Pages/AddProject/AddProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        path: "/contact-me",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/add-project",
        element: <AddProject />,
      },
    ],
  },
]);
export default router;
