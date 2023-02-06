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
      <button className="btn btn-active">Button</button>
      <button className="btn btn-active btn-primary">Button</button>
      <button className="btn btn-active btn-secondary">Button</button>
      <button className="btn btn-active btn-accent">Button</button>
      <button className="btn btn-active btn-ghost">Button</button>
      <button className="btn btn-active btn-link">Button</button>
    </div>
  );
};

export default App;
