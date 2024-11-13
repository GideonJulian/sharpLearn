import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default App;
