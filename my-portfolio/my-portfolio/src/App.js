import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Articles from "./components/Articles";

export default function App() {
  return (
    <main className="text-gray-900 bg-gray-200 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Articles />
      <Contact />
    </main>
  );
}
