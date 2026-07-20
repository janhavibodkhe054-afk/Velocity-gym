import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-6">

        <div className="p-8 md:p-12">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left Image */}

            <div className="relative">

              <div className="w-64 h-64 bg-[#f7f4f4] flex items-center justify-center border-4 border-[#d07f7b]/20">

                <img
                  src="https://up2client.com/envato/gymort/mainfile/assets/images/common_img/insta_feed_6.png"
                  alt="Fitness"
                  className="w-56 h-56 object-cover"
                />

              </div>

             

            </div>

            {/* Right Content */}

            <div className="flex-1">

              <p className="uppercase tracking-[4px] text-[#d07f7b] font-semibold mb-3">
                START YOUR FITNESS JOURNEY
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Become Stronger,
                <br />
                Healthier & More Confident
              </h2>

              <p className="text-gray-600 mt-6 leading-8 max-w-2xl">
                Whether you're looking to lose weight, build muscle,
                improve your cricket skills, achieve your personal
                fitness goals, our experienced trainers are here to
                guide you every step of the way.
              </p>

              <div className="flex flex-wrap gap-5 mt-4">

                

                <button className="border-2 border-[#d07f7b] text-[#d07f7b] hover:bg-[#d07f7b] hover:text-white px-8 py-4 rounded-full font-semibold duration-300">
                  Contact Us
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}