import { useScrollReveal } from '../hooks/useScrollReveal'

import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img6.jpg'
import Img3 from '../assets/img7.jpg'
import Img4 from '../assets/img5.jpg'

const About = () => {
  useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl reveal-left">
                  <img src={Img1} alt="Hotel Exterior" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl reveal-left" style={{ transitionDelay: '0.2s' }}>
                  <img src={Img2} alt="Hotel Interior" className="w-full h-40 object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl reveal-right">
                  <img src={Img3} alt="Pool Area" className="w-full h-40 object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl reveal-right" style={{ transitionDelay: '0.2s' }}>
                  <img src={Img4} alt="Restaurant" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-gold rounded-2xl p-6 shadow-2xl animate-float-slow">
              <div className="text-4xl font-display font-bold text-gold">5+</div>
              <div className="text-sm text-ivory/70">Years of Excellence</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="reveal">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Redefining <span className="text-gradient-gold">Serenity</span> & Premium Hospitality
              </h2>
            </div>

            <p className="text-ivory/70 text-lg leading-relaxed reveal" style={{ transitionDelay: '0.1s' }}>
              GbogboAyé Exclusive Rooms is a top-tier hospitality destination in Ilesa, Osun State, offering a tranquil environment for travelers, vacationers, and corporate clients. Located directly opposite the Oke Opo Health Center, our location provides easy city access while maintaining a quiet, relaxing atmosphere.
            </p>

            <p className="text-ivory/60 leading-relaxed reveal" style={{ transitionDelay: '0.15s' }}>
              We bridge the gap between affordability and luxury. Our mission is to deliver an exceptionally peaceful lodging experience through top-notch amenities, attentive customer service, and absolute privacy.
            </p>

            <div className="grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <i className="fas fa-leaf text-gold text-sm"></i>
                </div>
                <span className="text-sm font-medium">Serene Environment</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <i className="fas fa-shield-alt text-gold text-sm"></i>
                </div>
                <span className="text-sm font-medium">Uncompromised Safety</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <i className="fas fa-concierge-bell text-gold text-sm"></i>
                </div>
                <span className="text-sm font-medium">Excellent Hospitality</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <i className="fas fa-gem text-gold text-sm"></i>
                </div>
                <span className="text-sm font-medium">Premium Comfort</span>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.25s' }}>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white shadow-lg">
                <i className="fas fa-phone-alt"></i>Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
