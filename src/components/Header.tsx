
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Logo, CartIcon, NotificationIcon, UserIcon, SearchIcon } from "./icons/Icons";
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// Badge implementation for notification and cart icons
const BadgeMock = ({ 
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
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <header className="border-b border-gray-200 py-4 sticky top-0 bg-white z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm p-0">
            <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50">
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <Logo />
                <SheetClose className="rounded-full hover:bg-gray-100 p-2">
                  <svg
                    className="w-5 h-5"
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
                </SheetClose>
              </div>
              
              <div className="overflow-y-auto flex-1">
                <div className="px-6 py-8">
                  <nav>
                    <ul className="space-y-6">
                      {navLinks.map((link) => (
                        <li key={link.name}>
                          <SheetClose asChild>
                            <Link
                              to={link.path}
                              className={`text-xl font-medium flex items-center ${
                                isActive(link.path) 
                                  ? "text-black" 
                                  : "text-gray-600 hover:text-black"
                              }`}
                            >
                              {link.name}
                              {isActive(link.path) && (
                                <span className="ml-2 w-2 h-2 rounded-full bg-black"></span>
                              )}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  
                  <div className="mt-10 border-t border-gray-200 pt-6 space-y-6">
                    <SheetClose asChild>
                      <Link to="/account" className="flex items-center text-lg py-2">
                        <UserIcon className="mr-3" size={20} />
                        My Account
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/wishlist" className="flex items-center text-lg py-2">
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          className="mr-3"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        Wishlist
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/notifications" className="flex items-center text-lg py-2">
                        <NotificationIcon className="mr-3" size={20} />
                        Notifications 
                        {notificationCount > 0 && (
                          <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                            {notificationCount}
                          </span>
                        )}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/cart" className="flex items-center text-lg py-2">
                        <CartIcon className="mr-3" size={20} />
                        Cart
                        {cartCount > 0 && (
                          <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                            {cartCount}
                          </span>
                        )}
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <SheetClose asChild>
                  <Link to="/shop">
                    <Button className="w-full bg-black text-white hover:bg-black/90">
                      Shop Now
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-6">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-black",
                    isActive(link.path)
                      ? "text-black border-b-2 border-black pb-1"
                      : "text-gray-600"
                  )}
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side icons */}
        <div className="flex items-center space-x-6 z-10">
          <Link to="/search" className="hidden md:block">
            <SearchIcon className="text-gray-800 hover:text-black transition-colors" />
          </Link>
          <Link to="/account">
            <UserIcon className="text-gray-800 hover:text-black transition-colors" />
          </Link>
          <Link to="/notifications">
            <BadgeMock color="danger" content={notificationCount} shape="circle">
              <NotificationIcon className="text-gray-800 hover:text-black transition-colors" />
            </BadgeMock>
          </Link>
          <Link to="/cart">
            <BadgeMock color="danger" content={cartCount} shape="circle">
              <CartIcon className="text-gray-800 hover:text-black transition-colors" />
            </BadgeMock>
          </Link>
          <Link to="/shop" className="bg-black text-white px-4 py-2 rounded-full hidden md:flex hover:opacity-90 transition-opacity">
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
