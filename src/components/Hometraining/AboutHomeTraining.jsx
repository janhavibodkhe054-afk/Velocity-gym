import { ArrowRight, Check } from "lucide-react";

export default function AboutHomeTraining() {
  return (
    <section className="bg-white pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-0 items-center">

          {/* Left Content */}

          <div>

            <span className="uppercase tracking-[3px] text-[#d07f7b] font-semibold">
              Personal Trainer – Home Service
            </span>

            <h2 className="text-5xl font-bold leading-tight text-gray-900 mt-4">
              Professional Fitness
              <br />
              <span className="text-[#d07f7b]">
                At Your Doorstep
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              We understand that busy schedules and travel constraints
              can make it difficult to visit the gym regularly.
              Our Home Personal Training service brings certified
              fitness coaching directly to your home, helping you
              achieve your fitness goals in a comfortable environment.
            </p>


            <p className="text-gray-600 leading-8 mt-4">
              Every training session is tailored according to your
              fitness level, health condition, and personal goals.
              Our trainers provide continuous motivation, progress
              tracking, and expert guidance to help you stay
              consistent and achieve long-term results.
            </p>

            <button className="group mt-6 bg-[#d07f7b] hover:bg-[#bf6f6b] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">

              Join Us

              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

          </div>

          {/* Right Image */}

          <div className="relative flex justify-center">

            {/* Outer Ring */}

            <div className="absolute w-[430px] h-[430px] rounded-full border-[20px] border-[#f7eeee]"></div>

            {/* Accent Circle */}

            <div className="absolute top-12 right-12 w-52 h-52 bg-[#d07f7b] rounded-full opacity-20"></div>

            {/* Main Image */}

            <img
              src="https://i.pinimg.com/1200x/de/96/d4/de96d42522618d602ea8bd1c5152f862.jpg"
              alt="Home Personal Trainer"
              className="relative z-10 w-[360px] h-[500px] object-cover rounded-b-full"
            />

          </div>

        </div>

      </div>
    </section>
  );
}