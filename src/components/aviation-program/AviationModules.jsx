
import {
  Plane,
  Building2,
  Users,
  Globe,
  BriefcaseBusiness,
  MessageCircle,
} from "lucide-react";

export default function AviationModules() {
  const modules = [
    {
      icon: <Plane size={55} strokeWidth={1.5} />,
      title: "Airline Industry",
      desc: "Understand the airline industry, airline operations, and the roles and responsibilities of aviation professionals.",
    },
    {
      icon: <Building2 size={55} strokeWidth={1.5} />,
      title: "Airport Operations & Ground Handling",
      desc: "Learn the fundamentals of airport operations, ground handling procedures, and essential airport service activities.",
    },
    {
      icon: <Users size={55} strokeWidth={1.5} />,
      title: "Passenger Services",
      desc: "Develop passenger assistance, check-in, customer service, and professional communication skills.",
    },
    {
      icon: <Globe size={55} strokeWidth={1.5} />,
      title: "Travel & Tourism",
      desc: "Explore travel services, tourism fundamentals, itinerary planning, and the basics of the travel industry.",
    },
    {
      icon: <BriefcaseBusiness size={55} strokeWidth={1.5} />,
      title: "Cabin Crew Fundamentals",
      desc: "Get introduced to cabin crew responsibilities, professional grooming, passenger care, and onboard service basics.",
    },
    {
      icon: <MessageCircle size={55} strokeWidth={1.5} />,
      title: "Communication & Interview Preparation",
      desc: "Improve spoken English, presentation skills, interview confidence, and professional workplace etiquette.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#d07f7b] text-base sm:text-lg font-semibold">
            What You Will Learn
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
            Aviation Training Modules
          </h2>
        </div>

        {/* Modules Grid */}
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
          {modules.map((item, index) => (
            <div
              key={index}
              className="text-center group px-3"
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


