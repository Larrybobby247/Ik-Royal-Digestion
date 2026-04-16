// ================================================
// Contact.jsx
// ================================================
import { brandInfo } from "../data/data";

// Icon replacement map (swap with FontAwesome once installed)
const contactDetails = [
  {
    icon: "📞",
    label: "Phone",
    value: brandInfo.contact.phone,
    href: `tel:${brandInfo.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: "✉️",
    label: "Email",
    value: brandInfo.contact.email,
    href: `mailto:${brandInfo.contact.email}`,
  },
  {
    icon: "🕐",
    label: "Hours",
    value: brandInfo.contact.workingDays,
    href: null,
  },
  {
    icon: "📍",
    label: "Location",
    value: brandInfo.contact.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(brandInfo.contact.address)}`,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0F0F0F] py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Decorative gold blob */}
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E6A119, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — Info */}
          <div>
            <span className="inline-block text-[#E6A119] text-xs font-bold tracking-widest uppercase mb-3">
              ✦ Get in Touch ✦
            </span>
            <h2
              className="text-white text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Royal{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #E6A119, #FFD700)" }}
              >
                Feast
              </span>{" "}
              Awaits
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              {brandInfo.contactDescription}
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#E6A119]/10 border border-[#E6A119]/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#E6A119]/20 transition-colors duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-white text-sm hover:text-[#E6A119] transition-colors duration-300"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-10">
              <a
                href={brandInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span>📲</span> WhatsApp
              </a>
              <a
                href={brandInfo.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span>📷</span> Instagram
              </a>
            </div>
          </div>

          {/* Right — Order Card */}
          <div className="bg-[#1A1A1A] border border-[#E6A119]/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, #E6A119, transparent 70%)",
              }}
            />

            <div className="text-center mb-8">
              <span className="text-5xl">👑</span>
              <h3
                className="text-white text-2xl font-extrabold mt-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Place Your Royal Order
              </h3>
              <p className="text-white/40 text-sm mt-2">
                Fast, fresh, and delivered to your door
              </p>
            </div>

            <div className="space-y-4">
              {[
                { emoji: "🍛", text: "Bulk Orders — Party & Events" },
                { emoji: "🎁", text: "Gift Trays — Birthdays & Anniversaries" },
                { emoji: "🍱", text: "Daily Lunch — Office & Home" },
                { emoji: "🦞", text: "Premium Soups & Proteins" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 bg-[#111111] border border-white/5 rounded-xl px-4 py-3"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-white/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href={brandInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-[#E6A119] hover:bg-[#FFD700] text-[#1A1A1A] font-extrabold text-base py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              Chat & Order Now 📲
            </a>

            <p className="text-center text-white/25 text-xs mt-4">
              We reply within minutes on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
