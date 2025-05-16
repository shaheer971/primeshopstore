
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getBlogPosts } from "../data/blogs";

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

const BlogPage = () => {
  const blogPosts = getBlogPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - PrimeShop";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Blog</h1>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div 
                key={post.id}
                variants={item}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{post.summary}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
