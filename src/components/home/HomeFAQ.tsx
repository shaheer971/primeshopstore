
import React from "react";
import { Link } from "react-router-dom";
import { getFAQs } from "../../data/faqs";
import { 
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const HomeFAQ = () => {
  const faqs = getFAQs(4);
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Frequently Asked Questions (FAQ)</h2>
        
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
