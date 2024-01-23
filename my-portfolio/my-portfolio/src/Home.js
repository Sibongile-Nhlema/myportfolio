import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <section>
      <About />
        <Projects />
        <Skills />
        <Contact />
    </section>
  );
}
