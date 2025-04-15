import React from "react";
import Logo from "../images/logo.png";
import {Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="flex border items-center p-5 space-x-8 w-[100%] fixed top-0 bg-white z-10">
      
      <Link to="/" className="text-blue-500 text-3xl font-bold  ">
         <img src={Logo} alt="Logo" className="w-[100px]" />
      </Link>
      <Link to="/" className="text-blue-500 text-3xl font-bold  ">
        Home
      </Link>
      <Link to="/watchList" className="text-blue-500 text-3xl font-bold">
        WatchList
      </Link>
    </div>
  );
};

export default Navbar;
