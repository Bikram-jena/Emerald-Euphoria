import { useEffect, useMemo, useState } from 'react'
import { iconMap, navItems, siteData } from './siteData'

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [path])

  const page = useMemo(() => {
    switch (path) {
      case '/rooms':
        return <RoomsPage />
      case '/amenities':
        return <AmenitiesPage />
      case '/gallery':
        return <GalleryPage />
      case '/celebrations':
        return <CelebrationsPage />
      case '/about':
        return <AboutPage />
      case '/contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }, [path])

  const navigate = (nextPath) => {
    if (nextPath === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  return (
    <div className="app-shell">
      <BackgroundOrbs />
      <Header currentPath={path} navigate={navigate} />
      <main>{page}</main>
      <Footer navigate={navigate} />
      <FloatingActions />
    </div>
  )
}

function Header({ currentPath, navigate }) {
  const [open, setOpen] = useState(false)

  const onNavigate = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <header className="site-header">
      <button className="brandmark" onClick={() => onNavigate('/')} aria-label="Emerald Euphoria home">
        <img src={siteData.brand.logo} alt="Emerald Euphoria logo" />
        <span>
          <strong>{siteData.brand.name}</strong>
          <em>Luxury Stay in Bhubaneswar</em>
        </span>
      </button>
      <nav className={`main-nav ${open ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.path}
            className={currentPath === item.path ? 'active' : ''}
            onClick={() => onNavigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <a className="button button-ghost" href={siteData.contact.mapsLink} target="_blank" rel="noreferrer">
          Directions
        </a>
        <a className="button button-primary" href={createWhatsAppUrl('Hello, I would like to book a stay at Emerald Euphoria.')}>
          Book Now
        </a>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy surface">
          <p className="eyebrow">Premium stays. Private celebrations. Direct booking.</p>
          <h1>{siteData.brand.tagline}</h1>
          <p className="lede">{siteData.brand.subheading}</p>
          <div className="hero-cta-row">
            <a className="button button-primary" href={createWhatsAppUrl('Hi, I want to book a room at Emerald Euphoria.')}>
              Book on WhatsApp
            </a>
            <a className="button button-secondary" href={`tel:${siteData.contact.phoneTel}`}>
              Call {siteData.contact.phoneDisplay}
            </a>
          </div>
          <div className="highlights-list">
            {siteData.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-card hero-image-large">
            <img src="/images/exterior-night.svg" alt="Emerald Euphoria exterior at night" />
          </div>
          <div className="hero-image-card hero-image-small">
            <img src="/images/real-02.jpg" alt="Emerald Euphoria room" />
          </div>
        </div>
      </section>

      <section className="booking-strip surface">
        <div>
          <p className="eyebrow">Quick booking form</p>
          <h2>Plan your stay in under a minute</h2>
        </div>
        <QuickBookingForm />
      </section>

      <section className="stats-grid">
        {siteData.heroStats.map((stat) => (
          <article key={stat.label} className="stat-card surface">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Featured rooms</p>
          <h2>Modern rooms with a cozy, elevated feel</h2>
        </div>
        <div className="card-grid three-up">
          {siteData.rooms.map((room) => (
            <RoomCard key={room.name} room={room} compact />
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Why choose us</p>
          <h2>Built for comfort, trust and memorable celebrations</h2>
        </div>
        <div className="card-grid three-up">
          {siteData.whyChooseUs.map((item) => (
            <article key={item.title} className="surface info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Guest voices</p>
          <h2>Designed to earn repeat visits and direct recommendations</h2>
        </div>
        <div className="card-grid three-up">
          {siteData.testimonials.map((item) => (
            <article key={item.author} className="surface testimonial-card">
              <p>"{item.quote}"</p>
              <strong>{item.author}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="map-section surface">
        <div className="section-heading">
          <p className="eyebrow">Easy to reach</p>
          <h2>Find Emerald Euphoria near Infocity, Bhubaneswar</h2>
          <p>{siteData.contact.address}</p>
        </div>
        <div className="map-embed">
          <iframe
            title="Emerald Euphoria map"
            src={siteData.contact.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}

function RoomsPage() {
  return (
    <PageLayout
      eyebrow="Rooms"
      title="Choose a room that fits your mood and plans"
      text="Browse premium categories, compare amenities and send your preferred dates directly through WhatsApp."
    >
      <section className="card-grid three-up">
        {siteData.rooms.map((room) => (
          <RoomCard key={room.name} room={room} />
        ))}
      </section>
      <section className="surface availability-panel">
        <div>
          <p className="eyebrow">Availability checker</p>
          <h2>Check room availability before you arrive</h2>
          <p>Select a timeframe and send a booking request directly to the hotel support line.</p>
        </div>
        <AvailabilityForm />
      </section>
    </PageLayout>
  )
}

function AmenitiesPage() {
  return (
    <PageLayout
      eyebrow="Amenities"
      title="Everything guests need for a smooth, modern stay"
      text="Clean spaces, guest-first support and the must-have comforts expected from a trusted stay."
    >
      <section className="card-grid four-up">
        {siteData.amenities.map((item) => (
          <article key={item} className="surface amenity-card">
            <span className="amenity-icon">{iconMap[item] || item.slice(0, 2).toUpperCase()}</span>
            <h3>{item}</h3>
            <p>Thoughtfully included to keep every stay relaxed, convenient and premium.</p>
          </article>
        ))}
      </section>
    </PageLayout>
  )
}

function GalleryPage() {
  return (
    <PageLayout
      eyebrow="Gallery"
      title="A visual tour of stays, setups and signature spaces"
      text="Showcase-ready imagery for rooms, celebration setups, reception moments and the hotel's warm night-time curb appeal."
    >
      <section className="gallery-grid">
        {siteData.gallery.map((item) => (
          <article key={item.title} className="gallery-card surface">
            <img src={item.image} alt={item.title} />
            <div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </section>
    </PageLayout>
  )
}

function CelebrationsPage() {
  return (
    <PageLayout
      eyebrow="Special Occasions"
      title="Romantic stays and private celebrations, handled beautifully"
      text="Ideal for birthdays, anniversaries, private surprise plans and decoration-led experiences."
    >
      <section className="celebration-layout">
        <div className="surface celebration-list">
          <h3>Perfect for</h3>
          <div className="occasion-tags">
            {siteData.occasions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <img src="/images/real-07.jpg" alt="Celebration-ready room setup" />
        </div>
        <div className="surface form-panel">
          <p className="eyebrow">Celebration inquiry</p>
          <h2>Tell us what you want to plan</h2>
          <InquiryForm />
        </div>
      </section>
    </PageLayout>
  )
}

function AboutPage() {
  return (
    <PageLayout
      eyebrow="About Us"
      title="A hotel story centered on comfort, privacy and guest satisfaction"
      text="Emerald Euphoria combines modern hospitality with a warm, trustworthy experience for travellers and celebration seekers alike."
    >
      <section className="card-grid three-up">
        <article className="surface info-card">
          <h3>Our story</h3>
          <p>{siteData.about.story}</p>
        </article>
        <article className="surface info-card">
          <h3>Our mission</h3>
          <p>{siteData.about.mission}</p>
        </article>
        <article className="surface info-card">
          <h3>Our promise</h3>
          <p>{siteData.about.promise}</p>
        </article>
      </section>
    </PageLayout>
  )
}

function ContactPage() {
  return (
    <PageLayout
      eyebrow="Contact"
      title="Reach the hotel directly and get answers fast"
      text="Call, WhatsApp, view directions and send stay or celebration enquiries from one place."
    >
      <section className="contact-layout">
        <div className="surface contact-card">
          <h3>Contact details</h3>
          <p>{siteData.contact.supportNote}</p>
          <ul className="contact-list">
            <li>
              <strong>Phone</strong>
              <a href={`tel:${siteData.contact.phoneTel}`}>{siteData.contact.phoneDisplay}</a>
            </li>
            <li>
              <strong>Address</strong>
              <a href={siteData.contact.mapsLink} target="_blank" rel="noreferrer">
                {siteData.contact.address}
              </a>
            </li>
            <li>
              <strong>Area</strong>
              <span>{siteData.contact.area}</span>
            </li>
          </ul>
          <div className="contact-actions">
            <a className="button button-primary" href={createWhatsAppUrl('Hello, I need booking support for Emerald Euphoria.')}>
              WhatsApp Direct Booking
            </a>
            <a className="button button-secondary" href={siteData.contact.mapsLink} target="_blank" rel="noreferrer">
              Open Google Maps
            </a>
          </div>
        </div>
        <div className="surface form-panel">
          <p className="eyebrow">Inquiry form</p>
          <h2>Send a direct message</h2>
          <ContactForm />
        </div>
      </section>
      <section className="map-section surface">
        <div className="section-heading">
          <p className="eyebrow">Location map</p>
          <h2>Plan your route before arrival</h2>
        </div>
        <div className="map-embed">
          <iframe
            title="Emerald Euphoria Google map"
            src={siteData.contact.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </PageLayout>
  )
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer surface">
      <div>
        <img className="footer-logo" src={siteData.brand.logo} alt="Emerald Euphoria" />
        <h3>{siteData.brand.name}</h3>
        <p>{siteData.contact.address}</p>
      </div>
      <div>
        <h4>Explore</h4>
        <div className="footer-links">
          {navItems.map((item) => (
            <button key={item.path} onClick={() => navigate(item.path)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4>Direct booking</h4>
        <p>{siteData.contact.supportNote}</p>
        <a href={`tel:${siteData.contact.phoneTel}`}>{siteData.contact.phoneDisplay}</a>
        <a href={createWhatsAppUrl('Hi, I want to confirm my booking at Emerald Euphoria.')}>Booking confirmation on WhatsApp</a>
      </div>
    </footer>
  )
}

function PageLayout({ eyebrow, title, text, children }) {
  return (
    <div className="page-layout">
      <section className="page-hero surface">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{text}</p>
      </section>
      {children}
    </div>
  )
}

function QuickBookingForm() {
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2'
  })

  const onSubmit = (event) => {
    event.preventDefault()
    const message = `Hello, I want to book Emerald Euphoria.%0ACheck-in: ${form.checkIn || 'Not selected'}%0ACheck-out: ${form.checkOut || 'Not selected'}%0AGuests: ${form.guests}`
    window.open(createWhatsAppUrl(message, true), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="inline-form" onSubmit={onSubmit}>
      <label>
        Check-in
        <input type="date" value={form.checkIn} onChange={(event) => setForm({ ...form, checkIn: event.target.value })} />
      </label>
      <label>
        Check-out
        <input type="date" value={form.checkOut} onChange={(event) => setForm({ ...form, checkOut: event.target.value })} />
      </label>
      <label>
        Guests
        <select value={form.guests} onChange={(event) => setForm({ ...form, guests: event.target.value })}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </label>
      <button className="button button-primary" type="submit">
        Check Availability
      </button>
    </form>
  )
}

function AvailabilityForm() {
  const [range, setRange] = useState(siteData.availabilityOptions[0])
  const [room, setRoom] = useState(siteData.rooms[0].name)

  const onSubmit = (event) => {
    event.preventDefault()
    const message = `Hello, please share availability for ${room} at Emerald Euphoria. Preferred timing: ${range}.`
    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="stack-form" onSubmit={onSubmit}>
      <label>
        Preferred room
        <select value={room} onChange={(event) => setRoom(event.target.value)}>
          {siteData.rooms.map((item) => (
            <option key={item.name}>{item.name}</option>
          ))}
        </select>
      </label>
      <label>
        Timeframe
        <select value={range} onChange={(event) => setRange(event.target.value)}>
          {siteData.availabilityOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <button className="button button-primary" type="submit">
        Request Availability
      </button>
    </form>
  )
}

function InquiryForm() {
  const [form, setForm] = useState({
    name: '',
    occasion: siteData.occasions[0],
    date: '',
    note: ''
  })

  const onSubmit = (event) => {
    event.preventDefault()
    const message = `Hello, I want to plan a ${form.occasion} at Emerald Euphoria.%0AName: ${form.name || 'Guest'}%0ADate: ${form.date || 'Flexible'}%0ANotes: ${form.note || 'Please share packages.'}`
    window.open(createWhatsAppUrl(message, true), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="stack-form" onSubmit={onSubmit}>
      <label>
        Name
        <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" />
      </label>
      <label>
        Occasion
        <select value={form.occasion} onChange={(event) => setForm({ ...form, occasion: event.target.value })}>
          {siteData.occasions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        Preferred date
        <input type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} />
      </label>
      <label>
        Details
        <textarea
          rows="4"
          value={form.note}
          onChange={(event) => setForm({ ...form, note: event.target.value })}
          placeholder="Birthday decor, romantic setup, surprise cake, check-in time..."
        />
      </label>
      <button className="button button-primary" type="submit">
        Send Celebration Inquiry
      </button>
    </form>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    checkIn: '',
    nights: '1',
    note: ''
  })

  const onSubmit = (event) => {
    event.preventDefault()
    const message = `Hello, I have an inquiry for Emerald Euphoria.%0AName: ${form.name || 'Guest'}%0ACheck-in: ${form.checkIn || 'Not selected'}%0ANights: ${form.nights}%0ANote: ${form.note || 'Please help with booking details.'}`
    window.open(createWhatsAppUrl(message, true), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="stack-form" onSubmit={onSubmit}>
      <label>
        Name
        <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" />
      </label>
      <label>
        Check-in date
        <input type="date" value={form.checkIn} onChange={(event) => setForm({ ...form, checkIn: event.target.value })} />
      </label>
      <label>
        Nights
        <select value={form.nights} onChange={(event) => setForm({ ...form, nights: event.target.value })}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          rows="4"
          value={form.note}
          onChange={(event) => setForm({ ...form, note: event.target.value })}
          placeholder="Need pricing, celebration decor, early check-in, or room recommendation?"
        />
      </label>
      <button className="button button-primary" type="submit">
        Submit via WhatsApp
      </button>
    </form>
  )
}

function RoomCard({ room, compact = false }) {
  return (
    <article className={`surface room-card ${compact ? 'compact' : ''}`}>
      <img src={room.image} alt={room.name} />
      <div className="room-card-body">
        <div className="room-heading">
          <div>
            <h3>{room.name}</h3>
            <p>{room.blurb}</p>
          </div>
          <strong>{room.price}</strong>
        </div>
        <div className="amenity-chip-wrap">
          {room.amenities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a className="button button-secondary" href={createWhatsAppUrl(`Hi, I want to book the ${room.name} at Emerald Euphoria.`)}>
          Book room
        </a>
      </div>
    </article>
  )
}

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a className="floating-pill" href={`tel:${siteData.contact.phoneTel}`}>
        Call
      </a>
      <a className="floating-pill accent" href={createWhatsAppUrl('Hello, I want to book Emerald Euphoria.')}>
        WhatsApp
      </a>
    </div>
  )
}

function BackgroundOrbs() {
  return (
    <div className="background-orbs" aria-hidden="true">
      <span className="orb orb-one" />
      <span className="orb orb-two" />
      <span className="orb orb-three" />
    </div>
  )
}

function createWhatsAppUrl(message, isEncoded = false) {
  const text = isEncoded ? message : encodeURIComponent(message)
  return `https://wa.me/${siteData.contact.whatsappNumber}?text=${text}`
}

export default App
