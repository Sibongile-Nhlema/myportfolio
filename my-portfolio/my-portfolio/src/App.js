import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Articles from "./components/Articles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog'

export default function App() {
  return (
    <BrowserRouter>
      <main className="text-gray-900 bg-gray-200 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Articles />
        <Contact />
        <Routes>
        <Route path="/components/blog" component={Blog} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

