import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const phone = "919860463030";

    const text = `*New Contact Form*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

💬 Message:
${formData.message}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-[#f8f7f5] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] font-semibold mb-3 text-sm">
              Contact Us
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-10 lg:mb-12">
              Find Us Here.
              <br />
              Contact Us Today.
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#d07f7b]" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Contact Phone</h4>

                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    +91 98604 63030
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#d07f7b]" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Contact Mail</h4>

                  <p className="text-gray-600 mt-2 break-all text-sm sm:text-base">
                    velocityfitness@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#d07f7b]" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Location</h4>

                  <p className="text-gray-600 mt-2 leading-7 text-sm sm:text-base">
                    <strong>Velocity Sports & Fitness Academy</strong>
                    <br />
                    2nd Floor, Koul Building No. 1,
                    <br />
                    Next to Tata Showroom,
                    <br />
                    Opp. Kumar Pacific Mall,
                    <br />
                    Swargate,
                    <br />
                    Pune, Maharashtra - 411042
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#d07f7b]" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Working Hours</h4>

                  <p className="text-gray-600 mt-2 leading-7 text-sm sm:text-base">
                    Monday - Friday
                    <br />
                    7:00 AM - 10:00 PM
                    <br />
                    <br />
                    Saturday - Sunday
                    <br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#171717] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] text-sm mb-3">
              Get In Touch
            </p>

            <h3 className="text-white text-3xl sm:text-4xl font-serif mb-8">
              Contact Us
            </h3>

            <form onSubmit={sendWhatsApp} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder:text-gray-400 outline-none focus:border-[#d07f7b] transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder:text-gray-400 outline-none focus:border-[#d07f7b] transition"
                required
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder:text-gray-400 outline-none resize-none focus:border-[#d07f7b] transition"
                required
              />

              <button
                type="submit"
                className="w-full sm:w-auto mt-2 bg-[#d07f7b] hover:bg-white hover:text-black duration-300 text-white font-semibold px-8 py-4 rounded-full transition"
              >
                Send A Message →
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              title="Velocity Sports & Fitness Academy"
              src="https://maps.google.com/maps?q=Velocity%20Sports%20and%20Fitness%20Academy,%202nd%20Floor,%20Koul%20Building%20No%201,%20Next%20to%20Tata%20Showroom,%20Opp%20Kumar%20Pacific%20Mall,%20Swargate,%20Pune%20411042&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}