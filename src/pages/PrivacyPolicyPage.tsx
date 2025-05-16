
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - PrimeShop";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: May 12, 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              At PrimeShop, we respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
            <p className="mb-4">
              Personal data means any information about an individual from which that person can be identified.
              It does not include data where the identity has been removed (anonymous data).
            </p>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Identity Data includes first name, last name, username or similar identifier.</li>
              <li className="mb-2">Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
              <li className="mb-2">Financial Data includes payment card details.</li>
              <li className="mb-2">Transaction Data includes details about payments to and from you and other details of products you have purchased from us.</li>
              <li className="mb-2">Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li className="mb-2">Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li className="mb-2">Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Request access to your personal data.</li>
              <li className="mb-2">Request correction of your personal data.</li>
              <li className="mb-2">Request erasure of your personal data.</li>
              <li className="mb-2">Object to processing of your personal data.</li>
              <li className="mb-2">Request restriction of processing your personal data.</li>
              <li className="mb-2">Request transfer of your personal data.</li>
              <li className="mb-2">Right to withdraw consent.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@primeshop.com<br />
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

export default PrivacyPolicyPage;
