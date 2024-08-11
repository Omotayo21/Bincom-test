// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PictureShowcase from "./components/Friends"


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <PictureShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
