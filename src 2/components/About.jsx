// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import CVViewer from "./CvViewer";

const About = () => {
  return (
    <section className="p-8 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I'm a frontend web developer with over 2 years of experience with a
          strong focus on creating visually appealing, responsive and scalable
          websites and web applications. Feel free to connect and share your
          project ideas and I would be delighted to collaborate with you and
          help bring your ideas into reality. I look forward to hearing from you
        </p>
      </motion.div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">My CV :</h2>
     <a
          href="../assets/Abdulrahman-CV.pdf"
          download="Abdulrahman-CV.pdf"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
