import React from "react";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section
      className="relative bg-fixed bg-top bg-cover py-10 lg:py-10"
      style={{
        backgroundImage:
          "url('/vision.jpg')", // Replace with your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        

        {/* Vision */}
        <div className="mt-10">

          <div className="w-20 h-20 mx-auto rounded-full bg-[#d07f7b] flex items-center justify-center shadow-xl">
            <Eye size={38} />
          </div>

          <h3 className="text-3xl font-bold mt-6">
            Our Vision
          </h3>

          <div className="w-20 h-1 bg-[#d07f7b] mx-auto mt-4 rounded-full"></div>

          <p className="mt-8 text-lg leading-9 text-gray-200 max-w-4xl mx-auto">
            To become one of India's most trusted fitness and sports academies
            by developing healthier individuals, skilled athletes, and
            certified fitness professionals who inspire positive change.
          </p>

        </div>

        {/* Mission */}
        <div className="mt-10">

          <div className="w-20 h-20 mx-auto rounded-full bg-[#d07f7b] flex items-center justify-center shadow-xl">
            <Target size={38} />
          </div>

          <h3 className="text-3xl font-bold mt-6">
            Our Mission
          </h3>

          <div className="w-20 h-1 bg-[#d07f7b] mx-auto mt-4 rounded-full"></div>

          <p className="mt-8 text-lg leading-9 text-gray-200 max-w-4xl mx-auto">
            Our mission is to deliver world-class coaching and practical
            training that empowers individuals to achieve their fitness and
            sporting goals. We are committed to promoting healthy lifestyles
            through structured fitness programs, developing disciplined athletes
            with strong values, creating rewarding career opportunities through
            professional trainer education, and fostering a culture of
            continuous learning, innovation, dedication, and excellence in
            everything we do.
          </p>

        </div>

      </div>
    </section>
  );
}