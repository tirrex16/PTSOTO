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
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2A335D] mb-4 md:mb-6">Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Tailored Solutions for Your Success, Elevate Your Experience with Our Exceptional and Comprehensive Services Today
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-[2rem] p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col items-center text-center border border-gray-100"
            >
              {/* Icon Circle */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${service.color} ${service.textColor} flex items-center justify-center text-2xl sm:text-3xl mb-6 sm:mb-8 shadow-md`}>
                <i className={`fa-solid ${service.icon}`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#2A335D] mb-3 sm:mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
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
