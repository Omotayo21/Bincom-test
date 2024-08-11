// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML","JavaScript","Typescript", "React","vue.js","Next.js","express.js", "Node.js", "Tailwind CSS","framer motion", "MongoDB", "Mongoose", ];

const Skills = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-blue-500 sm:text-center text-white p-4 rounded-lg shadow-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
