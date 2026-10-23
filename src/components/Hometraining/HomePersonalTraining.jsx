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
      icon: House,
      title: "Home Fitness Training",
      desc: "Enjoy professional gym-quality workouts in the comfort of your home with customized fitness plans designed for your goals.",
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      desc: "Build strength, improve endurance, and increase muscle tone using effective bodyweight and minimal-equipment exercises.",
    },
    {
      icon: HeartPulse,
      title: "Weight Loss",
      desc: "Achieve sustainable weight loss through personalized workout sessions combined with expert fitness guidance and motivation.",
    },
    {
      icon: ShieldCheck,
      title: "Body Transformation",
      desc: "Transform your body with customized workout routines, progress tracking, and nutritional support tailored to your lifestyle.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      desc: "Train at your preferred time with flexible morning and evening sessions that fit perfectly into your daily routine.",
    },
    {
      icon: Users,
      title: "One-to-One Coaching",
      desc: "Receive dedicated attention from certified personal trainers who focus entirely on your fitness journey and success.",
    },
  ];

  return (
    <section
      className="
      py-12
      sm:py-16
      lg:py-20

      bg-white

      overflow-hidden
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        "
      >
        {/* Heading */}

        <div
          className="
          text-center

          mb-10
          sm:mb-14
          "
        >
          <p
            className="
            text-[#d07f7b]

            text-sm
            sm:text-base
            lg:text-lg

            font-semibold
            "
          >
            Home Personal Training
          </p>

          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-bold

            uppercase

            mt-3

            leading-tight
            "
          >
            Our Home Personal Training Programs
          </h2>
        </div>

        {/* Programs Grid */}

        <div
          className="
          grid

          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-3

          gap-8
          sm:gap-10
          lg:gap-12
          "
        >
          {programs.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                text-center

                group

                p-4
                sm:p-6

                rounded-xl

                transition-all

                duration-500

                hover:-translate-y-2
                "
              >
                {/* Icon */}

                <div
                  className="
                  w-20
                  h-20

                  sm:w-24
                  sm:h-24

                  lg:w-28
                  lg:h-28


                  mx-auto


                  rounded-full


                  border
                  border-gray-200


                  flex
                  items-center
                  justify-center


                  text-[#d07f7b]


                  transition-all

                  duration-500


                  group-hover:bg-[#d07f7b]

                  group-hover:text-white

                  group-hover:border-[#d07f7b]

                  group-hover:shadow-xl
                  "
                >
                  <Icon
                    size={50}
                    strokeWidth={1.5}
                    className="
                    sm:w-[55px]
                    sm:h-[55px]
                    "
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                  mt-5
                  sm:mt-6

                  text-xl
                  sm:text-2xl
                  lg:text-3xl

                  font-bold

                  leading-tight
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                  mt-3
                  sm:mt-4

                  text-gray-600

                  text-sm
                  sm:text-base

                  leading-7
                  sm:leading-8
                  "
                >
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
