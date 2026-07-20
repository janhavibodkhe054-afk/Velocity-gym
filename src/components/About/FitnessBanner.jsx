import React from "react";
import { ArrowRight } from "lucide-react";

export default function FitnessBanner() {
  return (
    <section
      className="relative h-[450px] md:h-[600px] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: "url('https://themesflat.co/html/zoyot/images/video/img-2.jpg')", // Your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Get In The Best
          <br />
          Shape In Your Life.
        </h2>

       

      </div>
    </section>
  );
}