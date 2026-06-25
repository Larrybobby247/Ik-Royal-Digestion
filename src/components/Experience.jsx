import { useScrollReveal, useCounterAnimation } from '../hooks/useScrollReveal'

import Img1 from '../assets/img1.jpg'

const Experience = () => {
  useScrollReveal()
  useCounterAnimation()

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={Img1} alt="Hotel Experience" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-midnight/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="reveal">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">The Experience</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Where Every <span className="text-gradient-gold">Moment</span> Becomes a Memory
              </h2>
            </div>

            <p className="text-ivory/70 text-lg leading-relaxed reveal" style={{ transitionDelay: '0.1s' }}>
              From the moment you step through our doors, you'll be enveloped in an atmosphere of refined elegance and warm hospitality. Our dedicated team ensures every aspect of your stay exceeds expectations.
            </p>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <a href="#gallery" className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-gold">
                <i className="fas fa-play-circle"></i>View Our Gallery
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8 text-center reveal-scale" style={{ transitionDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                <span className="counter-value" data-target="5000">0</span>+
              </div>
              <p className="text-ivory/60 text-sm">Happy Guests</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center reveal-scale" style={{ transitionDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                <span className="counter-value" data-target="4.9" data-decimal="1">0</span>
              </div>
              <p className="text-ivory/60 text-sm">Guest Rating</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center reveal-scale" style={{ transitionDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                <span className="counter-value" data-target="150">0</span>+
              </div>
              <p className="text-ivory/60 text-sm">Luxury Rooms</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center reveal-scale" style={{ transitionDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">24/7</div>
              <p className="text-ivory/60 text-sm">Room Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
