// ================================================
// Testimonials.jsx
// ================================================
import { testimonials } from "../data/data";

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`text-base ${star <= rating ? "text-[#E6A119]" : "text-white/15"}`}
      >
        ★
      </span>
    ))}
  </div>
);

const avatarColors = ["#E6A119", "#FFD700", "#C0392B", "#2980B9"];

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-[#1A1A1A] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFD700, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E6A119] text-xs font-bold tracking-widest uppercase mb-3">
            ✦ Royal Reviews ✦
          </span>
          <h2
            className="text-white text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #E6A119, #FFD700)" }}
            >
              Royals
            </span>{" "}
            Say
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#E6A119] opacity-60" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="group bg-[#111111] border border-white/5 hover:border-[#E6A119]/30 rounded-2xl p-6 flex flex-col justify-between gap-5 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote mark */}
              <div>
                <span
                  className="text-5xl leading-none text-[#E6A119]/20 font-serif"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </span>
                <p className="text-white/65 text-sm leading-relaxed -mt-2">
                  {t.comment}
                </p>
              </div>

              {/* Footer */}
              <div>
                <StarRating rating={t.rating} />
                <div className="flex items-center gap-3 mt-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[#1A1A1A] font-extrabold text-xs flex-shrink-0"
                    style={{ background: avatarColors[index % avatarColors.length] }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-[#E6A119]/60 text-xs">{t.product}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating bar */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-[#111111] border border-[#E6A119]/20 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <span key={s} className="text-[#E6A119] text-lg">★</span>
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-white/40 text-sm">from 100+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
