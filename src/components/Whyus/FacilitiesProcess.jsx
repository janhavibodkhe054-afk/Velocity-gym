import { Dumbbell, UserRound, Trophy, House, ArrowRight } from "lucide-react";

export default function FacilitiesProcess() {
  const services = [
    {
      icon: <Dumbbell size={50} />,
      title: "Gym Training",
      desc: "Achieve your fitness goals with personalized workout plans, modern equipment, nutrition guidance and expert trainers who guide you every step of your journey.",
    },
    {
      icon: <UserRound size={50} />,
      title: "Personal Trainers",
      desc: "Get one-on-one coaching tailored to your fitness level with customized workouts, and continuous progress tracking.",
    },
    {
      icon: <Trophy size={50} />,
      title: "Cricket Coaching",
      desc: "Professional coaching for batting, bowling, fielding, and fitness designed to improve your skills and overall game performance.",
    },
    {
      icon: <House size={50} />,
      title: "Home Training",
      desc: "Enjoy flexible personal training sessions at your home with certified trainers and customized fitness programs for your convenience.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900">
            Stop Wishing{" "}
            <span className="text-[#d07f7b] italic font-light">
              Start Training
            </span>
          </h2>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {services.map((item, index) => (
            <div
              key={index}
              className={`bg-[#F5F7FA] p-10 transition-all duration-500 hover:bg-[#0F172A] hover:-translate-y-3 hover:shadow-2xl group ${
                index === 0 || index === 3 ? "mt-16" : ""
              }`}
            >
              <div className="text-[#d07f7b] mb-8 group-hover:scale-110 duration-300">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mb-5 text-gray-900 group-hover:text-white">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8 group-hover:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="flex justify-center mt-6">
          <button className="relative overflow-hidden group inline-flex items-center gap-3 bg-[#d07f7b] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-[0_15px_35px_rgba(208,127,123,0.45)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 before:absolute before:top-0 before:left-[-120%] before:w-full before:h-full before:bg-white/20 before:skew-x-[-25deg] before:transition-all before:duration-700 hover:before:left-[120%]">
            <span className="relative z-10">View Services</span>
          </button>
        </div>
      </div>
    </section>
  );
}
