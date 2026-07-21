import React from "react";

export default function OurImpact() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative group h-[300px] sm:h-[420px] md:h-[550px] lg:h-auto overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/60e2d1e1782f3340897bbad0/67cc396602eb9678051d073c_strength-workout-for-cricketer.webp"
              alt="Our Impact"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500"></div>
          </div>

          {/* Right Content */}
          <div className="bg-[#171717] text-white px-5 sm:px-8 md:px-10 lg:px-16 py-12 sm:py-14 lg:py-20 flex flex-col justify-center">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] font-semibold text-xs sm:text-sm">
              Our Impact
            </p>

            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Inspiring
              <br />
              Transformation Every Day
            </h2>

            <p className="mt-6 sm:mt-8 text-gray-300 leading-7 sm:leading-8 text-base sm:text-lg">
              Every achievement at{" "}
              <strong>Velocity Sports & Fitness Academy</strong> represents a
              journey of dedication and perseverance. From beginners taking
              their first step toward fitness to athletes refining their
              performance and future trainers preparing for successful careers,
              we take pride in helping individuals unlock their full potential.
            </p>

            <p className="mt-5 sm:mt-6 text-gray-300 leading-7 sm:leading-8 text-base sm:text-lg">
              Our greatest success is measured by the confidence, discipline,
              and lifelong healthy habits our members develop throughout their
              journey. Every milestone achieved reflects our commitment to
              creating stronger individuals, better athletes, and a healthier
              community.
            </p>

            {/* Impact Stats */}
            
          </div>
        </div>
      </div>
    </section>
  );
}