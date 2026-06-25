import { useScrollReveal } from '../hooks/useScrollReveal'

const amenitiesList = [
  { icon: 'fa-wifi', title: 'Free Wi-Fi', desc: 'High-speed internet' },
  { icon: 'fa-swimming-pool', title: 'Swimming Pool', desc: 'Outdoor pool area' },
  { icon: 'fa-dumbbell', title: 'Fitness Center', desc: 'Modern equipment' },
  { icon: 'fa-utensils', title: 'Restaurant & Bar', desc: 'Fine dining' },
  { icon: 'fa-users', title: 'Event Hall', desc: 'Social gatherings' },
  { icon: 'fa-concierge-bell', title: '24/7 Concierge', desc: 'Always available' },
  { icon: 'fa-tshirt', title: 'Laundry Service', desc: 'Same-day service' },
  { icon: 'fa-car', title: 'Secure Parking', desc: 'Gated & monitored' },
]

const Amenities = () => {
  useScrollReveal()

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Amenities</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Everything You <span className="text-gradient-gold">Need</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenitiesList.map((amenity, index) => (
            <div
              key={amenity.title}
              className="glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-all reveal"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className={`fas ${amenity.icon} text-gold text-xl`}></i>
              </div>
              <h4 className="font-display font-semibold text-sm">{amenity.title}</h4>
              <p className="text-ivory/50 text-xs mt-1">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
