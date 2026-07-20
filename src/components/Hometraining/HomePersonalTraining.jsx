import {
  House,
  Dumbbell,
  HeartPulse,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";

export default function HomePersonalTraining() {
  const programs = [
    {
      icon: <House size={60} strokeWidth={1.5} />,
      title: "Home Fitness Training",
      desc: "Enjoy professional gym-quality workouts in the comfort of your home with customized fitness plans designed for your goals.",
    },
    {
      icon: <Dumbbell size={60} strokeWidth={1.5} />,
      title: "Strength Training",
      desc: "Build strength, improve endurance, and increase muscle tone using effective bodyweight and minimal-equipment exercises.",
    },
    {
      icon: <HeartPulse size={60} strokeWidth={1.5} />,
      title: "Weight Loss",
      desc: "Achieve sustainable weight loss through personalized workout sessions combined with expert fitness guidance and motivation.",
    },
    {
      icon: <ShieldCheck size={60} strokeWidth={1.5} />,
      title: "Body Transformation",
      desc: "Transform your body with customized workout routines, progress tracking, and nutritional support tailored to your lifestyle.",
    },
    {
      icon: <Clock size={60} strokeWidth={1.5} />,
      title: "Flexible Scheduling",
      desc: "Train at your preferred time with flexible morning and evening sessions that fit perfectly into your daily routine.",
    },
    {
      icon: <Users size={60} strokeWidth={1.5} />,
      title: "One-to-One Coaching",
      desc: "Receive dedicated attention from certified personal trainers who focus entirely on your fitness journey and success.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-[#d07f7b] text-lg font-semibold">
            Home Personal Training
          </p>

          <h2 className="text-4xl lg:text-4xl font-bold uppercase mt-3">
            Our Home Personal Training Programs
          </h2>

        </div>

        {/* Programs */}

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