import React from "react";

export default function AboutHero() {
  return (
    <section className="relative flex items-center justify-center h-[260px] sm:h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed scale-105"
        style={{
          backgroundImage:
            "url('https://themesflat.co/html/zoyot/images/page-title/contact-us.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        {/* Small Heading */}
        

        {/* Main Heading */}
        <h1 className="text-white font-serif font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          About Us
        </h1>

        {/* Breadcrumb */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm md:text-base uppercase tracking-[2px] sm:tracking-[4px]">
          <a
            href="/"
            className="text-[#d07f7b] font-semibold hover:text-white transition duration-300"
          >
            Home
          </a>

          <span className="text-white">/</span>

          <span className="text-white font-medium">
            About Us
          </span>
        </div>
      </div>
    </section>
  );
}