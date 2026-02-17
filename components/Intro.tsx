import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="about" className="bg-white pt-24 pb-10 md:pt-32 md:pb-16 px-6 scroll-mt-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold text-[#2A335D] leading-tight tracking-tight max-w-3xl">
            Get to<br />Know Us Better
          </h2>
          <p className="text-gray-500 max-w-md text-lg leading-relaxed font-medium mb-2">
            Specifically built to supply HSD B40 and Marine Fuel Oil (MFO). With a
            strong commitment to quality and customer service, we are ready to support your
            business operations in Indonesia.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Floating Blue Card & Small Image */}
          <div className="lg:col-span-5 flex flex-col gap-8 relative z-10">
            {/* Blue Feature Card */}
            <div className="bg-[#2A335D] rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Capturing Excellence</h3>
              <p className="text-blue-100/90 text-sm leading-relaxed mb-8">
                Discover our journey, values, and the passion that drives us to create exceptional energy distribution experiences across Indonesia.
              </p>
              {/* <div className="w-16 h-1 bg-[#00C9A7] rounded-full"></div> */}
            </div>

            {/* Small Image (Container Ship) */}
            <img
              src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=800&auto=format&fit=crop"
              alt="Maritime Logistics"
              className="rounded-[2.5rem] w-full h-80 object-cover shadow-lg"
            />
          </div>

          {/* Right Column: Large Masonry Images */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8 pt-0">
            <img
              src="https://images.jacobinmag.com/wp-content/uploads/2025/08/28133444/GettyImages-2231494643.jpg"
              alt="Corporate Office"
              className="rounded-[2.5rem] w-full h-80 object-cover shadow-md"
            />
            {/* Fixed Broken Image URL */}
            <img
              src="https://beritatrans.com/images/content/1/2021/2021-10-20/002d3a91d02b91a5a290c44f2b6433c2.jpg"
              alt="Industrial Operations"
              className="rounded-[2.5rem] w-full h-80 object-cover shadow-md"
            />
            {/* Wide bottom image */}
            <div className="col-span-2">
              <img
                src="https://sinay.ai/wp-content/uploads/2024/06/maritime-education-scaled.jpg"
                alt="Welding / Construction"
                className="rounded-[2.5rem] w-full h-64 object-cover shadow-md"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Intro;
