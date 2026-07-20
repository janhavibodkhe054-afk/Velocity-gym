import React from "react";
import { CheckCircle } from "lucide-react";

const leftFeatures = [
  {
    title: "Certified Trainers",
    desc: "Train with experienced and certified fitness professionals dedicated to helping you achieve your goals.",
  },
  {
    title: "Professional Cricket Coaches",
    desc: "Expert coaching for beginners and advanced players with structured training sessions.",
  },
];

const rightFeatures = [
  {
    title: "Personalized Fitness Plans",
    desc: "Customized workout programs based on your body type and fitness goals.",
  },
  {
    title: "Home Training Available",
    desc: "Professional one-on-one fitness coaching at your home with flexible scheduling.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#22201f] py-14 md:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-[#d07f7b] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-4xl font-bold text-white">
            Your Perfect Fitness Partner
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_450px_1fr] gap-10 items-center">
          {/* Left Features */}

          {/* Left Features */}

          <div className="space-y-8">
            {leftFeatures.map((item, index) => (
              <div key={index} className="flex items-start justify-end gap-5">
                {/* Content */}

                <div className="text-right max-w-sm">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-300 leading-8">{item.desc}</p>
                </div>

                {/* Icon */}

                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#d07f7b] flex items-center justify-center shadow-lg shadow-[#d07f7b]/30">
                  <CheckCircle size={28} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}

          <div
            className="group flex justify-center"
            style={{ perspective: "1200px" }}
          >
            <img
              src="https://fitflex-react.vercel.app/assets/img/feature_image.jpg"
              alt=""
              className="
          w-full
          max-w-[430px]
          rounded-3xl
          shadow-2xl
          transition-transform
          duration-1000
          group-hover:[transform:rotateY(360deg)]
        "
            />
          </div>

          {/* Right Features */}

          {/* Right Features */}

<div className="space-y-8">

  {rightFeatures.map((item, index) => (

    <div
      key={index}
      className="flex items-start gap-5"
    >

      {/* Icon */}

      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#d07f7b] flex items-center justify-center shadow-lg shadow-[#d07f7b]/30">

        <CheckCircle
          size={28}
          className="text-white"
        />

      </div>

      {/* Content */}

      <div className="max-w-sm">

        <h3 className="text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          {item.desc}
        </p>

      </div>

    </div>

  ))}

</div>
        </div>
      </div>
    </section>
  );
}
