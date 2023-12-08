import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddPackage from "../Pages/AddPackage/AddPackage";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AdminProfile from "../Pages/Dashboard/AdminDashboard/AdminProfile";
import PrivateRoute from "./PrivateRoute";
import TouristDashboard from "../Pages/Dashboard/TouristDashboard/TouristDashboard";
import TouristProfile from "../Pages/Dashboard/TouristDashboard/TouristProfile";
import Bookings from "../Pages/Dashboard/TouristDashboard/Bookings";
import AllPackages from "../Pages/AllPackages/AllPackages";
import Error from "../Pages/Error/Error";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <SignUp></SignUp>,
            },
            {
                path: "/add-package",
                element: <AddPackage></AddPackage>,
            },
            {
                path: "/packages",
                element: <AllPackages></AllPackages>,
                loader: () =>
                    fetch("https://bangla-jatra-server.vercel.app/packages"),
            },
            {
                path: "/details/:id",
                element: (
                    <PrivateRoute>
                        <PackageDetails></PackageDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://bangla-jatra-server.vercel.app/package/${params.id}`
                    ),
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminDashboard></AdminDashboard>,
        children: [
            {
                path: "/admin/profile",
                element: (
                    <PrivateRoute>
                        <AdminProfile></AdminProfile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/admin/add",
                element: (
                    <PrivateRoute>
                        <AddPackage></AddPackage>
                    </PrivateRoute>
                ),
            },
            {
                path: "/admin/manage",
                element: (
                    <PrivateRoute>
                        <ManageUsers></ManageUsers>
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <TouristDashboard></TouristDashboard>
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard/profile",
                element: (
                    <PrivateRoute>
                        <TouristProfile></TouristProfile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard/bookings",
                element: (
                    <PrivateRoute>
                        <Bookings></Bookings>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default Router;
