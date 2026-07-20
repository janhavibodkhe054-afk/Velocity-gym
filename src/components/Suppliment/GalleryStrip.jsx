export default function GalleryStrip() {
  const images = [
    "https://i.pinimg.com/vwebp/1200x/d4/8b/b7/d48bb7d572e17989c6b4c3ee9c67f62a.webp",
    "https://i.pinimg.com/vwebp/1200x/00/7b/11/007b11f4ea0e38dbefba6e20c73da199.webp",
    "https://i.pinimg.com/736x/89/51/67/895167fd2c0766411589d3dd282829a7.jpg",
    "https://i.pinimg.com/736x/45/61/b9/4561b9d9aa5f1e2455cb320658d7e766.jpg",
    "https://i.pinimg.com/736x/d8/83/3e/d8833eacba8294b4422ec6287dacfa24.jpg",
    "https://i.pinimg.com/736x/19/44/97/194497ab8678d0c60ff43cdd0b1ff789.jpg",
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