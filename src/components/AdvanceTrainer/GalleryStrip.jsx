export default function GalleryStrip() {
  const images = [
    "https://i.pinimg.com/1200x/9b/43/8c/9b438c42f7d5097f200da35c6e014fe3.jpg",
    "https://i.pinimg.com/736x/dc/ff/80/dcff80c6867f87f9a8f36b741b998fbd.jpg",
    "https://i.pinimg.com/736x/b3/f4/ea/b3f4ea68e576ab30b15ccf3f3c8d352c.jpg",
    "https://i.pinimg.com/1200x/ea/a5/82/eaa5821085c7b55d0759d4e654b37823.jpg",
    "https://i.pinimg.com/1200x/20/29/ac/2029ac3c96a8c9adc2a4e88a8b7d35af.jpg",
    "https://i.pinimg.com/1200x/72/27/6d/72276d175fac1aa263027c4f47bfb3ee.jpg",
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