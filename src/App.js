import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApproveDonor from './Components/Dashboard/ApproveDonor';
import BanUsers from './Components/Dashboard/BanUsers';
import CreateAdmin from './Components/Dashboard/CreateAdmin';
import Dashboard from './Components/Dashboard/Dashboard';
import UserProfile from './Components/Dashboard/UserProfile';
import Footer from './Components/Shared/Footer';
import CreateBlog from "./Components/Dashboard/CreateBlog";

import About from './Pages/About';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RegisterDonar from './Pages/RegisterDonar';

const App = () => {
    // const { user } = useToken();
    // console.log(user, 'from app.js');
    // console.log(user);
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/registerDonar',
            element: <RegisterDonar />
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
            children: [
                {
                    path: '',
                    element: <UserProfile />
                },
                {
                    path: 'createAdmin',
                    element: <CreateAdmin />
                },
                {
                    path: 'approveDonor',
                    element: <ApproveDonor />
                },
                {
                    path: 'banUser',
                    element: <BanUsers />
                },
                {
                  path: "createBlog",
                  element: <CreateBlog />,
                },
            ]
        },
        {
            path: '/about',
            element: <About />
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
};

export default App;
