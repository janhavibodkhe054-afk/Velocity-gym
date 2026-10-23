import React from "react";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  BookOpen,
  Users,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AviationAbout() {
  const features = [
    "Aviation Industry Fundamentals",
    "Airport Operations Training",
    "Ground Handling Basics",
    "Passenger Service Skills",
    "Travel & Ticketing Fundamentals",
    "Communication & Interview Preparation",
  ];

  const details = [
    {
      icon: Clock,
      title: "Duration",
      desc: "3-Month Program",
    },
    {
      icon: BookOpen,
      title: "Learning Mode",
      desc: "Classroom, Practical & Recorded",
    },
    {
      icon: Users,
      title: "Eligibility",
      desc: "12th Pass & Graduates",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Scope",
      desc: "Airlines, Airports & Travel",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="/aviation.png"
              alt="Aviation Career Program"
              className="
                w-full
                h-[260px]
                sm:h-[340px]
                lg:h-[440px]
                object-cover
                rounded-2xl
                shadow-lg
              "
            />

            {/* Duration Badge */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#d07f7b]/10 flex items-center justify-center">
                <Clock size={21} className="text-[#d07f7b]" />
              </div>

              <div>
                <p className="text-xl font-bold text-gray-900">
                  3 Months
                </p>
                <p className="text-xs text-gray-500">
                  Career Training
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">

            <span className="text-[#d07f7b] uppercase tracking-[2px] text-sm font-semibold">
              Aviation Career Program
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 leading-tight">
              Launch Your Aviation Career With{" "}
              <span className="text-[#d07f7b]">
                Professional Training
              </span>
            </h2>

            {/* Short Description */}
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-7">
              Explore the aviation, airline, airport, and travel industries
              with our 3-month training program at{" "}
              <strong>Velocity Academy.</strong>
            </p>

            <p className="text-gray-600 mt-2 text-sm sm:text-base leading-7">
              Learn through classroom sessions, practical activities, and
              recorded resources while developing industry knowledge,
              communication skills, and interview confidence.
            </p>

            {/* Course Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {details.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex items-center gap-3
                      p-3
                      rounded-xl
                      border border-gray-100
                      bg-gray-50
                      hover:border-[#d07f7b]/40
                      transition-all duration-300
                    "
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-[#d07f7b]/10 flex items-center justify-center">
                      <Icon size={20} className="text-[#d07f7b]" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What You Will Learn
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {features.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle
                      size={19}
                      className="text-[#d07f7b] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm leading-5">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <Link
              to="/contact"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3
                bg-[#d07f7b]
                hover:bg-[#bf6e6a]
                text-white
                px-6
                py-3
                rounded-full
                text-sm
                font-semibold
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Enquire Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
