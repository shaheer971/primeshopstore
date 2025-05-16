
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Search Results for "${query}" - PrimeShop`;
    
    // Filter products based on search query
    if (query) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) || 
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with the new search query
    window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`);
    
    // Filter products based on search query
    if (searchQuery) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
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
          <div className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-l-full p-3 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-black text-white px-8 rounded-r-full"
              >
                Search
              </button>
            </form>
          </div>
          
          {query ? (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                Search Results for "{query}"
                <span className="ml-2 text-gray-500 font-normal">({filteredProducts.length} results)</span>
              </h2>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-4">No products found</h3>
                  <p className="text-gray-600 mb-8">
                    We couldn't find any products matching your search. Try using different keywords or browse our categories.
                  </p>
                </div>
              ) : (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={item}>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Search for products</h2>
              <p className="text-gray-600 mb-8">
                Enter keywords to search for products across our store.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
