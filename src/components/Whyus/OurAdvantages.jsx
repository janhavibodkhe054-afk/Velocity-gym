import React from "react";
import { Check } from "lucide-react";

const advantages = [
  "Personalized Fitness Programs",
  "Professional Cricket Coaching For All Age Groups",
  "Certified Umpiring Training Programs",
  "One-to-One Personal Coaching",
  "Home Personal Training Services",
  "Premium Quality Fitness Supplements",
];

export default function OurAdvantages() {
  return (
    <section
      className="relative py-10 overflow-visible bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://up2client.com/envato/gymort/mainfile/assets/images/common_img/testmonials_bg_1.png')",
      }}
    >
      {/* Left Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="mt-2 text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Where Passion &
            <br />
            <span className="text-[#d07f7b]">Performance Meet</span>
          </h2>

          <p className="mt-4 text-gray-300 text-lg leading-8 max-w-xl">
            Experience world-class fitness coaching, cricket training,
            professional umpiring courses, personal training, and premium sports
            facilities designed to help you achieve your goals.
          </p>

          {/* Advantages */}
          <div className="mt-6 bg-white rounded-xl overflow-hidden shadow-2xl max-w-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] duration-500">
            <div className="bg-[#d07f7b] text-white px-8 py-4 text-xl font-bold">
              Our Advantages
            </div>

            <div className="grid sm:grid-cols-2 gap-2 px-8 py-8">
              {advantages.map((item, index) => (
                <div key={index} className="flex gap-3 items-start group">
                  <Check
                    size={22}
                    className="text-[#d07f7b] mt-1 flex-shrink-0 group-hover:scale-125 duration-300"
                  />

                  <span className="text-gray-800 font-medium leading-7 group-hover:text-[#d07f7b] duration-300">
                    {item}
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
