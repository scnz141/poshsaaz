export interface Product {
  id: string;
  title: string;
  category: string;
  badge?: string;
  price: string;
  image: string;
  images: string[];
  description: string;
  details?: string;
  instagramUrl?: string;
  features?: string[];
}

export const products: Product[] = [
  // BOUQUETS COLLECTION
  {
    id: "bouquet-lavender",
    title: "Lavender Dreams Bouquet",
    category: "Bouquets",
    badge: "Custom Order",
    price: "Starting ₹599",
    image: "/images/lavender_bouquet.png",
    images: [
      "/images/lavender_bouquet.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754140/poshsaaz/tulip_garden_bouquet.jpg"
    ],
    description: "Vibrant purple lavender stems meticulously crafted from fuzzy chenille wire, wrapped in rustic kraft paper with a soft satin ribbon.",
    details: "Everlasting lavender bouquet that captures timeless fragrance and beauty without wilting. Ideal for home decor or thoughtful gifting.",
    features: ["Hand-spun chenille wire", "Rustic kraft wrapping", "Never wilts"]
  },
  {
    id: "bouquet-sunflower",
    title: "Sunshine Sunflower Bouquet",
    category: "Bouquets",
    badge: "Custom Order",
    price: "Starting ₹699",
    image: "/images/sunflower_bouquet.png",
    images: [
      "/images/sunflower_bouquet.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754155/poshsaaz/mixed_floral_bouquet.jpg"
    ],
    description: "Radiant yellow sunflowers sculpted with pipe cleaner petals and rich brown centers, bringing eternal sunshine to any space.",
    details: "Each sunflower head is handcrafted from high-density pipe cleaners with sturdy wire stems. Tied with natural jute twine.",
    features: ["Vibrant yellow petals", "Sturdy stem support", "Custom bundle sizes"]
  },
  {
    id: "bouquet-rose",
    title: "Velvet Rose Bouquet",
    category: "Bouquets",
    badge: "Custom Order",
    price: "Starting ₹749",
    image: "/images/rose_bouquet.png",
    images: [
      "/images/rose_bouquet.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754115/poshsaaz/rose_bloom_hairband.jpg"
    ],
    description: "Plush red and blush pink pipe cleaner roses surrounded by soft green leaves, tied elegantly with a cream ribbon.",
    details: "Our velvet roses combine romantic classicism with artisan handwork. Perfect for anniversaries, Valentine gifts, and bridal keepsakes.",
    features: ["Deep crimson & blush tones", "Cream satin ribbon", "Preserves memory forever"]
  },
  {
    id: "bouquet-mixed",
    title: "Pastel Mixed Floral Bouquet",
    category: "Bouquets",
    badge: "Custom Order",
    price: "Starting ₹899",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754155/poshsaaz/mixed_floral_bouquet.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754155/poshsaaz/mixed_floral_bouquet.jpg",
      "/images/lavender_bouquet.png"
    ],
    description: "A harmonious arrangement of handcrafted chenille flowers in warm pastels, combining dahlias, roses, and lavender sprigs.",
    details: "Custom floral composition showcasing multi-layered petals and delicate greenery.",
    features: ["Multi-flower arrangement", "Custom color schemes", "Premium presentation"]
  },
  {
    id: "bouquet-single-stem",
    title: "Single-Stem Bloom",
    category: "Bouquets",
    badge: "Made to Order",
    price: "Starting ₹199",
    image: "/images/single_stem_flower.png",
    images: [
      "/images/single_stem_flower.png",
      "/images/sunflower_bouquet.png"
    ],
    description: "Elegantly sculpted single-stem pipe cleaner flower with detailed leaves. Minimalist beauty for single vases or favors.",
    details: "Choose from rose, lily, tulip, or daisy single stems.",
    features: ["Minimalist aesthetic", "Flexible wire stem", "Great for party favors"]
  },

  // BOOKMARKS COLLECTION
  {
    id: "bookmark-floral",
    title: "Handmade Floral Bookmark",
    category: "Bookmarks",
    badge: "Made to Order",
    price: "Starting ₹249",
    image: "/images/bookmark_flower_pink.png",
    images: [
      "/images/bookmark_flower_pink.png",
      "/images/handmade_bookmark.png"
    ],
    description: "Mark your moments with handmade beauty. Every page deserves a little bloom. Delicate pink pipe cleaner cherry blossom stem with soft satin tassel.",
    details: "Slim profile designed to fit inside hardcovers and paperbacks smoothly without damaging pages. Handcrafted in Kashmir with love.",
    instagramUrl: "https://www.instagram.com/reel/DbOTtopyZaa/",
    features: ["Slim page-safe design", "Silky satin tassel", "Crafted with love in Kashmir"]
  },

  // CHARGER COVERS
  {
    id: "charger-cover-floral",
    title: "Floral Cable Charger Cover",
    category: "Charger Covers",
    badge: "Custom Order",
    price: "Starting ₹399",
    image: "/images/charger_cover_pastel.png",
    images: [
      "/images/charger_cover_pastel.png",
      "/images/charger_cover.png"
    ],
    description: "Handmade with love, crafted to protect. Make your charger look as beautiful as you are. Spiral chenille floral coils with pearl embellishments.",
    details: "Fits iPhone and Android lightning/USB-C cables. Protects cord ends from fraying while adding delightful floral charm.",
    instagramUrl: "https://www.instagram.com/reel/Dapkh2mSd3Z/",
    features: ["Anti-fraying cable protection", "Pearl blossom details", "Universal cable fit"]
  },

  // MOBILE COVERS
  {
    id: "mobile-cover-3d",
    title: "3D Handcrafted Mobile Cover",
    category: "Mobile Covers",
    badge: "Custom Order",
    price: "Starting ₹599",
    image: "/images/mobile_cover_pearl_pink.png",
    images: [
      "/images/mobile_cover_pearl_pink.png",
      "/images/mobile_cover.png"
    ],
    description: "Carry your style everywhere. Handcrafted mobile covers decorated with 3D pipe cleaner roses, white daisies, and pearl centers.",
    details: "Custom-fitted to your exact phone model (iPhone, Samsung, OnePlus, etc.). Lightweight, tactile, and completely unique.",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
    features: ["Custom phone fit", "Tactile 3D floral art", "Pearl accent embellishments"]
  },

  // KEYCHAINS
  {
    id: "keychain-flower",
    title: "Handmade Floral Keychain",
    category: "Keychains",
    badge: "Made to Order",
    price: "Starting ₹199",
    image: "/images/keychain_tulip.png",
    images: [
      "/images/keychain_tulip.png",
      "/images/handmade_keychain.png"
    ],
    description: "Every key deserves a beautiful companion. Custom handmade tulip flower keychain with gold hardware and dangling pearl charm.",
    details: "Durable pipe cleaner construction backed with protective coating. Perfect for keys, handbags, and backpacks.",
    instagramUrl: "https://www.instagram.com/p/Dahs4ULSWex/",
    features: ["Gold metal keyring", "Lightweight & durable", "Great aesthetic gift"]
  },

  // WALL DECOR
  {
    id: "wall-decor-floral",
    title: "Handcrafted Floral Wall Décor",
    category: "Wall Décor",
    badge: "Custom Order",
    price: "Starting ₹899",
    image: "/images/wall_decor.png",
    images: [
      "/images/wall_decor.png"
    ],
    description: "Bohemian handcrafted wall hanging featuring pipe cleaner flowers woven into a natural wooden hoop with trailing green foliage.",
    details: "Adds cozy Kashmir artisan warmth to bedrooms, nurseries, or living room accent walls.",
    instagramUrl: "https://www.instagram.com/p/Dag3gc1ShDn/",
    features: ["Natural wooden hoop", "Cascading greenery & ribbons", "Ready to hang"]
  },

  // HAIRBANDS
  {
    id: "hairband-rose",
    title: "Rose Bloom Hairband",
    category: "Hairbands",
    badge: "Made to Order",
    price: "Starting ₹499",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754115/poshsaaz/rose_bloom_hairband.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754115/poshsaaz/rose_bloom_hairband.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754099/poshsaaz/hero.jpg"
    ],
    description: "Vibrant pink floral rosettes crafted from pipe cleaner stems with pearl accents on a velvet band. Lightweight and comfortable.",
    details: "Each hairband is meticulously shaped from fuzzy chenille stem wire with delicate pearl embellishments.",
    features: ["Velvet wrapped band", "Lightweight fit", "Pearl center drops"]
  },
  {
    id: "hairband-lavender",
    title: "Lavender Dreams Hairband",
    category: "Hairbands",
    badge: "Made to Order",
    price: "Starting ₹549",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754123/poshsaaz/lavender_dreams_hairband.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754123/poshsaaz/lavender_dreams_hairband.jpg"
    ],
    description: "Soft lavender purple florals made of fuzzy chenille wire with delicate pearl centers. A dreamy accessory for weddings.",
    details: "Hand-twisted lavender flowers set on comfortable headband structure.",
    features: ["Soft lavender hue", "Comfortable all-day wear", "Bridal favorite"]
  },

  // CLIPS & COMBS
  {
    id: "clips-set",
    title: "Floral Clips Collection",
    category: "Clips & Combs",
    badge: "Made to Order",
    price: "Starting ₹349",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754165/poshsaaz/floral_clips_collection.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754165/poshsaaz/floral_clips_collection.jpg"
    ],
    description: "Set of delicate hair clips with miniature chenille floral arrangements. Gold-tone hardware with pastel petals.",
    details: "Ideal for bridal wear, bridesmaids, and everyday styling.",
    features: ["Gold-tone alligator clip", "Miniature floral art", "Sold as pair or set"]
  },
  {
    id: "clips-comb",
    title: "Pearl Blossom Comb",
    category: "Clips & Combs",
    badge: "Made to Order",
    price: "Starting ₹399",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754182/poshsaaz/pearl_blossom_comb.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754182/poshsaaz/pearl_blossom_comb.jpg"
    ],
    description: "Decorative hair comb with cascading floral design. Gold leaves and pearl accents create timeless bridal elegance.",
    details: "Precision golden hair comb embellished with white and blush chenille blossoms.",
    features: ["Golden hair comb", "Cascading pearls & leaves", "Elegant updo accent"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Amira Khan",
    role: "Bride",
    rating: 5,
    text: "The most beautiful hairband I've ever seen. The craftsmanship is impeccable and it made my wedding day extra special.",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    role: "Event Planner",
    rating: 5,
    text: "Poshsaaz creates magic with every piece. My clients are always amazed by the quality and attention to detail.",
  },
  {
    id: 3,
    name: "Zara Malik",
    role: "Fashion Designer",
    rating: 5,
    text: "The artistry and tradition in every creation is remarkable. I recommend Poshsaaz to all my clients.",
  },
  {
    id: 4,
    name: "Noor Hassan",
    role: "Customer",
    rating: 5,
    text: "Exceeded all my expectations. The bouquet arrived perfectly packaged and looked even better than the photos.",
  },
  {
    id: 5,
    name: "Leila Syed",
    role: "Bride",
    rating: 5,
    text: "Every detail was perfect. The team was so helpful and the final product was absolutely stunning.",
  },
];

