import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PersonalTrainerCourse() {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-16
          items-center
        "
        >
          {/* LEFT IMAGES */}

          <div
            className="
            order-2 md:order-1
            relative
            flex
            justify-center
            h-[450px]

            sm:h-[520px]

            lg:h-[600px]
          "
          >
            {/* Background Accent */}

            <div
              className="
              absolute
              left-5
              sm:left-10
              top-8

              w-[160px]
              sm:w-[220px]

              h-[380px]
              sm:h-[520px]

              bg-[#d07f7b]/10
              rounded-2xl
            "
            ></div>

            {/* Small Image */}

            <div
              className="
              absolute
              left-0
              top-0

              w-[45%]
              sm:w-[42%]

              h-[360px]
              sm:h-[450px]
              lg:h-[500px]

              overflow-hidden
              rounded-xl
              shadow-2xl
            "
            >
              <img
                src="https://i.pinimg.com/1200x/ff/71/54/ff7154aaa7fc5f307d701cc27e08b7c5.jpg"
                alt="Gym Training"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition
                  duration-700
                "
              />
            </div>

            {/* Main Image */}

            <div
              className="
              absolute
              right-0

              top-10

              w-[55%]

              h-[400px]
              sm:h-[500px]
              lg:h-[540px]

              overflow-hidden
              rounded-xl

              shadow-2xl

              border-4
              sm:border-8
              border-white
            "
            >
              <img
                src="https://i.pinimg.com/1200x/ef/51/a4/ef51a4681d575c7232d78ce053b1dc3a.jpg"
                alt="Personal Trainer"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition
                  duration-700
                "
              />
            </div>

            {/* Experience Card */}

            <div
              className="
              absolute

              bottom-0

              left-8
              sm:left-16

              bg-[#d07f7b]

              text-white

              px-5
              sm:px-8

              py-4
              sm:py-6

              rounded-xl

              shadow-xl
            "
            >
              <h3
                className="
                text-3xl
                sm:text-4xl
                font-bold
              "
              >
                100%
              </h3>

              <p
                className="
                uppercase
                tracking-wider
                text-xs
                sm:text-sm
                mt-1
              "
              >
                Practical Training
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="order-1 md:order-2">
            <span
              className="
              inline-block

              px-4
              sm:px-5

              py-2

              rounded-full

              bg-[#d07f7b]/10

              text-[#d07f7b]

              text-xs
              sm:text-sm

              font-semibold

              uppercase

              tracking-[3px]
              sm:tracking-[4px]
            "
            >
              Skilled India Register
            </span>

            <h2
              className="
              mt-5

              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold

              leading-tight

              text-gray-900
            "
            >
              Professional Personal Trainer Certification
            </h2>

            <div
              className="
              w-20
              sm:w-24

              h-1

              bg-[#d07f7b]

              rounded-full

              mt-5
              sm:mt-6
            "
            ></div>

            <p
              className="
              mt-6
              sm:mt-8

              text-base
              sm:text-lg

              leading-7
              sm:leading-8

              text-gray-600
            "
            >
              The fitness industry is growing rapidly, creating outstanding
              career opportunities for skilled and certified personal trainers.
              At <strong>Velocity Sports & Fitness Academy</strong>, we go
              beyond fitness training by preparing aspiring professionals with
              practical knowledge, technical expertise, and the confidence
              required to succeed in today's competitive fitness industry.
            </p>

            <p
              className="
              mt-5
              sm:mt-6

              text-base
              sm:text-lg

              leading-7
              sm:leading-8

              text-gray-600
            "
            >
              Our <strong>Advanced Personal Trainer Course</strong> combines
              exercise science, anatomy, nutrition, strength & conditioning,
              client assessment, workout programming, injury prevention, and
              extensive hands-on practical sessions. Under the guidance of
              experienced fitness professionals, you'll gain real-world
              experience and industry-recognized skills.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="
                mt-8
                sm:mt-10

                bg-[#d07f7b]

                hover:bg-black

                transition
                duration-300

                text-white

                px-7
                sm:px-8

                py-3
                sm:py-4

                rounded-full

                flex
                items-center
                gap-3

                font-semibold
              "
            >
              Enroll Now
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
