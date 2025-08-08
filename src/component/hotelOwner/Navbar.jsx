import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white shadow-sm transition-all duration-300">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={assets.logo}
          alt="logo"
          className="h-9 w-auto object-contain invert opacity-80"
        />
      </Link>

      {/* User Profile */}
      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
