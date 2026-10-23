import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSportsWear() {
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

          gap-10
          sm:gap-14
          lg:gap-20

          items-center
          "
        >
          {/* Left Side Image */}

          <div
            className="
            relative

            order-2 md:order-1
            "
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700"
              alt="Sports Wear"
              className="
              w-full

              h-[350px]

              sm:h-[450px]

              lg:h-[500px]


              object-cover


              rounded-2xl
              sm:rounded-3xl


              shadow-2xl
              "
            />
          </div>

          {/* Right Side Content */}

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
              Sports Wear
            </span>

            <h2
              className="
              text-3xl

              sm:text-4xl

              lg:text-5xl

              font-bold

              leading-tight

              mt-3
              sm:mt-4
              "
            >
              Premium Sportswear
              <br />
              <span className="text-[#d07f7b]">For Every Athlete</span>
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
              The right sportswear enhances comfort, performance, and confidence
              during every workout or game. At
              <strong> Velocity Academy</strong>, we offer a
              premium collection of sportswear and fitness accessories designed
              for athletes, gym enthusiasts, and fitness lovers.
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
              Our collection includes gym wear, cricket apparel, training
              t-shirts, track pants, sports shoes, accessories, and performance
              clothing made from high-quality, breathable, and durable fabrics.
              Every product is designed to combine functionality, comfort, and
              style, helping you perform your best while looking your best.
            </p>

            {/* Button */}
            <Link to="/contact">
              <button
                className="
              group

              mt-6

              inline-flex

              items-center

              gap-3


              bg-[#d07f7b]


              hover:bg-[#bf6e6a]


              text-white


              px-7
              sm:px-8


              py-3
              sm:py-4


              rounded-full


              font-semibold


              transition-all

              duration-300


              hover:-translate-y-1


              hover:shadow-xl


              hover:shadow-[#d07f7b]/30
              "
              >
                Shop Collection
                <ArrowRight
                  size={20}
                  className="
                group-hover:translate-x-1

                transition
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
