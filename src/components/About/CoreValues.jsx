import React from "react";
import { Award, ShieldCheck, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: <Award size={36} />,
    title: "Excellence",
    description:
      "We strive for the highest standards in coaching, facilities, and member experience, ensuring every individual receives professional guidance and outstanding support on their fitness and sports journey.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Integrity",
    description:
      "Honesty, transparency, and ethical training practices are the foundation of everything we do. We build trust through accountability, respect, and genuine commitment to every member.",
  },
  {
    icon: <Target size={36} />,
    title: "Discipline",
    description:
      "We believe success is achieved through consistency, dedication, and hard work. Our structured programs inspire members to stay focused, motivated, and committed to long-term growth.",
  },
  {
    icon: <Lightbulb size={36} />,
    title: "Innovation",
    description:
      "We continuously enhance our coaching methods by embracing modern fitness techniques, sports science, and innovative training approaches to deliver exceptional results.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-left md:text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#d07f7b] font-semibold text-xs sm:text-sm">
            Our Core Values
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Values That Define Velocity
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
            Our values shape every training session, every achievement, and
            every success story. They inspire us to create an environment where
            fitness, sports, and personal growth come together.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#d07f7b] hover:-translate-y-3 hover:shadow-[0_20px_45px_rgba(208,127,123,0.18)] transition-all duration-500"
            >
              {/* Top Accent */}
              <div className="h-1.5 w-full bg-[#d07f7b]"></div>

              <div className="flex flex-col flex-1 p-6 sm:p-8">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#d07f7b]/10 text-[#d07f7b] flex items-center justify-center mb-6 transition-all duration-700 transform-gpu group-hover:bg-[#d07f7b] group-hover:text-white group-hover:[transform:perspective(700px)_rotateY(180deg)]">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#d07f7b] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] sm:text-base leading-7 flex-1">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-8 w-14 h-[3px] bg-[#d07f7b] rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}