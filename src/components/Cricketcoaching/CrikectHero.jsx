import React from "react";

export default function CricketHero() {
  return (
    <section
      className="relative h-[400px] md:h-[450px] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://themesflat.co/html/zoyot/images/page-title/contact-us.jpg')", // Change image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-5xl md:text-6xl font-serif font-semibold">
          Cricket Coaching
        </h1>

        <div className="mt-8 flex justify-center items-center gap-4 uppercase tracking-[6px]">
          <span className="text-[#d07f7b] font-semibold">Home</span>

          <span className="text-white text-xl">/</span>

          <span className="text-white font-semibold">Services</span>
        </div>
      </div>
    </section>
  );
}
