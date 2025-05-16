
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Refund Policy - PrimeShop";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: May 12, 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Returns</h2>
            <p className="mb-4">
              We want you to be completely satisfied with your purchase. If you're not entirely happy with your order, we're here to help.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Return Eligibility</h3>
            <p className="mb-4">
              You may return your order within 30 days of delivery if:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">The item is unused and in its original condition</li>
              <li className="mb-2">The item is in its original packaging</li>
              <li className="mb-2">All tags are attached</li>
              <li className="mb-2">You have a receipt or proof of purchase</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Non-Returnable Items</h3>
            <p className="mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Items that have been used or worn</li>
              <li className="mb-2">Items marked as "Final Sale" or "Clearance"</li>
              <li className="mb-2">Gift cards</li>
              <li className="mb-2">Personalized or custom-made products</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Refunds</h2>
            <p className="mb-4">
              Once we receive your returned item, we will inspect it and notify you about the status of your refund.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Refund Process</h3>
            <p className="mb-4">
              If your return is approved:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">We will initiate a refund to your original method of payment</li>
              <li className="mb-2">Credit card refunds may take 5-10 business days to appear on your statement, depending on your credit card company</li>
              <li className="mb-2">For payment by check, the refund will be issued as a store credit</li>
              <li className="mb-2">If the item was a gift, the refund will be issued as a store credit</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Shipping Costs</h3>
            <p className="mb-4">
              Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund unless the return is due to our error.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Exchanges</h2>
            <p className="mb-4">
              If you need to exchange an item for a different size or color, please return the original item for a refund and place a new order for the desired item.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Damaged or Defective Items</h2>
            <p className="mb-4">
              If you receive a damaged or defective item, please contact our customer service team at support@primeshop.com within 48 hours of receipt. Include photos of the damaged item and the packaging.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our return policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: returns@primeshop.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Commerce Street, New York, NY 10001, USA
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
