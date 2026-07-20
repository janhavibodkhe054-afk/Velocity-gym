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
    <section className="bg-[#0d0d0d] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://up2client.com/envato/gymort/mainfile/assets/images/common_img/insta_feed_3.png"
              alt="FAQ"
              className="w-full h-[600px] object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-8 left-8">
              <p className="text-[#d07f7b] uppercase tracking-[4px] text-sm">
                Velocity Sports & Fitness Academy
              </p>

              <h2 className="text-white text-4xl font-bold mt-3 leading-tight">
                Frequently
                <br />
                Asked Questions
              </h2>
            </div>
          </div>

          {/* Right FAQ */}

          <div>

            <p className="text-[#d07f7b] uppercase tracking-[4px] font-semibold">
              FAQ
            </p>

            <h2 className="text-4xl font-bold text-white mt-3 mb-10">
              Everything You Need To Know
            </h2>

            <div className="space-y-4">

              {faqs.map((faq, index) => (

                <div
                  key={index}
                  className="bg-[#181818] rounded-xl border border-gray-800"
                >

                  <button
                    onClick={() =>
                      setOpen(open === index ? null : index)
                    }
                    className="w-full flex justify-between items-center px-6 py-5"
                  >

                    <h3 className="text-white text-lg font-semibold text-left">
                      {faq.question}
                    </h3>

                    <div className="text-[#d07f7b]">
                      {open === index ? (
                        <Minus size={22} />
                      ) : (
                        <Plus size={22} />
                      )}
                    </div>

                  </button>

                  {open === index && (
                    <div className="px-6 pb-6 text-gray-400 leading-7">
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