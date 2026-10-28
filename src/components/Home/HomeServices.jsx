
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import {
  Dumbbell,
  Trophy,
  ShieldCheck,
  House,
  Pill,
  Shirt,
  Waves,
  Plane,
  Mic,
  GraduationCap,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Advance Personal Trainer Course",
    image:
      "/gymS3.jpg",
    icon: <GraduationCap size={28} />,
    link: "/trainer",
    description:
      "Build your career in fitness with professional training, practical learning, and expert guidance to become a confident personal trainer.",
  },
  {
    title: "Gym Personal Training",
    image:
      "/gymS6.jpg",
    icon: <Dumbbell size={28} />,
    link: "/gym",
    description:
      "Achieve your fitness goals with customized workout plans, one-on-one coaching, and expert guidance tailored to your lifestyle.",
  },
  {
    title: "Cricket Coaching",
    image:
      "/cr1.jpg",
    icon: <Trophy size={28} />,
    link: "/cricket",
    description:
      "Improve batting, bowling, fielding, and match strategies through structured coaching and professional practice sessions.",
  },
  {
    title: "Umpiring Training",
    image:
      "/u2.jpg",
    icon: <ShieldCheck size={28} />,
    link: "/umpiring",
    description:
      "Learn cricket rules, decision-making, match management, and practical umpiring techniques through structured training.",
  },
  {
    title: "Home Personal Trainer",
    image:
      "h1.jpg",
    icon: <House size={28} />,
    link: "/home-trainer",
    description:
      "Enjoy personalized fitness coaching at home with convenient scheduling and workout plans tailored to your fitness goals.",
  },
  {
    title: "Supplements",
    image:
      "s4.jpg",
    icon: <Pill size={28} />,
    link: "/supplements",
    description:
      "Explore sports nutrition products designed to complement your fitness routine, recovery, and athletic performance.",
  },
  {
    title: "Sports Wear",
    image:
      "/sp2.jpg",
    icon: <Shirt size={28} />,
    link: "/sportswear",
    description:
      "Discover comfortable sportswear designed for flexibility, durability, and confidence during workouts and training sessions.",
  },
  {
    title: "Swimming Training",
    image:
      "sw1.jpg",
    icon: <Waves size={28} />,
    link: "/swimming",
    description:
      "Develop swimming skills, improve technique, and build water confidence through guided training and practice.",
  },
  {
    title: "Airline Career Program",
    image:
      "/aviation3.avif",
    icon: <Plane size={28} />,
    link: "/aviation",
    description:
      "Explore aviation career opportunities with professional learning in airline operations, passenger services, and communication skills.",
  },
  {
    title: "Voice Over Artist",
    image:
      "/voice1.jpg",
    icon: <Mic size={28} />,
    link: "/voice-over-artist",
    description:
      "Develop voice modulation, pronunciation, expression, and recording skills to explore opportunities in voice-over and audio production.",
  },
];

export default function HomeServices() {
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#f8efee] py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-6">
          <p className="text-[#d07f7b] uppercase tracking-[3px] text-sm font-semibold mb-3">
            Explore Our Programs
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Professional Courses & Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">
            Discover professional training programs and services
            designed to help you develop your skills and explore
            new opportunities.
          </p>
        </div>

        {/* Slider Navigation */}
        <div className="flex justify-center items-center gap-4 mb-2">
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous services"
            className="w-11 h-11 rounded-full bg-[#1d1d1d] text-white flex items-center justify-center transition duration-300 hover:bg-[#d07f7b]"
          >
            ←
          </button>

          <button
            ref={nextRef}
            type="button"
            aria-label="Next services"
            className="w-11 h-11 rounded-full bg-[#1d1d1d] text-white flex items-center justify-center transition duration-300 hover:bg-[#d07f7b]"
          >
            →
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="!pb-8"
        >
          {services.map((service) => (
            <SwiperSlide key={service.link} className="!h-auto py-8">
              <div
                role="link"
                tabIndex={0}
                onClick={() => navigate(service.link)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    navigate(service.link);
                  }
                }}
                className="group relative overflow-hidden rounded-[28px] cursor-pointer h-[420px] shadow-[0_15px_45px_rgba(0,0,0,0.15)]"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                {/* Icon */}
                <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition duration-500 group-hover:bg-[#d07f7b] group-hover:rotate-6">
                  {service.icon}
                </div>

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <div className="w-14 h-[3px] bg-[#d07f7b] rounded-full mb-4 transition-all duration-500 group-hover:w-24" />

                  <h3 className="text-2xl sm:text-[26px] text-white font-bold leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-white/90 mt-3 leading-6 text-sm">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3 text-white font-medium group-hover:text-[#e5a08b] transition-colors">
                    Explore Service
                    <span className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 group-hover:bg-[#d07f7b] group-hover:border-[#d07f7b] group-hover:text-white group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
