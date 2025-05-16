
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Prime Runner X9", price: 129.99, image: "/placeholder.svg", quantity: 1 },
    { id: 2, name: "Urban Stepper Pro", price: 149.99, image: "/placeholder.svg", quantity: 2 }
  ]);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "United States"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Checkout - PrimeShop";
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the order to a backend
    console.log("Order submitted:", { items: cart, customer: formData });
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const shipping = 12.99;
  const subtotal = calculateSubtotal();
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customer Information */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                    <form onSubmit={handleFormSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                          />
                        </div>
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
                        <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium mb-1">ZIP Code</label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="flex items-center border border-gray-300 rounded-md p-3">
                          <input
                            type="radio"
                            id="creditCard"
                            name="paymentMethod"
                            className="mr-3"
                            defaultChecked
                          />
                          <label htmlFor="creditCard">Credit Card</label>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-md p-3">
                          <input
                            type="radio"
                            id="paypal"
                            name="paymentMethod"
                            className="mr-3"
                          />
                          <label htmlFor="paypal">PayPal</label>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-md p-3">
                          <input
                            type="radio"
                            id="applePay"
                            name="paymentMethod"
                            className="mr-3"
                          />
                          <label htmlFor="applePay">Apple Pay</label>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                            <p className="font-medium">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full mt-6 bg-black text-white py-3 rounded-full hover:opacity-90 transition-opacity"
                      onClick={handleFormSubmit}
                    >
                      Place Order
                    </button>
                    
                    <div className="mt-4 text-center">
                      <Link to="/cart" className="text-sm text-gray-600 hover:underline">
                        Return to Cart
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
