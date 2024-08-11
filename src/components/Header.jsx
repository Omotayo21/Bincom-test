
import React from "react";
import { motion } from "framer-motion";
import pic5 from "../assets/rahman.jpeg"

const Header = () => {
  return (
    <header className="bg-blue-900 flex flex-row text-white p-8">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-row gap-x-8"
      >
        <img src={pic5} alt="me" className="rounded-full lg:w-24 lg:h-24 sm:w-12 sm:h-12" />
        <div className="flex flex-col">
          <h1 className="lg:text-5xl font-bold">ABDULRAHMAN RUFAI</h1>
          <p className="lg:text-xl mt-4">Full Stack web Developer</p>
          <p className="lg:text-xl mt-4">rufaiabdulrahman21@gmail.com</p>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
