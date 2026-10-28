import { useState } from "react";
import { ChevronDown, Menu, X, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const services = [
    { name: "Advance Personal Trainer Course", path: "/trainer" },
    { name: "Gym Personal Training", path: "/gym" },
    { name: "Cricket Coaching", path: "/cricket" },
    { name: "Umpiring Training", path: "/umpiring" },
    { name: "Home Personal Trainer", path: "/home-trainer" },
    { name: "Supplements", path: "/supplements" },
    { name: "Sports Wear", path: "/sportswear" },
    { name: "Swimming Training", path: "/swimming" },
    { name: "Aviation Career Program", path: "/aviation" },
    { name: "Voice Over Artist", path: "/voice-over-artist" },
  ];

  const navLinkClass =
    "block py-3 font-medium hover:text-[#d07f7b] transition duration-300";

  const serviceLinkClass =
    "block px-5 py-3 hover:bg-[#d07f7b]/10 hover:text-[#d07f7b] transition duration-300";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.jpeg"
              alt="Velocity Academy Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain shrink-0"
            />

            <div className="min-w-fit">
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-normal whitespace-nowrap bg-gradient-to-r from-[#a8324a] via-[#d07f7b] to-[#9f2945] bg-clip-text text-transparent">
                Velocity Academy
              </h1>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 font-medium text-[18px]">
            <a href="/" className="hover:text-[#d07f7b] duration-300">
              Home
            </a>

            <a href="/about" className="hover:text-[#d07f7b] duration-300">
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServiceDropdown(true)}
              onMouseLeave={() => setServiceDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setServiceDropdown(!serviceDropdown)}
                aria-expanded={serviceDropdown}
                className="flex items-center gap-1 hover:text-[#d07f7b] duration-300"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    serviceDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceDropdown && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-white rounded-lg shadow-xl py-2 max-h-[75vh] overflow-y-auto">
                    {services.map((service) => (
                      <a
                        key={service.path}
                        href={service.path}
                        className={serviceLinkClass}
                        onClick={() => setServiceDropdown(false)}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/whyus" className="hover:text-[#d07f7b] duration-300">
              Why Us
            </a>

            <a href="/gallery" className="hover:text-[#d07f7b] duration-300">
              Gallery
            </a>

            <a href="/contact" className="hover:text-[#d07f7b] duration-300">
              Contact Us
            </a>
          </nav>

          {/* Desktop Contact */}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden py-5 border-t border-gray-100">
            <a
              href="/"
              className={navLinkClass}
              onClick={() => setMobileMenu(false)}
            >
              Home
            </a>

            <a
              href="/about"
              className={navLinkClass}
              onClick={() => setMobileMenu(false)}
            >
              About
            </a>

            {/* Mobile Services Dropdown */}
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-3 font-medium hover:text-[#d07f7b] transition duration-300 list-none">
                Services
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="ml-3 border-l-2 border-[#d07f7b]/30 pl-3 mt-2">
                {services.map((service) => (
                  <a
                    key={service.path}
                    href={service.path}
                    className="block py-2.5 text-sm sm:text-base font-medium hover:text-[#d07f7b] transition duration-300"
                    onClick={() => setMobileMenu(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </details>

            <a
              href="/whyus"
              className={navLinkClass}
              onClick={() => setMobileMenu(false)}
            >
              Why Us
            </a>

            <a
              href="/gallery"
              className={navLinkClass}
              onClick={() => setMobileMenu(false)}
            >
              Gallery
            </a>

            <a
              href="/contact"
              className={navLinkClass}
              onClick={() => setMobileMenu(false)}
            >
              Contact Us
            </a>

            {/* Mobile Contact Details */}
            <div className="mt-5 border-t pt-4">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-[#d07f7b]" />
                <a href="tel:+919860463030" className="font-medium">
                  +91 98604 63030
                </a>
              </div>

              <div className="flex items-start gap-2 mt-3">
                <MapPin
                  size={18}
                  className="text-[#d07f7b] flex-shrink-0 mt-0.5"
                />

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
