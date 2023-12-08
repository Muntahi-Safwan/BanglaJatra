import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Avatar, Dropdown } from "flowbite-react";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Community",
        href: "/community",
    },
    {
        name: "Blogs",
        href: "/blogs",
    },
    {
        name: "About Us",
        href: "/about-us",
    },
    {
        name: "Contact Us",
        href: "/contact-us",
    },
];

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    console.log(user);
    // const [admin, setAdmin] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="relative w-full bg-[#EEFDF0] py-3 container mx-auto rounded-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4  sm:px-6 lg:px-8">
                <div className="inline-flex items-center ">
                    <span className="font-bold text-3xl text-[#719A78]">
                        Bangla<span className="text-[#6EE98E]">Jatra</span>
                    </span>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.href}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                            ? "border-2 p-2 border-[#6EE98E] rounded-lg text-sm font-semibold text-[#719A78] hover:text-[#6EE98E]"
                                            : "text-sm font-semibold text-[#719A78] hover:text-[#6EE98E]"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    {user ? (
                        <div className="flex items-center gap-3">
                            {/* <Avatar
                                alt="User settings"
                                img={user.photoURL}
                                rounded
                            /> */}
                            <div className="flex md:order-2 ">
                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={
                                        <Avatar
                                            alt="User settings"
                                            img={user.photoURL}
                                            rounded
                                        />
                                    }
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">
                                            {user.displayName}
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            {user.email}
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>
                                        {user.email == "admin@admin.com" ? (
                                            <Link to="/admin">
                                                <button className="text-[#719A78] font-semibold">
                                                    Dashboard
                                                </button>
                                            </Link>
                                        ) : (
                                            <Link to="/dashboard">
                                                <button className="text-[#719A78] font-semibold">
                                                    Dashboard
                                                </button>
                                            </Link>
                                        )}
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link
                                            to="/manageService"
                                            className="text-[#719A78] font-semibold"
                                        >
                                            Offer Announcements
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                            <button
                                onClick={handleSignOut}
                                type="button"
                                className="rounded-md bg-[#719A78] px-3 py-2 text-sm font-semibold text-[#F0FBFF] shadow-sm hover:bg-[#6EE98E] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">
                                <button
                                    type="button"
                                    className="rounded-md bg-[#6EE98E] px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-900 hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign In
                                </button>
                            </Link>
                            <Link to="/register">
                                <button
                                    type="button"
                                    className="ml-3 rounded-md bg-[#6EE98E] px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-900 hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="lg:hidden ">
                    <Menu
                        onClick={toggleMenu}
                        className="h-6 w-6 cursor-pointer text-[#3d8a51] "
                    />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#0A2A3B] shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        {/* Responsive Part */}
                                        <span className="font-bold text-3xl text-[#719A78]">
                                            Bangla
                                            <span className="text-[#6EE98E]">
                                                Jatra
                                            </span>
                                        </span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 bg-[#719A78] px-3 py-2 text-sm font-semibold text-[#F0FBFF] shadow-sm hover:bg-[#F0FBFF] hover:text-[#719A78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <X
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4 bg-[#0A2A3B] text-white">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-[#719A78] hover:text-[#0A2A3B]"
                                            >
                                                <span className="ml-3 text-base font-medium text-white">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <Link to="/sign-up">
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-[#6EE98E] px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-900 hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-[#6EE98E] px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-900 hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Sign In
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
