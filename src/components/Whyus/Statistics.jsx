import React from "react";

const stats = [
  {
    number: "1000+",
    title: "Happy Members",
  },
  {
    number: "15+",
    title: "Expert Trainers",
  },
  {
    number: "500+",
    title: "Athletes Trained",
  },
  {
    number: "5+",
    title: "Years of Experience",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-[#d07f7b] hover:border-[#d07f7b] hover:shadow-2xl"
            >
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black group-hover:text-white transition-colors duration-500">
                {item.number}
              </h3>

              <div className="w-12 h-[3px] bg-[#d07f7b] mx-auto my-5 group-hover:bg-white transition-colors duration-500"></div>

              <p className="text-base sm:text-lg font-semibold text-gray-700 leading-7 group-hover:text-white transition-colors duration-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}