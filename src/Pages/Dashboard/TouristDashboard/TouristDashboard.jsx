import { Link, Outlet } from "react-router-dom";
import { FaUsers, FaCirclePlus, FaCircleUser, FaHouse } from "react-icons/fa6";
const TouristDashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-[#6EE98E] min-h-screen grid grid-rows-4 justify-around items-center">
                <div>
                    <h1 className="text-center text-3xl font-bold">
                        Tourist Dashboard
                    </h1>
                </div>
                <ul className="grid justify-center items-center gap-5">
                    <Link to="/dashboard/profile">
                        <li className="flex items-center justify-center">
                            <FaCircleUser className="mr-2 text-2xl"></FaCircleUser>
                            My Profile
                        </li>
                    </Link>
                    <Link to="/dashboard/bookings">
                        <li className="flex items-center justify-center">
                            <FaCirclePlus className="mr-2 text-2xl"></FaCirclePlus>
                            My Bookings
                        </li>
                    </Link>
                    <Link to="/dashboard/wishlist">
                        <li className="flex items-center justify-center">
                            <FaUsers className="mr-2 text-2xl"></FaUsers>
                            My Wishlist
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="flex items-center justify-center">
                            <FaHouse className="mr-2 text-2xl"></FaHouse>
                            Home
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="w-2/3 container mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default TouristDashboard;
