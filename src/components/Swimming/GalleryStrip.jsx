export default function GalleryStrip() {
  const images = [
    "https://i.pinimg.com/1200x/39/d6/0c/39d60ceedf286d107c383704acbf5f1a.jpg",
    "https://i.pinimg.com/736x/07/fb/43/07fb43757badf2a10dbe76db86f57326.jpg",
    "https://i.pinimg.com/736x/46/74/e4/4674e43bffaa29d4c435b92e80441a2d.jpg",
    "https://i.pinimg.com/736x/b0/c4/23/b0c423974792a100cc68890c55084380.jpg",
    "https://i.pinimg.com/736x/7b/7d/84/7b7d84b26e7bfa92d604ec761cf4a520.jpg",
    "https://i.pinimg.com/1200x/af/bc/f9/afbcf96e899ef0038890b329768c855b.jpg",
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