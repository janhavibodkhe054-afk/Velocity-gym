import {
  Dumbbell,
  Zap,
  ShieldCheck,
  HeartPulse,
  Trophy,
  BatteryCharging,
} from "lucide-react";

export default function SupplementsSection() {

  const supplements = [
    {
      icon: Dumbbell,
      title: "Whey Protein",
      desc: "Premium quality whey protein to support muscle growth, faster recovery, and improved strength after every workout.",
    },
    {
      icon: Zap,
      title: "Pre-Workout",
      desc: "Boost your workout performance with high-energy pre-workout supplements for maximum focus and endurance.",
    },
    {
      icon: BatteryCharging,
      title: "Mass Gainer",
      desc: "High-calorie nutritional formula designed to help you gain healthy weight and build lean muscle mass.",
    },
    {
      icon: ShieldCheck,
      title: "Creatine",
      desc: "Increase strength, power, and workout performance with scientifically proven creatine supplementation.",
    },
    {
      icon: HeartPulse,
      title: "BCAA & EAA",
      desc: "Essential amino acids that reduce muscle fatigue, improve recovery, and support muscle preservation.",
    },
    {
      icon: Trophy,
      title: "Sports Nutrition",
      desc: "Complete range of authentic sports nutrition products to fuel athletes, fitness enthusiasts, and professionals.",
    },
  ];


  return (
    <section
      className="
      py-12
      sm:py-16
      lg:py-20

      bg-white

      overflow-hidden
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        "
      >



        {/* Heading */}

        <div
          className="
          text-center

          mb-10
          sm:mb-14
          "
        >

          <p
            className="
            text-[#d07f7b]

            text-sm
            sm:text-base
            lg:text-lg

            font-semibold
            "
          >
            Sports Supplements
          </p>




          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-bold

            uppercase

            mt-3

            leading-tight
            "
          >
            Premium Sports Nutrition
          </h2>


        </div>






        {/* Supplements Grid */}

        <div
          className="
          grid

          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-3

          gap-8
          sm:gap-10
          lg:gap-12
          "
        >



          {supplements.map((item,index)=>{


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

                <div
                  className="
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
                  "
                >

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

                <h3
                  className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl

                  font-bold

                  mt-5
                  sm:mt-6

                  leading-tight
                  "
                >
                  {item.title}
                </h3>






                {/* Description */}

                <p
                  className="
                  text-gray-600

                  text-sm
                  sm:text-base

                  leading-7
                  sm:leading-8

                  mt-3
                  sm:mt-4
                  "
                >
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