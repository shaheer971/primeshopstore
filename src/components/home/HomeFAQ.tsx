
import React from "react";
import { Link } from "react-router-dom";
import { getFAQs } from "../../data/faqs";
import { Button } from "@/components/ui/button";

const HomeFAQ = () => {
  const faqs = getFAQs(4);
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Frequently Asked Questions (FAQ)</h2>
        
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
        
        <div className="text-center mt-8">
          <Link to="/faq">
            <Button variant="link" className="text-black font-semibold">
              View All FAQs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
