
export default function AviationGalleryStrip() {
  const images = [
    "/aviation.avif",
    "/aviation1.webp",
    "/aviation3.avif",
    "/aviation4.avif",
    "/aviation5.avif",
    "/aviation6.jpg",
  ];

  return (
    <>
      {/* CSS Animation */}
      <style>{`
        @keyframes galleryScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .gallery-scroll {
          display: flex;
          width: max-content;
          animation: galleryScroll 30s linear infinite;
        }

        .gallery-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="w-full overflow-hidden bg-white py-4 sm:py-6">
        <div className="gallery-scroll">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="mx-2 flex-shrink-0 overflow-hidden rounded-2xl sm:mx-3"
            >
              <img
                src={img}
                alt={`Aviation training gallery ${index % images.length + 1}`}
                loading="lazy"
                className="
                  h-[180px]
                  w-[260px]
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                  sm:h-[220px]
                  sm:w-[320px]
                  lg:h-[240px]
                  lg:w-[360px]
                "
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


