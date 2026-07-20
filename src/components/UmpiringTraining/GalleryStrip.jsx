export default function GalleryStrip() {
  const images = [
    "https://cricketcollective.zendesk.com/hc/article_attachments/30700352032669",
    "https://www.umpireschool.com/z/-vf.0.0.0.92.A32F1EE5EE89B0B6F7DD590D3AFC9F249A33F9FDF0F6B59A5EE083AE95DBD269",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmHnNDgaUSUDJ-ItP1cejMzcKDpORDw-47HQw8pb9IOsIRQMPFdXoosU&s=10",
    "https://i.pinimg.com/1200x/5f/43/ed/5f43ed9fe2cd43e75914aa70f647d364.jpg",
    "https://i.pinimg.com/1200x/4c/65/60/4c6560083314080e8bdfe575fbbe252f.jpg",
    "https://i.pinimg.com/1200x/93/5c/b8/935cb8bd8d488742f711d0ccdfd56011.jpg",
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