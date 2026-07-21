import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fafafa] rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start flex-shrink-0">
              <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-[#f7f4f4] border-4 border-[#d07f7b]/20 rounded-2xl flex items-center justify-center">
                <img
                  src="https://up2client.com/envato/gymort/mainfile/assets/images/common_img/insta_feed_6.png"
                  alt="Fitness"
                  className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="uppercase tracking-[2px] sm:tracking-[4px] text-[#d07f7b] font-semibold text-xs sm:text-sm mb-3">
                START YOUR FITNESS JOURNEY
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Become Stronger,
                <br className="hidden sm:block" />
                Healthier & More Confident
              </h2>

              <p className="text-gray-600 mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0">
                Whether you're looking to lose weight, build muscle,
                improve your cricket skills, or achieve your personal
                fitness goals, our experienced trainers are here to
                guide you every step of the way.
              </p>

              {/* Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full sm:w-auto border-2 border-[#d07f7b] text-[#d07f7b] hover:bg-[#d07f7b] hover:text-white px-8 py-3.5 sm:py-4 rounded-full font-semibold transition-all duration-300"
                >
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