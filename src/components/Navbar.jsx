import { useState } from "react";
import { ChevronDown, Menu, X, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="logo"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
            />
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none text-slate-900">
                Velocity Sports
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-gray-600 font-medium leading-none mt-1">
                & Fitness Academy
              </p>
            </div>
          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 font-medium text-[15px]">
            <a href="/" className="hover:text-orange-500 duration-300">
              Home
            </a>

            <a href="/about" className="hover:text-orange-500 duration-300">
              About
            </a>

            {/* Services */}

            <div
              className="relative"
              onMouseEnter={() => setServiceDropdown(true)}
              onMouseLeave={() => setServiceDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-orange-500 duration-300">
                Services
                <ChevronDown size={18} />
              </button>

              {serviceDropdown && (
                <div className="absolute top-6 left-0 bg-white rounded-lg shadow-xl w-64 py-2">
                  <a href="/gym" className="block px-5 py-3 hover:bg-orange-50">
                    Gym Personal Training
                  </a>

                  <a
                    href="/cricket"
                    className="block px-5 py-3 hover:bg-orange-50"
                  >
                    Cricket Coaching
                  </a>

                  <a
                    href="/umpiring"
                    className="block px-5 py-3 hover:bg-orange-50"
                  >
                    Umpiring Training
                  </a>

                  <a
                    href="/home-trainer"
                    className="block px-5 py-3 hover:bg-orange-50"
                  >
                    Home Personal Trainer
                  </a>

                  <a
                    href="/supplements"
                    className="block px-5 py-3 hover:bg-orange-50"
                  >
                    Supplements
                  </a>

                  <a
                    href="/sportswear"
                    className="block px-5 py-3 hover:bg-orange-50"
                  >
                    Sports Wear
                  </a>
                </div>
              )}
            </div>

            <a href="/whyus" className="hover:text-orange-500">
              Why Us
            </a>

            <a href="/gallery" className="hover:text-orange-500">
              Gallery
            </a>

            <a href="/contact" className="hover:text-orange-500">
              Contact Us
            </a>
          </nav>

          {/* Contact */}

          <div className="hidden xl:flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FDEFF0] flex items-center justify-center">
              <Phone className="text-[#d07f7b]" size={22} />
            </div>

            <div>
              <p className="font-semibold text-lg">+91 98604 63030</p>

              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin size={14} />

                <span>Swargate, Pune - 411042</span>
              </div>
            </div>
          </div>

          {/* Mobile */}

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}

        {mobileMenu && (
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              mobileMenu
                ? "max-h-[700px] opacity-100 py-5"
                : "max-h-0 opacity-0"
            }`}
          >
            <a
              href="/"
              className="block py-3 font-medium hover:text-[#d07f7b] transition duration-300"
            >
              Home
            </a>

            <a
              href="/about"
              className="block py-3 font-medium hover:text-[#d07f7b] transition duration-300"
            >
              About
            </a>

            <details className="group">
              <summary className="flex justify-between cursor-pointer py-3 font-medium hover:text-[#d07f7b] transition duration-300">
                Services
              </summary>

              <div className="ml-4 border-l-2 border-[#d07f7b]/30 pl-4 mt-2">
                <a
                  href="/gym"
                  className="block py-2 font-medium hover:text-[#d07f7b] transition duration-300"
                >
                  Gym Personal Training
                </a>

                <a
                  href="/cricket"
                  className="block py-2 font-medium hover:text-[#d07f7b] transition duration-300"
                >
                  Cricket Coaching
                </a>

                <a
                  href="/umpiring"
                  className="block py-2 font-medium hover:text-[#d07f7b] transition duration-300"
                >
                  Umpiring Training
                </a>

                <a
                  href="/home-trainer"
                  className="block py-2 font-medium hover:text-[#d07f7b] transition duration-300"
                >
                  Home Personal Trainer
                </a>

                <a
                  href="/supplements"
                  className="block py-2 font-medium hover:text-[#d07f7b] transition duration-300"
                >
                  Supplements
                </a>

                <a
                  href="/sportswear"
                  className="block py-2 font-medium hover:text-[#d07f7b] transition duration-300"
                >
                  Sports Wear
                </a>
              </div>
            </details>

            <a
              href="/whyus"
              className="block py-3 font-medium hover:text-[#d07f7b] transition duration-300"
            >
              Why Us
            </a>

            <a
              href="/gallery"
              className="block py-3 font-medium hover:text-[#d07f7b] transition duration-300"
            >
              Gallery
            </a>

            <a
              href="/contact"
              className="block py-3 font-medium hover:text-[#d07f7b] transition duration-300"
            >
              Contact Us
            </a>

            <div className="mt-5 border-t pt-4">
              <div className="flex items-center gap-2">
                <Phone size={18} />

                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-2 mt-3">
                <MapPin size={18} />

                <span className="text-sm text-gray-600">
                  2nd Floor, Koul Building No. 1, Next to Tata Showroom, Opp.
                  Kumar Pacific Mall, Swargate, Pune - 411042
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
