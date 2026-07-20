import React from "react";
import { Dumbbell, Trophy, Activity, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Dumbbell className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />,
    title: "Professional Gym Training",
    description:
      "Build strength, improve endurance, and achieve your fitness goals with certified trainers and modern equipment.",
  },
  {
    icon: <Trophy className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />,
    title: "Professional Cricket Coaching",
    description:
      "Expert batting, bowling, fielding, and fitness coaching for beginners and professional cricket players.",
  },
  {
    icon: <Activity className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />,
    title: "Sports Fitness Programs",
    description:
      "Specialized conditioning, agility, speed, and endurance training designed for athletes of every level.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-[#d07f7b] font-bold text-sm sm:text-base">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Building Stronger Bodies,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Smarter Athletes Through Professional
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            Gym & Sports Training Programs
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-xl border border-gray-100"
            >
              {/* Icon */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-30 lg:h-30 rounded-full mx-auto flex items-center justify-center bg-red-50 group-hover:bg-[#d07f7b] transition-all duration-500">
                <div className="text-[#d07f7b] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base lg:text-lg">
                {service.description}
              </p>

              {/* Button */}
              <button className="mt-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-100 group-hover:bg-[#d07f7b] text-black group-hover:text-white transition-all duration-500 flex items-center justify-center mx-auto">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}