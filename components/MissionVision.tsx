import React, { useState } from 'react';

const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <section id="mission" className="relative w-full min-h-[80vh] bg-[#1a1a1a] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">

      {/* Background Gradient Spotlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Toggle Buttons */}
        <div className="flex space-x-8 mb-16 relative z-50">
          {['mission', 'vision'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'mission' | 'vision')}
              className={`cursor-pointer text-sm tracking-[0.2em] font-bold uppercase transition-all duration-300 ${activeTab === tab ? 'text-white border-b-2 border-[#EADDCD] pb-2' : 'text-gray-600 hover:text-gray-400 pb-2 border-b-2 border-transparent'
                }`}
            >
              Our {tab}
            </button>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mb-12 min-h-[100px] flex items-center justify-center relative z-40">
          <div className="text-white text-lg md:text-xl font-light leading-relaxed">
            {activeTab === 'mission' ? (
              <ul className="text-left space-y-4 list-disc pl-5">
                <li>To provide high-quality <span className="text-amber-400 font-medium">Industrial Solar Fuel (HSD B40)</span> and <span className="text-amber-400 font-medium">Marine Fuel Oil (MFO)</span> to meet the diverse needs of various industrial and shipping sectors.</li>
                <li>To build a strong and efficient distribution network to reach every strategic region in Indonesia.</li>
                <li>To maintain the highest operational standards in terms of safety, sustainability, and regulatory compliance.</li>
                <li>To create long-term value for clients through consistent fuel supply and responsive technical support.</li>
              </ul>
            ) : (
              <ul className="text-left space-y-4 list-disc pl-5">
                <li>To be the premier bunker fuel agent of choice in Indonesia, recognized for our <span className="text-amber-400 font-medium">supply reliability</span>, product quality, and outstanding customer service.</li>
                <li>To achieve operational excellence in bunker fuel distribution through the adoption of cutting-edge technology and digital transformation, ensuring the highest efficiency, transparency, and customer satisfaction throughout Indonesia.</li>
              </ul>
            )}
          </div>
        </div>

        {/* Massive Text Layer */}
        <div className="relative w-full flex items-center justify-center mt-8 md:mt-16 z-30 pointer-events-none">
          {/* Background Text Layer */}
          <h2 className="text-[12vw] md:text-[130px] font-black leading-none text-white opacity-90 tracking-tighter select-none transition-all duration-300">
            COMMITMENT
          </h2>
        </div>

        {/* Bottom Values/Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl px-6 relative z-40">
          <div className="text-center group hover:transform hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-amber-400 font-bold text-lg mb-2">Quality</h4>
            <p className="text-gray-400 text-sm">Certified Bunker Fuel</p>
          </div>
          <div className="text-center group hover:transform hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-amber-400 font-bold text-lg mb-2">Integrity</h4>
            <p className="text-gray-400 text-sm">Transparent Operations</p>
          </div>
          <div className="text-center group hover:transform hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-amber-400 font-bold text-lg mb-2">Service</h4>
            <p className="text-gray-400 text-sm">24/7 Port Availability</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
