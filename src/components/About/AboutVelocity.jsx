import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutVelocity() {
  const navigate = useNavigate();

  const features = [
    "Protein Bowls",
    "Healthy Meals",
    "Protein Shakes",
    "Fresh Juices",
    "Healthy Snacks",
    "Coffee & More",
  ];

  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="order-1 lg:order-1">
            {/* Small Tag */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 sm:w-12 h-[2px] bg-[#d07f7b]"></div>

              <span className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] font-semibold text-xs sm:text-sm">
                Velocity Fit Cafe
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Eat Healthy.
              <br />
              Fuel Your Fitness.
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
              <strong>Velocity Fit Cafe</strong> is your destination for
              wholesome, protein-rich meals and refreshing beverages prepared
              with fresh ingredients. We serve delicious food that supports your
              fitness journey without compromising on taste.
            </p>

            <p className="mt-5 text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
              Whether you're looking for a post-workout meal, a healthy snack,
              or a refreshing shake, our menu is designed to keep you energized
              throughout the day.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 mt-8">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d07f7b] flex-shrink-0"></div>

                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/contact")}
              className="mt-8 md:mt-10 w-full sm:w-fit bg-[#d07f7b] hover:bg-black transition-all duration-300 text-white px-8 sm:px-10 py-4 rounded-full flex items-center justify-center gap-3 font-semibold shadow-lg hover:scale-105"
            >
              Visit Our Cafe
              <ArrowUpRight size={20} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-2 lg:order-2">
            <img
              src="/about2.png"
              alt="Velocity Fit Cafe"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover rounded-[20px] md:rounded-[30px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}