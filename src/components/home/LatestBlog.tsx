
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogPosts } from "../../data/blogs";

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

const LatestBlog = () => {
  const blogPosts = getBlogPosts(6);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">LATEST BLOG</h2>
          <Link to="/blog" className="text-sm font-semibold flex items-center hover:underline">
            SEE ALL POSTS
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path 
                d="M6 12L10 8L6 4" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
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
    </section>
  );
};

export default LatestBlog;
