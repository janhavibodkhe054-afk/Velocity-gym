import React from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function WhyAbout() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Images */}
          <div className="order-2 md:order-1 relative flex justify-center h-[420px] sm:h-[500px] md:h-[600px] lg:h-[650px]">
            {/* Large Image */}
            <img
              src="/why-1.jpg"
              alt="Velocity Academy"
              className="absolute bottom-0 right-0 w-[72%] sm:w-[75%] h-[300px] sm:h-[380px] md:h-[480px] lg:h-[520px] rounded-2xl object-cover shadow-2xl"
            />

            {/* Small Image */}
            <img
              src="/why-2.jpg"
              alt="Fitness Training"
              className="absolute top-0 left-0 w-[48%] sm:w-[46%] h-[260px] sm:h-[340px] md:h-[430px] lg:h-[520px] rounded-2xl object-cover shadow-2xl border-4 sm:border-8 border-white hover:-translate-y-2 duration-500"
            />
          </div>

          {/* Right Content */}
          <div className="order:1 md:order-2">
            <p className="text-[#d07f7b] font-semibold uppercase tracking-[3px] sm:tracking-[5px] mb-3 text-sm">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Why Thousands Trust
              <br />
              Velocity Academy
            </h2>

            <p className="text-gray-600 leading-7 sm:leading-8 mt-6 sm:mt-8 text-base sm:text-lg">
              At <strong>Velocity Academy</strong>, we are
              committed to delivering an exceptional training experience that
              helps individuals unlock their true potential. Our academy
              combines professional coaching, modern training methods, and a
              motivating atmosphere to create an environment where every member
              can grow with confidence.
            </p>

            <p className="text-gray-600 leading-7 sm:leading-8 mt-5 text-base sm:text-lg">
              We believe success is built through consistency, proper guidance,
              and continuous improvement. Whether you're training for better
              fitness, enhancing athletic performance, or pursuing a career in
              the fitness industry, our team is dedicated to helping you achieve
              meaningful and lasting results through expert mentorship and
              practical learning.
            </p>

            {/* Highlights */}
            <div className="mt-8 sm:mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="min-w-[42px] h-[42px] rounded-full bg-[#d07f7b]/10 flex items-center justify-center">
                  <Check size={18} className="text-[#d07f7b]" />
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-7">
                  Professional Coaching & Expert Mentorship
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[42px] h-[42px] rounded-full bg-[#d07f7b]/10 flex items-center justify-center">
                  <Check size={18} className="text-[#d07f7b]" />
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-7">
                  Modern Training Methods & Practical Learning
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[42px] h-[42px] rounded-full bg-[#d07f7b]/10 flex items-center justify-center">
                  <Check size={18} className="text-[#d07f7b]" />
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-7">
                  Fitness, Sports Performance & Career Development
                </p>
              </div>
            </div>

            {/* Button */}
            
          </div>
        </div>
      </div>
    </section>
  );
}