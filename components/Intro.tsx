import React, { useState, useEffect, useRef } from 'react';

const images = [
  { src: '/1.jpeg', alt: 'About Image 1' },
  { src: '/2.jpeg', alt: 'About Image 2' },
  { src: '/3.jpeg', alt: 'About Image 3' },
  { src: '/4.jpeg', alt: 'About Image 4' },
  { src: '/5.jpeg', alt: 'About Image 5' },
];

const Intro: React.FC = () => {
  const [active, setActive] = useState(2);
  const [stageWidth, setStageWidth] = useState(900);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (stageRef.current) setStageWidth(stageRef.current.offsetWidth);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const isMobile = stageWidth < 640;
  const isTablet = stageWidth >= 640 && stageWidth < 1024;

  // Card dimensions responsive
  const cardW = isMobile ? 220 : isTablet ? 260 : 320;
  const cardH = isMobile ? 300 : isTablet ? 360 : 440;
  const spread = isMobile ? 130 : isTablet ? 160 : 210;
  const stageH = cardH + 60;

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(images.length - 1, a + 1));

  return (
    <section id="about" className="bg-white pt-28 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32 px-4 sm:px-6 md:px-12 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2A335D] leading-tight tracking-tight max-w-3xl">
            Get to<br />Know Us Better
          </h2>
          <p className="text-gray-500 max-w-xs sm:max-w-sm md:max-w-md text-base md:text-lg leading-relaxed font-medium">
            Specifically built to supply HSD B40 and Marine Fuel Oil (MFO). With a
            strong commitment to quality and customer service, we are ready to support your
            business operations in Indonesia.
          </p>
        </div>

        {/* Fan Carousel */}
        <div className="flex flex-col items-center">
          {/* Cards Stage */}
          <div
            ref={stageRef}
            className="relative w-full flex items-center justify-center"
            style={{ height: `${stageH}px` }}
          >
            {images.map((img, i) => {
              const offset = i - active;
              const absOffset = Math.abs(offset);
              if (absOffset > 2) return null;

              const translateX = offset * spread;
              const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.82 : 0.65;
              const zIndex = 10 - absOffset;
              const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.5;
              const blur = absOffset === 2 ? 1 : 0;

              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="absolute cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    width: `${cardW}px`,
                    height: `${cardH}px`,
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                    boxShadow: i === active
                      ? '0 40px 80px rgba(42,51,93,0.28)'
                      : '0 12px 32px rgba(42,51,93,0.14)',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://placehold.co/${cardW}x${cardH}/2A335D/ffffff?text=About+${i + 1}`;
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={active === 0}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500
                         hover:border-[#2A335D] hover:text-[#2A335D] hover:shadow-md transition-all duration-200
                         disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={active === images.length - 1}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500
                         hover:border-[#2A335D] hover:text-[#2A335D] hover:shadow-md transition-all duration-200
                         disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
