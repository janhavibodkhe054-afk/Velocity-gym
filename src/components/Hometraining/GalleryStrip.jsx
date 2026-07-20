export default function GalleryStrip() {
  const images = [
    "https://i.pinimg.com/1200x/0b/23/bb/0b23bb1642506bf09071413deaf5d8cf.jpg",
    "https://i.pinimg.com/1200x/85/2e/5d/852e5d8178de9c6e5419149d1838b7a9.jpg",
    "https://i.pinimg.com/736x/3b/26/83/3b2683961f8e3061c3cbd114be4355c0.jpg",
    "https://i.pinimg.com/vwebp/1200x/a9/91/12/a9911206fef5aad55919e96288e26a85.webp",
    "https://i.pinimg.com/vwebp/1200x/56/75/f8/5675f8059822d1627f373894369c7aec.webp",
    "https://i.pinimg.com/736x/dc/1a/03/dc1a03e818542ac846e246c2c8ced234.jpg",
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