
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getFAQs } from "../../data/faqs";

const HomeFAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const faqs = getFAQs(4);
  
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Frequently Asked Questions (FAQ)</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="mb-4 border-b border-gray-300 pb-4 last:border-0"
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
        
        <div className="text-center mt-8">
          <Link 
            to="/faq" 
            className="inline-block text-black font-semibold hover:underline"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
