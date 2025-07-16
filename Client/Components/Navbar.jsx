import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";
import Nav_icon from "../src/assets/Logo_icon.png";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setisStickey] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisStickey(true);
      } else {
        setisStickey(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Shop", link: "/shop" },
    { name: "Sell Book", link: "/admin/dashboard" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <header>
      <nav className="">
        <div className="">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-blue-600 font-bold text-2xl gap-2"
          >
            Books
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
