import {
  Trophy,
  Target,
  ShieldCheck,
  Activity,
  Medal,
  Users,
} from "lucide-react";

export default function CricketPrograms() {
  const programs = [
    {
      icon: <Target size={60} strokeWidth={1.5} />,
      title: "Batting Coaching",
      desc: "Master batting techniques with professional guidance, improving shot selection, footwork, timing, and consistency at every level.",
    },
    {
      icon: <Activity size={60} strokeWidth={1.5} />,
      title: "Bowling Coaching",
      desc: "Develop pace, swing, spin, line, and length through structured bowling drills designed by experienced cricket coaches.",
    },
    {
      icon: <ShieldCheck size={60} strokeWidth={1.5} />,
      title: "Fielding Training",
      desc: "Enhance catching, throwing accuracy, reflexes, agility, and overall fielding performance with modern training methods.",
    },
    {
      icon: <Users size={60} strokeWidth={1.5} />,
      title: "Fitness For Cricket",
      desc: "Build strength, stamina, speed, flexibility, and endurance specifically designed to improve cricket performance on the field.",
    },
    {
      icon: <Medal size={60} strokeWidth={1.5} />,
      title: "Match Practice",
      desc: "Gain real-game experience through regular practice matches, match simulations, and competitive training sessions.",
    },
    {
      icon: <Trophy size={60} strokeWidth={1.5} />,
      title: "Professional Coaching",
      desc: "Receive one-to-one coaching, performance analysis, and personalized development plans from certified cricket professionals.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <p className="text-[#d07f7b] text-lg font-semibold">
            Cricket Coaching
          </p>

          <h2 className="text-4xl lg:text-4xl font-bold uppercase mt-3">
            Our Cricket Training Programs
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