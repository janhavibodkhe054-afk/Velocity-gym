import React from "react";
import { Check } from "lucide-react";

const features = [
  "Modern Gym Equipment & Strength Training",
  "Professional Cricket Coaching & Match Practice",
  "Sports Fitness, Speed & Agility Training",
  "Certified Trainers & Personalized Workout Plans",
  "Weight Loss, Muscle Gain & Athletic Performance Programs",
];

export default function WhyChooseAbout() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="grid lg:grid-cols-2">

          {/* Left Image */}
          <div className="relative group h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto min-h-full overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/60e2d1e1782f3340897bbad0/67cc396602eb9678051d073c_strength-workout-for-cricketer.webp"
              alt="Sports & Fitness"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-500"></div>
          </div>

          {/* Right Content */}
          <div className="bg-[#171717] text-white px-6 py-12 sm:px-8 md:px-12 lg:px-16 lg:py-20 flex flex-col justify-center">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] font-semibold text-sm mb-4">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Why Choose Us For
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Your Sports & Fitness Journey?
            </h2>

            <p className="mt-6 text-gray-400 leading-7 sm:leading-8 text-base sm:text-lg">
              Velocity Sports & Fitness Academy offers professional gym
              training, cricket coaching, sports conditioning, and
              personalized fitness programs under one roof.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#d07f7b] rounded-full p-2 flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>

                  <span className="text-base sm:text-lg leading-7">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}