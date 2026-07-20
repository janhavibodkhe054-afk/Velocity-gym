import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import {
  Dumbbell,
  Trophy,
  ShieldCheck,
  House,
  Pill,
  Shirt,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Gym Personal Trainer",
    image:
      "https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    icon: <Dumbbell size={28} />,
    link: "/gym",
  },
  {
    title: "Cricket Coaching",
    image:
      "https://www.zapcricket.com/cdn/shop/articles/WhatsApp_Image_2023-06-24_at_05.54.40_1.webp?v=1724706714&width=1600",
    icon: <Trophy size={28} />,
    link: "/cricket",
  },
  {
    title: "Umpiring Training",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRs767dyG1mOx9XlZJSDQlImV8XgEEfkjwVTTQK5eFqIUJ7A9AJ1lJUXm7&s=10",
    icon: <ShieldCheck size={28} />,
    link: "/umpiring",
  },
  {
    title: "Home Service",
    image:
      "https://www.homefitness.com.sg/image/catalog/products/Horizon%20Fitness/t202/service%203.jpeg",
    icon: <House size={28} />,
    link: "/home-trainer",
  },
  {
    title: "Supplements",
    image:
      "https://www.physique-fit.co.uk/wp-content/uploads/2024/01/900-supplements.jpg",
    icon: <Pill size={28} />,
    link: "/supplements",
  },
  {
    title: "Sports Wear",
    image:
      "https://img5.grofrom.com/www.ruidesenapparel.com/uploads/fitness-1.jpg",
    icon: <Shirt size={28} />,
    link: "/sportswear",
  },
];

export default function HomeServices() {
  const navigate = useNavigate();

  const prevRef = useRef(null);
const nextRef = useRef(null);

  return (
    <>
      <section className="bg-[#f8efee] py-16 overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-5">
          {/* Heading */}

          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl lg:text-4xl
                font-bold
                text-gray-900
                leading-tight"
            >
              Premium Fitness Services Designed For Every Athlete
            </h2>
          </div>

          <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={"auto"}
  spaceBetween={35}
  loop={true}
  speed={900}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
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
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }}
>
    <div className="flex justify-center items-center gap-5 mt-10">

  <button
    ref={prevRef}
    className="w-12 h-12 rounded-full bg-[#1d1d1d] text-white flex items-center justify-center transition duration-300 hover:bg-[#d07f7b]"
  >
    ←
  </button>

  <button
    ref={nextRef}
    className="w-12 h-12 rounded-full bg-[#1d1d1d] text-white flex items-center justify-center transition duration-300 hover:bg-[#d07f7b]"
  >
    →
  </button>

</div>
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="!w-full sm:!w-[330px] lg:!w-[360px] py-10"
              >
                <div
                  onClick={() => navigate(service.link)}
                  className="group relative overflow-hidden rounded-[30px] cursor-pointer h-[400px] shadow-[0_15px_45px_rgba(0,0,0,0.15)]"
                >
                  {/* Image */}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>

                  {/* Floating Icon */}

                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition duration-500 group-hover:bg-[#d07f7b] group-hover:rotate-12">
                    {service.icon}
                  </div>

                  {/* Bottom */}

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-16 h-[3px] bg-[#d07f7b] rounded-full mb-5 transition-all duration-500 group-hover:w-32"></div>

                    <h3 className="text-3xl text-white font-serif leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-white/70 mt-4 leading-7">
                      Professional training with certified experts, personalized
                      programs and premium support.
                    </p>

                    <button className="mt-8 flex items-center gap-3 text-white font-medium tracking-wide group-hover:text-[#d07f7b] transition">
                      Explore Service
                      <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#d07f7b] group-hover:border-[#d07f7b] group-hover:text-black transition">
                        →
                      </div>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <style>{`
        .swiper-button-prev {
  left: -5px;
}

.swiper-button-next {
  right: -5px;
}

        


      

        .swiper-pagination-bullet{
          background:#999;
          opacity:1;
        }

        .swiper-pagination-bullet-active{
          background:#d07f7b;
          width:24px;
          border-radius:20px;
        }

        @media(max-width:640px){
          .swiper-button-next,
          .swiper-button-prev{
            display:none;
          }
        }
      `}</style>
    </>
  );
}
