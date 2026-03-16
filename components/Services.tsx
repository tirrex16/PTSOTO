import React, { useState } from 'react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: 'Port to Ship',
      description: 'Reliable fuel transfer solutions directly from port facilities to your vessel, ensuring timely and compliant bunkering operations.',
      icon: 'fa-anchor',
      color: 'bg-[#00C9A7]',
      textColor: 'text-white',
      image: '/PTS.jpeg',
      imagePosition: 'object-top'
    },
    {
      title: 'Ship to Ship',
      description: 'Expert ship-to-ship bunkering services designed for efficiency and safety, minimizing downtime for your maritime operations.',
      icon: 'fa-ship',
      color: 'bg-[#FF6B6B]',
      textColor: 'text-white',
      image: '/STS.jpeg',
      imagePosition: 'object-center'
    }
  ];

  return (
    <section id="services" className="bg-white pt-28 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:py-32 px-4 sm:px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2A335D] leading-tight tracking-tight">
            Services
          </h2>
          <p className="text-gray-500 max-w-xs sm:max-w-sm md:max-w-md text-base md:text-lg leading-relaxed font-medium">
            Tailored Solutions for Your Success, Elevate Your Experience with Our Exceptional and Comprehensive Services Today
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-sm sm:max-w-4xl mx-auto w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full aspect-[3/4] sm:aspect-[4/5] bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 cursor-pointer group"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-gray-900">
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${service.imagePosition || ''}`}
                />

                {/* Top Right Icon */}
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-colors duration-300 group-hover:bg-white group-hover:text-black z-10">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>

                {/* Bottom Overlay Area (Gradient + Glassmorphism) */}
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none z-0"></div>
                <div className="absolute inset-x-0 bottom-0 h-[40%] backdrop-blur-md bg-black/10 transition-all duration-500 pointer-events-none z-0 border-t border-white/10 [mask-image:linear-gradient(to_bottom,transparent,black_20%)]"></div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end z-10 pointer-events-none">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5 font-medium">
                    Bunkering Service
                  </p>

                  <div className="w-full bg-white text-black font-semibold rounded-2xl py-3.5 sm:py-4 flex items-center justify-center pointer-events-auto shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300 text-sm sm:text-base">
                    View Details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-[2rem] max-w-lg w-full overflow-hidden shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 sm:h-56 w-full">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className={`absolute inset-0 w-full h-full object-cover blur-[2px] scale-105 ${selectedService.imagePosition}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-${selectedService.color.split('[')[1].split(']')[0]}/80 to-black/20`} />
              
              <div className="absolute bottom-0 left-0 p-6 flex flex-row items-center gap-4">
                 <div className={`w-12 h-12 rounded-2xl ${selectedService.color} ${selectedService.textColor} flex items-center justify-center text-xl shadow-lg`}>
                   <i className={`fa-solid ${selectedService.icon}`}></i>
                 </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#2A335D] transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 sm:p-8">
               <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  <p>
                    {selectedService.description}
                  </p>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
