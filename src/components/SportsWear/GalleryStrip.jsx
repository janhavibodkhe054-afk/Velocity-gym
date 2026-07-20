export default function GalleryStrip() {
  const images = [
    "https://i.pinimg.com/vwebp/736x/a4/18/d9/a418d91ae5d1c62fde68501b49ef8ba6.webp",
    "https://i.pinimg.com/1200x/aa/03/4c/aa034c4c56bcfed5c268318e23b4095d.jpg",
    "https://i.pinimg.com/736x/8f/a8/45/8fa845b8868fa4f18703661a484bc7bd.jpg",
    "https://i.pinimg.com/vwebp/1200x/c8/d2/a7/c8d2a7c0e0d2fda2d6dd2aef081e7deb.webp",
    "https://i.pinimg.com/736x/68/06/c9/6806c9efd3f51ab63682a907f5dcf1fb.jpg",
    "https://i.pinimg.com/736x/40/72/e5/4072e55cd921b3d97afb555df849cdaf.jpg",
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