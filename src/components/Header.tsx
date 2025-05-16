
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo, CartIcon, NotificationIcon, UserIcon, SearchIcon } from "./icons/Icons";

// This is a mock for the HeroUI Badge component that was requested
const Badge = ({ 
  children, 
  content, 
  color = "danger", 
  isInvisible = false,
  shape = "circle" 
}: {
  children: React.ReactNode;
  content: number;
  color?: string;
  isInvisible?: boolean;
  shape?: string;
}) => {
  if (isInvisible) return <>{children}</>;
  
  return (
    <div className="relative inline-flex">
      {children}
      <span className={`absolute -top-2 -right-2 flex items-center justify-center h-5 min-w-5 text-xs text-white 
        ${color === "danger" ? "bg-red-500" : "bg-blue-500"} 
        ${shape === "circle" ? "rounded-full px-1" : "rounded px-1"}`}>
        {content}
      </span>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(5);
  const [notificationCount, setNotificationCount] = useState(3);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-800 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <Logo />
              <button onClick={() => setIsMenuOpen(false)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}

        {/* Right side icons */}
        <div className="flex items-center space-x-4 z-10">
          <Link to="/search" className="hidden md:block">
            <SearchIcon className="text-gray-800" />
          </Link>
          <Link to="/account">
            <UserIcon className="text-gray-800" />
          </Link>
          <Link to="/notifications">
            <Badge color="danger" content={notificationCount} shape="circle">
              <NotificationIcon className="text-gray-800" />
            </Badge>
          </Link>
          <Link to="/cart">
            <Badge color="danger" content={cartCount} shape="circle">
              <CartIcon className="text-gray-800" />
            </Badge>
          </Link>
          <Link to="/shop" className="bg-black text-white px-4 py-2 rounded-full hidden md:flex">
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
