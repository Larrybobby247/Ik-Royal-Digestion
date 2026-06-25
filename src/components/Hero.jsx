import { useParticles } from '../hooks/useParticles'

import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'

const Hero = () => {
  const canvasRef = useParticles()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.08),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(18,107,64,0.1),_transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"></canvas>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gold/5 animate-float-slow hidden lg:block"></div>
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-emerald/5 animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-gold/10 animate-float-reverse hidden lg:block"></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-gold text-xs font-semibold tracking-widest uppercase reveal">
              <i className="fas fa-crown text-gold"></i>Premium Hospitality in Ilesa
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight reveal" style={{ transitionDelay: '0.1s' }}>
              Discover <span className="text-gradient-gold">Serene</span> &<br />Cozy <span className="text-gradient-gold">Luxury</span>
            </h1>

            <p className="text-lg md:text-xl text-ivory/70 font-body leading-relaxed max-w-xl mx-auto lg:mx-0 reveal" style={{ transitionDelay: '0.2s' }}>
              Experience premium hospitality where absolute comfort meets local charm. Enjoy our refreshing outdoor pool, elite restaurant, and fully secure, smoke-free suites in the heart of Ilesa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal" style={{ transitionDelay: '0.3s' }}>
              <a href="#rooms" className="btn-primary px-8 py-4 rounded-full text-sm font-bold text-white shadow-xl flex items-center justify-center gap-2">
                <i className="fas fa-calendar-check"></i>Reserve a Room
              </a>
              <a href="#gallery" className="btn-outline px-8 py-4 rounded-full text-sm font-bold text-gold flex items-center justify-center gap-2">
                <i className="fas fa-images"></i>Explore Gallery
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-gold">4.9</div>
                <div className="text-xs text-ivory/50">Guest Rating</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-gold">24/7</div>
                <div className="text-xs text-ivory/50">Service</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-gold">5★</div>
                <div className="text-xs text-ivory/50">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Scene */}
          <div className="relative perspective-container hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-emerald/10 rounded-3xl blur-3xl transform scale-90"></div>

              <div className="absolute -top-8 -right-8 w-48 h-64 rounded-2xl glass overflow-hidden animate-float shadow-2xl z-20">
                <img src={Img1} alt="Luxury Hotel" className="w-full h-full object-cover opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 glass-dark">
                  <p className="text-xs text-gold font-semibold">Premium Suite</p>
                  <p className="text-sm font-display">Royal Experience</p>
                </div>
              </div>

              <div className="absolute top-1/4 -left-12 w-40 h-52 rounded-2xl glass overflow-hidden animate-float-reverse shadow-2xl z-10">
                <img src={Img2} alt="Pool" className="w-full h-full object-cover opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-3 glass-dark">
                  <p className="text-xs text-gold font-semibold">Outdoor Pool</p>
                </div>
              </div>

              <div className="absolute -bottom-4 right-12 w-44 h-56 rounded-2xl glass overflow-hidden animate-float-slow shadow-2xl z-30">
                <img src={Img3} alt="Restaurant" className="w-full h-full object-cover opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-3 glass-dark">
                  <p className="text-xs text-gold font-semibold">Fine Dining</p>
                </div>
              </div>

              <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
                <img src={Img4} alt="GbogboAyé Exclusive Rooms" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-gold text-xs">
                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <span className="text-xs text-ivory/70">5.0 Rating</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ivory">GbogboAyé</h3>
                  <p className="text-sm text-ivory/60">Ilesa, Osun State</p>
                </div>
              </div>

              <div className="absolute -inset-4 border border-gold/10 rounded-full animate-pulse-gold"></div>
              <div className="absolute -inset-8 border border-gold/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
