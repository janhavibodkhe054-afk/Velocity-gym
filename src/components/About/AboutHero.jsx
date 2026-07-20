import React from "react";

export default function AboutHero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[400px] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://themesflat.co/html/zoyot/images/page-title/contact-us.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold">
          About Us
        </h1>

        <div className="mt-5 sm:mt-6 flex justify-center items-center gap-2 sm:gap-3 uppercase tracking-[2px] sm:tracking-[4px] md:tracking-[6px] text-xs sm:text-sm md:text-base">
          <span className="text-[#d07f7b] font-semibold">
            Home
          </span>

          <span className="text-white">/</span>

          <span className="text-white font-semibold">
            About Us
          </span>
        </div>
      </div>
    </section>
  );
}