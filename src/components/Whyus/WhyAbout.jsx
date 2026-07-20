import React from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function WhyAbout() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Images */}
          <div className="relative flex justify-center h-[650px]">

            {/* Large Image */}
            <img
              src="/why-1.jpg"
              alt=""
              className="absolute bottom-0 right-0 w-[75%] h-[520px] object-cover shadow-2xl"
            />

            {/* Small Image */}
            <img
              src="/why-2.jpg"
              alt=""
              className="absolute top-0 left-0 w-[48%] h-[520px] object-cover shadow-2xl border-8 border-white hover:-translate-y-2 duration-500"
            />

          </div>

          {/* Right Content */}
          <div>

            <p className="text-[#d07f7b] font-semibold uppercase tracking-[5px] mb-3">
              Know About Us
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              DISCOVER YOUR
              <br />
              PERFECT FITNESS
              <br />
              JOURNEY
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              Velocity Sports & Fitness Academy is your destination for
              professional gym training, cricket coaching, strength
              development, and sports conditioning. Our certified trainers
              help beginners and athletes achieve their goals through
              personalized programs and expert guidance.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">
                <span className="w-12 h-[2px] bg-[#d07f7b] mt-3"></span>
                <p className="text-lg text-gray-700">
                  Modern Gym Equipment & Expert Personal Training
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-12 h-[2px] bg-[#d07f7b] mt-3"></span>
                <p className="text-lg text-gray-700">
                  Professional Cricket Coaching & Match Practice
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-12 h-[2px] bg-[#d07f7b] mt-3"></span>
                <p className="text-lg text-gray-700">
                  Sports Fitness, Weight Loss & Muscle Building Programs
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="mt-12 flex items-center group">

              <span className="bg-[#d07f7b] text-white px-8 py-5 text-lg font-semibold">
                Explore Classes
              </span>

              <span className="bg-black text-white p-5 group-hover:bg-[#d07f7b] duration-300">
                <ArrowUpRight size={24} />
              </span>

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}