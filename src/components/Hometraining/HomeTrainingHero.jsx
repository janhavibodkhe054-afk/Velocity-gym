import React from "react";

export default function HomeTrainingHero() {
  return (
    <section
      className="
        relative

        h-[280px]
        sm:h-[350px]
        md:h-[420px]
        lg:h-[450px]

        bg-fixed
        bg-center
        bg-cover

        flex
        items-center
        justify-center

        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/05/e8/7e/05e87e0b7e2aeab10c9cc33bde7572d0.jpg')",
      }}
    >
      {/* Dark Overlay */}

      <div
        className="
        absolute
        inset-0

        bg-black/50
        "
      ></div>

      {/* Content */}

      <div
        className="
        relative
        z-10

        text-center

        px-4
        sm:px-6

        max-w-5xl
        "
      >
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
          Home Personal Training
        </h1>

        {/* Breadcrumb */}

        <div
          className="
          mt-5
          sm:mt-8

          flex
          justify-center
          items-center

          gap-2
          sm:gap-4

          uppercase

          tracking-[3px]
          sm:tracking-[6px]

          text-xs
          sm:text-sm
          md:text-base
          "
        >
          <span
            className="
            text-[#d07f7b]

            font-semibold
            "
          >
            Home
          </span>

          <span
            className="
            text-white

            text-lg
            sm:text-xl
            "
          >
            /
          </span>

          <span
            className="
            text-white

            font-semibold
            "
          >
            Services
          </span>
        </div>
      </div>
    </section>
  );
}
