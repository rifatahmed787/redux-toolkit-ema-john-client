import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";

import { Icon } from "@iconify/react";
import logo from "../../assets/Logo.png";
import { AuthContext } from "../../AuthProvider/UserContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, SignOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogOut = () => {
    SignOut()
      .then(() => {
        toast.success("Successfully loged out");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <li
        className={`font-semibold text-black dark:text-white ${
          location.pathname === "/" ? "text-orange-400" : ""
        }`}
      >
        <Link title="Home" to="/">
          Home
        </Link>
      </li>
      <li
        className={`font-semibold text-black dark:text-white ${
          location.pathname === "/shop" ? "text-orange-400" : ""
        }`}
      >
        <Link title="Shop" to="/shop">
          Shop
        </Link>
      </li>
      <li
        className={`font-semibold text-black dark:text-white ${
          location.pathname === "/cart" ? "text-orange-400" : ""
        }`}
      >
        <Link title="Cart" to="/cart">
          <Icon icon="material-symbols:shopping-cart-outline" width="20" />
        </Link>
      </li>
      <li
        className={`font-semibold text-black dark:text-white ${
          location.pathname === "/about" ? "text-orange-400" : ""
        }`}
      >
        <Link title="About us" to="/about">
          About us
        </Link>
      </li>
      {/* <li
        className={`font-semibold text-black dark:text-white ${
          location.pathname === "/dashboard" ? "text-orange-300" : ""
        }`}
      >
        {user?.email ? (
          <Link title="Dashboard" to="/dashboard">
            Dashboard
          </Link>
        ) : (
          <Link title="Dashboard" to="/login">
            Dashboard
          </Link>
        )}
      </li> */}

      {user?.uid || user?.email ? (
        <>
          <li
            className="normal-case font-semibold text-base text-black flex items-center dark:text-white navber-left"
            onClick={handleLogOut}
          >
            <button title="Log out" type="button">
              Log out
            </button>
          </li>
          <li>
            {user?.photoURL ? (
              <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <label tabIndex={0} className="">
                  {" "}
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-7 h-7 rounded-full lg:mt-2"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-[#1C2B35] menu p-2 shadow rounded-box w-72 text-center"
                >
                  <li className="text-white">{user?.displayName}</li>
                  <li className="text-white">{user?.email}</li>
                </ul>
              </div>
            ) : (
              <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <label tabIndex={0}>
                  {" "}
                  <Icon
                    title="user?.displayName"
                    icon="iconoir:profile-circle"
                    width="25"
                    className="lg:mt-2 text-black"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-[#1C2B35] menu p-2 shadow  rounded-box w-72 text-center"
                >
                  <li className="text-white">{user?.displayName}</li>
                  <li className="text-white">{user?.email}</li>
                </ul>
              </div>
            )}
          </li>
        </>
      ) : (
        <>
          <li
            className={`font-semibold text-black dark:text-white ${
              location.pathname === "/login" ? "text-orange-400" : ""
            }`}
          >
            <Link title="Log in" to="/login">
              Log in
            </Link>
          </li>
          <li
            className={`font-semibold text-black dark:text-white ${
              location.pathname === "/signup" ? "text-orange-400" : ""
            }`}
          >
            <Link title="Sign up" to="/signup">
              Sign up
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-[#FFFFFF] shadow-md static top-0 z-50 dark:bg-[#1A2238]">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} alt="" className="w-20" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex text-[#FFFFFF]">
            {menuItems}
            <button onClick={themeToggle}>
              {theme === "light" ? (
                <Icon
                  icon="mingcute:sun-line"
                  width="32"
                  className="text-gray-500"
                />
              ) : (
                <Icon
                  icon="ph:moon-fill"
                  width="32"
                  className="text-gray-500"
                />
              )}
            </button>
          </ul>

          <div className="lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-black" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 border rounded shadow-sm bg-[#FFFFFF]  dark:bg-[#1C2B35]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="" className="w-20" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-400" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* <label
                    htmlFor="dashboard-drawer"
                    className="btn drawer-button btn-xs ml-20 rounded-md lg:hidden dark:text-white"
                  >
                    Open drawer
                  </label> */}
                  <nav>
                    <ul className="space-y-4 text-[#FFFFFF]">
                      {menuItems}
                      <button onClick={themeToggle}>
                        {theme === "light" ? (
                          <Icon
                            icon="mingcute:sun-line"
                            width="32"
                            className="text-gray-500"
                          />
                        ) : (
                          <Icon
                            icon="ph:moon-fill"
                            width="32"
                            className="text-gray-500"
                          />
                        )}
                      </button>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
