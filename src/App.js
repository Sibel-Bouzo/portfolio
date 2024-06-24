import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Protofilo from "./components/Protofilo/Protofilo";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useSpring, animated } from 'react-spring';
import { useState } from "react";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      {/* <Services /> */}
      <Protofilo />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
