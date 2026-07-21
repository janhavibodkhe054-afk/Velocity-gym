import React from "react";

export default function SwimmingHero() {
  return (
    <section
      className="
        relative 
        h-[320px]
        sm:h-[380px]
        md:h-[450px]
        bg-center 
        bg-cover 
        bg-fixed
        flex 
        items-center 
        justify-center
      "
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/98/3d/06/983d06ae17aaff2af55bfcaae7a8b3c4.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8">

        <h1
          className="
            text-white
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-serif
            font-semibold
            leading-tight
          "
        >
          Swimming Training
        </h1>


        {/* Breadcrumb */}
        <div
          className="
            mt-5
            sm:mt-7
            flex
            justify-center
            items-center
            gap-3
            sm:gap-4
            uppercase
            tracking-[3px]
            sm:tracking-[6px]
            text-xs
            sm:text-sm
            md:text-base
          "
        >

          <span className="text-[#d07f7b] font-semibold">
            Home
          </span>


          <span className="text-white text-lg sm:text-xl">
            /
          </span>


          <span className="text-white font-semibold">
            Services
          </span>

        </div>

      </div>

    </section>
  );
}