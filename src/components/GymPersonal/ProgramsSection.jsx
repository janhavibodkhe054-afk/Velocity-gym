import {
  Dumbbell,
  Activity,
  HeartPulse,
  ShieldCheck,
  Trophy,
  Flame,
} from "lucide-react";

export default function ProgramsSection() {

  const programs = [
    {
      icon: Flame,
      title: "Weight Loss",
      desc: "Burn fat effectively with personalized workout plans, cardio sessions, and expert guidance designed to help you achieve sustainable weight loss.",
    },
    {
      icon: Dumbbell,
      title: "Muscle Building",
      desc: "Build lean muscle and increase strength through structured resistance training, progressive workouts, and proper nutrition support.",
    },
    {
      icon: ShieldCheck,
      title: "Strength Training",
      desc: "Enhance your overall strength, endurance, and performance with scientifically designed strength-focused training programs.",
    },
    {
      icon: Activity,
      title: "Functional Training",
      desc: "Improve flexibility, mobility, balance, and coordination with dynamic exercises that support your daily lifestyle and sports performance.",
    },
    {
      icon: HeartPulse,
      title: "Cardio Fitness",
      desc: "Boost your heart health and stamina with high-energy cardio workouts that improve endurance and overall fitness levels.",
    },
    {
      icon: Trophy,
      title: "Body Transformation",
      desc: "Achieve complete body transformation through customized training, nutrition guidance, and continuous progress tracking.",
    },
  ];


  return (

    <section className="
      py-12
      sm:py-16
      lg:py-20

      bg-white

      overflow-hidden
    ">


      <div className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
      ">



        {/* Heading */}

        <div className="
          text-center

          mb-10
          sm:mb-14
        ">


          <p className="
            text-[#d07f7b]

            text-sm
            sm:text-base
            lg:text-lg

            font-semibold
          ">
            What We Offer
          </p>



          <h2 className="
            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-bold

            uppercase

            mt-3

            leading-tight
          ">
            Our Training Programs
          </h2>


        </div>





        {/* Programs */}

        <div className="
          grid

          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-3

          gap-8
          sm:gap-10
          lg:gap-12
        ">


          {programs.map((item,index)=>{


            const Icon = item.icon;


            return (

              <div

                key={index}

                className="
                  text-center

                  group

                  p-4
                  sm:p-6

                  rounded-xl

                  transition-all
                  duration-500

                  hover:-translate-y-2
                "

              >


                {/* Icon */}

                <div className="
                  w-20
                  h-20

                  sm:w-24
                  sm:h-24

                  lg:w-28
                  lg:h-28

                  mx-auto

                  rounded-full

                  border
                  border-gray-200

                  flex
                  items-center
                  justify-center

                  text-[#d07f7b]

                  transition-all
                  duration-500

                  group-hover:bg-[#d07f7b]

                  group-hover:text-white

                  group-hover:border-[#d07f7b]

                  group-hover:shadow-xl
                ">


                  <Icon

                    size={50}

                    strokeWidth={1.5}

                    className="
                      sm:w-[55px]
                      sm:h-[55px]
                    "

                  />


                </div>





                {/* Title */}

                <h3 className="
                  mt-5
                  sm:mt-6

                  text-xl
                  sm:text-2xl
                  lg:text-3xl

                  font-bold

                  leading-tight
                ">
                  {item.title}
                </h3>





                {/* Description */}

                <p className="
                  mt-3
                  sm:mt-4

                  text-gray-600

                  text-sm
                  sm:text-base

                  leading-7
                  sm:leading-8
                ">
                  {item.desc}
                </p>



              </div>

            );


          })}


        </div>


      </div>


    </section>

  );
}