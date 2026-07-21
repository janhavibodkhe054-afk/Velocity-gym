import { Dumbbell, UserRound, Trophy, House } from "lucide-react";

export default function FacilitiesProcess() {
  const services = [
    {
      icon: <Trophy size={50} />,
      title: "Stay Consistent, Stay Motivated",
      desc: "Our encouraging environment and personalized support help you remain committed to your fitness and sports journey.",
    },
    {
      icon: <Dumbbell size={50} />,
      title: "Build Power Build Confidence",
      desc: "Every workout is designed to improve physical performance, increase confidence, build lasting strength, and help you become stronger every day.",
    },
    {
      icon: <UserRound size={50} />,
      title: "Learn From Industry Experts",
      desc: "Receive professional guidance from experienced trainers who are passionate about helping you reach your full potential through structured coaching.",
    },
    {
      icon: <House size={50} />,
      title: "Turn Ambition Into Achievement",
      desc: "Whether your goal is improved fitness or a successful career, we're here to transform your determination into measurable results.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Stop Wishing{" "}
            <span className="text-[#d07f7b]">Start Training</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className={`group bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 lg:p-8 transition-all duration-500 hover:bg-[#0F172A] hover:-translate-y-3 hover:shadow-2xl ${
                (index === 0 || index === 3) ? "lg:mt-16" : ""
              }`}
            >
              {/* Icon */}
              <div className="text-[#d07f7b] mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        
      </div>
    </section>
  );
}