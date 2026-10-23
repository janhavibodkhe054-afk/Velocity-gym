import React from "react";
import { FaSwimmingPool, FaUserGraduate, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSwimming = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 overflow-hidden">

      <div className="
        max-w-7xl 
        mx-auto 
        px-5 
        sm:px-6 
        lg:px-10 
        grid 
        lg:grid-cols-2 
        gap-12 
        lg:gap-16 
        items-center
      ">

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          order-2 md:order-1
            relative 
            flex 
            justify-center 
            h-[480px]
            sm:h-[520px]
            lg:h-[560px]
          "
        >

          {/* Left Image */}
          <div
            className="
              absolute
              left-0
              sm:left-10
              lg:left-0
              top-0
              w-[230px]
              sm:w-[270px]
              lg:w-[280px]
              h-[380px]
              sm:h-[430px]
              lg:h-[450px]
              rounded-xl
              overflow-hidden
              shadow-2xl
              z-20
            "
          >
            <img
              src="https://i.pinimg.com/1200x/32/57/c4/3257c4a6bc4fa321947977426da41d41.jpg"
              alt="Swimming"
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                duration-500
              "
            />
          </div>


          {/* Right Image */}
          <div
            className="
              absolute
              right-0
              sm:right-8
              lg:right-0
              top-20
              sm:top-24
              lg:top-28
              w-[230px]
              sm:w-[300px]
              lg:w-[330px]
              h-[390px]
              sm:h-[440px]
              lg:h-[460px]
              rounded-xl
              overflow-hidden
              shadow-2xl
            "
          >
            <img
              src="https://i.pinimg.com/736x/b7/57/b7/b757b774e7a578ec056d45820bb9980e.jpg"
              alt="Swimming Coach"
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                duration-500
              "
            />
          </div>


          {/* Decorative Circle */}
          <div
            className="
              absolute
              bottom-12
              right-5
              sm:right-10
              lg:right-5
              w-14
              h-14
              rounded-full
              border-4
              border-[#d07f7b]
              flex
              items-center
              justify-center
            "
          >
            <div className="w-4 h-4 rounded-full bg-[#d07f7b]"></div>
          </div>


        </motion.div>


        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              
              leading-tight
              text-black
            "
          >
            Learn To Swim With Confidence
          </h2>


          <p
            className="
              text-gray-600
              mt-6
              sm:mt-8
              leading-7
              sm:leading-8
              text-base
              sm:text-lg
            "
          >
            Swimming is a life skill that improves fitness, endurance,
            confidence, and overall health. At{" "}
            <span className="font-semibold text-black">
              Velocity Academy
            </span>
            , our professional swimming training is designed for children,
            adults, beginners, and competitive swimmers. Our certified coaches
            focus on proper techniques, breathing control, water safety, and
            endurance to help every swimmer achieve their personal goals.
          </p>


          {/* Features */}
          <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">


            <div className="flex items-start gap-3 sm:gap-5">

              <div className="w-8 sm:w-12 h-[2px] bg-[#d07f7b] mt-4"></div>

              <div className="flex gap-3 sm:gap-4">

                <FaSwimmingPool
                  className="text-[#d07f7b] mt-1 flex-shrink-0"
                  size={24}
                />

                <p className="text-gray-700 text-base sm:text-lg">
                  Professional Swimming Coaching for all age groups.
                </p>

              </div>

            </div>



            <div className="flex items-start gap-3 sm:gap-5">

              <div className="w-8 sm:w-12 h-[2px] bg-[#d07f7b] mt-4"></div>

              <div className="flex gap-3 sm:gap-4">

                <FaUserGraduate
                  className="text-[#d07f7b] mt-1 flex-shrink-0"
                  size={24}
                />

                <p className="text-gray-700 text-base sm:text-lg">
                  Beginner, Intermediate & Advanced Training Programs.
                </p>

              </div>

            </div>



            <div className="flex items-start gap-3 sm:gap-5">

              <div className="w-8 sm:w-12 h-[2px] bg-[#d07f7b] mt-4"></div>

              <div className="flex gap-3 sm:gap-4">

                <FaShieldAlt
                  className="text-[#d07f7b] mt-1 flex-shrink-0"
                  size={24}
                />

                <p className="text-gray-700 text-base sm:text-lg">
                  Safe Environment with Water Safety & Stroke Development.
                </p>

              </div>

            </div>


          </div>



          {/* Button */}
          <Link to="/contact">
          <button
            className="
              group
              mt-10
              flex
              items-center
              rounded-md
              overflow-hidden
              shadow-lg
            "
          >

            <span
              className="
                bg-[#d07f7b]
                text-white
                px-6
                sm:px-10
                py-4
                sm:py-5
                text-base
                sm:text-xl
                font-semibold
                transition
                duration-300
                group-hover:bg-[#bf716d]
              "
            >
              Join Swimming
            </span>


            <span
              className="
                bg-black
                text-white
                px-5
                sm:px-7
                py-4
                sm:py-5
                text-2xl
                sm:text-3xl
              "
            >
              ↗
            </span>


          </button>
</Link>

        </motion.div>


      </div>

    </section>
  );
};

export default AboutSwimming;