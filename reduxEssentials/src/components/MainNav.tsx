import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../features/users/userSlice";
import { userLoggedOut } from "../features/auth/authSlice";
import { useAppDispatch } from "../app/hooks";

const MainNav = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const onLogoutClick = () => {
    dispatch(userLoggedOut());
  };

  const isLoggedIn = !!user;

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
          {isLoggedIn && (
            <li>
              <NavLink
                to="/createpost"
                className={({ isActive }) =>
                  isActive ? "underline text-yellow-400" : "hover:underline"
                }
              >
                Create
              </NavLink>
            </li>
          )}
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

          {isLoggedIn ? (
            <li>
              <NavLink
                to="#" // change to void to avoid error
                className={({ isActive }) =>
                  isActive ? "  text-blue-200" : "hover:underline"
                }
              >
                {user.name.split(" ")[0]}
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/auth/login"
                className={({ isActive }) =>
                  isActive ? "underline text-yellow-400" : "hover:underline"
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={onLogoutClick}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
