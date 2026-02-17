
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import Hero from './components/Hero';
import Intro from './components/Intro';
import MissionVision from './components/MissionVision';
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#2A335D] selection:text-white">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
            </>
          } />
          <Route path="/about" element={<Intro />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
