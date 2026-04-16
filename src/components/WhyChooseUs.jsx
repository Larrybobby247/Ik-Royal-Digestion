// ================================================
// WhyChooseUs.jsx
// ================================================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whyChooseUs } from "../data/data";

// Icon map — replace with FontAwesome icons once installed
// const iconMap = {
//   faCrown: "👑",
//   faBoxOpen: "📦",
//   faUtensils: "🍽️",
//   faTruckFast: "🚚",
// };

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-[#111111] py-24 px-4 sm:px-6">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#E6A119] text-xs font-bold tracking-widest uppercase mb-3">
            ✦ Our Promise ✦
          </span>
          <h2
            className="text-white text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #E6A119, #FFD700)",
              }}
            >
              Royal?
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#E6A119] opacity-60" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#1A1A1A] border border-white/5 hover:border-[#E6A119]/40 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}, transparent 70%)` }}
              />

              {/* Icon circle */}
              <div
                className="relative mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}
              >
                <FontAwesomeIcon icon = {item.iconName}/>
              </div>

              <h3
                className="text-white font-bold text-lg mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px transition-all duration-500"
                style={{ background: item.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
