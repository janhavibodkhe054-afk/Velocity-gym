import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutHomeTraining() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:pt-20 lg:pb-0 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">


        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2

          gap-10
          lg:gap-0

          items-center
          "
        >




          {/* Left Content */}

          <div
            className="
            order-1
            lg:order-2
            "
          >


            <span
              className="
              uppercase

              tracking-[3px]

              text-[#d07f7b]

              text-sm
              sm:text-base

              font-semibold
              "
            >
              Personal Trainer – Home Service
            </span>





            <h2
              className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold

              leading-tight

              text-gray-900

              mt-3
              sm:mt-4
              "
            >

              Professional Fitness

              <br />

              <span className="text-[#d07f7b]">
                At Your Doorstep
              </span>

            </h2>






            <p
              className="
              text-gray-600

              text-sm
              sm:text-base
              lg:text-lg

              leading-7
              sm:leading-8

              mt-5
              sm:mt-6
              "
            >
              We understand that busy schedules and travel constraints
              can make it difficult to visit the gym regularly.
              Our Home Personal Training service brings certified
              fitness coaching directly to your home, helping you
              achieve your fitness goals in a comfortable environment.
            </p>





            <p
              className="
              text-gray-600

              text-sm
              sm:text-base
              lg:text-lg

              leading-7
              sm:leading-8

              mt-4
              "
            >
              Every training session is tailored according to your
              fitness level, health condition, and personal goals.
              Our trainers provide continuous motivation, progress
              tracking, and expert guidance to help you stay
              consistent and achieve long-term results.
            </p>







            {/* Button */}
<Link to="/contact">
            <button
              className="
              group

              mt-6

              bg-[#d07f7b]

              hover:bg-[#bf6f6b]

              text-white

              px-7
              sm:px-8

              py-3
              sm:py-4

              rounded-full

              font-semibold

              transition-all

              duration-300

              hover:shadow-xl

              hover:-translate-y-1

              flex

              items-center

              gap-3
              "
            >

              Join Us


              <ArrowRight
                size={20}
                className="
                transition-transform

                group-hover:translate-x-1
                "
              />


            </button>
</Link>

          </div>








          {/* Right Image */}

          <div
            className="
            relative

            flex

            justify-center

            order-2
            lg:order-1

            min-h-[400px]

            sm:min-h-[500px]
            "
          >



            {/* Outer Ring */}

            <div
              className="
              absolute

              w-[280px]
              h-[280px]

              sm:w-[380px]
              sm:h-[380px]

              lg:w-[430px]
              lg:h-[430px]

              rounded-full

              border-[12px]
              sm:border-[20px]

              border-[#f7eeee]
              "
            ></div>







            {/* Accent Circle */}

            <div
              className="
              absolute

              top-10
              sm:top-12

              right-8
              sm:right-12

              w-32
              h-32

              sm:w-52
              sm:h-52

              bg-[#d07f7b]

              rounded-full

              opacity-20
              "
            ></div>








            {/* Main Image */}

            <img
              src="https://i.pinimg.com/1200x/de/96/d4/de96d42522618d602ea8bd1c5152f862.jpg"

              alt="Home Personal Trainer"

              className="
              relative

              z-10

              w-[260px]
              sm:w-[320px]
              lg:w-[360px]

              h-[380px]
              sm:h-[450px]
              lg:h-[500px]

              object-cover

              rounded-b-full

              shadow-xl
              "
            />



          </div>




        </div>


      </div>


    </section>
  );
}