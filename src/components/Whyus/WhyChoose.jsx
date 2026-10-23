import React from "react";
import {
  UserCheck,
  Target,
  Building2,
  Trophy,
  BookOpen,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Fitness Professionals",
    desc: "Our certified trainers and experienced coaches provide expert guidance backed by practical knowledge and industry experience.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Training",
    desc: "Every training plan is designed around your personal objectives, ensuring focused progress and measurable improvements.",
  },
  {
    icon: Building2,
    title: "Modern Equipment & Infrastructure",
    desc: "Train with advanced fitness equipment and well-maintained facilities that support safe and effective workouts.",
  },
  {
    icon: Trophy,
    title: "Professional Sports Coaching",
    desc: "Develop technical skills under qualified coaches who focus on improving performance and confidence.",
  },
  {
    icon: BookOpen,
    title: "Practical Learning Environment",
    desc: "We emphasize hands-on training, allowing members and students to gain real experience alongside theoretical knowledge.",
  },
  {
    icon: Users,
    title: "Positive Training Culture",
    desc: "Our academy promotes discipline, teamwork, motivation, and a supportive environment where everyone feels encouraged to succeed.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Progress Monitoring",
    desc: "Regular performance assessments help identify strengths, improve weaknesses, and maintain steady progress.",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    desc: "Every program is designed with quality, professionalism, and long-term success as the primary focus.",
  },
];

export default function WhyChoose() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-10 lg:py-10 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/88/25/fb/8825fb307053b1bb4693bfbd458ce9d2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-left md:text-center max-w-7xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[6px] text-[#d07f7b] font-semibold text-xs sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Why Velocity Is the
            
            Right Choice
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
            At Velocity Academy, we combine expert coaching,
            advanced training facilities, and a motivating environment to help
            every individual achieve lasting success in fitness, sports, and
            professional development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/30 bg-white/90 backdrop-blur-xl p-6 sm:p-7 lg:p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#d07f7b] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              >
                {/* Number */}
                <span className="absolute top-4 right-5 text-5xl sm:text-6xl font-black text-gray-100 transition duration-500 group-hover:text-[#d07f7b]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#d07f7b] to-[#efb2af] transition-all duration-500 group-hover:w-full"></div>

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#d07f7b] to-[#e39d99] shadow-lg transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110">
                  <Icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="relative mb-3 text-xl sm:text-2xl font-bold text-gray-900 transition group-hover:text-[#d07f7b]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm sm:text-base leading-7 text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}