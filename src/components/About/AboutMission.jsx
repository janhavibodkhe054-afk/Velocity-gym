import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutMission() {
  const navigate = useNavigate();

  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="/about1.jpeg"
              alt="Velocity Sports & Fitness Academy"
              className="w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover rounded-[20px] md:rounded-[30px] shadow-xl"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-white shadow-2xl rounded-2xl px-5 py-4 md:px-7 md:py-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d07f7b]">
                10+
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <span className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] font-semibold text-sm">
              About Velocity
            </span>

            <h2 className="mt-4 md:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Building Stronger Bodies,
             
              Better Athletes &
              
              Brighter Careers
            </h2>

            <p className="mt-6 md:mt-8 text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
              Velocity Academy was established with a vision to
              create a place where fitness, sports, and education come together
              under one roof. Our journey began with a simple goal—to help
              people become healthier, stronger, and more confident while
              providing aspiring fitness professionals with the knowledge and
              practical skills required to build successful careers.
            </p>

            <p className="mt-5 md:mt-6 text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
              Over the years, we have created an environment that inspires
              discipline, consistency, and continuous improvement. Every member
              who joins Velocity becomes part of a community committed to
              personal growth and excellence.
            </p>

            <button
              onClick={() => navigate("/whyus")}
              className="mt-8 md:mt-10 w-full sm:w-fit bg-[#d07f7b] hover:bg-black text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              Read More
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}