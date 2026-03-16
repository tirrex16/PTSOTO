import React, { useState } from 'react';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      title: "High Speed Diesel (HSD B40)",
      category: "Industrial Fuel",
      image: "/HSD.png",
      description: (
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            HSD B40 is a diesel fuel blend containing 40% plant-based biodiesel and 60% conventional diesel. This product is designed for:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Optimal Performance:</strong> Maintaining efficient diesel engine performance.
            </li>
            <li>
              <strong>ECO - Environmentally Friendly:</strong> Reducing the greenhouse gas emissions compared to pure diesel, supporting energy sustainability.
            </li>
            <li>
              <strong>Industrial Suitability:</strong> Ideal for various industrial applications requiring high-quality diesel fuel.
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Marine Fuel Oil (MFO)",
      category: "Industrial Fuel",
      image: "/MFO.png",
      description: (
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            MFO is a dark, highly viscous residual fuel, commonly used in low-speed diesel engines (below 300 RPM) in the shipping and heavy industry sectors. Our MFO ensures:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Cost Efficiency:</strong> An economical choice for large-scale operations.
            </li>
            <li>
              <strong>Reliable Performance:</strong> Designed for industrial and marine engines requiring high-viscosity fuel.
            </li>
            <li>
              <strong>Diverse Applications:</strong> Suitable for main ship engines, power generators, and large industrial furnaces.
            </li>
          </ul>
        </div>
      )
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
          <p className="text-gray-500 max-w-xs sm:max-w-sm md:max-w-md text-base md:text-lg leading-relaxed font-medium">
            From premium fuel supply to comprehensive maritime logistics, we provide quality energy solutions tailored to your operational needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-sm sm:max-w-4xl mx-auto w-full pb-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative w-full aspect-[3/4] sm:aspect-[4/5] bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 cursor-pointer group"
              onClick={() => {
                if (product.description) {
                  setSelectedProduct(product);
                }
              }}
            >
              <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-[#2A335D]">
                {/* Background Image */}
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 blur-[2px] scale-105 group-hover:scale-[1.15]"
                />

                {/* Top Right Icon */}
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-colors duration-300 group-hover:bg-white group-hover:text-black z-10">
                  <i className="fa-solid fa-arrow-up-right transform group-hover:rotate-45 transition-transform duration-300 text-sm"></i>
                </div>

                {/* Bottom Overlay Area (Gradient + Glassmorphism) */}
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none z-0"></div>
                <div className="absolute inset-x-0 bottom-0 h-[40%] backdrop-blur-md bg-black/10 transition-all duration-500 pointer-events-none z-0 border-t border-white/10 [mask-image:linear-gradient(to_bottom,transparent,black_20%)]"></div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end z-10 pointer-events-none">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5 font-medium">
                    {product.category}
                  </p>

                  <div className="w-full bg-white text-black font-semibold rounded-2xl py-3.5 sm:py-4 flex items-center justify-center pointer-events-auto shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300 text-sm sm:text-base">
                    View Specs & Details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-[2rem] max-w-lg w-full overflow-hidden shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 sm:h-56 w-full">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[#00C9A7] text-sm font-semibold mb-1 uppercase tracking-wider">
                  {selectedProduct.category}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedProduct.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
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
              {selectedProduct.description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
