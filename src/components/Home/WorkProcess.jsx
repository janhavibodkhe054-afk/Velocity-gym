import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Personal Training",
    image: "https://ex-coders.com/html/shotfit/assets/img/home-1/work-process/work-02.png",
    desc: "One-to-one professional gym training for muscle gain, fat loss and overall fitness.",
  },
  {
    id: "02",
    title: "Cricket Coaching",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnR2dKDTWDclqdt3zsOqdrMa5-cTjVTNus3fclDP2KUr4_HV4lvOQk8STW&s=10",
    desc: "Professional cricket coaching with batting, bowling and fitness training.",
  },
  {
    id: "03",
    title: "Fitness Achievement",
    image: "https://ex-coders.com/html/shotfit/assets/img/home-1/work-process/work-01.png",
    desc: "Achieve your dream body through dedication, expert guidance and consistency.",
  },
];

export default function WorkProcess() {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://ex-coders.com/html/shotfit/assets/img/home-1/work-process/work-process-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#171717]/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#d07f7b] font-semibold">
            WORK PROCESS
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mt-4">
            Our Gym Fitness Classes
          </h2>
        </div>

        {/* Timeline */}

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {steps.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.2 }}
    whileHover={{ y: -12 }}
    className="group text-center"
  >
    {/* Image */}
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto w-56 h-56 rounded-full p-[4px] bg-gradient-to-r from-[#d07f7b] via-white to-[#d07f7b]"
    >
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:shadow-[0_0_50px_rgba(208,127,123,0.5)] duration-500">

        <motion.img
          src={item.image}
          alt={item.title}
          whileHover={{
            scale: 1.15,
            rotate: 4,
          }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 duration-500"></div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-[3px] bg-white/10 opacity-0 group-hover:opacity-100 duration-500"></div>

        {/* Number */}
        <motion.h1
          whileHover={{
            scale: 1.2,
            rotate: -5,
          }}
          className="absolute inset-0 flex items-center justify-center text-white/80 text-7xl font-extrabold"
        >
          {item.id}
        </motion.h1>
      </div>
    </motion.div>

    {/* Glass Card */}
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      className="mt-8 p-6 transition-all duration-500 group-hover:bg-white/20 group-hover:shadow-2xl"
    >
      <h3 className="text-white text-3xl font-bold duration-300 group-hover:text-[#d07f7b]">
        {item.title}
      </h3>

      <p className="mt-4 text-gray-300 leading-8 text-base sm:text-lg">
        {item.desc}
      </p>
    </motion.div>
  </motion.div>
))}
          </div>
        </div>
      </div>
    </section>
  );
}
