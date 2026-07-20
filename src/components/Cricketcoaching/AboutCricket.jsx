import { ArrowRight } from "lucide-react";

export default function AboutCricket() {
  return (
    <section className="bg-white pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images */}

          <div className="flex gap-5 justify-center">
            <img
              src="https://tidasports.com/wp-content/uploads/2025/07/Cricket-2_11zon-1024x576.jpg"
              alt="Cricket Coaching"
              className="w-52 h-[500px] object-cover object-[35%_center]"
            />

            <img
              src="https://images.pexels.com/photos/37144635/pexels-photo-37144635/free-photo-of-cricketer-poses-at-striking-position-on-outdoor-pitch.jpeg"
              alt="Cricket Coaching"
              className="w-52 h-[500px] object-cover mt-10"
            />
          </div>

          {/* Content */}

          <div>
            <p className="uppercase tracking-[4px] text-[#d07f7b] font-semibold">
              Cricket Coaching
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              ABOUT OUR
              <br />
              <span className="text-[#d07f7b]">CRICKET PROGRAM</span>
            </h2>

            <div className="w-20 h-1 bg-[#d07f7b] mt-5 mb-5"></div>

            <p className="text-gray-600 leading-8">
              Our Cricket Coaching Program is designed for aspiring cricketers
              of all ages and skill levels who want to develop their game under
              the guidance of experienced coaches. We focus on building strong
              technical skills, physical fitness, discipline, and match
              awareness through structured training sessions.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              From mastering batting, bowling, and fielding techniques to
              improving fitness and game strategies, our coaching ensures every
              player receives individual attention and opportunities to enhance
              their performance. Whether you are a beginner or an advanced
              player, we provide the right environment to help you grow and
              succeed.
            </p>

            <button className="group mt-4 inline-flex items-center gap-3 border border-[#d07f7b] text-[#d07f7b] px-8 py-4 rounded-full font-semibold hover:bg-[#d07f7b] hover:text-white transition-all duration-300">
              Join Now
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
