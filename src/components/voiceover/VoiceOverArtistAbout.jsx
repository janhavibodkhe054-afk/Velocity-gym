import React from "react";
import {
  Mic2,
  AudioLines,
  Headphones,
  MessageCircle,
  Radio,
  Video,
  BookOpen,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function VoiceOverArtistAbout() {
  const skills = [
    {
      icon: AudioLines,
      title: "Voice Modulation",
      description:
        "Learn to control pitch, tone, pace and expressions to make your voice engaging.",
    },
    {
      icon: Mic2,
      title: "Voice & Diction",
      description:
        "Improve pronunciation, clarity, articulation and confidence while speaking.",
    },
    {
      icon: Headphones,
      title: "Recording Techniques",
      description:
        "Understand microphone handling, studio etiquette and basic recording practices.",
    },
    {
      icon: MessageCircle,
      title: "Script Reading",
      description:
        "Develop the ability to interpret scripts and deliver natural, expressive performances.",
    },
  ];

  const careers = [
    {
      icon: Radio,
      title: "Radio & Podcasting",
    },
    {
      icon: Video,
      title: "Dubbing & Animation",
    },
    {
      icon: AudioLines,
      title: "Advertisements & Promos",
    },
    {
      icon: Headphones,
      title: "Audiobooks & Narration",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf8f6] py-16 sm:py-20 lg:py-24">
      {/* Decorative Background */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#d07f7b]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#d07f7b]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* About Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#d07f7b] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/voice.avif"
                alt="Voice recording and audio production"
                className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[420px] lg:h-[490px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#d07f7b] text-white">
                  <Mic2 size={24} />
                </div>

                <p className="text-xl font-semibold text-white sm:text-2xl">
                  Your Voice. Your Identity.
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Build skills. Express creatively.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 -z-0 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-[#d07f7b] sm:-bottom-6 sm:-right-5 sm:h-32 sm:w-32" />
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d07f7b]/30 bg-white px-4 py-2 text-sm font-semibold text-[#b96662]">
              <AudioLines size={16} />
              VOICE OVER ARTIST COURSE
            </div>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Turn Your Voice Into
              <span className="mt-1 block text-[#c57571]">
                Your Greatest Strength
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              A powerful voice can inform, entertain and inspire. Voice-over
              artistry combines clear speech, expressive delivery and the
              ability to bring words to life.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Explore the fundamentals of voice modulation, diction, script
              reading and recording techniques. Build your communication
              skills and discover how your voice can be used across different
              media platforms.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Voice modulation & expression",
                "Pronunciation & diction",
                "Script interpretation",
                "Microphone techniques",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#c57571]"
                  />
                  <span className="text-sm font-medium text-gray-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d07f7b] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#d07f7b]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#b96662]"
            >
              Enquire About the Course
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>

        {/* Skills Section */}
        <div
          id="voice-course-details"
          className="mt-24 sm:mt-28"
        >
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#bd706c]">
              Skills & Training
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Will You Learn?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Build a strong foundation in the essential skills needed for
              voice-over and audio communication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d07f7b]/40 hover:shadow-xl hover:shadow-[#d07f7b]/10 sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d07f7b]/10 text-[#bd706c] transition-colors duration-300 group-hover:bg-[#d07f7b] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="mt-6 block text-xs font-bold tracking-[2px] text-[#c57571]">
                    0{index + 1} / SKILL
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-gray-900">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mt-20 rounded-3xl bg-[#211d1d] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[3px] text-[#e49a95]">
                Explore Possibilities
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Where Can Your Voice Take You?
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-gray-300">
                Voice-over skills can be applied across entertainment,
                broadcasting, digital content and commercial media. Your
                opportunities will depend on your skills, practice and
                portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {careers.map((career) => {
                const Icon = career.icon;

                return (
                  <div
                    key={career.title}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-[#d07f7b]/60 hover:bg-white/[0.09]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#d07f7b]/20 text-[#e49a95]">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-sm font-semibold leading-6 text-white sm:text-base">
                      {career.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}