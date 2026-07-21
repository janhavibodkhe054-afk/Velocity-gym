import React from "react";
import { Check } from "lucide-react";

const advantages = [
  "Customized Fitness Strategies",
  "Multi-Discipline Learning",
  "Skill Development Approach",
  "Safe & Professional Training",
  "Motivating Community",
  "Long-Term Success Focus",
];

export default function OurAdvantages() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        backgroundImage:
          "url('https://up2client.com/envato/gymort/mainfile/assets/images/common_img/testmonials_bg_1.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 md:via-black/65 to-black/40 md:to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] font-semibold text-sm">
              Why Velocity
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Where Passion &
              <br />
              <span className="text-[#d07f7b]">Performance Meet</span>
            </h2>

            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 max-w-2xl">
              Experience world-class fitness coaching, cricket training,
              professional umpiring courses, personal training, and premium
              sports facilities designed to help you achieve your goals.
            </p>

            {/* Advantages Card */}
            <div className="mt-8 bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-3xl">
              <div className="bg-[#d07f7b] px-5 sm:px-8 py-4">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  Our Advantages
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 sm:px-8 py-6 sm:py-8">
                {advantages.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                      <Check
                        size={18}
                        className="text-[#d07f7b] group-hover:scale-125 duration-300"
                      />
                    </div>

                    <span className="text-gray-800 text-sm sm:text-base font-medium leading-6 group-hover:text-[#d07f7b] transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Empty (for future image if needed) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}