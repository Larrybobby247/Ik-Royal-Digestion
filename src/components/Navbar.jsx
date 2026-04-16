// ================================================
// Navbar.jsx
// ================================================
import { useState, useEffect } from "react";
import { brandInfo } from "../data/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Why Us", href: "#why-us" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          aria-label="Ik Royal Digestion Home"
        >
          <span className="text-2xl">👑</span>
          <span
            className="font-extrabold text-lg leading-tight tracking-wide text-[#E6A119] group-hover:text-[#FFD700] transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ik Royal<br />
            <span className="text-white text-sm font-normal tracking-widest uppercase">
              Digestion
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/70 hover:text-[#E6A119] text-sm font-medium tracking-wider uppercase transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#E6A119] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={brandInfo.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#E6A119] hover:bg-[#FFD700] text-[#1A1A1A] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-900/30"
        >
          <span>Order Now</span>
          <span className="text-base">🛒</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#E6A119] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#E6A119] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#E6A119] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1A1A1A]/98 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-[#E6A119] text-sm tracking-widest uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={brandInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E6A119] text-[#1A1A1A] font-bold text-sm px-6 py-2.5 rounded-full mt-2"
            >
              Order on WhatsApp 🛒
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
