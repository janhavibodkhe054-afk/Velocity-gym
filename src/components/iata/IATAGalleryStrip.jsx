export default function IATAGalleryStrip() {
  const images = [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <>
      {/* CSS */}
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

      <section className="w-full bg-white overflow-hidden py-4 sm:py-6">
        <div className="gallery-scroll">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2 sm:mx-3 overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt={`IATA Gallery ${index + 1}`}
                className="
                  w-[260px]
                  sm:w-[320px]
                  lg:w-[360px]
                  h-[180px]
                  sm:h-[220px]
                  lg:h-[240px]
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-110
                "
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}