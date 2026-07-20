import {
  Scale,
  ClipboardCheck,
  BookOpen,
  Eye,
  Trophy,
  Users,
} from "lucide-react";

export default function UmpiringPrograms() {
  const programs = [
    {
      icon: <BookOpen size={60} strokeWidth={1.5} />,
      title: "Laws of Cricket",
      desc: "Learn the complete Laws of Cricket with detailed theoretical sessions covering all rules, regulations, and match situations.",
    },
    {
      icon: <Scale size={60} strokeWidth={1.5} />,
      title: "Decision Making",
      desc: "Develop confidence in making accurate on-field decisions through practical scenarios and expert umpiring guidance.",
    },
    {
      icon: <Eye size={60} strokeWidth={1.5} />,
      title: "Match Observation",
      desc: "Improve observation skills, positioning, signals, and concentration to make correct decisions during competitive matches.",
    },
    {
      icon: <ClipboardCheck size={60} strokeWidth={1.5} />,
      title: "Practical Sessions",
      desc: "Gain real match experience with live practice sessions, field simulations, and hands-on umpiring under expert supervision.",
    },
    {
      icon: <Users size={60} strokeWidth={1.5} />,
      title: "Professional Guidance",
      desc: "Learn directly from experienced and certified umpires with personalized mentoring and performance evaluation.",
    },
    {
      icon: <Trophy size={60} strokeWidth={1.5} />,
      title: "Certification Training",
      desc: "Prepare for official umpiring certification with comprehensive coaching, assessments, and career-oriented training.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <p className="text-[#d07f7b] text-lg font-semibold">
            Umpiring Training
          </p>

          <h2 className="text-4xl lg:text-4xl font-bold uppercase mt-3">
            Our Umpiring Training Programs
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {programs.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-28 h-28 mx-auto rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-[#d07f7b] group-hover:text-white group-hover:shadow-xl">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}