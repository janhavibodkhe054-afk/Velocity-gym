
import {
  Plane,
  Globe,
  Monitor,
  Ticket,
  Users,
  ShieldCheck,
  Compass,
  Network,
  ArrowUpRight,
} from "lucide-react";

export default function IATACourseListing() {
  const courses = [
    {
      number: "01",
      title: "Foundation in Travel & Tourism",
      subtitle: "Amadeus",
      icon: Globe,
    },
    {
      number: "02",
      title: "Foundation",
      subtitle: "Sabre",
      icon: Monitor,
    },
    {
      number: "03",
      title: "Foundation",
      subtitle: "Travelport+",
      icon: Plane,
    },
    {
      number: "04",
      title: "GDS Fares & Ticketing",
      subtitle: "Global Distribution Systems",
      icon: Ticket,
    },
    {
      number: "05",
      title: "Airline Cabin Crew",
      subtitle: "Cabin Services & Passenger Care",
      icon: Users,
    },
    {
      number: "06",
      title: "Airside Safety",
      subtitle: "Airport Safety Fundamentals",
      icon: ShieldCheck,
    },
    {
      number: "07",
      title: "Travel & Tourism Consultant",
      subtitle: "Travel Planning & Consultancy",
      icon: Compass,
    },
    {
      number: "08",
      title: "Air Transportation System",
      subtitle: "Aviation Systems & Operations",
      icon: Network,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf8f6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:mb-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-12 rounded-full bg-[#d07f7b]" />
              <p className="text-base font-bold uppercase tracking-[0.18em] text-[#c06f6b] sm:text-lg">
                Explore Our Courses
              </p>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.15] text-[#252525] sm:text-5xl lg:text-5xl">
              Discover Your
              <br />
              <span className="text-[#d07f7b]">
                Aviation Pathway
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">
              Explore learning pathways in travel technology, airline
              ticketing, cabin crew, travel consultancy, and airport
              operations.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-1.5 w-10 rounded-full bg-[#d07f7b]" />
              <span className="text-base font-semibold text-gray-700">
                08 Learning Pathways
              </span>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <div
                key={course.number}
                className="
                  group relative flex min-h-[175px] items-center gap-5
                  overflow-hidden rounded-2xl border border-gray-200
                  bg-white p-5 sm:min-h-[190px] sm:gap-6 sm:p-7
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-[#d07f7b]
                  hover:shadow-[0_15px_40px_rgba(208,127,123,0.13)]
                "
              >
                {/* Large Number */}
                <span
                  className="
                    absolute right-4 top-2 select-none
                    text-6xl font-black tracking-tight
                    text-gray-100 transition-colors duration-300
                    group-hover:text-[#d07f7b]/10
                    sm:right-5 sm:text-7xl
                  "
                >
                  {course.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative z-10 flex h-[76px] w-[76px] shrink-0
                    items-center justify-center rounded-2xl
                    bg-[#d07f7b]/10 text-[#bd6c68]
                    transition-all duration-300
                    group-hover:bg-[#d07f7b]
                    group-hover:text-white
                    group-hover:rotate-[-4deg]
                    sm:h-[88px] sm:w-[88px]
                  "
                >
                  <Icon size={36} strokeWidth={1.6} />
                </div>

                {/* Course Details */}
                <div className="relative z-10 min-w-0 flex-1 py-2">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-[#c47772] sm:text-base">
                    Course {course.number}
                  </p>

                  <h3 className="max-w-[340px] text-md font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#bd6c68] sm:text-xl lg:text-[20px]">
                    {course.title}
                  </h3>

                  <p className="mt-2 text-base leading-6 text-gray-500 sm:text-lg">
                    {course.subtitle}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="
                    relative z-10 hidden h-11 w-11 shrink-0
                    items-center justify-center rounded-full
                    border border-gray-200 text-gray-500
                    transition-all duration-300
                    group-hover:border-[#d07f7b]
                    group-hover:bg-[#d07f7b]
                    group-hover:text-white
                    sm:flex
                  "
                >
                  <ArrowUpRight size={22} />
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d07f7b] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-8 text-sm leading-6 text-gray-500 sm:text-base">
          Course availability, syllabus, eligibility, and certification
          details may vary. Contact the academy for current course information.
        </p>

      </div>
    </section>
  );
}


