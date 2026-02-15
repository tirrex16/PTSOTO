import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-white pt-32 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#2A335D] leading-tight tracking-tight max-w-3xl">
            Maritime Energy Solutions
            {/* <span className="block w-24 h-2 bg-[#00C9A7] mt-6 rounded-full"></span> */}
          </h1>
          <p className="text-gray-500 max-w-md text-lg leading-relaxed font-medium mb-2">
            Dedicated to providing reliable and efficient industrial and maritime energy solutions, we have quickly positioned ourselves as a trusted partner in the distribution of
            industrial diesel fuel.
          </p>
        </div>

        {/* Main Visual */}
        <div className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
          <img
            src="https://www.itu.int/hub/wp-content/uploads/sites/4/2025/09/BR_WMD-AdobeStock_1601866117.jpg.optimal.jpg"
            alt="Abstract White Architecture"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />


          {/* Overlay Text */}
          <div className="absolute top-12 left-12 max-w-xs">
            <h3 className="text-[white] font-bold text-xl mb-2">PT Soto Energi Shakti</h3>
            {/* <p className="text-gray-500 text-sm">Headshot</p> */}
          </div>
        </div>

        {/* Stats Section (Pill Shape) */}
        <div className="mt-12 border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">

            <div className="px-4 flex items-center justify-center md:justify-start gap-4">
              <span className="text-5xl md:text-6xl font-bold text-[#2A335D]">100+</span>
              <div className="text-gray-500 text-sm font-medium leading-tight">
                Areas <br /> Serviced
              </div>
            </div>

            <div className="px-4 flex items-center justify-center md:justify-start gap-4 md:-ml-12">
              <span className="text-5xl md:text-6xl font-bold text-[#2A335D]">1.000.000+</span>
              <div className="text-gray-500 text-sm font-medium leading-tight">
                Liters <br /> Supplied
              </div>
            </div>

            <div className="px-4 flex items-center justify-center md:justify-start gap-4">
              <span className="text-5xl md:text-6xl font-bold text-[#2A335D]">100%</span>
              <div className="text-gray-500 text-sm font-medium leading-tight">
                Satisfaction <br /> Guarantee
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
