import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Velocity Sports
              <span className="text-[#d07f7b]"> & Fitness Academy</span>
            </h2>

            <p className="text-gray-400 leading-8">
              Transform your body and mind with expert trainers, modern
              equipment, and personalized fitness programs.
            </p>

            <div className="mt-8">
              <h4 className="text-[#d07f7b] font-semibold uppercase tracking-widest mb-3">
                Working Hours
              </h4>

              <p className="text-gray-300">
                Monday - Friday : 7:00 AM - 10:00 PM
              </p>

              <p className="text-gray-300">
                Saturday - Sunday : 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          {/* Quick Links */}
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

              <li>
                <a
                  href="/services"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Services
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
                  href="/whyus"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Why Us
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

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Services</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="/gym"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Gym Personal Training
                </a>
              </li>

              <li>
                <a
                  href="/cricket"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Cricket Coaching
                </a>
              </li>

              <li>
                <a
                  href="/umpiring"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Umpiring Training
                </a>
              </li>

              <li>
                <a
                  href="/home-trainer"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Home Personal Trainer
                </a>
              </li>

              <li>
                <a
                  href="/supplements"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Supplements
                </a>
              </li>

              <li>
                <a
                  href="/sportswear"
                  className="hover:text-[#d07f7b] transition duration-300"
                >
                  Sports Wear
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Newsletter</h3>

            <p className="text-gray-400 mb-5">
              Subscribe to receive fitness tips and latest updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-[#1d1d1d] outline-none"
              />

              <button className="bg-[#d07f7b] px-5 flex items-center justify-center hover:bg-red-700 duration-300">
                <FaArrowRight />
              </button>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-red-600 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-red-600 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-red-600 duration-300"
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
            © 2026 Velocity Sports & Fitness Academy. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center md:text-right">
            Designed & Developed by{" "}
            <a
              href="https://hashgridtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d07f7b] font-semibold hover:text-white transition duration-300"
            >
              Hashgrid technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
