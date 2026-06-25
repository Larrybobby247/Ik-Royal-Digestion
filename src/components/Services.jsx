import { useScrollReveal } from '../hooks/useScrollReveal'

const servicesList = [
  {
    icon: 'fa-house-user',
    title: 'Premium Lodging',
    description: 'Fully air-conditioned luxury rooms equipped with high-speed Wi-Fi, smart TVs, and plush bedding for ultimate comfort.',
  },
  {
    icon: 'fa-utensils',
    title: 'Gourmet Restaurant',
    description: 'An on-site dining experience serving beautifully curated local Nigerian delicacies and continental dishes.',
  },
  {
    icon: 'fa-glass-martini-alt',
    title: 'Exclusive Bar & Lounge',
    description: 'A sophisticated spot to unwind with cold drinks, signature cocktails, and premium spirits.',
  },
  {
    icon: 'fa-swimming-pool',
    title: 'Outdoor Swimming Pool',
    description: 'A clean, sparkling pool area perfect for an afternoon swim, poolside relaxation, or outdoor hosting.',
  },
  {
    icon: 'fa-users',
    title: 'Event & Social Hosting',
    description: 'Serene outdoor layouts and open areas tailored for intimate gatherings, birthdays, and corporate mixers.',
  },
  {
    icon: 'fa-shield-halved',
    title: '24/7 Security',
    description: 'Round-the-clock security monitoring and gated access ensuring your safety and peace of mind throughout your stay.',
  },
]

const Services = () => {
  useScrollReveal()

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            World-Class <span className="text-gradient-gold">Amenities</span>
          </h2>
          <p className="text-ivory/60 mt-4 max-w-2xl mx-auto">
            Every detail is crafted to ensure your stay is nothing short of extraordinary
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={service.title}
              className="service-card tilt-card glass rounded-2xl p-8 group cursor-pointer reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 text-gold text-2xl">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-ivory/60 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
