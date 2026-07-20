import { ArrowRight, ShieldCheck, Dumbbell } from "lucide-react";

export default function AboutSupplement() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Section */}

          <div className="relative flex justify-center">

            {/* Background Card */}

            <div className="absolute top-8 left-0 w-[420px] h-[500px] bg-[#f9f5f5] rounded-[40px]"></div>

            {/* Main Image */}

            <div className="relative z-20">

              <img
                src="https://i.pinimg.com/736x/d5/9f/4d/d59f4d39672c26880d1a19cfdb6370c6.jpg"
                alt="Supplements"
                className="w-[390px] h-[520px] object-cover rounded-[30px] shadow-2xl"
              />

              {/* Genuine Badge */}

              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl border px-8 py-6">

                <h2 className="text-4xl font-bold text-[#d07f7b]">
                  100%
                </h2>

                <p className="text-gray-600 font-medium">
                  Genuine Products
                </p>

              </div>

             

            </div>

          </div>

          {/* Right Section */}

          <div>

            <span className="uppercase tracking-[4px] text-[#d07f7b] font-semibold">
              Supplements
            </span>

            <h2 className="text-5xl font-bold leading-tight text-gray-900 mt-4">
              About Our
              <br />
              <span className="text-[#d07f7b]">
                Premium Supplements
              </span>
            </h2>

            <div className="w-24 h-1 bg-[#d07f7b] rounded-full mt-6 mb-6"></div>

            <p className="text-gray-600 leading-8">
              Proper nutrition plays a vital role in achieving fitness goals,
              and we are committed to providing genuine, high-quality
              supplements that support your training and recovery.
              At <strong>Velocity Sports & Fitness Academy</strong>, we offer
              carefully selected products from trusted brands to help you
              perform at your best.
            </p>

            

            <p className="text-gray-600 leading-8 mt-4">
              Our collection includes whey protein, mass gainers, creatine,
              pre-workout supplements, multivitamins, and other sports
              nutrition products that improve performance, recovery, and
              overall health while supporting your fitness journey.
            </p>

            {/* Button */}

            <button className="group mt-10 inline-flex items-center gap-3 bg-[#d07f7b] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#c16f6b] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d07f7b]/30">

              Shop Now

              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

          </div>

        </div>
      </div>
    </section>
  );
}