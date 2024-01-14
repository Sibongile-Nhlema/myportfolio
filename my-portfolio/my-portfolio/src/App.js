import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <main className="text-gray-900 bg-gray-200 body-font">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pages/Blog" element={<Blog />} />
          </Routes>
      </main>
    </BrowserRouter>
  );
}

