// ================================================
// Hero.jsx
// ================================================
import { brandInfo } from "../data/data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]"
    >
      {/* Animated radial gold glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, #E6A119 0%, #FFD700 20%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#E6A119 1px, transparent 1px), linear-gradient(90deg, #E6A119 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating crown ornaments */}
      <span className="absolute top-24 left-10 text-5xl opacity-10 animate-bounce" style={{ animationDuration: "3s" }}>
        👑
      </span>
      <span className="absolute bottom-32 right-10 text-4xl opacity-10 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
        ✨
      </span>
      <span className="absolute top-40 right-20 text-3xl opacity-10 animate-bounce" style={{ animationDuration: "5s", animationDelay: "0.5s" }}>
        🍽️
      </span>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E6A119]/15 border border-[#E6A119]/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="text-[#FFD700] text-xs font-bold tracking-widest uppercase">
            👑 Ibadan's Finest
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-extrabold leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 7vw, 5rem)",
          }}
        >
          Experience Food{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #E6A119, #FFD700, #E6A119)",
            }}
          >
            Fit for Royalty
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {brandInfo.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={brandInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#E6A119] hover:bg-[#FFD700] text-[#1A1A1A] font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-amber-500/30 overflow-hidden"
          >
            <span className="relative z-10">Order on WhatsApp</span>
            <span className="relative z-10 text-xl">📲</span>
            <span className="absolute inset-0 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
          </a>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 border border-[#E6A119]/50 hover:border-[#E6A119] text-[#E6A119] hover:text-[#FFD700] font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#E6A119]/10"
          >
            View Menu
            <span>↓</span>
          </a>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "20+", label: "Signature Dishes" },
            { value: "100%", label: "Homemade Quality" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl md:text-4xl font-extrabold text-[#E6A119]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-white/50 text-xs md:text-sm tracking-wider uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
