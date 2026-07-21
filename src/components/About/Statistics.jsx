import React from "react";

const stats = [
  {
    number: "1000+",
    title: "Happy Members",
  },
  {
    number: "15+",
    title: "Certified Trainers",
  },
  {
    number: "10+",
    title: "Sports & Fitness Programs",
  },
  {
    number: "5+",
    title: "Years of Excellence",
  },
];

export default function Statistics() {
  return (
    <section className="bg-black py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#141414] border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#d07f7b] hover:shadow-[0_20px_40px_rgba(208,127,123,0.25)]"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#d07f7b] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

              {/* Number */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#d07f7b]">
                {item.number}
              </h3>

              {/* Divider */}
              <div className="w-12 sm:w-16 h-[2px] bg-[#d07f7b] mx-auto my-4 sm:my-5 group-hover:w-24 transition-all duration-500"></div>

              {/* Title */}
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium leading-6">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}