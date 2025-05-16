
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - PrimeShop";
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12">
            Have a question or need help? Get in touch with our team.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="product">Product Information</option>
                        <option value="return">Return or Exchange</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Store Location</h2>
                  <p className="text-gray-600 mb-2">123 Commerce Street</p>
                  <p className="text-gray-600 mb-2">New York, NY 10001</p>
                  <p className="text-gray-600">United States</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Opening Hours</h2>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Phone:</span> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Email:</span> support@primeshop.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Customer Service:</span> 24/7 Available
                  </p>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                  <div className="flex gap-4">
                    {['Instagram', 'Twitter', 'Facebook', 'YouTube'].map((social) => (
                      <a 
                        key={social} 
                        href="#" 
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        {social[0]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
