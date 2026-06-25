import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

import Img1 from '../assets/room1.jpg'
import Img2 from '../assets/room2.jpg'
import Img3 from '../assets/room3.jpg'

const roomsList = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    subtitle: 'Luxury Deluxe Room',
    price: '₦34,000',
    badge: 'Premium',
    image: Img1,
    features: [
      { icon: 'fa-bed', label: 'King Bed' },
      { icon: 'fa-balcony', label: 'Balcony' },
      { icon: 'fa-coffee', label: 'Breakfast' },
    ],
  },
  {
    id: 'Executive',
    name: 'Executive Deluxe Room',
    subtitle: 'Executive Comfort Deluxe Room',
    price: '₦36,500',
    badge: 'Popular',
    image: Img2,
    features: [
      { icon: 'fa-bed', label: 'Double Bed' },
      { icon: 'fa-laptop', label: 'Work Station' },
      { icon: 'fa-tv', label: 'Smart TV' },
    ],
  },
  {
    id: 'oasis',
    name: 'VIP Room',
    subtitle: 'Luxerious VIP Standard Room',
    price: '₦50,000',
    badge: 'Value',
    image: Img3,
    features: [
      { icon: 'fa-bed', label: 'Queen Bed' },
      { icon: 'fa-snowflake', label: 'A/C' },
      { icon: 'fa-shower', label: 'En-suite' },
    ],
  },
]

const Rooms = () => {
  useScrollReveal()

  return (
    <section id="rooms" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Accommodations</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Luxury <span className="text-gradient-gold">Suites</span> & Rooms
          </h2>
          <p className="text-ivory/60 mt-4 max-w-2xl mx-auto">
            Each space is thoughtfully designed to provide the perfect blend of comfort, elegance, and modern amenities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomsList.map((room, index) => (
            <div
              key={room.id}
              className="room-card glass rounded-2xl overflow-hidden group reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={room.image} alt={room.name} className="room-image w-full h-full object-cover" />
                <div className="absolute top-4 right-4 glass-gold px-3 py-1 rounded-full">
                  <span className="text-gold text-xs font-bold">{room.badge}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-1">{room.name}</h3>
                <p className="text-ivory/50 text-sm mb-4">{room.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <span key={feature.label} className="text-xs bg-white/5 px-2 py-1 rounded-md text-ivory/60">
                      <i className={`fas ${feature.icon} mr-1`}></i>{feature.label}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-display font-bold text-gold">{room.price}</span>
                    <span className="text-ivory/50 text-sm">/night</span>
                  </div>
                  <Link
                    to={`/booking?roomType=${room.id}`}
                    className="btn-primary px-4 py-2 rounded-full text-xs font-bold text-white"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
