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
  {
    number: "6+",
    title: "Professional Services",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white mb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        

        {/* Counters */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="group text-center rounded-xl p-8 hover:bg-[#d07f7b] hover:border-[#d07f7b] duration-500 cursor-pointer"
            >

              <h3 className="text-5xl font-bold text-black group-hover:text-white duration-500">
                {item.number}
              </h3>

              <div className="w-12 h-[3px] bg-[#d07f7b] mx-auto my-5 group-hover:bg-white duration-500"></div>

              <p className="text-lg font-semibold text-gray-700 group-hover:text-white duration-500">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}