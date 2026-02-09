import React, { useRef } from 'react';

const Products: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "HSD B40 Solar",
      category: "Industrial Fuel",
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "MFO / Marine Fuel",
      category: "Bunker Supply",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Lubricants",
      category: "Engine Protection",
      image: "https://images.unsplash.com/photo-1516937941344-00b4ec282de7?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Fresh Water Supply",
      category: "Vessel Logicstics",
      image: "https://images.unsplash.com/photo-1562093756-3b957635c48b?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Bunker Service",
      category: "Distribution",
      image: "https://images.unsplash.com/photo-1605218427306-6354db69e568?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">

          {/* Left Side: Tag & Headline */}
          <div className="max-w-xl">
            {/* <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-8 shadow-sm">
              <i className="fa-solid fa-layer-group text-gray-500 text-xs"></i>
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Our Services</span>
            </div> */}

            <h2 className="text-5xl md:text-6xl text-[#222222] font-serif leading-tight">
              What we can do <br />
            </h2>
          </div>

          {/* Right Side: Description & CTA */}
          <div className="max-w-md flex flex-col items-start gap-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              From premium fuel supply to comprehensive maritime logistics, we provide quality energy solutions tailored to your operational needs.
            </p>

          </div>
        </div>

        {/* Services Grid / Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-12 scrollbar-hide snap-x"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-[2rem] overflow-hidden group cursor-pointer snap-center shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">

                {/* Top Right Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <i className="fa-solid fa-arrow-up-right transform group-hover:rotate-45 transition-transform duration-300"></i>
                </div>

                <p className="text-gray-300 text-sm font-medium mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {service.category}
                </p>
                <h3 className="text-2xl font-normal text-white leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
