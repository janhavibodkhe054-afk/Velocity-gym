import { ArrowRight, Shirt, Footprints, ShieldCheck } from "lucide-react";

export default function AboutSportsWear() {
  return (
    <section className="bg-white pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div className="relative">

            {/* Main Image */}

            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700"
              alt="Sports Wear"
              className="rounded-3xl h-[500px] w-full object-cover shadow-2xl"
            />

            

            

          </div>

          {/* Right Side */}

          <div>

            <span className="uppercase tracking-[4px] text-[#d07f7b] font-semibold">
              Sports Wear
            </span>

            <h2 className="text-5xl font-bold leading-tight mt-4">
              Premium Sportswear
              <br />
              <span className="text-[#d07f7b]">
                For Every Athlete
              </span>
            </h2>

            <div className="w-24 h-1 bg-[#d07f7b] rounded-full mt-6 mb-6"></div>

            <p className="text-gray-600 leading-8">
              The right sportswear enhances comfort, performance, and confidence
              during every workout or game. At
              <strong> Velocity Sports & Fitness Academy</strong>, we offer a
              premium collection of sportswear and fitness accessories designed
              for athletes, gym enthusiasts, and fitness lovers.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Our collection includes gym wear, cricket apparel, training
              t-shirts, track pants, sports shoes, accessories, and
              performance clothing made from high-quality, breathable, and
              durable fabrics. Every product is designed to combine
              functionality, comfort, and style, helping you perform your
              best while looking your best.
            </p>

            <button className="group mt-6 inline-flex items-center gap-3 bg-[#d07f7b] hover:bg-[#bf6e6a] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d07f7b]/30">

              Shop Collection

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}