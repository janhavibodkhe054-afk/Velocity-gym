
import {
  Globe,
  Monitor,
  Plane,
  Ticket,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function IATACourses() {
  const courses = [
    {
      icon: <Globe size={55} strokeWidth={1.5} />,
      title: "Foundation in Travel & Tourism — Amadeus",
      desc: "Explore travel and tourism fundamentals, with an introduction to Amadeus reservation technology and travel booking workflows.",
    },
    {
      icon: <Monitor size={55} strokeWidth={1.5} />,
      title: "Foundation — Sabre",
      desc: "Understand the basics of the travel industry and get introduced to Sabre reservation tools and booking concepts.",
    },
    {
      icon: <Plane size={55} strokeWidth={1.5} />,
      title: "Foundation — Travelport+",
      desc: "Discover travel booking workflows and the fundamentals of using Travelport+ technology in travel services.",
    },
    {
      icon: <Ticket size={55} strokeWidth={1.5} />,
      title: "GDS Fares & Ticketing",
      desc: "Learn the fundamentals of Global Distribution Systems, fare concepts, reservation processes, and airline ticketing.",
    },
    {
      icon: <Users size={55} strokeWidth={1.5} />,
      title: "Airline Cabin Crew",
      desc: "Explore cabin crew responsibilities, passenger care, professional grooming, communication, and onboard service basics.",
    },
    {
      icon: <ShieldCheck size={55} strokeWidth={1.5} />,
      title: "Airside Safety, Travel Consultancy & Air Transportation Systems",
      desc: "Explore airside safety principles, travel consultancy fundamentals, and the systems involved in air transportation.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#d07f7b] text-base sm:text-lg font-semibold">
            Explore Your Options
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
            Courses & Learning Pathways
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-7 text-gray-600">
            Explore learning pathways across travel technology, airline
            ticketing, cabin crew fundamentals, and air transportation.
          </p>
        </div>

        {/* Courses Grid */}
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
          {courses.map((item, index) => (
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

              {/* Course Title */}
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-2xl
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

