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
      title: "Foundation in Travel & Tourism — Amadeus",
      icon: <Globe size={27} strokeWidth={1.6} />,
    },
    {
      number: "02",
      title: "Foundation — Sabre",
      icon: <Monitor size={27} strokeWidth={1.6} />,
    },
    {
      number: "03",
      title: "Foundation — Travelport+",
      icon: <Plane size={27} strokeWidth={1.6} />,
    },
    {
      number: "04",
      title: "GDS Fares & Ticketing",
      icon: <Ticket size={27} strokeWidth={1.6} />,
    },
    {
      number: "05",
      title: "Airline Cabin Crew",
      icon: <Users size={27} strokeWidth={1.6} />,
    },
    {
      number: "06",
      title: "Airside Safety",
      icon: <ShieldCheck size={27} strokeWidth={1.6} />,
    },
    {
      number: "07",
      title: "Travel & Tourism Consultant",
      icon: <Compass size={27} strokeWidth={1.6} />,
    },
    {
      number: "08",
      title: "Air Transportation System",
      icon: <Network size={27} strokeWidth={1.6} />,
    },
  ];

  return (
    <section className="bg-[#faf8f6] py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-[#d07f7b] text-sm sm:text-base font-semibold uppercase tracking-[0.18em]">
            Explore Our Courses
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            IATA Course{" "}
            <span className="text-[#d07f7b]">Listing</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
            Explore learning pathways in travel technology, airline
            services, ticketing, safety, and air transportation.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {courses.map((course) => (
            <div
              key={course.number}
              className="
                group relative flex min-h-[220px] flex-col
                overflow-hidden rounded-2xl border border-gray-200
                bg-white p-5 sm:p-6
                transition-all duration-300
                hover:-translate-y-2 hover:border-[#d07f7b]
                hover:shadow-xl
              "
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-gray-400">
                  {course.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d07f7b]/10 text-[#c16d68] transition-all duration-300 group-hover:bg-[#d07f7b] group-hover:text-white">
                  {course.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold leading-snug text-gray-800 transition-colors duration-300 group-hover:text-[#bd6965]">
                {course.title}
              </h3>

              {/* Bottom Link Indicator */}
              <div className="mt-auto flex justify-end pt-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-[#d07f7b] group-hover:bg-[#d07f7b] group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d07f7b] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Enquiry CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#304d43] px-6 py-7 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Find the Right Course for Your Goals
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/75">
              Contact our team for course details and enrolment guidance.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#d07f7b] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#304d43]"
          >
            Course Enquiry
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}