import React from "react";
import {
  Dumbbell,
  ShieldCheck,
  Trophy,
  Home,
  Pill,
  Shirt,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Certified & Experienced Trainers",
    desc: "Learn from certified fitness professionals dedicated to helping you achieve your goals safely and effectively.",
  },
  {
    icon: Trophy,
    title: "Professional Cricket Coaching",
    desc: "Structured cricket coaching with expert guidance to improve batting, bowling, fielding, and match performance.",
  },
  {
    icon: Dumbbell,
    title: "Customized Workout Plans",
    desc: "Personalized fitness programs designed according to your body type, fitness level, and health goals.",
  },
  {
    icon: Home,
    title: "Home Personal Training",
    desc: "Convenient one-on-one fitness sessions at your home with personalized attention and flexible schedules.",
  },
  {
    icon: Pill,
    title: "Genuine Supplements",
    desc: "Premium-quality fitness supplements from trusted brands to support your strength and recovery journey.",
  },
  {
    icon: Shirt,
    title: "Premium Sports Wear",
    desc: "Comfortable and stylish sportswear designed for better performance during workouts and sports activities.",
  },
  {
    icon: Dumbbell,
    title: "Modern Gym Equipment",
    desc: "State-of-the-art cardio and strength equipment to maximize your training experience and results.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly & Motivating Environment",
    desc: "A positive atmosphere where expert trainers and supportive members inspire you every day.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-6xl mx-auto mb-16">
          <span className="uppercase tracking-[6px] text-[#d07f7b] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight text-gray-900">
            Experience Excellence In
            
            Sports & Fitness Training
          </h2>

          
        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#d07f7b] hover:shadow-2xl"
              >
                {/* Background Circle */}

                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#d07f7b]/10 rounded-full group-hover:scale-150 duration-700"></div>

                {/* Icon */}

                <div className="relative w-16 h-16 rounded-xl bg-[#d07f7b]/10 flex items-center justify-center group-hover:bg-[#d07f7b] duration-500">
                  <Icon
                    size={32}
                    className="text-[#d07f7b] group-hover:text-white duration-500"
                  />
                </div>

                {/* Title */}

                <h3 className="relative text-xl font-bold mt-7 mb-4 group-hover:text-[#d07f7b] duration-300">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="relative text-gray-600 leading-7">
                  {item.desc}
                </p>

                {/* Bottom Line */}

                <div className="relative mt-8 flex items-center justify-between">
                  <div className="h-[2px] w-14 bg-[#d07f7b] group-hover:w-24 duration-500"></div>

                  <ChevronRight
                    size={20}
                    className="text-[#d07f7b] group-hover:translate-x-2 duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}