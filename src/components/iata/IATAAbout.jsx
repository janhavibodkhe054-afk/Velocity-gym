
import React from "react";
import {
  CheckCircle,
  ArrowRight,
  BookOpen,
  Globe,
  Ticket,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function IATAAbout() {
  const features = [
    "Aviation Industry Knowledge",
    "Travel Technology Fundamentals",
    "Airline Ticketing Concepts",
    "Professional Skill Development",
  ];

  const highlights = [
    {
      icon: <BookOpen size={20} />,
      title: "Industry Learning",
      desc: "Aviation & Travel",
    },
    {
      icon: <Ticket size={20} />,
      title: "Ticketing",
      desc: "Fares & Reservations",
    },
    {
      icon: <Globe size={20} />,
      title: "Travel Technology",
      desc: "Industry Fundamentals",
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Course Guidance",
      desc: "Enquiry & Counselling",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85"
                alt="Aircraft flying above the clouds"
                loading="lazy"
                className="
                  w-full
                  h-[260px]
                  sm:h-[340px]
                  lg:h-[420px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* Image Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl shadow-lg px-4 py-3">
              <p className="text-xs text-gray-500">
                Explore Your Potential
              </p>
              <p className="text-base font-bold text-[#304d43]">
                Aviation & Travel
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[#d07f7b] text-sm sm:text-base font-semibold uppercase tracking-wider">
              About IATA Training
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 leading-tight">
              Build Industry-Relevant Skills With Aviation & Travel Training
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-7 mt-4">
              Explore aviation and travel learning pathways covering airline
              operations, ticketing concepts, travel technology, and customer
              service fundamentals.
            </p>

            <p className="text-gray-600 text-sm leading-7 mt-2">
              Get guidance to understand suitable courses and take your next
              step towards a career in the aviation or travel industry.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 p-3 transition-all duration-300 hover:border-[#d07f7b] hover:shadow-md"
                >
                  <div className="shrink-0 text-[#d07f7b] mt-1">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle
                    size={18}
                    className="shrink-0 text-[#d07f7b]"
                  />
                  <span className="text-sm text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-2
                mt-7
                rounded-lg
                bg-[#d07f7b]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#304d43]
              "
            >
              Enquire About Courses
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}


