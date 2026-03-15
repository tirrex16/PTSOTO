import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Port to Ship',
      description: 'Reliable fuel transfer solutions directly from port facilities to your vessel, ensuring timely and compliant bunkering operations.',
      icon: 'fa-anchor',
      color: 'bg-[#00C9A7]',
      textColor: 'text-white'
    },
    {
      title: 'Ship to Ship',
      description: 'Expert ship-to-ship bunkering services designed for efficiency and safety, minimizing downtime for your maritime operations.',
      icon: 'fa-ship',
      color: 'bg-[#FF6B6B]',
      textColor: 'text-white'
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
              className="bg-white rounded-2xl sm:rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(42,51,93,0.12)] transition-all duration-500 border border-gray-100 group relative overflow-hidden flex flex-col text-left cursor-pointer"
            >
              {/* Light hover background effect */}
              <div className={`absolute -right-10 -top-10 w-48 h-48 opacity-0 group-hover:opacity-[0.08] transition-all duration-700 rounded-full blur-3xl ${service.color}`}></div>

              {/* Top Row: Icon & Arrow */}
              <div className="flex justify-between items-start mb-8 sm:mb-10 z-10">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${service.color} ${service.textColor} flex items-center justify-center text-2xl shadow-sm transform group-hover:-translate-y-1 transition-transform duration-500`}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#2A335D] group-hover:bg-[#2A335D] group-hover:text-white transition-all duration-300">
                  <i className="fa-solid fa-arrow-right transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#2A335D] mb-3 sm:mb-4 z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base z-10">
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
