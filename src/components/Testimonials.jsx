import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonialsList = [
  {
    name: 'Oluwaseun A.',
    role: 'Leisure Traveler',
    initials: 'OA',
    text: 'GbogboAyé is a hidden gem in Ilesa. The environment is extremely quiet, serene, and perfect for getting away from city noise.',
  },
  {
    name: 'Chief Adebayo',
    role: 'Return Guest',
    initials: 'CA',
    text: 'The outdoor swimming pool and clean water standards impressed me. Highly secure gate monitoring gives me absolute peace of mind.',
  },
  {
    name: 'Blessing N.',
    role: 'Weekend Staycationer',
    initials: 'BN',
    text: 'Clean bedsheets, cold air conditioning, and delicious point-and-kill fish at the bar. Will definitely book again!',
  },
  {
    name: 'Engr. Taiwo',
    role: 'Business Consultant',
    initials: 'ET',
    text: 'Perfect location directly opposite the Health Center. The room service staff are professional and the Wi-Fi speed was steady for my remote work.',
  },
]

const Testimonials = () => {
  useScrollReveal()

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold/[0.02] via-transparent to-gold/[0.02]"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">What Our <span className="text-gradient-gold">Guests</span> Say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsList.map((t, index) => (
            <div
              key={t.name}
              className="testimonial-card glass rounded-2xl p-6 relative reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex text-gold text-xs mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-ivory/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-midnight font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-ivory/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
