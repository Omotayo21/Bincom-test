import React from "react";
import { motion } from "framer-motion";

import Image2 from "../assets/fty.jpeg";
import Image3 from "../assets/muhsi.jpeg";
import Image4 from "../assets/me .jpeg";
import Image5 from "../assets/gift.jpeg";

const friends = [
 
  {
    name: "Friend 2",
    img: Image2,
    quote: "A problem solver who never gives up.",
  },
  { name: "Friend 3", img: Image3, quote: "A team player and a true leader." },
  {
    name: "Friend 4",
    img: Image4,
    quote: "Innovative and always thinking outside the box.",
  },
  {
    name: "Friend 5",
    img: Image5,
    quote: "Dependable and trustworthy, always delivers.",
  },
];

const PictureShowcase = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        What My Friends Say About Me
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {friends.map((friend, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img
              src={friend.img}
              alt={friend.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{friend.name}</h3>
            <p className="text-gray-600">{friend.quote}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PictureShowcase;
