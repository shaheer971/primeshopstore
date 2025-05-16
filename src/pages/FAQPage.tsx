
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getFAQs } from "../data/faqs";

const FAQPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const faqs = getFAQs();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQ - PrimeShop";
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-center mb-12">
            Find answers to commonly asked questions about our products and services.
          </p>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="mb-6 border-b border-gray-200 pb-6 last:border-0"
              >
                <button 
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center text-left font-semibold text-lg hover:text-gray-700"
                >
                  {faq.question}
                  <svg 
                    className={`w-5 h-5 transform transition-transform ${openId === faq.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please contact our customer support team.
            </p>
            <a 
              href="/contact-us" 
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
