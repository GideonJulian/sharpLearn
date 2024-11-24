import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },{
          path: 'courses',
          element: <Courses />
        }
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default App;
