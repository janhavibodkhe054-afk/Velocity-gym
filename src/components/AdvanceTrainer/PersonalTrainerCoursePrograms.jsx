import {
  BookOpen,
  Bone,
  Apple,
  ClipboardCheck,
  Dumbbell,
  Award,
} from "lucide-react";

export default function PersonalTrainerCoursePrograms() {
  const programs = [
    {
      icon: BookOpen,
      title: "Exercise Science",
      desc: "Learn the scientific principles of human movement, exercise techniques, biomechanics, and training methods to build a strong foundation in fitness coaching.",
    },
    {
      icon: Bone,
      title: "Anatomy & Physiology",
      desc: "Understand the structure and function of the human body, including muscles, bones, joints, and body systems essential for safe and effective training.",
    },
    {
      icon: Apple,
      title: "Nutrition Planning",
      desc: "Gain practical knowledge of sports nutrition, meal planning, weight management, and healthy eating strategies to support client performance and recovery.",
    },
    {
      icon: ClipboardCheck,
      title: "Client Assessment",
      desc: "Learn how to evaluate fitness levels, identify client goals, perform body assessments, and design personalized workout plans for different individuals.",
    },
    {
      icon: Dumbbell,
      title: "Strength & Functional Training",
      desc: "Master resistance training, functional exercises, flexibility techniques, and injury prevention to deliver safe and result-oriented training sessions.",
    },
    {
      icon: Award,
      title: "Professional Trainer Skills",
      desc: "Develop communication, coaching, leadership, and practical training skills that prepare you for a successful career as a certified personal trainer.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        {/* Heading */}

        <div className="text-center mb-10 sm:mb-14">

          <p
            className="
            text-[#d07f7b]
            text-sm
            sm:text-base
            font-semibold
            uppercase
            tracking-[3px]
            "
          >
            Course Highlights
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
            What You'll Learn
          </h2>

        </div>



        {/* Cards */}

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