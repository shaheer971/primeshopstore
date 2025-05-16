
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const WishlistPage = () => {
  // Mock wishlist data - in a real app, this would come from a database or localStorage
  const [wishlistItems, setWishlistItems] = useState(
    products.filter(p => [1, 3, 5].includes(p.id)).map(p => ({ ...p, isInWishlist: true }))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wishlist - PrimeShop";
  }, []);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
          
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8">You haven't added any products to your wishlist yet.</p>
              <Link 
                to="/products" 
                className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <>
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
              >
                {wishlistItems.map((product) => (
                  <motion.div key={product.id} variants={item} className="relative group">
                    <ProductCard product={product} />
                    <button 
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="flex justify-center mt-12">
                <Link 
                  to="/products" 
                  className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WishlistPage;
