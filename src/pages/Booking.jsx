import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const roomTypes = [
  { id: 'royal', name: 'The Royal Suite', price: 55000, description: 'King Executive Room with balcony and breakfast' },
  { id: 'meridian', name: 'The Meridian', price: 45000, description: 'Deluxe Double Room with work station' },
  { id: 'oasis', name: 'The Classic Oasis', price: 35000, description: 'Standard Comfort Room with A/C' },
  { id: 'sanctuary', name: 'The Sanctuary', price: 40000, description: 'Studio Business Suite with workspace' },
]

const bookingSteps = [
  { step: 1, title: 'Select Your Dates', description: 'Choose your check-in and check-out dates. Minimum stay is 1 night.' },
  { step: 2, title: 'Choose Your Room', description: 'Select from our premium suites and rooms based on your preferences.' },
  { step: 3, title: 'Guest Details', description: 'Provide your contact information and any special requests.' },
  { step: 4, title: 'Confirm & Pay', description: 'Review your booking details and complete payment to confirm.' },
]

const Booking = () => {
  const [searchParams] = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    guests: searchParams.get('guests') || '2',
    roomType: searchParams.get('roomType') || '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'card',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setBookingData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0
    const checkIn = new Date(bookingData.checkIn)
    const checkOut = new Date(bookingData.checkOut)
    const diffTime = Math.abs(checkOut - checkIn)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const room = roomTypes.find(r => r.id === bookingData.roomType)
    if (!room || nights === 0) return 0
    return room.price * nights
  }

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Booking confirmed! Check your email for confirmation details.')
      setCurrentStep(5)
    } catch (error) {
      toast.error('Booking failed. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedRoom = roomTypes.find(r => r.id === bookingData.roomType)

  return (
    <div className="min-h-screen bg-midnight pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="text-gold hover:text-gold-light text-sm mb-4 inline-block">
            <i className="fas fa-arrow-left mr-2"></i>Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">Book Your <span className="text-gradient-gold">Stay</span></h1>
          <p className="text-ivory/60 mt-4 max-w-2xl mx-auto">Follow the simple steps below to reserve your luxury experience at GbogboAyé</p>
        </div>

        {/* How It Works */}
        <div className="glass-dark rounded-3xl p-8 mb-12">
          <h2 className="font-display text-2xl font-semibold mb-6 text-center">How Booking Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {bookingSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold ${currentStep >= step.step ? 'bg-gold text-midnight' : 'bg-white/10 text-ivory/50'}`}>
                  {step.step}
                </div>
                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-ivory/50 text-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        {currentStep < 5 ? (
          <div className="glass rounded-3xl p-8">
            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2 mb-8">
              <div className="bg-gradient-to-r from-gold to-gold-light h-2 rounded-full transition-all duration-500" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Dates */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-semibold">Select Your Dates</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Check In Date</label>
                      <input type="date" name="checkIn" value={bookingData.checkIn} onChange={handleChange} required className="w-full luxury-input px-4 py-3" />
                    </div>
                    <div>
                      <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Check Out Date</label>
                      <input type="date" name="checkOut" value={bookingData.checkOut} onChange={handleChange} required className="w-full luxury-input px-4 py-3" />
                    </div>
                  </div>
                  {calculateNights() > 0 && (
                    <div className="glass-gold rounded-xl p-4 text-center">
                      <p className="text-gold font-semibold">{calculateNights()} night(s) selected</p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Room Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-semibold">Choose Your Room</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {roomTypes.map((room) => (
                      <div
                        key={room.id}
                        className={`glass rounded-2xl p-6 cursor-pointer transition-all ${bookingData.roomType === room.id ? 'border-gold bg-gold/10' : 'border-white/10 hover:bg-white/5'}`}
                        onClick={() => setBookingData(prev => ({ ...prev, roomType: room.id }))}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display font-semibold">{room.name}</h4>
                          <span className="text-gold font-bold">₦{room.price.toLocaleString()}/night</span>
                        </div>
                        <p className="text-ivory/60 text-sm">{room.description}</p>
                        {bookingData.roomType === room.id && <i className="fas fa-check-circle text-gold mt-2"></i>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Guest Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-semibold">Guest Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Full Name</label>
                      <input type="text" name="name" value={bookingData.name} onChange={handleChange} required className="w-full luxury-input px-4 py-3" />
                    </div>
                    <div>
                      <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Email</label>
                      <input type="email" name="email" value={bookingData.email} onChange={handleChange} required className="w-full luxury-input px-4 py-3" />
                    </div>
                    <div>
                      <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Phone Number</label>
                      <input type="tel" name="phone" value={bookingData.phone} onChange={handleChange} required className="w-full luxury-input px-4 py-3" />
                    </div>
                    <div>
                      <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Number of Guests</label>
                      <select name="guests" value={bookingData.guests} onChange={handleChange} className="w-full luxury-input px-4 py-3">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Special Requests</label>
                    <textarea name="specialRequests" value={bookingData.specialRequests} onChange={handleChange} rows="3" placeholder="Any special requests or preferences..." className="w-full luxury-input px-4 py-3 resize-none"></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Pay */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-semibold">Review & Confirm</h3>
                  <div className="glass rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-ivory/60">Room</span>
                      <span className="font-semibold">{selectedRoom?.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-ivory/60">Check In</span>
                      <span className="font-semibold">{bookingData.checkIn}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-ivory/60">Check Out</span>
                      <span className="font-semibold">{bookingData.checkOut}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-ivory/60">Nights</span>
                      <span className="font-semibold">{calculateNights()}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-ivory/60">Guests</span>
                      <span className="font-semibold">{bookingData.guests}</span>
                    </div>
                    <div className="flex justify-between pt-4">
                      <span className="text-gold font-semibold">Total</span>
                      <span className="text-gold font-display text-2xl font-bold">₦{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gold/70 font-semibold uppercase tracking-wider mb-2 block">Payment Method</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className={`glass rounded-xl p-4 cursor-pointer text-center ${bookingData.paymentMethod === 'card' ? 'border-gold' : ''}`} onClick={() => setBookingData(prev => ({ ...prev, paymentMethod: 'card' }))}>
                        <i className="fas fa-credit-card text-gold text-2xl mb-2"></i>
                        <p className="text-sm">Card Payment</p>
                      </div>
                      <div className={`glass rounded-xl p-4 cursor-pointer text-center ${bookingData.paymentMethod === 'transfer' ? 'border-gold' : ''}`} onClick={() => setBookingData(prev => ({ ...prev, paymentMethod: 'transfer' }))}>
                        <i className="fas fa-university text-gold text-2xl mb-2"></i>
                        <p className="text-sm">Bank Transfer</p>
                      </div>
                      <div className={`glass rounded-xl p-4 cursor-pointer text-center ${bookingData.paymentMethod === 'cash' ? 'border-gold' : ''}`} onClick={() => setBookingData(prev => ({ ...prev, paymentMethod: 'cash' }))}>
                        <i className="fas fa-money-bill-wave text-gold text-2xl mb-2"></i>
                        <p className="text-sm">Pay on Arrival</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button type="button" onClick={handleBack} className="btn-outline px-6 py-3 rounded-full text-sm font-bold">
                    <i className="fas fa-arrow-left mr-2"></i>Back
                  </button>
                )}
                {currentStep < 4 ? (
                  <button type="button" onClick={handleNext} className="btn-primary px-6 py-3 rounded-full text-sm font-bold ml-auto">
                    Next<i className="fas fa-arrow-right ml-2"></i>
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="btn-primary px-8 py-3 rounded-full text-sm font-bold ml-auto">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-lock mr-2"></i>Confirm Booking
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="glass rounded-3xl p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-emerald text-4xl"></i>
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">Booking Confirmed!</h2>
            <p className="text-ivory/70 mb-6">Thank you for choosing GbogboAyé. We have sent a confirmation email to {bookingData.email} with your booking details.</p>
            <div className="glass rounded-2xl p-6 max-w-md mx-auto mb-8 text-left">
              <p className="text-sm text-ivory/60 mb-2">Booking Reference: <span className="text-gold font-mono">GA-{Date.now()}</span></p>
              <p className="text-sm text-ivory/60 mb-2">Room: <span className="text-ivory">{selectedRoom?.name}</span></p>
              <p className="text-sm text-ivory/60 mb-2">Check-in: <span className="text-ivory">{bookingData.checkIn}</span></p>
              <p className="text-sm text-ivory/60">Total: <span className="text-gold font-bold">₦{calculateTotal().toLocaleString()}</span></p>
            </div>
            <Link to="/" className="btn-primary px-8 py-4 rounded-full text-sm font-bold">
              <i className="fas fa-home mr-2"></i>Return to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Booking
