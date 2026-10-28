import React, { useState } from "react";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/gymS5.jpg",
    "/voice1.jpg",
    "/sw1.jpg",
    "/h2.jpg",
    "/u5.jpg",
    "/tr6.jpg",
    "/sp2.jpg",
    "/cr6.jpg",
    "/gymS3.jpg",
    "/u2.jpg",
    "/aviation3.avif",
    "/voice4.jpg",
  ];

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-44 sm:h-60 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <span className="text-white text-2xl sm:text-3xl font-light">
                      +
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-[#d07f7b] hover:text-white transition duration-300 flex items-center justify-center"
          >
            <X size={24} className="sm:w-7 sm:h-7" />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Selected"
            onClick={(e) => e.stopPropagation()}
            className="w-auto h-auto max-w-[95vw] max-h-[85vh] sm:max-h-[90vh] rounded-xl sm:rounded-2xl object-contain animate-[zoom_.35s_ease]"
          />
        </div>
      )}

      <style>{`
        @keyframes zoom{
          from{
            transform:scale(.85);
            opacity:0;
          }
          to{
            transform:scale(1);
            opacity:1;
          }
        }
      `}</style>
    </>
  );
}