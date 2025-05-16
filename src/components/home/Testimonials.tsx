
import React from "react";
import { motion } from "framer-motion";
import { getTestimonials } from "../../data/testimonials";
import { StarIcon } from "../icons/Icons";

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

const Testimonials = () => {
  const testimonials = getTestimonials(6);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">WHAT OUR CUSTOMERS SAID</h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={item}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} className="text-yellow-400" filled={i < testimonial.rating} />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 line-clamp-4">"{testimonial.content}"</p>
              
              <p className="font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
