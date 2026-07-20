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
      icon: <Flame size={60} strokeWidth={1.5} />,
      title: "Weight Loss",
      desc: "Burn fat effectively with personalized workout plans, cardio sessions, and expert guidance designed to help you achieve sustainable weight loss.",
    },
    {
      icon: <Dumbbell size={60} strokeWidth={1.5} />,
      title: "Muscle Building",
      desc: "Build lean muscle and increase strength through structured resistance training, progressive workouts, and proper nutrition support.",
    },
    {
      icon: <ShieldCheck size={60} strokeWidth={1.5} />,
      title: "Strength Training",
      desc: "Enhance your overall strength, endurance, and performance with scientifically designed strength-focused training programs.",
    },
    {
      icon: <Activity size={60} strokeWidth={1.5} />,
      title: "Functional Training",
      desc: "Improve flexibility, mobility, balance, and coordination with dynamic exercises that support your daily lifestyle and sports performance.",
    },
    {
      icon: <HeartPulse size={60} strokeWidth={1.5} />,
      title: "Cardio Fitness",
      desc: "Boost your heart health and stamina with high-energy cardio workouts that improve endurance and overall fitness levels.",
    },
    {
      icon: <Trophy size={60} strokeWidth={1.5} />,
      title: "Body Transformation",
      desc: "Achieve complete body transformation through customized training, nutrition guidance, and continuous progress tracking.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <p className="text-[#d07f7b] text-lg font-semibold">
            What We Offer
          </p>

          <h2 className="text-4xl lg:text-4xl font-bold uppercase mt-3">
            Our Training Programs
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