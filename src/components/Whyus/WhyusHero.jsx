import React from "react";

export default function WhyusHero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden
      h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px] xl:h-[480px]"
    >
      {/* Background Image */}
      <div
  className="absolute inset-0 bg-cover bg-top md:bg-fixed scale-105"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/1200x/87/e4/ba/87e4ba77eeb80a287e13b16d82127a05.jpg')",
  }}
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-6">
        <h1 className="text-white font-serif font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Why Us
        </h1>

        <div
          className="
            mt-5 sm:mt-6 md:mt-8
            flex items-center justify-center flex-wrap
            gap-2 sm:gap-3
            uppercase
            tracking-[2px]
            sm:tracking-[4px]
            md:tracking-[6px]
            text-[11px]
            sm:text-xs
            md:text-sm
            lg:text-base
          "
        >
          <span className="text-[#d07f7b] font-semibold">
            Home
          </span>

          <span className="text-white">/</span>

          <span className="text-white font-semibold">
            Why Us
          </span>
        </div>
      </div>
    </section>
  );
}