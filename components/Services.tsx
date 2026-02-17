import React from 'react';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Port to Ship',
            description: 'Reliable fuel transfer solutions directly from port facilities to your vessel, ensuring timely and compliant bunkering operations.',
            icon: 'fa-anchor',
            color: 'bg-[#00C9A7]', // Teal
            textColor: 'text-white'
        },
        {
            title: 'Ship to Ship',
            description: 'Expert ship-to-ship bunkering services designed for efficiency and safety, minimizing downtime for your maritime operations.',
            icon: 'fa-ship',
            color: 'bg-[#FF6B6B]', // Red/Coral accent for contrast
            textColor: 'text-white'
        }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">

                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2A335D] mb-6">Our Services</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Tailored Solutions for Your Success, Elevate Your Experience with Our Exceptional and Comprehensive Services Today
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col items-center text-center border border-gray-100"
                        >
                            {/* Icon Circle */}
                            <div className={`w-20 h-20 rounded-full ${service.color} ${service.textColor} flex items-center justify-center text-3xl mb-8 shadow-md`}>
                                <i className={`fa-solid ${service.icon}`}></i>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[#2A335D] mb-4">{service.title}</h3>

                            {/* Description */}
                            <p className="text-gray-500 leading-relaxed mb-8">
                                {service.description}
                            </p>

                            {/* Button */}
                            <button className="mt-auto px-8 py-3 rounded-full border border-gray-200 text-[#2A335D] font-semibold hover:bg-[#2A335D] hover:text-white hover:border-transparent transition-all duration-300">
                                View more
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
