import { ShoppingCart } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <div className="border-1 border-[#F2F2F2]">
    <div className="navbar max-w-7xl mx-auto pt-4 pb-4 items-center justify-center">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <span className="text-4xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent pb-4">DigiTools</span>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-[16px] text-[#101727] font-semibold">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <ShoppingCart />
        <span className="font-semibold text-[#101727]">Login</span>
        <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white">Get in Touch</a>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
