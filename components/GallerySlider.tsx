import Image from 'next/image';
import { useState } from 'react';

interface GallerySliderProps {
  images: string[];
  alt: string;
  className?: string;
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images, alt, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className={`relative rounded-2xl overflow-hidden ${className}`}>
        <Image src={images[0]} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  const goTo = (index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      <Image
        src={images[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
      />

      {/* Nav arrows */}
      <button
        onClick={(e) => { e.preventDefault(); goTo(currentIndex - 1); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.preventDefault(); goTo(currentIndex + 1); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
        aria-label="Next image"
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); goTo(i); }}
            className={`h-2.5 rounded-full transition-all duration-200 ${
              i === currentIndex ? 'bg-white w-6' : 'bg-white/50 w-2.5'
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
