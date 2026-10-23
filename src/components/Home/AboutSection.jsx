import React from "react";
import { Dumbbell, Award, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="py-10 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-0 items-center">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-1"
          >
            {/* Background Shape */}

            <motion.div
              animate={{ rotate: [6, 10, 6] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[220px] h-[280px]
                sm:w-[280px] sm:h-[350px]
                md:w-[350px] md:h-[430px]
                lg:w-[430px] lg:h-[500px]
                border-[6px] lg:border-[8px]
                border-[#d07f7b]
                rounded-xl
                rotate-6
              "
            />

            {/* Image */}

            <motion.img
              src="about-home.png"
              alt="Gym Training"
              animate={{
                y: [0, -12, 0],
              }}
              whileHover={{
                scale: 1.04,
                rotate: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                relative z-10
                w-[260px]
                sm:w-[320px]
                md:w-[400px]
                lg:w-[500px]
                object-contain
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#d07f7b] font-bold uppercase tracking-[4px]"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-4
                text-3xl md:text-4xl lg:text-4xl
                font-extrabold
                text-gray-900
                leading-tight
              "
            >
              We Have A Great Deal Of Gym Training Experience
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="
                mt-4
                text-gray-600
                text-base
                sm:text-lg
                leading-7
                sm:leading-8
              "
            >
              With years of professional fitness experience, we help people
              transform their bodies, improve strength, increase confidence, and
              achieve their dream fitness goals through expert guidance,
              personalized workout plans, and modern training facilities.
            </motion.p>

            {/* Feature 1 */}

            <motion.div
              whileHover={{
                x: 8,
                scale: 1.02,
                boxShadow: "0px 15px 30px rgba(0,0,0,.08)",
              }}
              transition={{ duration: 0.3 }}
              className="
                mt-5
                flex
                items-start
                gap-4
                p-4
                rounded-xl
              "
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <Award className="text-[#d07f7b]" size={30} />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-bold">
                  Certified Trainers
                </h4>

                <p
                  className="text-gray-600 mt-2 leading-7 text-base
                sm:text-lg"
                >
                  Expert trainers providing professional fitness guidance for
                  every member with personalized attention.
                </p>
              </div>
            </motion.div>

            <div className="border-t my-3"></div>

            {/* Feature 2 */}

            <motion.div
              whileHover={{
                x: 8,
                scale: 1.02,
                boxShadow: "0px 15px 30px rgba(0,0,0,.08)",
              }}
              transition={{ duration: 0.3 }}
              className="
                flex
                items-start
                gap-4
                p-4
                rounded-xl
              "
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <Dumbbell className="text-[#d07f7b]" size={30} />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-bold">
                  Premium Equipment
                </h4>

                <p
                  className="text-gray-600 mt-2 leading-7 text-base
                sm:text-lg"
                >
                  Modern gym equipment with advanced workout facilities suitable
                  for beginners, athletes, and professionals.
                </p>
              </div>
            </motion.div>

            {/* Button */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="
    group
    relative
    overflow-hidden
    mt-4
    inline-flex
    items-center
    gap-3
    px-8
    py-4
    rounded-full
    font-semibold
    text-white
    border border-white/20
    bg-[#d07f7b]/90
    backdrop-blur-md
    shadow-lg
    transition-all
    duration-500
    hover:shadow-[0_0_30px_rgba(208,127,123,0.45)]
    hover:border-white/40
  "
            >
              {/* Glass Overlay */}
              <span className="absolute inset-0 bg-white/10 backdrop-blur-md"></span>

              {/* Shine Effect */}
              <span
                className="
      absolute
      top-0
      left-[-120%]
      h-full
      w-1/2
      skew-x-[-25deg]
      bg-gradient-to-r
      from-transparent
      via-white/50
      to-transparent
      transition-all
      duration-1000
      group-hover:left-[140%]
    "
              />

              {/* Button Text */}
              <span className="relative z-10">Learn More</span>

              {/* Icon */}
              <ArrowUpRight
                size={20}
                className="
      relative
      z-10
      transition-all
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
