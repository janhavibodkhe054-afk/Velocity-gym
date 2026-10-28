
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const dropdownRef = useRef(null);

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

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Why Us", path: "/whyus" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServiceDropdown(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenu(false);
        setServiceDropdown(false);
        setMobileServices(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileServices(false);
  };

  const navLinkClass =
    "relative whitespace-nowrap py-2 text-[15px] xl:text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-[#b83b52]";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.07)] backdrop-blur-md">
      {/* Main Navbar */}
      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-5 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-3 sm:min-h-[88px] lg:min-h-[104px]">

          {/* Logo */}
          <a
            href="/"
            aria-label="Velocity Academy Home"
            className="flex min-w-0 shrink-0 items-center"
            onClick={closeMobileMenu}
          >
            <img
              src="/logo.png"
              alt="Velocity Academy"
              className="h-[58px] w-[140px] object-contain sm:h-[72px] sm:w-[175px] md:h-[82px] md:w-[200px] lg:h-[92px] lg:w-[225px] xl:h-[100px] xl:w-[200px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
            {links.slice(0, 2).map((link) => (
              <a key={link.path} href={link.path} className={navLinkClass}>
                {link.name}
              </a>
            ))}

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServiceDropdown(true)}
              onMouseLeave={() => setServiceDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setServiceDropdown((prev) => !prev)}
                aria-expanded={serviceDropdown}
                aria-haspopup="true"
                className={`${navLinkClass} flex items-center gap-1.5`}
              >
                Services
                <ChevronDown
                  size={17}
                  className={`transition-transform duration-300 ${
                    serviceDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceDropdown && (
                <div className="absolute left-1/2 top-full z-50 w-[310px] -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
                    <div className="border-b border-gray-100 bg-gradient-to-r from-[#fff5f5] to-white px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b83b52]">
                        Explore Our Programs
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Find the right course for your career
                      </p>
                    </div>

                    <div className="max-h-[65vh] overflow-y-auto p-2">
                      {services.map((service) => (
                        <a
                          key={service.path}
                          href={service.path}
                          onClick={() => setServiceDropdown(false)}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-[#fff2f3] hover:text-[#b83b52]"
                        >
                          <span>{service.name}</span>
                          <ArrowUpRight
                            size={15}
                            className="shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {links.slice(2).map((link) => (
              <a key={link.path} href={link.path} className={navLinkClass}>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href="tel:+919860463030"
              aria-label="Call Velocity Academy"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0f1] text-[#b83b52] transition duration-300 hover:bg-[#b83b52] hover:text-white"
            >
              <Phone size={19} />
            </a>

            <div className="leading-tight">
              <a
                href="tel:+919860463030"
                className="whitespace-nowrap text-[15px] font-bold text-gray-900 transition hover:text-[#b83b52]"
              >
                +91 98604 63030
              </a>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                <MapPin size={13} className="shrink-0 text-[#b83b52]" />
                Swargate, Pune - 411042
              </p>
            </div>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu((prev) => !prev)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 transition hover:border-[#b83b52] hover:bg-[#fff4f5] hover:text-[#b83b52] lg:hidden"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 top-[76px] z-40 bg-black/35 lg:hidden sm:top-[88px]"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenu
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain px-4 pb-6 pt-3 sm:max-h-[calc(100dvh-88px)] sm:px-6">
          {/* Mobile Links */}
          <nav className="flex flex-col">
            {links.slice(0, 2).map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-gray-100 py-3.5 text-[15px] font-semibold text-gray-800 transition hover:text-[#b83b52]"
              >
                {link.name}
                <ArrowUpRight size={16} className="text-gray-400" />
              </a>
            ))}

            {/* Mobile Services */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setMobileServices((prev) => !prev)}
                aria-expanded={mobileServices}
                className="flex w-full items-center justify-between py-3.5 text-left text-[15px] font-semibold text-gray-800 transition hover:text-[#b83b52]"
              >
                <span>Services</span>
                <ChevronDown
                  size={19}
                  className={`transition-transform duration-300 ${
                    mobileServices ? "rotate-180 text-[#b83b52]" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  mobileServices
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mb-3 ml-1 rounded-xl bg-[#fff7f7] p-2">
                    {services.map((service) => (
                      <a
                        key={service.path}
                        href={service.path}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-white hover:text-[#b83b52]"
                      >
                        <span>{service.name}</span>
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-gray-400"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {links.slice(2).map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-gray-100 py-3.5 text-[15px] font-semibold text-gray-800 transition hover:text-[#b83b52]"
              >
                {link.name}
                <ArrowUpRight size={16} className="text-gray-400" />
              </a>
            ))}
          </nav>

          {/* Mobile Contact Card */}
          <div className="mt-5 rounded-2xl border border-[#f4dfe2] bg-gradient-to-br from-[#fff6f6] to-white p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#b83b52]">
              Get in Touch
            </p>

            <a
              href="tel:+919860463030"
              className="flex items-center gap-3 rounded-xl py-2 text-gray-800 transition hover:text-[#b83b52]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#b83b52] shadow-sm">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-xs text-gray-500">Call Us</span>
                <span className="font-bold">+91 98604 63030</span>
              </span>
            </a>

            <div className="mt-2 flex items-start gap-3 py-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#b83b52] shadow-sm">
                <MapPin size={18} />
              </span>
              <span className="pt-0.5">
                <span className="block text-xs text-gray-500">Visit Us</span>
                <span className="mt-1 block text-sm leading-relaxed text-gray-700">
                  2nd Floor, Koul Building No. 1, Next to Tata Showroom,
                  Opp. Kumar Pacific Mall, Swargate, Pune - 411042
                </span>
              </span>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Velocity Academy
          </p>
        </div>
      </div>
    </header>
  );
}