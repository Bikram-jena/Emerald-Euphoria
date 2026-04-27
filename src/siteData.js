export const siteData = {
  brand: {
    name: 'Emerald Euphoria',
    tagline: 'Stay in Comfort, Celebrate in Style',
    subheading:
      'A premium stay in Neeladri Vihar crafted for romantic escapes, private celebrations, smooth check-ins and effortless direct booking.',
    logo: '/hotel-logo.svg'
  },
  contact: {
    phoneDisplay: '+91 90880 48804',
    phoneTel: '+919088048804',
    whatsappNumber: '919088048804',
    address:
      'Plot No HIG 84, Lane 9, Sector 5, Ashagiri Lane, Neeladri Vihar, Bhubaneswar, Odisha 751021',
    mapsLink:
      'https://www.google.com/maps/place/Collection+O+Emerald+Euphoria/@20.3269794,85.8027588,17z',
    mapEmbed:
      'https://www.google.com/maps?q=20.3269794,85.8027588&z=17&output=embed',
    area: 'Near Infocity, Chandrasekharpur, Bhubaneswar',
    supportNote: 'Call or WhatsApp for direct booking support, celebration packages and availability checks.'
  },
  heroStats: [
    { label: 'Guest-ready check-in', value: '12 PM' },
    { label: 'Checkout', value: '11 AM' },
    { label: 'Location rating', value: 'Prime' },
    { label: 'Stay mood', value: 'Private + Cozy' }
  ],
  highlights: [
    'AC Rooms',
    'Free WiFi',
    'Privacy Stay',
    'Midnight Check-in',
    'Party Friendly'
  ],
  whyChooseUs: [
    {
      title: 'Luxury that feels approachable',
      text: 'Soft lighting, polished interiors and a warm, modern atmosphere make every stay feel elevated without feeling stiff.'
    },
    {
      title: 'Built for special moments',
      text: 'From anniversaries to surprise birthdays, the property suits intimate celebrations with privacy and flexible support.'
    },
    {
      title: 'Fast direct assistance',
      text: 'Guests can enquire, check availability and confirm plans quickly through call or WhatsApp-based communication.'
    }
  ],
  rooms: [
    {
      name: 'Classic Comfort',
      price: 'From Rs. 1,299/night',
      blurb: 'A clean, calming room for couples, solo travellers and quick city stays.',
      image: '/images/real-01.jpg',
      amenities: ['King-size bed', 'AC', 'Smart TV', 'High-speed WiFi', 'Attached washroom', 'Ambient lighting']
    },
    {
      name: 'Celebration Suite',
      price: 'From Rs. 1,799/night',
      blurb: 'Ideal for birthdays, anniversary decor and romantic overnight plans.',
      image: '/images/real-02.jpg',
      amenities: ['Decor-ready layout', 'Extra seating', 'Mood lighting', 'Room service access', 'Couple friendly', 'Privacy-first experience']
    },
    {
      name: 'Group Hangout Room',
      price: 'From Rs. 2,199/night',
      blurb: 'A larger-format option for friend groups, private parties and longer celebrations.',
      image: '/images/real-03.jpg',
      amenities: ['Spacious floor plan', 'Entertainment setup', 'AC', 'Fast WiFi', '24/7 support', 'Midnight check-in assistance']
    }
  ],
  amenities: [
    'Free Parking',
    'Room Service',
    'WiFi',
    'Smart TV',
    'AC',
    'Couple Friendly',
    '24/7 Support',
    'Clean & Hygienic Rooms'
  ],
  gallery: [
    {
      title: 'Night Exterior',
      category: 'Facade',
      image: '/images/exterior-night.svg'
    },
    {
      title: 'Premium Room',
      category: 'Room',
      image: '/images/real-04.jpg'
    },
    {
      title: 'Celebration Ready Room',
      category: 'Decor',
      image: '/images/real-02.jpg'
    },
    {
      title: 'Cozy Seating Corner',
      category: 'Room',
      image: '/images/real-07.jpg'
    },
    {
      title: 'Signature Interior Angle',
      category: 'Room',
      image: '/images/real-11.jpg'
    },
    {
      title: 'Romantic Stay Mood',
      category: 'Events',
      image: '/images/real-12.jpg'
    }
  ],
  occasions: [
    'Birthday Surprise',
    'Anniversary Stay',
    'Romantic Stay',
    'Private Party',
    'Decoration Packages'
  ],
  testimonials: [
    {
      quote:
        'The stay felt private, stylish and easy to book. Perfect for a quick romantic getaway.',
      author: 'Weekend Guest'
    },
    {
      quote:
        'Rooms were neat, the vibe was premium and the team helped with celebration planning smoothly.',
      author: 'Birthday Booking'
    },
    {
      quote:
        'Great choice for comfort near Infocity. Check-in was simple and the room looked exactly like the premium vibe we wanted.',
      author: 'Direct Booking Guest'
    }
  ],
  about: {
    story:
      'Emerald Euphoria is designed for guests who want more than a routine hotel stay. The experience blends comfort, privacy and a celebration-friendly mood for modern travellers in Bhubaneswar.',
    mission:
      'To make every stay feel easy, elegant and memorable, whether guests arrive for relaxation, romance or a special occasion.',
    promise:
      'Clean rooms, responsive service, guest-first hospitality and a reliable atmosphere that feels safe, polished and welcoming.'
  },
  availabilityOptions: ['Today', 'This Weekend', 'Next 7 Days', 'Custom Dates']
}

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Amenities', path: '/amenities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Celebrations', path: '/celebrations' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
]

export const iconMap = {
  'Free Parking': 'P',
  'Room Service': 'R',
  WiFi: 'W',
  'Smart TV': 'TV',
  AC: 'AC',
  'Couple Friendly': 'CF',
  '24/7 Support': '24',
  'Clean & Hygienic Rooms': 'CH'
}
