import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
const whatsappNumber = "919860463030";

const handleWhatsApp = () => {
  const message =
    "Hi Velocity Sports & Fitness Academy, I would like to join your fitness program.";
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

  return (
    <section
      className="relative py-10 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('/cta.jpg')", // Your full section background
      }}
    >
      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
              READY TO EMBARK
              <br />
              ON YOUR FITNESS
              <br />
              JOURNEY WITH
              <span className="text-[#d07f7b]">
                {" "}
                VELOCITY ACADEMY?
                
              </span>
            </h2>

            <div className="mt-10 flex flex-wrap gap-5">
              <button
                onClick={handleWhatsApp}
                className="bg-[#d07f7b] hover:bg-white hover:text-black duration-300 px-8 py-4 rounded-full font-semibold flex items-center gap-3"
              >
                JOIN NOW
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
