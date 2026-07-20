import React from "react";
import {
  HeartHandshake,
  Trophy,
  Dumbbell,
  Users,
} from "lucide-react";

const values = [
  {
    icon: <HeartHandshake size={40} />,
    title: "Commitment",
    description:
      "We are dedicated to helping every member achieve their fitness and sports goals with consistency and passion.",
  },
  {
    icon: <Trophy size={40} />,
    title: "Excellence",
    description:
      "Our experienced coaches provide professional training in gym, cricket, and overall athletic development.",
  },
  {
    icon: <Dumbbell size={40} />,
    title: "Strength",
    description:
      "Building physical strength, mental confidence, and a healthy lifestyle through modern fitness programs.",
  },
  {
    icon: <Users size={40} />,
    title: "Teamwork",
    description:
      "We believe in creating a supportive community where everyone grows, learns, and succeeds together.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#d07f7b] font-bold">
            Our Core Values
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Values That Drive Our Academy
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg leading-8">
            guide everything we do
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative border border-gray-200 bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Top Right Box */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#d07f7b] flex items-center justify-center text-white rounded-bl-3xl group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              <div className="pt-14">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#d07f7b] transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-base
                sm:text-lg">
                  {item.description}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="mt-8 w-14 h-1 bg-[#d07f7b] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}