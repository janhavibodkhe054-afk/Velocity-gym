
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function IATAHero() {
  return (
    <section
      className="
        relative
        flex
        h-[280px]
        items-center
        justify-center
        overflow-hidden
        bg-cover
        bg-center
        sm:h-[350px]
        md:h-[420px]
        lg:h-[450px]
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f0b5b1] sm:text-base">
          Build Your Future in Aviation
        </p>

        <h1
          className="
            text-3xl
            font-bold
            leading-tight
            text-white
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          IATA Certification Courses
        </h1>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-white/90 sm:text-base"
        >
          <Link
            to="/"
            className="transition-colors hover:text-[#f0b5b1]"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <Link
            to="/services"
            className="transition-colors hover:text-[#f0b5b1]"
          >
            Services
          </Link>

          <ChevronRight size={16} />

          <span className="font-medium text-[#f0b5b1]">
            IATA Courses
          </span>
        </nav>
      </div>
    </section>
  );
}


