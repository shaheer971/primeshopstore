
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Notification = {
  id: number;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  type: "order" | "promo" | "system" | "restock";
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Order Shipped",
      message: "Your order #ORD-12345 has been shipped and is on its way!",
      date: "1 hour ago",
      isRead: false,
      type: "order"
    },
    {
      id: 2,
      title: "Weekend Sale",
      message: "Don't miss our weekend sale! 25% off all sneakers this weekend only.",
      date: "1 day ago",
      isRead: false,
      type: "promo"
    },
    {
      id: 3,
      title: "New Collection",
      message: "The Spring 2025 collection has arrived! Check out the latest styles now.",
      date: "3 days ago",
      isRead: true,
      type: "system"
    },
    {
      id: 4,
      title: "Restock Alert",
      message: "Urban Stepper Pro is back in stock in your size! Get it before it's gone again.",
      date: "5 days ago",
      isRead: true,
      type: "restock"
    },
    {
      id: 5,
      title: "Order Delivered",
      message: "Your order #ORD-12343 has been delivered! We hope you love your new sneakers.",
      date: "1 week ago",
      isRead: true,
      type: "order"
    }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Notifications - PrimeShop";
  }, []);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "order":
        return "bg-blue-100 text-blue-800";
      case "promo":
        return "bg-purple-100 text-purple-800";
      case "system":
        return "bg-gray-100 text-gray-800";
      case "restock":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "order":
        return "Order";
      case "promo":
        return "Promotion";
      case "system":
        return "System";
      case "restock":
        return "Restock";
      default:
        return "Notification";
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              Notifications
              {unreadCount > 0 && (
                <Badge variant="outline" className="ml-2 text-xs font-normal">
                  {unreadCount} unread
                </Badge>
              )}
            </h1>
            
            <button 
              onClick={markAllAsRead}
              className="text-sm hover:underline"
              disabled={unreadCount === 0}
            >
              Mark all as read
            </button>
          </div>
          
          {notifications.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-xl font-medium mb-2">No notifications</h2>
              <p className="text-gray-600">You don't have any notifications at this time.</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <Card 
                    key={notification.id} 
                    className={`transition-colors ${!notification.isRead ? "bg-gray-50 border-l-4 border-l-black" : ""}`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <h3 className={`font-semibold ${!notification.isRead ? "font-bold" : ""}`}>
                              {notification.title}
                            </h3>
                            <span className={`text-xs px-2 py-1 rounded ml-3 ${getTypeColor(notification.type)}`}>
                              {getTypeLabel(notification.type)}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.date}</p>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                          {!notification.isRead && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="text-sm hover:underline"
                            >
                              Mark as read
                            </button>
                          )}
                          <button 
                            onClick={() => deleteNotification(notification.id)}
                            className="text-sm text-gray-500 hover:text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotificationsPage;
