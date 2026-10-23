import React from "react";
import { Link } from "react-router-dom";

export default function AviationHero() {
  return (
    <section
      className="
        relative
        h-[280px]
        sm:h-[350px]
        md:h-[420px]
        lg:h-[450px]
        bg-center
        bg-cover
        bg-no-repeat
        flex
        items-center
        justify-center
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('/aviation.avif')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          text-center
          px-4
          sm:px-6
          max-w-5xl
          mx-auto
        "
      >
        {/* Page Title */}
        <h1
          className="
            text-white
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-serif
            font-semibold
            leading-tight
          "
        >
          Aviation Career Program
        </h1>

        {/* Breadcrumb */}
        <div
          className="
            mt-5
            sm:mt-8
            flex
            flex-wrap
            justify-center
            items-center
            gap-2
            sm:gap-4
            uppercase
            tracking-[2px]
            sm:tracking-[4px]
            text-xs
            sm:text-sm
            md:text-base
          "
        >
          <Link
            to="/"
            className="
              text-[#d07f7b]
              font-semibold
              hover:text-white
              transition-colors
              duration-300
            "
          >
            Home
          </Link>

          <span className="text-white text-lg sm:text-xl">/</span>

          <Link
            className="
              text-white
              font-semibold
              hover:text-[#d07f7b]
              transition-colors
              duration-300
            "
          >
            Services
          </Link>

          <span className="text-white text-lg sm:text-xl">/</span>

          <span className="text-white font-semibold">
            Aviation Career Program
          </span>
        </div>
      </div>
    </section>
  );
}
