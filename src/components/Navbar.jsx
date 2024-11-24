import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo.png";
const Navbar = () => {
  return (
    <div className="w-full nav-container">
      <div className="orange-container w-full p-2 bg-orange rounded-md text-white text-center">
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </div>

      <ul className="flex items-center justify-between px-28 py-4 w-full ">
        <div className="logo">
          <img src={Logo} alt="" className="w-12 mr-8" />
        </div>
        <div className="links flex items-center ">
          <li className="px-3 py-2 bg-gray-200 rounded-md">
            <Link>Home</Link>
          </li>
          <li className="px-3 py-2 ">
            <Link to={'courses'}>Courses</Link>
          </li>
          <li className="px-3 py-2 ">
            <Link>About us</Link>
          </li>
          <li className="px-3 py-2 ">
            <Link>Price</Link>
          </li>
          <li className="px-3 py-2 ">
            <Link>Contact</Link>
          </li>
        </div>
        <div className="btns flex items-center gap-2  ">
          <button>Sign Up</button>
          <button className="px-3 py-2 bg-orange rounded-md text-white">
            Login
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
