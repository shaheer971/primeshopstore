
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getFAQs } from "../data/faqs";
import { 
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent 
} from "@/components/ui/accordion";
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
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
