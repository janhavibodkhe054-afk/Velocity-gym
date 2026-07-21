import React from "react";
import { CheckCircle } from "lucide-react";

const leftFeatures = [
  {
    title: "Expert Coaching",
    desc: "Learn from certified trainers and experienced sports professionals who focus on delivering practical knowledge, proper techniques, and measurable results.",
  },
  {
    title: "Complete Fitness & Sports Academy",
    desc: "From gym training and cricket coaching to swimming, personal trainer certification, sportswear, and supplements, everything you need is available under one roof.",
  },
];

const rightFeatures = [
  {
    title: "Personalized Growth",
    desc: "Every individual has different goals. We create customized training plans that help members improve safely, efficiently, and consistently.",
  },
  {
    title: "Performance-Focused Environment",
    desc: "Our modern equipment, disciplined atmosphere, and supportive community motivate you to push your limits and achieve long-term success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#22201f] py-12 sm:py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}

        <div className="text-center mb-10 sm:mb-14">

          <span className="uppercase tracking-[4px] text-sm sm:text-base text-[#d07f7b] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Your Perfect Fitness Partner
          </h2>

        </div>


        {/* Main Grid */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-[1fr_420px_1fr]
          gap-10
          lg:gap-8
          items-center
          "
        >


          {/* LEFT FEATURES */}

          <div className="space-y-8 order-2 lg:order-1">

            {leftFeatures.map((item,index)=>(

              <div
                key={index}
                className="
                flex
                flex-col-reverse
                sm:flex-row
                lg:justify-end
                items-center
                sm:items-start
                gap-4 sm:gap-5
                "
              >

                {/* Content */}

                <div className="
                  text-center
                  sm:text-right
                  max-w-sm
                ">

                  <h3 className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-white
                  ">
                    {item.title}
                  </h3>


                  <p className="
                    mt-3
                    text-gray-300
                    leading-7
                    sm:leading-8
                    text-sm
                    sm:text-base
                  ">
                    {item.desc}
                  </p>

                </div>


                {/* Icon */}

                <div className="
                  flex-shrink-0
                  w-12 h-12
                  sm:w-14 sm:h-14
                  rounded-full
                  bg-[#d07f7b]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-[#d07f7b]/30
                ">

                  <CheckCircle
                    size={26}
                    className="text-white"
                  />

                </div>


              </div>

            ))}

          </div>




          {/* CENTER IMAGE */}


          <div
            className="
            order-1
            lg:order-2
            flex
            justify-center
            "
            style={{
              perspective:"1200px"
            }}
          >

            <img
              src="https://fitflex-react.vercel.app/assets/img/feature_image.jpg"
              alt="Fitness"
              className="
              w-full
              max-w-[280px]
              sm:max-w-[350px]
              md:max-w-[400px]
              lg:max-w-[420px]

              rounded-3xl
              shadow-2xl

              transition-transform
              duration-1000

              hover:[transform:rotateY(360deg)]
              "
            />

          </div>





          {/* RIGHT FEATURES */}


          <div className="
            order-3
            space-y-8
          ">


            {rightFeatures.map((item,index)=>(

              <div
                key={index}
                className="
                flex
                flex-col
                sm:flex-row
                items-center
                sm:items-start
                gap-4 sm:gap-5
                "
              >


                {/* Icon */}

                <div className="
                  flex-shrink-0
                  w-12 h-12
                  sm:w-14 sm:h-14
                  rounded-full
                  bg-[#d07f7b]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-[#d07f7b]/30
                ">

                  <CheckCircle
                    size={26}
                    className="text-white"
                  />

                </div>



                {/* Content */}

                <div className="
                  text-center
                  sm:text-left
                  max-w-sm
                ">


                  <h3 className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-white
                  ">
                    {item.title}
                  </h3>


                  <p className="
                    mt-3
                    text-gray-300
                    leading-7
                    sm:leading-8
                    text-sm
                    sm:text-base
                  ">
                    {item.desc}
                  </p>


                </div>


              </div>


            ))}


          </div>


        </div>


      </div>


    </section>
  );
}