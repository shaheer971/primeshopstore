
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Prime Runner X9", price: 129.99, image: "/placeholder.svg", quantity: 1 },
    { id: 2, name: "Urban Stepper Pro", price: 149.99, image: "/placeholder.svg", quantity: 2 },
    { id: 3, name: "Air Swift Lite", price: 89.99, image: "/placeholder.svg", quantity: 1 }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Your Cart - PrimeShop";
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 12.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link 
                to="/products" 
                className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {cartItems.map((item) => (
                    <Card key={item.id} className="mb-4 overflow-hidden">
                      <div className="flex flex-col sm:flex-row p-4">
                        <div className="w-full sm:w-28 h-28 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-grow sm:ml-6 flex flex-col sm:flex-row justify-between">
                          <div>
                            <h3 className="font-semibold mb-1">{item.name}</h3>
                            <p className="text-gray-500 text-sm mb-3">SKU: #SKU{item.id}00{item.id}</p>
                            <div className="flex items-center">
                              <Badge variant="outline" className="text-xs">In Stock</Badge>
                            </div>
                          </div>
                          
                          <div className="mt-4 sm:mt-0 flex flex-col items-start sm:items-end">
                            <p className="font-semibold text-lg mb-2">${item.price.toFixed(2)}</p>
                            
                            <div className="flex items-center mb-3">
                              <button 
                                className="w-8 h-8 flex items-center justify-center bg-gray-100" 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="w-12 text-center">{item.quantity}</span>
                              <button 
                                className="w-8 h-8 flex items-center justify-center bg-gray-100"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            
                            <button 
                              className="text-sm text-gray-500 hover:text-black"
                              onClick={() => removeItem(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </motion.div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Card className="sticky top-24">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Shipping</span>
                          <span>${shipping.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4 mb-6">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to="/checkout" 
                        className="block w-full bg-black text-white text-center py-3 rounded-full hover:opacity-90 transition-opacity"
                      >
                        Proceed to Checkout
                      </Link>
                      
                      <Link 
                        to="/products" 
                        className="block w-full text-center mt-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
