import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="bg-indigo-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Redux Essentials</h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-yellow-400" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counter"
              className={({ isActive }) =>
                isActive ? "underline text-yellow-400" : "hover:underline"
              }
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline text-yellow-400" : "hover:underline"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "underline text-yellow-400" : "hover:underline"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
