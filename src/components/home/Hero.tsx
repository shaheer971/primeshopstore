
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "../icons/Icons";
import { Alert } from "../ui/hero-ui";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black">
        <img 
          src="/lovable-uploads/ca2a5a61-910a-4eaf-8a2d-2e838d3c1ec4.png" 
          alt="Skiing in mountains" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            STEP INTO STYLE — DISCOVER THE LATEST SNEAKERS!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the latest drops, exclusive collaborations, and must-have sneakers that will set your style apart.
          </p>
          <Link to="/products" className="hero-button">
            Shop Now <ArrowRightIcon size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
