 import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-white pt-28 pb-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2A335D] leading-tight tracking-tight max-w-3xl">
            Maritime Energy Solutions
          </h1>
          <p className="text-gray-500 max-w-xs sm:max-w-sm md:max-w-md text-base md:text-lg leading-relaxed font-medium">
            Dedicated to providing reliable and efficient industrial and maritime energy solutions, we have quickly positioned ourselves as a trusted partner in the distribution of
            industrial diesel fuel.
          </p>
        </div>

        {/* Main Visual */}
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group">
          <img
            src="https://www.itu.int/hub/wp-content/uploads/sites/4/2025/09/BR_WMD-AdobeStock_1601866117.jpg.optimal.jpg"
            alt="Maritime Energy Solutions"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Overlay Text */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 md:top-12 md:left-12 max-w-xs">
            <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">PT Soto Energi Shakti</h3>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 md:mt-12 border border-gray-200 rounded-2xl sm:rounded-[2rem] py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 shadow-sm bg-white">
          <div className="grid grid-cols-3 divide-x divide-gray-100">

            <div className="flex flex-col items-center justify-center gap-1.5 px-2 sm:px-4 text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A335D] leading-none">100+</span>
              <div className="text-gray-500 text-xs sm:text-sm font-medium leading-snug">
                Areas<br />Serviced
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-1.5 px-2 sm:px-4 text-center">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2A335D] leading-none">1.000.000+</span>
              <div className="text-gray-500 text-xs sm:text-sm font-medium leading-snug">
                Liters<br />Supplied
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-1.5 px-2 sm:px-4 text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A335D] leading-none">100%</span>
              <div className="text-gray-500 text-xs sm:text-sm font-medium leading-snug">
                Satisfaction<br />Guarantee
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
