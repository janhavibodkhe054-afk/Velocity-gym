import { CheckCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";


export default function AboutGymTraining() {
  return (
    <section className="bg-white pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/gym1.jpg"
              alt="Gym Personal Training"
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>

            <span className="text-[#d07f7b] uppercase tracking-[3px] font-semibold">
              Personal Training
            </span>

            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mt-2 leading-tight">
              Achieve Your Fitness Goals With
              <span className="text-[#d07f7b]"> Expert Guidance</span>
            </h2>

            <p className="text-gray-600 mt-4 leading-8">
              At <strong>Velocity Sports & Fitness Academy</strong>, our Gym
              Personal Training program is designed to deliver personalized
              fitness solutions tailored to your individual goals. Whether
              you're aiming for weight loss, muscle gain, strength building,
              or improved overall fitness, our certified trainers provide
              dedicated one-on-one coaching to help you achieve lasting
              results safely and effectively.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-4 mt-4">

              {[
                "Certified Trainers",
                "Customized Workout Plans",
                "Modern Equipment",
                "Nutrition Guidance",
                "Progress Tracking",
                "Flexible Timings",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-[#d07f7b]"
                  />

                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* Button */}

            <button className="group mt-10 bg-[#d07f7b] hover:bg-[#bf6e6a] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-[#d07f7b]/40 active:scale-95 flex items-center gap-3">
  Join Us
  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-2"
  />
</button>

          </div>

        </div>

      </div>
    </section>
  );
}