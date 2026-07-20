import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutMission() {
  const navigate = useNavigate();
  const [active, setActive] = useState("mission");

  return (
    <section className="py-10 lg:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center order-1">
            {/* Background Shape */}
            <div className="absolute w-[220px] h-[320px] sm:w-[280px] sm:h-[400px] md:w-[350px] md:h-[480px] lg:w-[420px] lg:h-[560px] bg-gradient-to-b from-red-200 to-white rotate-[-18deg] rounded-2xl"></div>

            {/* Image */}
            <img
              src="https://media.istockphoto.com/id/497199809/photo/cropped-shot-of-two-opposing-cricket-players-during-a-match.jpg?s=612x612&w=0&k=20&c=MdWr9W1cTzSbn_VAITnS3WNT1mgTrC4qgPV6AQ-1qWk="
              alt="Sports Academy"
              className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-md object-cover shadow-2xl"
              style={{
                clipPath: "polygon(20% 0%,100% 0%,80% 100%,0% 100%)",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] font-bold text-sm">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              The Team Behind Your Fitness & Sports Success
            </h2>

            <p className="text-gray-600 mt-6 leading-7 sm:leading-8 text-base
                sm:text-lg">
              At <strong>Velocity Sports & Fitness Academy</strong>, we combine
              professional gym training, cricket coaching, fitness programs,
              strength development, and sports performance training under one
              roof. Whether you're a beginner, athlete, or fitness enthusiast,
              our certified trainers help you achieve your goals with
              personalized guidance and modern facilities.
            </p>

            {/* Tabs */}
            <div className="mt-10">
              <div className="grid grid-cols-2 sm:flex">
                <button
                  onClick={() => setActive("mission")}
                  className={`py-4 px-4 sm:px-8 font-bold transition duration-300 ${
                    active === "mission"
                      ? "bg-[#d07f7b] text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Our Mission
                </button>

                <button
                  onClick={() => setActive("vision")}
                  className={`py-4 px-4 sm:px-8 font-bold transition duration-300 ${
                    active === "vision"
                      ? "bg-[#d07f7b] text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Our Vision
                </button>
              </div>

              <div className="bg-[#20242d] text-white p-6 sm:p-8">
                {active === "mission" ? (
                  <p className="leading-7 sm:leading-8 text-gray-300 text-base
                sm:text-lg">
                    Our mission is to inspire healthy lifestyles by providing
                    world-class gym training, professional cricket coaching,
                    personal fitness programs, sports conditioning, and expert
                    guidance. We aim to build confidence, strength, discipline,
                    and athletic excellence through quality coaching, modern
                    equipment, and a motivating environment.
                  </p>
                ) : (
                  <p className="leading-7 sm:leading-8 text-gray-300 text-base
                sm:text-lg">
                    Our vision is to become one of Pune's most trusted sports
                    and fitness academies by developing champions in fitness and
                    cricket while promoting health, teamwork, confidence, and
                    lifelong wellness. We strive to create an academy where
                    every individual can unlock their full potential.
                  </p>
                )}
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/whyus")}
              className="mt-8 sm:mt-10 bg-[#d07f7b] hover:bg-black transition duration-300 text-white px-8 sm:px-10 py-4 flex items-center justify-center gap-3 font-semibold w-full sm:w-fit"
            >
              Read More
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}