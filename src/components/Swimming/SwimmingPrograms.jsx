import {
  Waves,
  ShieldCheck,
  Users,
  TimerReset,
  HeartPulse,
  Medal,
} from "lucide-react";

export default function SwimmingPrograms() {

  const programs = [
    {
      icon: <Waves size={55} strokeWidth={1.5} />,
      title: "Beginner Swimming",
      desc: "Learn the basics of swimming with expert guidance, including floating, breathing techniques, and water confidence in a safe environment.",
    },
    {
      icon: <ShieldCheck size={55} strokeWidth={1.5} />,
      title: "Water Safety",
      desc: "Develop essential water safety skills, survival techniques, and confidence to stay safe and comfortable in the pool.",
    },
    {
      icon: <Users size={55} strokeWidth={1.5} />,
      title: "Kids & Adults Training",
      desc: "Specialized swimming programs for children and adults, tailored to individual learning speed and fitness goals.",
    },
    {
      icon: <TimerReset size={55} strokeWidth={1.5} />,
      title: "Stroke Development",
      desc: "Master freestyle, backstroke, breaststroke, and butterfly through professional coaching and technique correction.",
    },
    {
      icon: <HeartPulse size={55} strokeWidth={1.5} />,
      title: "Fitness Swimming",
      desc: "Improve cardiovascular health, stamina, and full-body strength with structured swimming workouts designed for fitness enthusiasts.",
    },
    {
      icon: <Medal size={55} strokeWidth={1.5} />,
      title: "Competitive Training",
      desc: "Advanced coaching for aspiring competitive swimmers focusing on speed, endurance, race techniques, and performance improvement.",
    },
  ];


  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">


        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">

          <p
            className="
              text-[#d07f7b]
              text-base
              sm:text-lg
              font-semibold
            "
          >
            What We Offer
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
            Our Swimming Programs
          </h2>

        </div>



        {/* Programs Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
            sm:gap-12
            lg:gap-8
          "
        >

          {programs.map((item, index) => (

            <div
              key={index}
              className="
                text-center
                group
                px-3
              "
            >


              {/* Icon */}
              <div
                className="
                  w-24
                  h-24
                  sm:w-28
                  sm:h-28
                  mx-auto
                  rounded-full
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-800
                  transition-all
                  duration-500
                  group-hover:bg-[#d07f7b]
                  group-hover:text-white
                  group-hover:border-[#d07f7b]
                  group-hover:shadow-xl
                  group-hover:-translate-y-2
                "
              >
                {item.icon}
              </div>



              {/* Title */}
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  mt-6
                  leading-snug
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
                  mt-4
                "
              >
                {item.desc}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}