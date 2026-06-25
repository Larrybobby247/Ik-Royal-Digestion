const MapSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl overflow-hidden reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126564.36568159606!2d4.5744!3d7.6245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzcnMjguMiJOIDTCsDM0JzI3LjgiRQ!5e0!3m2!1sen!2sng!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default MapSection
