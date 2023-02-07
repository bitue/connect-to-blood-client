import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div className="bg-[#f1f1f1]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
