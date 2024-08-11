
import React from "react";
import { motion } from "framer-motion";
import pic1 from "../assets/feedback.png"; // replace with your own images
import pic2 from "../assets/quiz.png";
import pic3 from "../assets/expensehub-bg.png";
import pic4 from "../assets/shopping.png";

const portfolioItems = [
  {
    image: pic1,
    title: "Product feedback app",
    link: "https://product-feedback-app-ap8f-j61bn8v45-omotayo21s-projects.vercel.app/home",
  },
  {
    image: pic2,
    title: "quiz app",
    link: "https://quiz-app-fc4v.vercel.app/",
  },
  {
    image: pic3,
    title: "Expense tracker app",
    link: "https://expense-hub-2.onrender.com",
  },
  {
    image: pic4,
    title: "E-commerce app",
    link: "https://vue-shopping-qpuw32o2p-omotayo21s-projects.vercel.app/",
  },
];


const Portfolio = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>

    


      <h2 className=" font-semibold mb-2">
        Check out my full portfolio link{" "}
        <a href="https://al-rahman.vercel.app" className="text-blue-700">
          here
        </a>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className="border rounded-lg p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-lg font-bold mt-2 uppercase">{item.title}</h2>
            <a href={item.link} className="text-blue-500 mt-2 inline-block">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;