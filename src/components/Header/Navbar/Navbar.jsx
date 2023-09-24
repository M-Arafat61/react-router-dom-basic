import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 shadow-md max-w-screen-xl m-auto'>
      <Logo></Logo>

      <nav className='flex gap-4'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-600 underline"
                  : ""
              }
            >
              {" "}
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to='/favorites'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-600 underline"
                  : ""
              }
            >
              {" "}
              Favorites
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to='/login'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-600 underline"
                  : ""
              }
            >
              {" "}
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
