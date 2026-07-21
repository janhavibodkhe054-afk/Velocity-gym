import {
  Shirt,
  Footprints,
  ShoppingBag,
  ShieldCheck,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function SportsWearSection() {

  const sportsWear = [
    {
      icon: Shirt,
      title: "Gym Wear",
      desc: "Premium quality gym apparel designed for maximum comfort, flexibility, and performance during every workout session.",
    },
    {
      icon: Footprints,
      title: "Sports Shoes",
      desc: "High-performance training and running shoes that provide excellent grip, stability, and long-lasting comfort.",
    },
    {
      icon: ShoppingBag,
      title: "Sports Accessories",
      desc: "Explore gym gloves, shaker bottles, gym bags, wrist supports, lifting belts, and other fitness essentials.",
    },
    {
      icon: ShieldCheck,
      title: "Protective Gear",
      desc: "Professional-quality safety gear including knee supports, elbow guards, wrist wraps, and compression accessories.",
    },
    {
      icon: Trophy,
      title: "Cricket Wear",
      desc: "Complete range of cricket jerseys, trousers, caps, practice kits, and professional cricket accessories.",
    },
    {
      icon: Sparkles,
      title: "Premium Collection",
      desc: "Stylish and durable sportswear collections from trusted brands for athletes, gym members, and fitness enthusiasts.",
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
            Sports Wear
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
            Premium Sports Wear Collection
          </h2>


        </div>






        {/* Cards */}

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




          {sportsWear.map((item,index)=>{


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