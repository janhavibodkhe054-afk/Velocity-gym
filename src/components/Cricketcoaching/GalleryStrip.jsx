export default function GalleryStrip() {
  const images = [
    "https://zoomcricket.in/wp-content/uploads/2024/02/sca15.jpg",
    "https://i.pinimg.com/736x/3c/8f/52/3c8f52395b93a98e776ac92c426263da.jpg",
    "https://i.pinimg.com/1200x/06/33/7d/06337d9642d466ea9d1054045f802fcc.jpg",
    "https://i.pinimg.com/1200x/53/46/3c/53463ca06d7f1f8312bf92dd251852f2.jpg",
    "https://i.pinimg.com/1200x/32/5b/1e/325b1eba13d95c50ac11c14ee89e4ab7.jpg",
    "https://i.pinimg.com/1200x/0d/7d/40/0d7d400fcd7a4e84787b34ff8c24540d.jpg",
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

      <section className="w-full bg-white overflow-hidden py-4">
        <div className="gallery-scroll">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt=""
                className="w-[360px] h-[220px] object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}