import React, { useState } from 'react';

const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <section id="mission" className="relative w-full min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center pt-28 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32 px-4 sm:px-6 md:px-12 overflow-hidden scroll-mt-24">

      {/* Background Gradient Spotlights */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Toggle Buttons */}
        <div className="flex space-x-6 sm:space-x-8 mb-12 md:mb-16 relative z-50">
          {(['mission', 'vision'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-bold uppercase transition-all duration-300 pb-2 border-b-2 ${
                activeTab === tab
                  ? 'text-white border-[#EADDCD]'
                  : 'text-gray-600 hover:text-gray-400 border-transparent'
              }`}
            >
              Our {tab}
            </button>
          ))}
        </div>

        {/* Quote / Content */}
        <div className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-10 md:mb-12 min-h-[120px] flex items-start justify-center relative z-40 px-2">
          <div className="text-white text-sm sm:text-base md:text-lg font-light leading-relaxed text-left">
            {activeTab === 'mission' ? (
              <ul className="space-y-3 sm:space-y-4 list-disc pl-4 sm:pl-5">
                <li>To provide high-quality <span className="text-amber-400 font-medium">Industrial Fuel (HSD B40)</span> and <span className="text-amber-400 font-medium">Marine Fuel Oil (MFO)</span> to meet the diverse needs of various industrial and shipping sectors.</li>
                <li>To build a strong and efficient distribution network to reach every strategic region in Indonesia.</li>
                <li>To maintain the highest operational standards in terms of safety, sustainability, and regulatory compliance.</li>
                <li>To create long-term value for clients through consistent fuel supply and responsive technical support.</li>
              </ul>
            ) : (
              <ul className="space-y-3 sm:space-y-4 list-disc pl-4 sm:pl-5">
                <li>To be the premier bunker fuel agent of choice in Indonesia, recognized for our <span className="text-amber-400 font-medium">supply reliability</span>, product quality, and outstanding customer service.</li>
                <li>To achieve operational excellence in bunker fuel distribution through the adoption of cutting-edge technology and digital transformation, ensuring the highest efficiency, transparency, and customer satisfaction throughout Indonesia.</li>
              </ul>
            )}
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="relative w-full flex items-center justify-center mt-6 md:mt-10 z-30 pointer-events-none">
          <h2 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[120px] font-black leading-none text-white opacity-90 tracking-tighter select-none">
            COMMITMENT
          </h2>
        </div>

        {/* Bottom Values */}
        <div className="mt-12 md:mt-20 grid grid-cols-3 gap-6 sm:gap-10 md:gap-12 w-full max-w-xs sm:max-w-lg md:max-w-3xl relative z-40">
          {[
            { label: 'Quality', sub: 'Certified Bunker Fuel' },
            { label: 'Integrity', sub: 'Transparent Operations' },
            { label: 'Service', sub: '24/7 Port Availability' },
          ].map((item) => (
            <div key={item.label} className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-amber-400 font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{item.label}</h4>
              <p className="text-gray-400 text-xs sm:text-sm">{item.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
