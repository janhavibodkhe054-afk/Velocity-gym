import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      @keyframes ripple {
        0% {
          transform: scale(1);
          opacity: 0.7;
        }

        50% {
          transform: scale(1.8);
          opacity: 0.2;
        }

        100% {
          transform: scale(2.5);
          opacity: 0;
        }
      }

      @keyframes waterFloat {
        0% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(-8px);
        }

        100% {
          transform: translateY(0px);
        }
      }

      .water-float {
        animation: waterFloat 3s ease-in-out infinite;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* CALL BUTTON */}
      <motion.div
        className="fixed left-5 bottom-8 z-[9999]"
        initial={{
          y: -250,
          rotate: -15,
          opacity: 0,
        }}
        animate={{
          y: 0,
          rotate: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <a
          href="tel:+919860463030"
          className="group relative flex items-center water-float"
        >
          {/* Ripple Layers */}
          <span
            className="absolute inset-0 rounded-full bg-red-500/20"
            style={{
              animation: "ripple 3s linear infinite",
            }}
          />

          <span
            className="absolute inset-0 rounded-full bg-red-500/15"
            style={{
              animation: "ripple 3s linear infinite 1s",
            }}
          />

          <span
            className="absolute inset-0 rounded-full bg-red-500/10"
            style={{
              animation: "ripple 3s linear infinite 2s",
            }}
          />

          {/* Tooltip */}
          <div className="absolute left-20 opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap bg-[#111827] text-white px-4 py-2 rounded-full shadow-2xl">
            Call Us
          </div>

          {/* Button */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-800 shadow-[0_0_35px_rgba(239,68,68,.45)] flex items-center justify-center transition-all duration-500 group-hover:scale-110">
            <Phone size={28} className="text-white" />
          </div>
        </a>
      </motion.div>

      {/* WHATSAPP BUTTON */}
      <motion.div
        className="fixed right-5 bottom-8 z-[9999]"
        initial={{
          y: -250,
          rotate: 15,
          opacity: 0,
        }}
        animate={{
          y: 0,
          rotate: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <a
          href="https://wa.me/919923686402"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-end water-float"
        >
          {/* Ripple Layers */}
          <span
            className="absolute inset-0 rounded-full bg-green-500/20"
            style={{
              animation: "ripple 3s linear infinite",
            }}
          />

          <span
            className="absolute inset-0 rounded-full bg-green-500/15"
            style={{
              animation: "ripple 3s linear infinite 1s",
            }}
          />

          <span
            className="absolute inset-0 rounded-full bg-green-500/10"
            style={{
              animation: "ripple 3s linear infinite 2s",
            }}
          />

          {/* Tooltip */}
          <div className="absolute right-20 opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap bg-[#111827] text-white px-4 py-2 rounded-full shadow-2xl">
            WhatsApp
          </div>

          {/* Button */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 via-green-600 to-green-800 shadow-[0_0_35px_rgba(34,197,94,.45)] flex items-center justify-center transition-all duration-500 group-hover:scale-110">
            <FaWhatsapp size={32} className="text-white" />
          </div>
        </a>
      </motion.div>
    </>
  );
}
