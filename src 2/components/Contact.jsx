// src/components/Contact.js
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="p-8 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
