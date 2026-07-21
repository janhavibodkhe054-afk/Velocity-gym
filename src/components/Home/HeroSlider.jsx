import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSlider() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[680px] sm:h-[650px] md:h-[700px] lg:h-[800px] xl:h-[850px] overflow-hidden -mt-10">
      {/* Background Image */}
      <motion.img
        src="/home-1.jpg"
        alt="Hero"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="
    absolute inset-0
    w-full h-full
    object-cover
    object-[10%_center]
    sm:object-[25%_center]
    md:object-center
    lg:object-center
  "
      />

      {/* Left Vertical Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 z-20"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <span className="uppercase tracking-[8px] text-gray-300 text-sm">
          Welcome To Velocity Sports & Fitness Academy
        </span>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-5">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-center"
        >
          <p className="uppercase tracking-[5px] md:tracking-[8px] text-[#cb826d] text-xs md:text-sm font-semibold">
            WE ARE THE BEST
          </p>

          <h1 className="mt-5 font-serif font-bold text-white leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
            Velocity Sports
            <br />& Fitness Academy
          </h1>

          <p className="mt-8 text-gray-200 text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Velocity Sports & Fitness Academy is Pune's destination for
            professional fitness training, cricket coaching, umpiring, personal
            training, premium sports supplements, and sportswear.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={() => navigate("/about")}
              className="group relative overflow-hidden border border-white/70 backdrop-blur-sm rounded-full px-8 py-4 text-white flex items-center justify-center gap-3 transition-all duration-500 hover:scale-105 hover:border-[#cb826d] hover:shadow-[0_0_30px_rgba(203,130,109,0.45)]"
            >
              {/* Glass Shine */}
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[250%]" />

              {/* Background Fill */}
              <span className="absolute inset-0 bg-[#cb826d] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative z-10">View More</span>

              <ArrowRight
                size={18}
                className="relative z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-[-15deg]"
              />
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="group relative overflow-hidden border border-white/70 backdrop-blur-sm rounded-full px-8 py-4 text-white flex items-center justify-center gap-3 transition-all duration-500 hover:scale-105 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              {/* Glass Shine */}
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[250%]" />

              {/* White Fill */}
              <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Contact Us
              </span>

              <ArrowRight
                size={18}
                className="relative z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:text-black"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
