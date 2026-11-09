/**
 * ANTHOS — Central Business Configuration
 * Edit this file to update business info, products, and content across the entire site.
 */
const SITE = {
  business: {
    name: "Ajit and Flower Nursery",
    tagline: "Flowers That Turn Moments Into Memories.",
    phone: "+91 7800160656",
    phoneRaw: "+91 8881106688",
    whatsapp: "91 7800160656", // digits only, country code first — used for wa.me links
    whatsappDefaultMessage: "Hello, I would like to know more about your flowers and decoration services.",
    email: "ajitbhagat6363@gmail.com",
    address: "Dihwa Nagra Ballia Uttar-Pardesh 221711",
    mapsUrl: "https://maps.google.com/?q=Anthos+Florals+Kanpur",
    hours: [
      { days: "Monday – Saturday", time: "9:00 AM – 8:30 PM" },
      { days: "Sunday", time: "10:00 AM – 6:00 PM" }
    ],
    instagram: "https://instagram.com/rana.thakre",
    facebook: "https://facebook.com/anthosflorals"
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Flowers", href: "#flowers" },
    { label: "Bouquets", href: "#bouquets" },
    { label: "Wedding Décor", href: "#wedding" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],

  trustPoints: [
    { icon: "flower-2", title: "Fresh Every Day", text: "Hand-selected fresh flowers, sourced each morning." },
    { icon: "heart-handshake", title: "Handcrafted With Love", text: "Every bouquet is carefully designed by hand." },
    { icon: "sparkles", title: "Custom Designs", text: "Made according to your occasion and story." },
    { icon: "gem", title: "Wedding Specialists", text: "Floral décor for unforgettable celebrations." }
  ],

  flowerCategories: [
    { name: "Roses", count: "24 varieties", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80" },
    { name: "Lilies", count: "12 varieties", image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=900&q=80" },
    { name: "Tulips", count: "18 varieties", image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=80" },
    { name: "Orchids", count: "9 varieties", image: "https://images.unsplash.com/photo-1524598171353-e5d5b7f2019d?auto=format&fit=crop&w=900&q=80" },
    { name: "Sunflowers", count: "6 varieties", image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=900&q=80" },
    { name: "Mixed Flowers", count: "30+ combinations", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80" }
  ],

  bouquets: [
    {
      id: "classic-red-rose",
      name: "Classic Red Rose Bouquet",
      description: "Twenty-four velvet roses, hand-tied with eucalyptus.",
      price: 2499,
      rating: 4.9,
      colors: ["#8B1E2F", "#C98F91"],
      image: "https://images.unsplash.com/photo-1548586196-aa5803b77379?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "pink-romance",
      name: "Pink Romance Bouquet",
      description: "Blush peonies and garden roses in soft pink tones.",
      price: 2199,
      rating: 4.8,
      colors: ["#E8A0A8", "#F2CFD3"],
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "elegant-white",
      name: "Elegant White Bouquet",
      description: "White lilies and roses with silver dollar eucalyptus.",
      price: 2599,
      rating: 5.0,
      colors: ["#FAF7F0", "#E8E4D8"],
      image: "https://images.unsplash.com/photo-1587301112204-6ec72d1f7ff3?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "pastel-dream",
      name: "Pastel Dream Bouquet",
      description: "A gentle mix of tulips, ranunculus and stock flowers.",
      price: 1899,
      rating: 4.7,
      colors: ["#E9C9E0", "#C6A15B"],
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "royal-orchid",
      name: "Royal Orchid Bouquet",
      description: "Exotic phalaenopsis orchids arranged with gold accents.",
      price: 3299,
      rating: 4.9,
      colors: ["#6E3A6E", "#C6A15B"],
      image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "sunshine",
      name: "Sunshine Bouquet",
      description: "Bright sunflowers and yellow roses to lift any day.",
      price: 1699,
      rating: 4.8,
      colors: ["#E8B93B", "#8FAF9A"],
      image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=80"
    }
  ],

  occasions: [
    { name: "Love & Romance", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=800&q=80" },
    { name: "Birthday", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" },
    { name: "Anniversary", image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80" },
    { name: "Congratulations", image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=800&q=80" },
    { name: "Get Well Soon", image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=800&q=80" },
    { name: "Celebration", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=800&q=80" }
  ],

  weddingServices: [
    { name: "Wedding Stage Decoration", text: "Elegant floral stages designed around your wedding theme." },
    { name: "Mandap Decoration", text: "Beautiful floral mandaps customized for your ceremony." },
    { name: "Entrance Decoration", text: "Make the first impression unforgettable." },
    { name: "Table & Venue Decoration", text: "Elegant floral arrangements for guests and dining spaces." },
    { name: "Bridal Bouquet", text: "Custom bridal bouquets designed to complement your gown." },
    { name: "Complete Venue Decoration", text: "End-to-end floral styling for your entire celebration." }
  ],

  gallery: [
    { title: "Rima & Aditya's Mandap", category: "Wedding Ceremony", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80", size: "tall" },
    { title: "Rose Gold Reception Stage", category: "Wedding Stage", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80", size: "wide" },
    { title: "Ivory Floral Arch", category: "Entrance Decor", image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1200&q=80", size: "normal" },
    { title: "Bridal Bouquet Detail", category: "Bridal Flowers", image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80", size: "normal" },
    { title: "Garden Table Setting", category: "Venue Decor", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1200&q=80", size: "tall" },
    { title: "Hanging Floral Installation", category: "Wedding Stage", image: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=80", size: "normal" },
    { title: "Sangeet Entrance", category: "Entrance Decor", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80", size: "wide" },
    { title: "Reception Centerpieces", category: "Venue Decor", image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=1200&q=80", size: "normal" }
  ],

  packages: [
    {
      name: "Essential",
      tagline: "For intimate celebrations.",
      price: "₹45,000",
      priceNote: "starting price",
      popular: false,
      features: ["Basic floral stage", "Entrance flowers", "Table arrangements", "Bridal bouquet"],
      cta: "Get Quote"
    },
    {
      name: "Signature",
      tagline: "For elegant weddings.",
      price: "₹95,000",
      priceNote: "starting price",
      popular: true,
      features: ["Premium stage décor", "Floral entrance", "Mandap decoration", "Bridal bouquet", "Table décor"],
      cta: "Get Quote"
    },
    {
      name: "Royal",
      tagline: "For grand celebrations.",
      price: "₹2,10,000",
      priceNote: "starting price",
      popular: false,
      features: ["Luxury stage & installations", "Complete venue decoration", "Custom mandap", "Bridal & groom flowers", "Entrance installation", "Dedicated decorator"],
      cta: "Request Consultation"
    }
  ],

  testimonials: [
    { name: "Priya Malhotra", occasion: "Wedding Decoration, Lucknow", rating: 5, text: "Our mandap looked like something from a magazine. Every petal was placed with such care — our guests are still talking about it." },
    { name: "Rohan Kapoor", occasion: "Anniversary Bouquet", rating: 5, text: "The bouquet was even more beautiful than I imagined. The flowers were fresh and the arrangement was absolutely stunning." },
    { name: "Ananya Verma", occasion: "Wedding Stage, Kanpur", rating: 5, text: "From our first call to the final flower on stage, the team understood exactly the feeling we wanted. Effortless and elegant." },
    { name: "Karan Singh", occasion: "Birthday Bouquet", rating: 4, text: "Ordered same-day for my mother's birthday. It arrived on time and looked exactly like the photos. Will order again." },
    { name: "Meera & Sameer", occasion: "Engagement Decoration", rating: 5, text: "They transformed our terrace into a floral dream in just one afternoon. Genuinely the best decision we made for the day." }
  ],
  testimonialsNote: "Sample reviews shown for demonstration — replace with verified customer testimonials.",

  instagramImages: [
    "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80"
  ],

  flowerOptions: ["Roses", "Lilies", "Tulips", "Orchids", "Sunflowers", "Mixed Bouquet", "Not sure — surprise me"],
  eventTypes: ["Wedding", "Engagement", "Anniversary", "Birthday", "Corporate Event", "Other"],
  decorationStyles: ["Classic & Romantic", "Modern Minimal", "Traditional Indian", "Boho & Rustic", "Luxury & Opulent"],
  budgetRanges: ["₹40,000 – ₹75,000", "₹75,000 – ₹1,50,000", "₹1,50,000 – ₹3,00,000", "₹3,00,000+"]
};