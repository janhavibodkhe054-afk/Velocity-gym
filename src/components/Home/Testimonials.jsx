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
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8f5f2] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-16
          items-center
        ">


          {/* IMAGE SECTION */}

          <div className="
            relative
            flex
            justify-center
            order-1
          ">


            {/* Blur Circle */}

            <motion.div

              animate={{
                scale:[1,1.15,1],
                opacity:[0.5,0.8,0.5]
              }}

              transition={{
                duration:6,
                repeat:Infinity,
                ease:"easeInOut"
              }}

              className="
                absolute
                w-56
                h-56

                sm:w-72
                sm:h-72

                lg:w-96
                lg:h-96

                rounded-full
                bg-[#d07f7b]/30
                blur-3xl
              "

            />



            {/* Rotating Border */}

            <motion.div

              animate={{
                rotate:360
              }}

              transition={{
                duration:18,
                repeat:Infinity,
                ease:"linear"
              }}

              className="
                absolute

                w-64
                h-64

                sm:w-80
                sm:h-80

                lg:w-[450px]
                lg:h-[450px]

                rounded-full
                border-2
                border-dashed
                border-[#d07f7b]/40
              "

            />



            {/* Main Image */}

            <motion.div

              animate={{
                y:[0,-15,0]
              }}

              transition={{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut"
              }}

              whileHover={{
                scale:1.05
              }}

              className="
                relative
                z-10
                group
              "

            >

              <img

                src="https://i.pinimg.com/originals/f2/31/17/f231175cc4af23ccb0e07f3db7900397.jpg"

                alt="Fitness"

                className="
                  w-56
                  h-56

                  sm:w-72
                  sm:h-72

                  md:w-80
                  md:h-80

                  lg:w-[420px]
                  lg:h-[420px]

                  object-cover
                  rounded-full

                  border-[6px]
                  sm:border-[8px]

                  border-white
                  shadow-[0_25px_80px_rgba(0,0,0,0.25)]

                  transition-all
                  duration-500
                "

              />



              {/* Overlay */}

              <div className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-t
                from-black/20
                via-transparent
                to-white/10
              "/>



              {/* Glass Effect */}

              <div className="
                absolute
                inset-0
                rounded-full
                bg-white/10
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                border
                border-white/30
              "/>



            </motion.div>


          </div>






          {/* CONTENT SECTION */}


          <div className="order-2">


            <p className="
              uppercase
              tracking-[4px]
              sm:tracking-[5px]
              text-sm
              sm:text-base
              text-[#d07f7b]
              font-semibold
            ">
              Testimonials
            </p>



            <h2 className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-tight
              mt-3
            ">
              People Love Velocity Academy
            </h2>



            <p className="
              mt-4
              text-gray-600
              leading-7
              text-sm
              sm:text-base
              lg:text-lg
            ">
              We help people transform their fitness through professional
              coaching, expert trainers and modern facilities.
            </p>





            <Swiper

              modules={[Autoplay]}

              autoplay={{
                delay:3000,
                disableOnInteraction:false
              }}

              loop

              className="mt-6"

            >


              {testimonials.map((item,index)=>(


                <SwiperSlide key={index}>


                  <div className="
                    bg-white
                    p-5
                    sm:p-8
                    rounded-xl
                    shadow-lg
                  ">



                    <div className="
                      flex
                      gap-1
                      text-yellow-400
                      mb-4
                    ">

                      {[...Array(5)].map((_,i)=>(

                        <FaStar key={i}/>

                      ))}

                    </div>




                    <p className="
                      italic
                      text-gray-700
                      leading-7
                      sm:leading-8
                      text-sm
                      sm:text-base
                    ">
                      "{item.review}"
                    </p>




                    <div className="mt-6">

                      <h4 className="
                        font-bold
                        text-lg
                        sm:text-xl
                      ">
                        {item.name}
                      </h4>


                      <p className="text-gray-500 text-sm sm:text-base">
                        {item.role}
                      </p>


                    </div>



                  </div>



                </SwiperSlide>


              ))}


            </Swiper>


          </div>


        </div>


      </div>


    </section>
  );
}