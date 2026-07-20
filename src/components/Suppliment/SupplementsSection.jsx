import {
  Dumbbell,
  Zap,
  ShieldCheck,
  HeartPulse,
  Trophy,
  BatteryCharging,
} from "lucide-react";

export default function SupplementsSection() {
  const supplements = [
    {
      icon: <Dumbbell size={60} strokeWidth={1.5} />,
      title: "Whey Protein",
      desc: "Premium quality whey protein to support muscle growth, faster recovery, and improved strength after every workout.",
    },
    {
      icon: <Zap size={60} strokeWidth={1.5} />,
      title: "Pre-Workout",
      desc: "Boost your workout performance with high-energy pre-workout supplements for maximum focus and endurance.",
    },
    {
      icon: <BatteryCharging size={60} strokeWidth={1.5} />,
      title: "Mass Gainer",
      desc: "High-calorie nutritional formula designed to help you gain healthy weight and build lean muscle mass.",
    },
    {
      icon: <ShieldCheck size={60} strokeWidth={1.5} />,
      title: "Creatine",
      desc: "Increase strength, power, and workout performance with scientifically proven creatine supplementation.",
    },
    {
      icon: <HeartPulse size={60} strokeWidth={1.5} />,
      title: "BCAA & EAA",
      desc: "Essential amino acids that reduce muscle fatigue, improve recovery, and support muscle preservation.",
    },
    {
      icon: <Trophy size={60} strokeWidth={1.5} />,
      title: "Sports Nutrition",
      desc: "Complete range of authentic sports nutrition products to fuel athletes, fitness enthusiasts, and professionals.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-[#d07f7b] text-lg font-semibold">
            Sports Supplements
          </p>

          <h2 className="text-4xl lg:text-4xl font-bold uppercase mt-3">
            Premium Sports Nutrition
          </h2>

        </div>

        {/* Supplements */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {supplements.map((item, index) => (
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