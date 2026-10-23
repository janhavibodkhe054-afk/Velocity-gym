import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "Do you offer a free trial session?",
      answer:
        "Yes, we offer trial sessions for selected fitness and cricket training programs so you can experience our coaching before joining.",
    },
    {
      question: "Can beginners join the academy?",
      answer:
        "Absolutely! Our programs are designed for beginners, intermediate, and advanced members with personalized guidance.",
    },
    {
      question: "Do you provide personal trainers?",
      answer:
        "Yes, our certified personal trainers create customized workout and nutrition plans based on your fitness goals.",
    },
    {
      question: "Are home training sessions available?",
      answer:
        "Yes, we provide home personal training with flexible timings for your convenience.",
    },
    {
      question: "What age groups can join cricket coaching?",
      answer:
        "Children, teenagers, and adults can join our cricket coaching programs according to their skill level.",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-2xl order-2 lg:order-1">
            <img
              src="https://up2client.com/envato/gymort/mainfile/assets/images/common_img/insta_feed_3.png"
              alt="FAQ"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-black/45"></div>

            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
              <p className="text-[#d07f7b] uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm font-semibold">
                Velocity Academy
              </p>

              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-tight">
                Frequently
                <br />
                Asked Questions
              </h2>
            </div>
          </div>

          {/* Right FAQ */}
          <div className="order-1 lg:order-2">
            <p className="text-[#d07f7b] uppercase tracking-[3px] sm:tracking-[4px] font-semibold text-sm">
              FAQ
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-8 sm:mb-10 leading-tight">
              Everything You Need To Know
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#181818] rounded-xl border border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full flex justify-between items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  >
                    <h3 className="text-white text-base sm:text-lg font-semibold leading-6 flex-1">
                      {faq.question}
                    </h3>

                    <div className="text-[#d07f7b] flex-shrink-0">
                      {open === index ? (
                        <Minus size={22} />
                      ) : (
                        <Plus size={22} />
                      )}
                    </div>
                  </button>

                  {open === index && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm sm:text-base leading-7">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}