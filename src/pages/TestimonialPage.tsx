
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getTestimonials } from "../data/testimonials";
import { StarIcon } from "../components/icons/Icons";

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

const TestimonialPage = () => {
  const testimonials = getTestimonials();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Testimonials - PrimeShop";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-2 text-center">Customer Testimonials</h1>
          <p className="text-gray-600 text-center mb-12">
            See what our customers are saying about their shopping experience with us.
          </p>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                variants={item}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-yellow-400" filled={i < testimonial.rating} />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear about your experience with PrimeShop! Leave a review and let others know what you think.
            </p>
            <button 
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:opacity-90 transition-opacity"
            >
              Write a Review
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestimonialPage;
