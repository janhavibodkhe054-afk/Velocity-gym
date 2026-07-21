import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Consultation & Goal Assessment",
    image:
      "https://ex-coders.com/html/shotfit/assets/img/home-1/work-process/work-02.png",
    desc: "We begin by understanding your fitness level, sports background, and personal objectives to recommend the most suitable training program.",
  },
  {
    id: "02",
    title: "Professional Training & Guidance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnR2dKDTWDclqdt3zsOqdrMa5-cTjVTNus3fclDP2KUr4_HV4lvOQk8STW&s=10",
    desc: "Our certified coaches provide structured workouts, technical coaching, and continuous support to help you improve your skills and performance.",
  },
  {
    id: "03",
    title: "Track Progress & Achieve Results",
    image:
      "https://ex-coders.com/html/shotfit/assets/img/home-1/work-process/work-01.png",
    desc: "Regular performance evaluations, expert feedback, and personalized guidance ensure continuous improvement and lasting success.",
  },
];

export default function WorkProcess() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://ex-coders.com/html/shotfit/assets/img/home-1/work-process/work-process-bg.jpg')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#171717]/40"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">


        {/* Heading */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <p className="
            uppercase
            tracking-[4px]
            sm:tracking-[5px]
            text-sm
            sm:text-base
            text-[#d07f7b]
            font-semibold
          ">
            WORK PROCESS
          </p>


          <h2 className="
            mt-3
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-white
          ">
            Our Gym Fitness Classes
          </h2>


        </div>



        {/* Cards */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-12
          sm:gap-14
          lg:gap-10
        ">


          {steps.map((item,index)=>(


            <motion.div

              key={item.id}

              initial={{
                opacity:0,
                y:80
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:.7,
                delay:index*.2
              }}

              whileHover={{
                y:-10
              }}

              className="group text-center"


            >


              {/* Image Circle */}

              <motion.div

                animate={{
                  y:[0,-10,0],
                  rotate:[0,1,-1,0]
                }}

                transition={{
                  duration:5,
                  repeat:Infinity,
                  ease:"easeInOut"
                }}

                className="
                  relative
                  mx-auto
                  w-40
                  h-40

                  xs:w-48
                  xs:h-48

                  sm:w-52
                  sm:h-52

                  md:w-56
                  md:h-56

                  rounded-full
                  p-[4px]
                  bg-gradient-to-r
                  from-[#d07f7b]
                  via-white
                  to-[#d07f7b]
                "

              >


                <div className="
                  relative
                  w-full
                  h-full
                  rounded-full
                  overflow-hidden
                  shadow-2xl
                  transition-all
                  duration-500
                  group-hover:shadow-[0_0_50px_rgba(208,127,123,0.5)]
                ">


                  <motion.img

                    src={item.image}

                    alt={item.title}

                    whileHover={{
                      scale:1.15,
                      rotate:4
                    }}

                    transition={{
                      duration:.5
                    }}

                    className="
                      w-full
                      h-full
                      object-cover
                    "

                  />



                  {/* Dark Overlay */}

                  <div className="
                    absolute
                    inset-0
                    bg-black/40
                    group-hover:bg-black/20
                    transition
                    duration-500
                  "></div>



                  {/* Glass */}

                  <div className="
                    absolute
                    inset-0
                    backdrop-blur-sm
                    bg-white/10
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "></div>



                  {/* Number */}

                  <motion.h1

                    whileHover={{
                      scale:1.2,
                      rotate:-5
                    }}

                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      text-white/80
                      text-5xl
                      sm:text-6xl
                      md:text-7xl
                      font-extrabold
                    "

                  >
                    {item.id}

                  </motion.h1>


                </div>


              </motion.div>





              {/* Content */}

              <motion.div

                whileHover={{
                  scale:1.03
                }}

                className="
                  mt-6
                  sm:mt-8
                  p-4
                  sm:p-6
                  transition-all
                  duration-500
                  group-hover:bg-white/10
                  group-hover:shadow-2xl
                  rounded-xl
                "

              >


                <h3 className="
                  text-white
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  transition
                  duration-300
                  group-hover:text-[#d07f7b]
                ">
                  {item.title}
                </h3>



                <p className="
                  mt-3
                  sm:mt-4
                  text-gray-300
                  leading-7
                  sm:leading-8
                  text-sm
                  sm:text-base
                  lg:text-lg
                ">
                  {item.desc}
                </p>


              </motion.div>



            </motion.div>


          ))}


        </div>


      </div>


    </section>
  );
}