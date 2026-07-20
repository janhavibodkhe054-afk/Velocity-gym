import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";


import "swiper/css";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "Gym Member",
    review:
      "Excellent gym with modern equipment and professional trainers. Highly recommended for everyone.",
  },
  {
    name: "Amit Sharma",
    role: "Cricket Student",
    review:
      "Best cricket coaching with personal attention and excellent fitness guidance.",
  },
  {
    name: "Sneha More",
    role: "Fitness Member",
    review:
      "Friendly atmosphere, clean gym, and amazing trainers. I achieved my fitness goals here.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          <div className="relative flex justify-center items-center">

  {/* Background Blur */}
  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute w-[360px] h-[360px] rounded-full bg-[#d07f7b]/30 blur-3xl"
  />

  {/* Rotating Border */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[450px] h-[450px] rounded-full border-2 border-dashed border-[#d07f7b]/40"
  />

  {/* Image */}
  <motion.div
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.05,
    }}
    className="relative z-10"
  >
    <img
      src="https://i.pinimg.com/originals/f2/31/17/f231175cc4af23ccb0e07f3db7900397.jpg"
      alt=""
      className="w-[420px] h-[420px] object-cover rounded-full border-[8px] border-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
    />

    {/* Glass Overlay */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-white/10 backdrop-blur-[2px]" />
  </motion.div>

  {/* Floating Glass Rating Card */}
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="absolute bottom-12 left-0 z-20"
  >
    <div className="backdrop-blur-xl bg-white/70 border border-white/50 shadow-2xl rounded-2xl px-6 py-4">

      <div className="flex justify-center gap-1 text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={13} />
        ))}
      </div>

      

    </div>
  </motion.div>

  
</div>
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[5px] text-[#d07f7b] font-semibold">
              Testimonials
            </p>

            <h2 className="text-4xl lg:text-4xl font-bold leading-tight mt-4">
              People Love
              <br />
              Velocity Academy
            </h2>

            <p
              className="mt-5 text-gray-600 leading-7  text-base
                sm:text-lg"
            >
              We help people transform their fitness through professional
              coaching, expert trainers and modern facilities.
            </p>

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              className="mt-4"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex gap-1 text-yellow-400 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <p className="italic text-gray-700 leading-8">
                      "{item.review}"
                    </p>

                    <div className="mt-8">
                      <h4 className="font-bold text-xl">{item.name}</h4>

                      <p className="text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT IMAGE */}
        </div>
      </div>
    </section>
  );
}
