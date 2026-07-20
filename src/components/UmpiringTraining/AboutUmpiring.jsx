import { ArrowRight } from "lucide-react";

export default function AboutUmpiring() {
  return (
    <section className="bg-white pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative flex justify-center">

            {/* Background Box */}

            <div className="absolute top-10 left-8 w-[82%] h-[85%] bg-[#f7efef] rounded-lg"></div>

            {/* Vertical Accent */}

            <div className="absolute right-8 top-14 h-[70%] w-4 bg-[#d07f7b] rounded-full"></div>

            {/* Main Image */}

            <img
              src="https://i.pinimg.com/736x/02/0d/e2/020de2f53b3fb945b9d8433f2bda1043.jpg"
              alt="Umpiring Training"
              className="relative z-10 w-[420px] h-[500px] object-cover rounded-lg shadow-xl"
            />

          </div>

          {/* Right Content */}

          <div>

            <span className="uppercase tracking-[3px] text-[#d07f7b] font-semibold">
              Umpiring Training
            </span>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mt-4">
              Build Your Career
              <br />
              <span className="text-gray-900">
                As A Cricket Umpire
              </span>
            </h2>

            <div className="w-20 h-1 bg-[#d07f7b] rounded-full mt-5 mb-5"></div>

            <p className="text-gray-600 leading-8">
              Cricket is not only about playing the game but also about
              officiating it with confidence, accuracy, and professionalism.
              Our Umpiring Training Program is specially designed for
              individuals who wish to build a career as cricket umpires or
              enhance their understanding of the Laws of Cricket.
            </p>

            {/* Highlight Card */}

            

            <p className="text-gray-600 leading-8 mt-4">
              The program includes practical on-field sessions, communication
              skills, and expert guidance to prepare participants for local,
              district, and higher-level cricket matches with confidence.
            </p>

            {/* Buttons */}

            <div className="flex gap-5 mt-6">

              <button className="group bg-[#d07f7b] hover:bg-[#bf6f6b] text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:-translate-y-1">

                Join Now

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </button>

              

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}