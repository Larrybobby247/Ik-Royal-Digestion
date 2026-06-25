import { useState } from 'react'
import { Link } from 'react-router-dom'

const BookingWidget = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'all'
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Navigate to booking page with query params
    const params = new URLSearchParams(formData)
    window.location.href = `/booking?${params.toString()}`
  }

  return (
    <section className="relative z-20 mt-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass-dark rounded-3xl p-6 md:p-8 shadow-2xl border border-gold/10">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider">Check In</label>
              <div className="relative">
                <i className="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gold/50"></i>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-ivory text-sm focus:outline-none luxury-input transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider">Check Out</label>
              <div className="relative">
                <i className="fas fa-calendar-check absolute left-3 top-1/2 -translate-y-1/2 text-gold/50"></i>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-ivory text-sm focus:outline-none luxury-input transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider">Guests</label>
              <div className="relative">
                <i className="fas fa-users absolute left-3 top-1/2 -translate-y-1/2 text-gold/50"></i>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-ivory text-sm focus:outline-none luxury-input transition-all appearance-none"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gold/50 text-xs"></i>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider">Room Type</label>
              <div className="relative">
                <i className="fas fa-bed absolute left-3 top-1/2 -translate-y-1/2 text-gold/50"></i>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-ivory text-sm focus:outline-none luxury-input transition-all appearance-none"
                >
                  <option value="all">All Suites</option>
                  <option value="royal">Royal Suite</option>
                  <option value="meridian">The Meridian</option>
                  <option value="oasis">Classic Oasis</option>
                  <option value="sanctuary">The Sanctuary</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gold/50 text-xs"></i>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-3 rounded-xl text-sm font-bold text-white shadow-lg flex items-center justify-center gap-2">
              <i className="fas fa-search"></i>Check Availability
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingWidget
