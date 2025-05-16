
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { ProductGridSkeleton } from "../components/ProductSkeleton";
import { products, getAllCategories } from "../data/products";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [isLoading, setIsLoading] = useState(true);
  const categories = ["All", ...getAllCategories()];
  
  // Featured collections with specific filters
  const newArrivals = products.slice(0, 4);
  const bestSellers = products.filter(p => p.isPopular).slice(0, 4);
  const onSale = products.filter(p => p.isOnSale).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop - PrimeShop";
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (activeCategory !== "All") {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => {
          const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
          const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
          return dateB - dateA;
        });
        break;
      case "popular":
        result = result.filter(p => p.isPopular);
        break;
      default:
        // Keep default order
        break;
    }
    
    setFilteredProducts(result);
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-black text-white">
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80" 
            alt="Shop Hero Banner" 
            className="w-full h-[500px] object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Premium Collection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-xl"
            >
              Discover our exclusive collection of premium sneakers designed for style and performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-full text-lg">
                Shop Now
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="container-custom py-16">
          {/* Featured Collections */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* New Arrivals Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="New Arrivals" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">New Arrivals</h3>
                  <p className="text-white/80 mb-4">Check out our latest drops</p>
                  <Button className="bg-white text-black hover:bg-gray-200 w-full">
                    Explore
                  </Button>
                </div>
              </motion.div>

              {/* Best Sellers Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Best Sellers" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Best Sellers</h3>
                  <p className="text-white/80 mb-4">Our most popular products</p>
                  <Button className="bg-white text-black hover:bg-gray-200 w-full">
                    Shop Now
                  </Button>
                </div>
              </motion.div>

              {/* On Sale Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="On Sale" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Special Offers</h3>
                  <p className="text-white/80 mb-4">Limited time discounts</p>
                  <Button className="bg-white text-black hover:bg-gray-200 w-full">
                    View Deals
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* New Arrivals Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">New Arrivals</h2>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                View All
              </Button>
            </div>
            
            {isLoading ? (
              <ProductGridSkeleton count={4} />
            ) : (
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {newArrivals.map((product) => (
                  <motion.div key={product.id} variants={item}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>

          {/* Best Sellers Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Best Sellers</h2>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                View All
              </Button>
            </div>
            
            {isLoading ? (
              <ProductGridSkeleton count={4} />
            ) : (
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {bestSellers.map((product) => (
                  <motion.div key={product.id} variants={item}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>

          {/* Special Offers */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Special Offers</h2>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                View All
              </Button>
            </div>
            
            {isLoading ? (
              <ProductGridSkeleton count={4} />
            ) : (
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {onSale.map((product) => (
                  <motion.div key={product.id} variants={item}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>

          {/* Subscribe Banner */}
          <section className="bg-black text-white py-16 px-8 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
              <p className="text-lg mb-8 text-gray-300">
                Stay updated with our latest collections, exclusive offers, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-full focus:outline-none text-black flex-grow max-w-md"
                />
                <Button className="bg-white text-black hover:bg-gray-200 px-8 rounded-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopPage;
