import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSupplement() {
  return (
    <section
      className="
      bg-white

      py-12
      sm:py-16
      lg:pt-10
      lg:pb-0

      overflow-hidden
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-10
        "
      >
        <div
          className="
          grid

          grid-cols-1

          lg:grid-cols-2

          gap-12
          lg:gap-20

          items-center
          "
        >
          {/* Left Image Section */}

          <div
            className="
            relative

            flex

            justify-center

            order-2 md:order-1
            "
          >
            {/* Background Card */}

            <div
              className="
              absolute

              top-6
              sm:top-8

              w-[260px]
              sm:w-[350px]
              lg:w-[420px]

              h-[360px]
              sm:h-[450px]
              lg:h-[500px]

              bg-[#f9f5f5]

              rounded-[30px]
              sm:rounded-[40px]
              "
            ></div>

            {/* Main Image */}

            <div
              className="
              relative

              z-20

              mt-5
              "
            >
              <img
                src="https://i.pinimg.com/736x/d5/9f/4d/d59f4d39672c26880d1a19cfdb6370c6.jpg"
                alt="Supplements"
                className="
                w-[260px]

                sm:w-[330px]

                lg:w-[390px]


                h-[380px]

                sm:h-[460px]

                lg:h-[520px]


                object-cover


                rounded-[25px]

                sm:rounded-[30px]


                shadow-2xl
                "
              />

              {/* Genuine Badge */}

              <div
                className="
                absolute

                -bottom-5
                sm:-bottom-8

                left-2
                sm:-left-8


                bg-white

                rounded-xl
                sm:rounded-2xl


                shadow-xl

                border


                px-5
                sm:px-8


                py-4
                sm:py-6
                "
              >
                <h2
                  className="
                  text-3xl
                  sm:text-4xl

                  font-bold

                  text-[#d07f7b]
                  "
                >
                  100%
                </h2>

                <p
                  className="
                  text-gray-600

                  text-sm
                  sm:text-base

                  font-medium
                  "
                >
                  Genuine Products
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}

          <div
            className="
            order-1 md:order-2
            "
          >
            <span
              className="
              uppercase

              tracking-[3px]
              sm:tracking-[4px]

              text-[#d07f7b]

              text-sm
              sm:text-base

              font-semibold
              "
            >
              Supplements
            </span>

            <h2
              className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold

              leading-tight

              text-gray-900

              mt-4
              "
            >
              About Our
              <br />
              <span className="text-[#d07f7b]">Premium Supplements</span>
            </h2>

            {/* Line */}

            <div
              className="
              w-20
              sm:w-24

              h-1

              bg-[#d07f7b]

              rounded-full

              mt-5
              sm:mt-6

              mb-5
              sm:mb-6
              "
            ></div>

            <p
              className="
              text-gray-600

              text-sm
              sm:text-base
              lg:text-lg

              leading-7
              sm:leading-8
              "
            >
              Proper nutrition plays a vital role in achieving fitness goals,
              and we are committed to providing genuine, high-quality
              supplements that support your training and recovery. At{" "}
              <strong>Velocity Academy</strong>, we offer
              carefully selected products from trusted brands to help you
              perform at your best.
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
              Our collection includes whey protein, mass gainers, creatine,
              pre-workout supplements, multivitamins, and other sports nutrition
              products that improve performance, recovery, and overall health
              while supporting your fitness journey.
            </p>

            {/* Button */}
            <Link to="/contact">
              <button
                className="
              group

              mt-8
              sm:mt-10


              inline-flex

              items-center

              gap-3


              bg-[#d07f7b]


              text-white


              px-7
              sm:px-8


              py-3
              sm:py-4


              rounded-full


              font-semibold


              transition-all

              duration-300


              hover:bg-[#c16f6b]

              hover:-translate-y-1

              hover:shadow-xl

              hover:shadow-[#d07f7b]/30
              "
              >
                Shop Now
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
        </div>
      </div>
    </section>
  );
}
