import React from "react";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    image:
      "/voice6.avif",
    title: "Professional Recording",
    category: "Studio Experience",
  },
  {
    image:
      "/voice3.jpg",
    title: "Audio Production",
    category: "Behind The Mic",
  },
  {
    image:
      "/voice5.avif",
    title: "Sound Recording",
    category: "Audio Excellence",
  },
  {
    image:
      "/voice2.jpg",
    title: "Voice & Expression",
    category: "Creative Skills",
  },
  {
    image:
      "/voice4.jpg",
    title: "Microphone Setup",
    category: "Recording Essentials",
  },
  {
    image:
      "/voice1.jpg",
    title: "Live Performance",
    category: "Stage & Media",
  },
];

export default function VoiceOverArtistGalleryStrip() {
  const images = [...galleryImages, ...galleryImages];

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl px-5 text-center sm:px-8">
        <span className="inline-block text-sm font-semibold uppercase tracking-[3px] text-[#d07f7b]">
          Behind The Voice
        </span>

        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Explore the World of{" "}
          <span className="text-[#d07f7b]">Voice Artistry</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Discover the creative world of recording, voice expression,
          sound production and audio storytelling.
        </p>
      </div>

      {/* Scrolling Gallery */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="voice-gallery-track flex w-max gap-5 px-3 sm:gap-7">
          {images.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group relative h-[260px] w-[250px] shrink-0 overflow-hidden rounded-2xl sm:h-[330px] sm:w-[310px] lg:h-[370px] lg:w-[340px]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Pink Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d07f7b] transition-all duration-500 group-hover:w-full" />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f0aaa5]">
                  {item.category}
                </span>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-[#d07f7b] group-hover:bg-[#d07f7b]">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        .voice-gallery-track {
          animation: voiceGalleryScroll 38s linear infinite;
          will-change: transform;
        }

        .voice-gallery-track:hover {
          animation-play-state: paused;
        }

        @keyframes voiceGalleryScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .voice-gallery-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}