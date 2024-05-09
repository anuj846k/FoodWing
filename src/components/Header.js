import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-white text-black shadow-md  m-2 rounded-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="transition duration-300 transform hover:scale-110 w-20 h-20 rounded-full border-4 p-1 border-orange-500"
              src={LOGO_URL}
              alt="Logo"
            />
          </Link>
          <Link
            to="/"
            className="text-4xl ml-2 font-bold transition duration-300 ease-in-out hover:text-orange-500"
          >
            FoodWing
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-lg hover:text-orange-500 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg hover:text-orange-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="text-lg hover:text-orange-500">
                Grocery
              </Link>
            </li>
            <li className="relative flex items-center text-4xl">
              <Link to="/cart" className="text-lg hover:text-orange-500">
                <FiShoppingCart size={24} />
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <p className="mr-4">Online Status: {onlineStatus ? "✅" : "🔴"}</p>
            <Link to="/login">
              <button
                className="text-lg bg-transparent border border-black px-4 py-2 rounded-md transition-colors hover:bg-black hover:text-white"
                onClick={() => setIsLoggedIn((prevState) => !prevState)}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
