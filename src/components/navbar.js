import { Avatar } from "@mui/material";
import React from "react";
import "./navbar.css";
import img from "../static/img/img.jpg";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between">
      <div className="mx-4 my-6 ">
        <i class="bar fa-solid fa-bars"></i>
        <i class="search fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="flex mx-8 my-6">
        <div className="flex">
          <div className="mx-4">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="mx-4">
            <i class="fa-regular fa-message"></i>
          </div>
          <div className="mx-4">
            <i class="fa-regular fa-bell"></i>
          </div>
        </div>
        <div className="line mx-4"></div>
        <div className="profile flex">
          <Avatar alt="Remy Sharp" src={img} sx={{ width: 32, height: 32 }} />
          <div className="mx-4">
            <h1>
              Hi, <span className="font-bold">Julia</span>
            </h1>
          </div>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
