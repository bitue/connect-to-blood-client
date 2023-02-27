import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RegisterDonar from './Pages/RegisterDonar';
import BanUsers from './Components/Dashboard/BanUsers';
import CreateAdmin from './Components/Dashboard/CreateAdmin';
import Dashboard from './Components/Dashboard/Dashboard';
import UserProfile from './Components/Dashboard/UserProfile';
import YourArticles from './Components/Dashboard/YourArticles';
import Footer from './Components/Shared/Footer';
import About from './Pages/About';
import CreateBlog from './Components/Dashboard/CreateBlog';
import ApproveDonor from './Components/Dashboard/ApproveDonor';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './Pages/Blogs';
import { useContext } from 'react';
import { AuthContext } from '../src/context/AuthProvider.jsx';
import BlogsDetails from './Pages/BlogsDetails';
import BloodSearch from './Pages/BloodSearch';
import MapView from './Pages/MapView';

const App = () => {
    const { loading } = useContext(AuthContext);
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/blogs',
            element: <Blogs />
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
            path: '/mapView',
            element: <MapView />
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
                    path: 'createBlog',
                    element: <CreateBlog />
                }
            ]
        },
        {
            path: 'banUser',
            element: <BanUsers />
        },
        {
            path: 'yourArticles',
            element: <YourArticles />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/blogs/:id',
            element: <BlogsDetails />
        },
        {
            path: '/bloodSearch',
            element: <BloodSearch />
        }
    ]);

    return (
        <div>
            {loading ? (
                <div className="min-h-screen flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <RouterProvider router={router} />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;
