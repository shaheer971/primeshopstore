
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AccountPage = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States"
  });

  // Mock order history
  const orders = [
    { id: "ORD-12345", date: "May 10, 2025", status: "Delivered", total: 249.98, items: 2 },
    { id: "ORD-12344", date: "April 28, 2025", status: "Shipped", total: 129.99, items: 1 },
    { id: "ORD-12343", date: "April 15, 2025", status: "Delivered", total: 89.99, items: 1 },
    { id: "ORD-12342", date: "March 30, 2025", status: "Delivered", total: 199.97, items: 3 }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "My Account - PrimeShop";
  }, []);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would update the profile in a database
    console.log("Profile updated:", profileData);
    toast.success("Profile updated successfully!");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-8 border-b w-full flex justify-start rounded-none">
              <TabsTrigger value="profile" className="text-base px-6 py-3">Profile</TabsTrigger>
              <TabsTrigger value="orders" className="text-base px-6 py-3">Order History</TabsTrigger>
              <TabsTrigger value="wishlist" className="text-base px-6 py-3">Wishlist</TabsTrigger>
              <TabsTrigger value="settings" className="text-base px-6 py-3">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                    
                    <form onSubmit={handleProfileUpdate}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="md:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={profileData.address}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={profileData.city}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium mb-1">State/Province</label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={profileData.state}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium mb-1">ZIP Code</label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={profileData.zipCode}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                          <select
                            id="country"
                            name="country"
                            value={profileData.country}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <button 
                          type="submit" 
                          className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="orders">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Order History</h2>
                    
                    {orders.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                          <thead className="text-gray-700 bg-gray-50">
                            <tr>
                              <th className="px-6 py-3">Order ID</th>
                              <th className="px-6 py-3">Date</th>
                              <th className="px-6 py-3">Status</th>
                              <th className="px-6 py-3">Items</th>
                              <th className="px-6 py-3">Total</th>
                              <th className="px-6 py-3">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order) => (
                              <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">{order.id}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4">
                                  <span className={`px-2 py-1 rounded text-xs ${
                                    order.status === "Delivered" 
                                      ? "bg-green-100 text-green-800" 
                                      : order.status === "Shipped" 
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}>
                                    {order.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4">{order.items}</td>
                                <td className="px-6 py-4">${order.total.toFixed(2)}</td>
                                <td className="px-6 py-4">
                                  <a href="#" className="text-black hover:underline">View</a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
                        <Link 
                          to="/products" 
                          className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                        >
                          Start Shopping
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="wishlist">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center py-6">
                  <Link to="/wishlist" className="text-black hover:underline">
                    View your wishlist
                  </Link>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="settings">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b">
                        <div>
                          <h3 className="font-medium">Change Password</h3>
                          <p className="text-sm text-gray-500">Update your password for better security</p>
                        </div>
                        <button className="text-black hover:underline">Change</button>
                      </div>
                      
                      <div className="flex justify-between items-center py-4 border-b">
                        <div>
                          <h3 className="font-medium">Email Notifications</h3>
                          <p className="text-sm text-gray-500">Manage your email preferences</p>
                        </div>
                        <button className="text-black hover:underline">Manage</button>
                      </div>
                      
                      <div className="flex justify-between items-center py-4 border-b">
                        <div>
                          <h3 className="font-medium">Payment Methods</h3>
                          <p className="text-sm text-gray-500">Add or remove payment methods</p>
                        </div>
                        <button className="text-black hover:underline">Manage</button>
                      </div>
                      
                      <div className="flex justify-between items-center py-4">
                        <div>
                          <h3 className="font-medium text-red-600">Delete Account</h3>
                          <p className="text-sm text-gray-500">Permanently delete your account and data</p>
                        </div>
                        <button className="text-red-600 hover:underline">Delete</button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountPage;
