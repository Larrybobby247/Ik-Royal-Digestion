// ================================================
// Footer.jsx
// ================================================
import { brandInfo } from "../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Why Us", href: "#why-us" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👑</span>
              <span
                className="text-[#E6A119] font-extrabold text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ik Royal Digestion
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              {brandInfo.footerDescription}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={brandInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-white/10 hover:border-[#E6A119]/50 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                📲
              </a>
              <a
                href={brandInfo.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-white/10 hover:border-[#E6A119]/50 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#E6A119] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${brandInfo.contact.phone.replace(/\s/g, "")}`}
                  className="text-white/40 hover:text-[#E6A119] transition-colors duration-300"
                >
                  📞 {brandInfo.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brandInfo.contact.email}`}
                  className="text-white/40 hover:text-[#E6A119] transition-colors duration-300"
                >
                  ✉️ {brandInfo.contact.email}
                </a>
              </li>
              <li className="text-white/40">
                🕐 {brandInfo.contact.workingDays}
              </li>
              <li className="text-white/40 leading-relaxed">
                📍 {brandInfo.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {currentYear} Ik Royal Digestion. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Crafted with ❤️ in Ibadan, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
