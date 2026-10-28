
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

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
      "_blank",
      "noopener,noreferrer"
    );
  };

  const branches = [
    {
      name: "Pune Branch",
      city: "Pune, Maharashtra",
      address: [
        "2nd Floor, Koul Building No. 1",
        "Next to Tata Showroom",
        "Opp. Kumar Pacific Mall",
        "Swargate, Pune, Maharashtra - 411042",
      ],
      mapQuery:
        "Velocity Academy, Koul Building No 1, Swargate, Pune 411042",
    },
    {
      name: "Nashik Branch",
      city: "Nashik, Maharashtra",
      address: [
        "4th Floor, Nirman Inspire Building",
        "Opposite District and Sessions Court",
        "Shalimar, Nashik, Maharashtra - 422001",
      ],
      mapQuery:
        "Nirman Inspire Building, Shalimar, Nashik, Maharashtra 422001",
    },
  ];

  return (
    <section className="bg-[#f8f7f5] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Contact Heading & Information */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

          {/* Left Side */}
          <div className="lg:col-span-2">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] font-semibold mb-3 text-sm">
              Contact Us
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-10">
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
                  <a
                    href="tel:+919860463030"
                    className="text-gray-600 mt-2 block text-sm sm:text-base hover:text-[#d07f7b] transition"
                  >
                    +91 98604 63030
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#d07f7b]" size={24} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-lg">Contact Mail</h4>
                  <a
                    href="mailto:velocitysports24@gmail.com"
                    className="text-gray-600 mt-2 block break-all text-sm sm:text-base hover:text-[#d07f7b] transition"
                  >
                    velocitysports24@gmail.com
                  </a>
                </div>
              </div>

              {/* Pune Branch */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#d07f7b]" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Pune Branch</h4>

                  <p className="text-gray-600 mt-2 leading-7 text-sm sm:text-base">
                    <strong className="text-gray-800">
                      Velocity Academy
                    </strong>
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

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Velocity+Sports+and+Fitness+Academy+Koul+Building+Swargate+Pune+411042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-[#d07f7b] hover:text-black transition"
                  >
                    Get Directions <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Nashik Branch */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#d07f7b]" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Nashik Branch</h4>

                  <p className="text-gray-600 mt-2 leading-7 text-sm sm:text-base">
                    <strong className="text-gray-800">
                      Velocity Academy
                    </strong>
                    <br />
                    4th Floor, Nirman Inspire Building,
                    <br />
                    Opposite District and Sessions Court,
                    <br />
                    Shalimar,
                    <br />
                    Nashik, Maharashtra - 422001
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nirman+Inspire+Building+Shalimar+Nashik+422001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-[#d07f7b] hover:text-black transition"
                  >
                    Get Directions <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 sm:col-span-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#d07f7b]" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Working Hours</h4>

                  <p className="text-gray-600 mt-2 leading-7 text-sm sm:text-base">
                    <strong>Monday - Friday</strong>
                    <br />
                    7:00 AM - 10:00 PM
                    <br />
                    <br />
                    <strong>Saturday - Sunday</strong>
                    <br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-[#171717] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl h-fit">
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#d07f7b] text-sm mb-3">
              Get In Touch
            </p>

            <h3 className="text-white text-3xl sm:text-4xl font-bold mb-3">
              Contact Us
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-8">
              Have questions about our fitness programs? Send us a message
              and our team will get in touch with you.
            </p>

            <form onSubmit={sendWhatsApp} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder:text-gray-400 outline-none focus:border-[#d07f7b] transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder:text-gray-400 outline-none focus:border-[#d07f7b] transition"
                required
              />

              <textarea
                rows="4"
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder:text-gray-400 outline-none resize-none focus:border-[#d07f7b] transition"
                required
              />

              <button
                type="submit"
                className="w-full mt-2 bg-[#d07f7b] hover:bg-white hover:text-black duration-300 text-white font-semibold px-8 py-4 rounded-full transition"
              >
                Send A Message →
              </button>

              <p className="text-xs text-gray-400 text-center">
                Your message will be sent through WhatsApp.
              </p>
            </form>
          </div>
        </div>

        {/* Branch Locations & Google Maps */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[3px] text-[#d07f7b] font-semibold text-sm mb-3">
              Our Locations
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Visit Our Branches
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Find the nearest Velocity Academy branch
              and plan your visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              >
                {/* Map Heading */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#d07f7b]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#d07f7b]" size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {branch.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {branch.city}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <iframe
                  title={`${branch.name} Google Map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    branch.mapQuery
                  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-[280px] sm:h-[320px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Map Footer */}
                <div className="p-5 sm:p-6">
                  <p className="text-gray-600 text-sm leading-6">
                    {branch.address.map((line, index) => (
                      <React.Fragment key={line}>
                        {line}
                        {index < branch.address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      branch.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-[#d07f7b] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#171717] transition duration-300"
                  >
                    Open in Google Maps
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}