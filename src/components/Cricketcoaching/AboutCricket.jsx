import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutCricket() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:pt-20 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-20
          items-center
          "
        >
          {/* Images */}

          <div
            className="
            order-2 md:order-1
            flex
            justify-center

            gap-3
            sm:gap-5

            order-1
            "
          >
            {/* Image 1 */}

            <img
              src="https://tidasports.com/wp-content/uploads/2025/07/Cricket-2_11zon-1024x576.jpg"
              alt="Cricket Coaching"
              className="
                w-[45%]

                sm:w-52

                h-[320px]
                sm:h-[420px]
                lg:h-[500px]

                object-cover

                object-[35%_center]
              "
            />

            {/* Image 2 */}

            <img
              src="https://images.pexels.com/photos/37144635/pexels-photo-37144635/free-photo-of-cricketer-poses-at-striking-position-on-outdoor-pitch.jpeg"
              alt="Cricket Coaching"
              className="
                w-[45%]

                sm:w-52

                h-[320px]
                sm:h-[420px]
                lg:h-[500px]

                object-cover

                mt-6
                sm:mt-10
              "
            />
          </div>

          {/* Content */}

          <div className="order-1 md:order-2">
            <p
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
              Cricket Coaching
            </p>

            <h2
              className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold

              mt-3
              sm:mt-4

              leading-tight
              "
            >
              About Our
              <br />
              <span className="text-[#d07f7b]">Cricket Program</span>
            </h2>

            <div
              className="
              w-20
              h-1

              bg-[#d07f7b]

              mt-5
              mb-5

              rounded-full
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
              Our Cricket Coaching Program is designed for aspiring cricketers
              of all ages and skill levels who want to develop their game under
              the guidance of experienced coaches. We focus on building strong
              technical skills, physical fitness, discipline, and match
              awareness through structured training sessions.
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
              From mastering batting, bowling, and fielding techniques to
              improving fitness and game strategies, our coaching ensures every
              player receives individual attention and opportunities to enhance
              their performance. Whether you are a beginner or an advanced
              player, we provide the right environment to help you grow and
              succeed.
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

              border

              border-[#d07f7b]

              text-[#d07f7b]

              px-7
              sm:px-8

              py-3
              sm:py-4

              rounded-full

              font-semibold

              transition-all
              duration-300

              hover:bg-[#d07f7b]

              hover:text-white
              "
              >
                Join Now
                <ArrowRight
                  size={18}
                  className="
                transition

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
