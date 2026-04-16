// ================================================
// Menu.jsx
// ================================================
import { useState } from "react";
import { products, brandInfo } from "../data/data";

// Placeholder colors per product (replace with actual imported images)
const placeholderColors = {
  Product1: ["#8B2500", "#FF6B35"],  // Jollof red-orange
  Product2: ["#5C3A1E", "#D4A574"],  // combo brown
  Product3: ["#1A4A2E", "#2D8A5E"],  // seafood green
  Product4: ["#7A1C1C", "#C0392B"],  // luxury red
  Product5: ["#1C3A5E", "#2E6DA4"],  // executive blue
  Product6: ["#6B0F0F", "#E53E3E"],  // peppered red
  Product7: ["#4A2C0A", "#8B5E1A"],  // native rice brown
  Product8: ["#3D1A0A", "#8B3A1A"],  // egusi deep
};

const foodEmojis = {
  Product1: "🍛",
  Product2: "🍱",
  Product3: "🦞",
  Product4: "🎁",
  Product5: "📦",
  Product6: "🍗",
  Product7: "🍚",
  Product8: "🥘",
};

const categories = ["All", "Bulk", "Lunch", "Soups", "Proteins", "Gifts"];

const ProductCard = ({ product }) => {
  const colors = placeholderColors[product.imagePlaceholder] || ["#2A2A2A", "#444"];
  const emoji = foodEmojis[product.imagePlaceholder] || "🍽️";

  return (
    <div className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E6A119]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/20">
      {/* Image area (placeholder) — replace div with <img src={product.image} /> */}
      <div
        className="relative h-48 overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
        }}
      >
        <img src={product.imagePlaceholder} className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500" />

        {/* Top arrival badge */}
        {product.arrival === "top" && (
          <span className="absolute top-3 left-3 bg-[#E6A119] text-[#1A1A1A] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest">
            👑 Best Seller
          </span>
        )}

        {/* Category tag */}
        <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white/80 text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10">
          {product.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <h3
          className="text-white font-bold text-base mb-1.5 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {product.name}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        <a
          href={brandInfo.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#E6A119] hover:text-[#FFD700] text-sm font-semibold transition-colors duration-300 group/btn"
        >
          <span>Order Now</span>
          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="menu" className="bg-[#0F0F0F] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#E6A119] text-xs font-bold tracking-widest uppercase mb-3">
            ✦ What We Serve ✦
          </span>
          <h2
            className="text-white text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Royal{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #E6A119, #FFD700)",
              }}
            >
              Menu
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#E6A119] opacity-60" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#E6A119] text-[#1A1A1A] shadow-lg shadow-amber-500/20"
                  : "bg-[#1A1A1A] text-white/50 border border-white/10 hover:border-[#E6A119]/40 hover:text-[#E6A119]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-white/40 text-sm mb-4">
            Want a custom order or catering for events?
          </p>
          <a
            href={brandInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-[#E6A119]/60 hover:bg-[#E6A119] text-[#E6A119] hover:text-[#1A1A1A] font-bold px-8 py-3 rounded-full transition-all duration-300"
          >
            Chat with Us on WhatsApp 📲
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
