import { useScrollReveal } from '../hooks/useScrollReveal'

const offersList = [
  { icon: 'fa-calendar-weekend', title: 'Weekend Getaway', desc: 'Special rates for weekend stays with complimentary breakfast', discount: '15% OFF' },
  { icon: 'fa-heart', title: 'Honeymoon Package', desc: 'Romantic setup with champagne, flowers, and private dinner', discount: '20% OFF' },
  { icon: 'fa-briefcase', title: 'Corporate Rate', desc: 'Special business rates with meeting room access', discount: '10% OFF' },
  { icon: 'fa-calendar-alt', title: 'Long Stay', desc: 'Weekly and monthly rates with full kitchen access', discount: '25% OFF' },
]

const Offers = () => {
  useScrollReveal()

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Special Offers</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Exclusive <span className="text-gradient-gold">Packages</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offersList.map((offer, index) => (
            <div
              key={offer.title}
              className="offer-card glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-all reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className={`fas ${offer.icon} text-gold text-2xl`}></i>
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">{offer.title}</h4>
              <p className="text-ivory/60 text-sm mb-4">{offer.desc}</p>
              <span className="text-gold font-display font-bold text-xl">{offer.discount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
