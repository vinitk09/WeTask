"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import logo from "../components/assets/logo.png";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={90} height={40} className="mr-2" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`ri-${menuOpen ? "close" : "menu"}-line`}></i>
      </div>

      {/* Search Bar Section */}
      <div className={`search-div ${menuOpen ? "open" : ""}`}>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="search p-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i
            className="ri-search-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            style={{ fontSize: "1.5rem" }}
          ></i>
        </div>
      </div>

      {/* Links and Profile Section */}
      <div className={`links-and-profiles ${menuOpen ? "open" : ""}`}>
        {/* Links with icons */}
        <Link href="/home" className="flex items-center links">
          <i
            className="ri-lightbulb-line mr-3"
            style={{ fontSize: "1.2rem" }}
          ></i>
          Inspirations
        </Link>
        <Link href="/about" className="flex items-center links">
          <i className="ri-heart-line mr-2" style={{ fontSize: "1.2rem" }}></i>
          Mes favoris
        </Link>
        <button className="flex items-center px-4 py-2 rounded-md custom-button">
          <i
            className="ri-shopping-cart-line mr-2"
            style={{ fontSize: "1.2rem" }}
          ></i>
          Panier
        </button>

        {/* Profile Section */}
        <div className="flex items-center profile-section">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="profile-image ri-user-fill"
          />
          <span className="profile-name">VN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
