import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    ["Advance Personal Trainer Course", "/trainer"],
    ["Gym Personal Training", "/gym"],
    ["Cricket Coaching", "/cricket"],
    ["Umpiring Training", "/umpiring"],
    ["Home Personal Trainer", "/home-trainer"],
    ["Supplements", "/supplements"],
    ["Sports Wear", "/sportswear"],
    ["Swimming Training", "/swimming"],
    ["Aviation Career Program", "/aviation"],
    ["Voice Over Artist", "/voice-over-artist"],
  ];

  return (
    <footer className="bg-black text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Velocity
              <span className="text-[#d07f7b]"> Academy</span>
            </h2>

            <p className="text-gray-400 leading-8">
              Transform your body and mind with expert trainers, modern
              equipment, and personalized fitness programs.
            </p>

            {/* Working Hours */}
            <div className="mt-8">
              <h4 className="text-[#d07f7b] font-semibold uppercase tracking-widest mb-3">
                Working Hours
              </h4>

              <p className="text-gray-300 leading-7">
                Monday - Friday
                <br />
                7:00 AM - 10:00 PM
              </p>

              <p className="text-gray-300 leading-7 mt-3">
                Saturday - Sunday
                <br />
                9:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  About Us
                </a>
              </li>

              {/* Services Dropdown */}
              <li>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-controls="footer-services-menu"
                  className="inline-flex items-center gap-2 text-left hover:text-[#d07f7b] transition duration-300"
                >
                  <span>Services</span>

                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    servicesOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul
                    id="footer-services-menu"
                    className="overflow-hidden min-h-0 space-y-3 border-l border-gray-700 ml-1 pl-4"
                  >
                    {services.map(([label, href]) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="block text-sm leading-6 hover:text-[#d07f7b] transition duration-300"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <a
                  href="/whyus"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Why Us
                </a>
              </li>

              <li>
                <a
                  href="/gallery"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Locations</h3>

            <div className="space-y-8">
              {/* Pune Branch */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaMapMarkerAlt className="text-[#d07f7b] text-lg flex-shrink-0" />

                  <h4 className="text-white font-semibold text-lg">
                    Pune Branch
                  </h4>
                </div>

                <p className="text-gray-400 leading-7 pl-7 text-sm">
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
                  className="inline-flex items-center gap-2 pl-7 mt-3 text-sm font-semibold text-[#d07f7b] hover:text-white transition duration-300"
                >
                  Get Directions →
                </a>
              </div>

              {/* Nashik Branch */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaMapMarkerAlt className="text-[#d07f7b] text-lg flex-shrink-0" />

                  <h4 className="text-white font-semibold text-lg">
                    Nashik Branch
                  </h4>
                </div>

                <p className="text-gray-400 leading-7 pl-7 text-sm">
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
                  className="inline-flex items-center gap-2 pl-7 mt-3 text-sm font-semibold text-[#d07f7b] hover:text-white transition duration-300"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>

            <div className="space-y-6 text-gray-400">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#d07f7b] mt-1 flex-shrink-0" />

                <a
                  href="tel:+919860463030"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  +91 98604 63030
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#d07f7b] mt-1 flex-shrink-0" />

                <a
                  href="mailto:velocitysports24@gmail.com"
                  className="hover:text-[#d07f7b] transition duration-300 break-all"
                >
                  velocitysports24@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-[#d07f7b] duration-300 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-[#d07f7b] duration-300 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-[#d07f7b] duration-300 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center md:text-left">
            © 2026 Velocity Academy. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center md:text-right">
            Designed & Developed by{" "}
            <a
              href="https://hashgridtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d07f7b] font-semibold hover:text-white transition duration-300"
            >
              Hashgrid Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
