import {
  Shirt,
  Footprints,
  ShoppingBag,
  ShieldCheck,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function SportsWearSection() {
  const sportsWear = [
    {
      icon: <Shirt size={60} strokeWidth={1.5} />,
      title: "Gym Wear",
      desc: "Premium quality gym apparel designed for maximum comfort, flexibility, and performance during every workout session.",
    },
    {
      icon: <Footprints size={60} strokeWidth={1.5} />,
      title: "Sports Shoes",
      desc: "High-performance training and running shoes that provide excellent grip, stability, and long-lasting comfort.",
    },
    {
      icon: <ShoppingBag size={60} strokeWidth={1.5} />,
      title: "Sports Accessories",
      desc: "Explore gym gloves, shaker bottles, gym bags, wrist supports, lifting belts, and other fitness essentials.",
    },
    {
      icon: <ShieldCheck size={60} strokeWidth={1.5} />,
      title: "Protective Gear",
      desc: "Professional-quality safety gear including knee supports, elbow guards, wrist wraps, and compression accessories.",
    },
    {
      icon: <Trophy size={60} strokeWidth={1.5} />,
      title: "Cricket Wear",
      desc: "Complete range of cricket jerseys, trousers, caps, practice kits, and professional cricket accessories.",
    },
    {
      icon: <Sparkles size={60} strokeWidth={1.5} />,
      title: "Premium Collection",
      desc: "Stylish and durable sportswear collections from trusted brands for athletes, gym members, and fitness enthusiasts.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-[#d07f7b] text-lg font-semibold">
            Sports Wear
          </p>

          <h2 className="text-4xl lg:text-4xl font-bold uppercase mt-3">
            Premium Sports Wear Collection
          </h2>

        </div>

        {/* Sports Wear */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {sportsWear.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-28 h-28 mx-auto rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-[#d07f7b] group-hover:text-white group-hover:shadow-xl">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}