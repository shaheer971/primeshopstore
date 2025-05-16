
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const features = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Free shipping on all orders over $100 and free returns."
  },
  {
    icon: "✓",
    title: "Secure Payments",
    description: "Your payments are encrypted and processed with top-tier security."
  },
  {
    icon: "🔄",
    title: "Money Back Guarantee",
    description: "Not satisfied with our product? Get a full refund within 30 days."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center bg-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
