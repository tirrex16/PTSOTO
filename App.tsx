
import React from 'react';
import Navbar from './components/Navigation';
import Hero from './components/Hero';
import Intro from './components/Intro';
import MissionVision from './components/MissionVision';
import Products from './components/Products';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#222222] selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Navigation Targets with sufficient margin for fixed header */}
        <section id="about" className="scroll-mt-24">
          <Intro />
        </section>

        <section id="mission" className="scroll-mt-24">
          <MissionVision />
        </section>

        <section id="products" className="scroll-mt-24">
          <Products />
        </section>
      </main>

      <section id="contact" className="scroll-mt-24">
        <Footer />
      </section>
    </div>
  );
};

export default App;
