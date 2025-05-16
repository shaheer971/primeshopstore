
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addToast } from "@/components/ui/hero-toast";
import { Badge } from "@/components/ui/badge";
import { Alert, Button } from "@/components/ui/hero-ui";

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
  
  const [isVisible, setIsVisible] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    // Initialize all notifications as visible
    const initialVisibility: {[key: number]: boolean} = {};
    notifications.forEach(notification => {
      initialVisibility[notification.id] = true;
    });
    setIsVisible(initialVisibility);
    
    window.scrollTo(0, 0);
    document.title = "Notifications - PrimeShop";
  }, []);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
    addToast({
      title: "Success",
      description: "Notification marked as read",
      color: "success"
    });
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
    addToast({
      title: "Success",
      description: "All notifications marked as read",
      color: "success"
    });
  };

  const deleteNotification = (id: number) => {
    setIsVisible(prev => ({ ...prev, [id]: false }));
    
    // Remove from state after animation completes
    setTimeout(() => {
      setNotifications(notifications.filter(notification => notification.id !== id));
    }, 300);
    
    addToast({
      title: "Success",
      description: "Notification deleted successfully",
      color: "success"
    });
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "order":
        return "primary";
      case "promo":
        return "secondary";
      case "system":
        return "default";
      case "restock":
        return "success";
      default:
        return "default";
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
    <div className="min-h-screen flex flex-col font-inter">
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
            
            <Button 
              color="default"
              variant="bordered"
              className="text-sm"
              disabled={unreadCount === 0}
              onPress={markAllAsRead}
            >
              Mark all as read
            </Button>
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
              className="space-y-4"
            >
              {notifications.map((notification) => (
                isVisible[notification.id] !== false && (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 1, height: "auto" }}
                    animate={{ 
                      opacity: isVisible[notification.id] ? 1 : 0,
                      height: isVisible[notification.id] ? "auto" : 0
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert 
                      color={getNotificationColor(notification.type)}
                      variant={!notification.isRead ? "bordered" : "faded"}
                      title={notification.title}
                      description={notification.message}
                      className={`transition-all ${!notification.isRead ? "border-l-4" : ""} mb-4`}
                      endContent={
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
                          <span className="text-xs text-gray-500">{notification.date}</span>
                          {!notification.isRead && (
                            <Button 
                              color="default"
                              variant="light"
                              size="sm"
                              onPress={() => markAsRead(notification.id)}
                            >
                              Mark as read
                            </Button>
                          )}
                          <Button 
                            color="danger"
                            variant="light"
                            size="sm"
                            onPress={() => deleteNotification(notification.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      }
                    />
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
          
          {/* Examples showing different alert styles */}
          <div className="mt-16">
            <h2 className="text-xl font-bold mb-6">Alert Styles</h2>
            <div className="space-y-4">
              <Alert
                hideIconWrapper
                color="secondary"
                description="This is a bordered variant alert"
                title="Bordered Alert"
                variant="bordered"
              />
              
              <Alert
                color="success"
                description="Your action has been completed successfully. We'll notify you when updates are available."
                title="Success Notification"
                variant="faded"
                onClose={() => {}}
              />
              
              <Alert
                color="warning"
                description="Upgrade to a paid plan to continue"
                title="You have no credits left"
                variant="faded"
                endContent={
                  <Button color="warning" size="sm" variant="flat" onPress={() => {}}>
                    Upgrade
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotificationsPage;
