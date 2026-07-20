import React, { useState } from "react";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-3xl transition duration-300">
                    +
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-white rounded-full p-2 hover:bg-red-500 hover:text-white transition"
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-w-6xl max-h-[90vh] rounded-xl object-contain animate-[zoom_.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @keyframes zoom {
          from {
            transform: scale(.8);
            opacity:0;
          }
          to {
            transform: scale(1);
            opacity:1;
          }
        }
      `}</style>
    </>
  );
}