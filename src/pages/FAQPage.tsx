
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getFAQs } from "../data/faqs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const faqs = getFAQs();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQ - PrimeShop";
  }, []);

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
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border bg-white rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 font-semibold text-lg cursor-pointer">
                      {faq.question}
                      <span className="transition group-open:rotate-180">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please contact our customer support team.
            </p>
            <Link to="/contact-us">
              <Button className="bg-black text-white hover:bg-black/90" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
