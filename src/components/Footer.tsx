
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./icons/Icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">SUBSCRIBE TO NEWSLETTER</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-gray-800 text-white px-4 py-3 w-full focus:outline-none"
              />
              <button className="bg-white text-black px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NAVIGATION</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link to="/testimonial" className="hover:text-gray-300">Testimonial</Link></li>
              <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PAGES</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="hover:text-gray-300">Shop</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-gray-300">Refund Policy</Link></li>
              <li><Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="/404" className="hover:text-gray-300">404</Link></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
            <ul className="space-y-3">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter ( X )</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Youtube</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Tiktok</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© Made By Ismail@Primeui</p>
          <Logo className="text-white text-4xl md:text-6xl transform scale-[2]" />
          <p>Copyright 2025, Ismail</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
