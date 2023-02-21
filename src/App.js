import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RegisterDonar from './Pages/RegisterDonar';
import ApproveDonor from "./Components/Dashboard/ApproveDonor";
import BanUsers from "./Components/Dashboard/BanUsers";
import CreateAdmin from "./Components/Dashboard/CreateAdmin";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserProfile from "./Components/Dashboard/UserProfile";
import YourArticles from "./Components/Dashboard/YourArticles";
import Footer from "./Components/Shared/Footer";
import About from "./Pages/About";
import CreateBlog from "./Components/Dashboard/CreateBlog";

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
          path: "banUser",
          element: <BanUsers />
        },
        {
          path: "yourArticles",
          element: <YourArticles />
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
