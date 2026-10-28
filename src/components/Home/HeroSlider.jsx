import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSlider() {
  const navigate = useNavigate();

  const buttons = [
    { label: "View More", path: "/about", primary: true },
    { label: "Contact Us", path: "/contact", primary: false },
  ];

  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[600px]
        sm:h-[620px]
        md:h-[700px]
        lg:h-[750px]
        xl:h-[800px]
        lg:-mt-20 bg-[#141414]
      "
    >
      {/* BACKGROUND IMAGES */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.025 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Mobile Image */}
        <img
          src="/mobile1.png"
          alt="Velocity Academy Trainer"
          className="
            block md:hidden
            absolute inset-0
            w-full h-full
            object-cover
            object-[center_25%]
          "
        />

        {/* Desktop Image */}
        <img
          src="/home-1.jpg"
          alt="Velocity Academy Professional Training"
          className="
            hidden md:block
            absolute inset-0
            w-full h-full
            object-contain object-center
          "
        />
      </motion.div>

      {/* MOBILE GRADIENT */}
      <div
        className="
          absolute inset-0 md:hidden
          bg-gradient-to-b
          from-black/10
          via-black/45
          to-black/90
        "
      />

      {/* DESKTOP OVERLAY */}
      <div
        className="
          hidden md:block absolute inset-0
          bg-black/20 lg:bg-black/10
        "
      />

      {/* LEFT BRANDING */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          hidden xl:block
          absolute left-6 top-1/2 z-20
        "
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <span className="uppercase tracking-[8px] text-gray-300 text-xs">
          Velocity Academy
        </span>
      </motion.div>

      {/* HERO CONTENT */}
      <div
        className="
          relative z-20
          flex items-end md:items-center
          justify-center
          w-full h-full
          px-5 sm:px-8
          pb-12 sm:pb-14 md:pb-0
          md:pt-20
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            w-full min-w-0 mx-auto
            max-w-[360px]
            sm:max-w-[460px]
            md:max-w-[530px]
            text-center
           
          "
        >
          {/* TAGLINE */}
          <p
            className="
              uppercase font-semibold
              text-[#e5a08b]
              text-[10px] sm:text-xs md:text-sm
              tracking-[2.5px]
              md:tracking-[6px]
            "
          >
            WE ARE THE BEST
          </p>

          {/* HEADING */}
          <h1
            className="
              mt-3 md:mt-5
              font-bold text-white
              text-[clamp(27px,7.5vw,36px)]
              sm:text-[44px]
              md:text-[48px]
              lg:text-[54px]
              xl:text-[58px]
              leading-[1.2]
              tracking-tight
              drop-shadow-lg
            "
          >
            Velocity Academy
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
    mt-3 md:mt-7 mx-auto
    max-w-[320px]
    sm:max-w-[420px]
    md:max-w-[480px]
    text-white/95
    text-[17px]
    sm:text-[14px]
    md:text-[15px]
    lg:text-base
    leading-[1.7]
    md:leading-8
    drop-shadow-md
  "
          >
            Explore professional Personal Training Courses, Airline Career
            Programs, and Voice Over Artist Training at Velocity Academy to
            develop your skills and build a successful career.
          </p>
          {/* BUTTONS */}
          <div
            className="
              mt-5 md:mt-10
              flex flex-wrap
              justify-center items-center
              gap-3 md:gap-4
            "
          >
            {buttons.map((btn) => (
              <button
                key={btn.path}
                type="button"
                onClick={() => navigate(btn.path)}
                className="
                  group relative overflow-hidden
                  inline-flex items-center justify-center
                  gap-2
                  rounded-full
                  border border-white/70
                  backdrop-blur-sm
                  px-4 py-2.5
                  sm:px-6 sm:py-3.5
                  md:px-8 md:py-4
                  text-white
                  text-[12px] sm:text-sm md:text-base
                  font-medium whitespace-nowrap
                  transition-all duration-500
                  hover:scale-105
                "
              >
                {/* Hover Fill */}
                <span
                  className={`
                    absolute inset-0
                    scale-x-0 origin-left
                    transition-transform duration-500
                    group-hover:scale-x-100
                    ${btn.primary ? "bg-[#cb826d]" : "bg-white"}
                  `}
                />

                {/* Shine */}
                <span
                  className="
                    absolute inset-0
                    -translate-x-full skew-x-12
                    bg-gradient-to-r
                    from-transparent via-white/20 to-transparent
                    transition-transform duration-1000
                    group-hover:translate-x-[250%]
                  "
                />

                <span
                  className={`
                    relative z-10
                    transition-colors duration-300
                    ${btn.primary ? "text-white" : "group-hover:text-black"}
                  `}
                >
                  {btn.label}
                </span>

                <ArrowRight
                  size={16}
                  className={`
                    relative z-10 shrink-0
                    transition-all duration-300
                    group-hover:translate-x-1
                    ${btn.primary ? "text-white" : "group-hover:text-black"}
                  `}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
