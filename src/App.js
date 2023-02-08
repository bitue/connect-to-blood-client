import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
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
      path: "/registerDonar",
      element: <RegisterDonar />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

/**
 import React from "react";
import sample from "../../Assets/images/blood-tube.png";
const Footer = () => {
  return (
    <footer className="footer p-12 bg-[#f1f1f1] text-black-content mt-8  flex justify-between">
      <div>
        <img
          src={sample}
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
          alt=""
        />
        <p>
          Blood Saver Ltd.
          <br />
          Donate blood to save life
        </p>
      </div>
      <div>
        <span className="font-bold">Quick Links</span>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Charity</a>
        <a className="link link-hover">FAQ</a>
      </div>
      <div>
        <span className="font-bold">SAVELIFE</span>
        <a className="link link-hover">Register</a>
        <a className="link link-hover">Find Blood</a>
        <a className="link link-hover">Live Feed</a>
        <a className="link link-hover">Tracker</a>
      </div>
      <div>
        <span className="font-bold">Services</span>
        <a className="link link-hover">Blood Donation</a>
        <a className="link link-hover">Health Check</a>
        <a className="link link-hover">Blood Bank</a>
        <a className="link link-hover">Donate Process</a>
      </div>
    </footer>
  );
};

export default Footer;

 */
