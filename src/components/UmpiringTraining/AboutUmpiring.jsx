import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUmpiring() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:pt-20 lg:pb-0 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">


        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2

          gap-10
          lg:gap-16

          items-center
          "
        >




          {/* Left Image */}


          <div
            className="
            relative

            flex
            justify-center

            order-2
            lg:order-1

            "
          >


            {/* Background Box */}

            <div
              className="
              absolute

              top-8
              sm:top-10

              left-6
              sm:left-10

              w-[85%]
              h-[85%]

              bg-[#f7efef]

              rounded-lg
              "
            ></div>





            {/* Vertical Accent */}

            <div
              className="
              absolute

              right-5
              sm:right-8

              top-12
              sm:top-14

              h-[70%]

              w-2
              sm:w-4

              bg-[#d07f7b]

              rounded-full
              "
            ></div>







            {/* Main Image */}

            <img
              src="https://i.pinimg.com/736x/02/0d/e2/020de2f53b3fb945b9d8433f2bda1043.jpg"

              alt="Umpiring Training"

              className="
              relative

              z-10

              w-[280px]
              sm:w-[350px]
              lg:w-[420px]

              h-[380px]
              sm:h-[450px]
              lg:h-[500px]

              object-cover

              rounded-lg

              shadow-xl
              "
            />


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

              text-[#d07f7b]

              text-sm
              sm:text-base

              font-semibold
              "
            >
              Umpiring Training
            </span>







            <h2
              className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold

              text-gray-900

              leading-tight

              mt-3
              sm:mt-4
              "
            >

              Build Your Career

              <br />

              <span className="text-gray-900">
                As A Cricket Umpire
              </span>


            </h2>







            <div
              className="
              w-20
              h-1

              bg-[#d07f7b]

              rounded-full

              mt-5
              mb-5
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
              Cricket is not only about playing the game but also about
              officiating it with confidence, accuracy, and professionalism.
              Our Umpiring Training Program is specially designed for
              individuals who wish to build a career as cricket umpires or
              enhance their understanding of the Laws of Cricket.
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
              The program includes practical on-field sessions, communication
              skills, and expert guidance to prepare participants for local,
              district, and higher-level cricket matches with confidence.
            </p>







            {/* Button */}


            <div className="mt-6">

<Link to="/contact">
              <button
                className="
                group

                bg-[#d07f7b]

                hover:bg-[#bf6f6b]

                text-white

                px-7
                sm:px-8

                py-3
                sm:py-4

                rounded-md

                font-semibold

                transition-all

                duration-300

                flex
                items-center

                gap-2

                hover:shadow-lg

                hover:-translate-y-1
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


      </div>


    </section>
  );
}