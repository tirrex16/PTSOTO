import React, { useRef } from 'react';

const Products: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      title: "High Speed Diesel (HSD B40)",
      category: "Industrial Fuel",
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Marine Fuel Oil (MFO)",
      category: "Industrial Fuel",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=600&auto=format&fit=crop"
    },
  ];

  return (
    <section id="products" className="bg-white pt-28 pb-10 md:pt-28 md:pb-16 lg:pt-32 px-4 sm:px-6 md:px-12 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6 md:gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2A335D] leading-tight tracking-tight">
            Products
          </h2>
          <p className="text-gray-500 max-w-xs sm:max-w-sm md:max-w-md text-base md:text-lg leading-relaxed font-medium border-l-4 border-[#00C9A7] pl-5">
            From premium fuel supply to comprehensive maritime logistics, we provide quality energy solutions tailored to your operational needs.
          </p>
        </div>

        {/* Products Horizontal Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center
                         w-[80vw] sm:w-[60vw] md:w-[500px] lg:w-[600px] xl:w-[680px]
                         h-[300px] sm:h-[380px] md:h-[460px] lg:h-[500px]
                         relative rounded-2xl sm:rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end h-full">
                {/* Top Right Icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <i className="fa-solid fa-arrow-up-right transform group-hover:rotate-45 transition-transform duration-300 text-sm sm:text-base"></i>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {product.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-normal text-white leading-tight">
                  {product.title}
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
