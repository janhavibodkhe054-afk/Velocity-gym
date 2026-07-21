import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutGymTraining() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:pt-20 lg:pb-0 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">


        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-14
          items-center
          "
        >


          {/* Left Image */}

          <div className="order-2 md:order-1"> 

            <img
              src="/gym1.jpg"
              alt="Gym Personal Training"

              className="
              w-full

              h-[320px]
              sm:h-[400px]
              lg:h-[500px]

              object-cover

              rounded-2xl

              shadow-lg
              "
            />

          </div>





          {/* Right Content */}

          <div>


            <span
              className="
              order-1 md:order-2
              text-[#d07f7b]

              uppercase

              tracking-[3px]

              text-sm
              sm:text-base

              font-semibold
              "
            >
              Personal Training
            </span>





            <h2
              className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold

              text-gray-900

              mt-3

              leading-tight
              "
            >
              Achieve Your Fitness Goals With

              <span className="text-[#d07f7b]">
                {" "}Expert Guidance
              </span>

            </h2>





            <p
              className="
              text-gray-600

              mt-5

              text-sm
              sm:text-base
              lg:text-lg

              leading-7
              sm:leading-8
              "
            >
              At <strong>Velocity Sports & Fitness Academy</strong>, our Gym
              Personal Training program is designed to deliver personalized
              fitness solutions tailored to your individual goals. Whether
              you're aiming for weight loss, muscle gain, strength building,
              or improved overall fitness, our certified trainers provide
              dedicated one-on-one coaching to help you achieve lasting
              results safely and effectively.
            </p>






            {/* Features */}

            <div
              className="
              grid

              grid-cols-1
              sm:grid-cols-2

              gap-4

              mt-6
              "
            >

              {[
                "Certified Trainers",
                "Customized Workout Plans",
                "Modern Equipment",
                "Nutrition Guidance",
                "Progress Tracking",
                "Flexible Timings",
              ].map((item, index) => (

                <div
                  key={index}

                  className="
                  flex
                  items-center

                  gap-3
                  "
                >

                  <CheckCircle
                    size={22}
                    className="text-[#d07f7b] flex-shrink-0"
                  />


                  <span
                    className="
                    text-gray-700

                    text-sm
                    sm:text-base

                    font-medium
                    "
                  >
                    {item}
                  </span>


                </div>

              ))}


            </div>






            {/* Button */}

            <Link to="/contact">
  <button
    className="
      group
      mt-8 sm:mt-10
      bg-[#d07f7b]
      hover:bg-[#bf6e6a]
      text-white
      px-7 sm:px-8
      py-3 sm:py-4
      rounded-full
      font-semibold
      transition-all duration-300
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-xl
      hover:shadow-[#d07f7b]/40
      active:scale-95
      flex items-center gap-3
    "
  >
    Contact Us

    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-2"
    />
  </button>
</Link>



          </div>



        </div>


      </div>


    </section>
  );
}