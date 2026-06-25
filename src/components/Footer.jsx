import { toast } from "react-hot-toast";

import Logo from "../assets/logo.png";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
    e.target.reset();
  };

  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12  group-hover:scale-110 transition-transform">
                <img src={Logo} alt="GbogboAyé Logo" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-semibold text-ivory tracking-wide">
                  GbogboAyé
                </h1>
                <p className="text-xs text-emerald-light font-body tracking-widest uppercase">
                  Exclusive Rooms
                </p>
              </div>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed">
              Redefining serenity and premium hospitality within Ilesa, Osun
              State. Experience luxury beyond expectations.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Suites
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Premium Lodging
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Gourmet Restaurant
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Bar & Lounge
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Swimming Pool
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-ivory/60 hover:text-gold text-sm transition-colors"
                >
                  Event Hosting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Newsletter</h4>
            <p className="text-ivory/60 text-sm mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 luxury-input px-4 py-2 text-sm"
              />
              <button
                type="submit"
                className="btn-primary px-4 py-2 rounded-xl text-sm font-bold text-white"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-sm">
            &copy; 2026 GbogboAyé Exclusive Rooms. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-ivory/40 hover:text-gold text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-ivory/40 hover:text-gold text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
