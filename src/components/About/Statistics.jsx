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
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-gray-800 rounded-2xl py-12 px-6 text-center hover:border-[#d07f7b] hover:-translate-y-2 duration-300"
            >
              <h3 className="text-5xl lg:text-6xl font-extrabold text-[#d07f7b]">
                {item.number}
              </h3>

              <div className="w-16 h-[2px] bg-[#d07f7b] mx-auto my-5"></div>

              <p className="text-gray-300 text-lg font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
