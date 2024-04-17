import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL}></img>
        <h1>Foody</h1>
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            id="login"
            className="login"
            onClick={() => {
              btnName==='Login'? setBtnName("Logout")
              :setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
