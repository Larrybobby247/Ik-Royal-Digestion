import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  useScrollReveal()

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 1500))

      toast.success('Message sent successfully! We will get back to you shortly.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Contact Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Get in <span className="text-gradient-gold">Touch</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="font-display text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-gold"></i>
                  </div>
                  <div>
                    <p className="text-sm text-ivory/50 mb-1">Phone</p>
                    <a href="tel:+2348165747490" className="text-lg font-medium hover:text-gold transition-colors">+234 816 574 7490</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-gold"></i>
                  </div>
                  <div>
                    <p className="text-sm text-ivory/50 mb-1">Email</p>
                    <a href="mailto:info@gbogboayeexclusiverooms.com" className="text-lg font-medium hover:text-gold transition-colors">info@gbogboayeexclusiverooms.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-gold"></i>
                  </div>
                  <div>
                    <p className="text-sm text-ivory/50 mb-1">Address</p>
                    <p className="text-lg font-medium">Off Oke Opo road, opposite Oke Opo Health Center,<br />Ilesa 233285, Osun State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="https://wa.me/2348165747490" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl p-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-display text-2xl font-semibold mb-6">Quick Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full luxury-input px-4 py-3"
                  />
                </div>
                <div>
                  <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full luxury-input px-4 py-3"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full luxury-input px-4 py-3"
                />
              </div>
              <div>
                <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full luxury-input px-4 py-3 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 rounded-xl text-sm font-bold text-white shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
