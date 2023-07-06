import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Preojects/Projects";
import About from "../Pages/About/About";

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
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
