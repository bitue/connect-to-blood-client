import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Components/Shared/Footer";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RegisterDonar from "./Pages/RegisterDonar";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/registerDonar",
      element: <RegisterDonar />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
