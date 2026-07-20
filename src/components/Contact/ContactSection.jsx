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

    const phone = "919860463030"; // <-- Replace with your WhatsApp number

    const text = `*New Contact Form*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

💬 Message:
${formData.message}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };
  return (
    <section className="bg-[#f8f7f5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        

        

        {/* Content */}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side */}

          <div className="lg:col-span-2">
            <p className="uppercase tracking-[5px] text-[#d07f7b] font-semibold mb-3">
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-12">
              Find Us Here. Contact Us
              <br />
              Here To Find Us.
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Phone */}

              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <Phone className="text-[#d07f7b]" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Contact Phone</h4>

                  <p className="text-gray-600 mt-2">+91 98604 63030</p>
                </div>
              </div>

              {/* Email */}

              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <Mail className="text-[#d07f7b]" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Contact Mail</h4>

                  <p className="text-gray-600 mt-2">
                    velocityfitness@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}

              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <MapPin className="text-[#d07f7b]" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Location</h4>

                  <p className="text-gray-600 mt-2 leading-7">
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

              {/* Timing */}

              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <Clock className="text-[#d07f7b]" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Working Hours</h4>

                  <p className="text-gray-600 mt-2">
                    Mon - Fri : 7 AM - 10 PM
                    <br />
                    Sat - Sun : 9 AM - 8 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}

          <div className="bg-[#171717] p-10 rounded-lg">
            <p className="uppercase tracking-[5px] text-[#d07f7b] text-sm mb-2">
              Get In Touch
            </p>

            <h3 className="text-white text-4xl font-serif mb-8">Contact Us.</h3>

            <form onSubmit={sendWhatsApp} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white outline-none"
                required
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white outline-none resize-none"
                required
              />

              <button
                type="submit"
                className="mt-4 bg-white hover:bg-[#d07f7b] hover:text-white duration-300 text-black font-semibold px-8 py-4 rounded-full"
              >
                Send A Message →
              </button>
            </form>
          </div>
        </div>
        {/* Google Map */}

<div className="mt-20">

  

  <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">

    <iframe
      title="Velocity Sports & Fitness Academy"
      src="https://maps.google.com/maps?q=Velocity%20Sports%20and%20Fitness%20Academy,%202nd%20Floor,%20Koul%20Building%20No%201,%20Next%20to%20Tata%20Showroom,%20Opp%20Kumar%20Pacific%20Mall,%20Swargate,%20Pune%20411042&t=&z=16&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="500"
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
