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
  // HANDMADE EARRINGS COLLECTION
  {
    id: "earrings-black-heart-pearl",
    title: "Black Velvet Heart Pearl Studs",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920961/poshsaaz/earrings_black_heart_pearl.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920961/poshsaaz/earrings_black_heart_pearl.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920969/poshsaaz/earrings_black_heart_classic_pearl.jpg"
    ],
    description: "Handcrafted black fuzzy chenille velvet heart-shaped earrings embellished with a lustrous white pearl center on signature Poshsaaz presentation card.",
    details: "Lightweight, hypoallergenic studs mounted on custom Poshsaaz signature card with 'Statement in every detail' branding.",
    features: ["Plush black chenille velvet", "Lustrous white pearl center", "Hypoallergenic lightweight studs", "Signature Poshsaaz card"]
  },
  {
    id: "earrings-pink-white-bunny-pearl",
    title: "Blush & White Velvet Heart Studs",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920963/poshsaaz/earrings_pink_white_bunny_pearl.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920963/poshsaaz/earrings_pink_white_bunny_pearl.jpg"
    ],
    description: "Charming dual-tone white and soft blush pink fuzzy chenille velvet studs with delicate double pearl accents.",
    details: "Artisan-sculpted soft chenille stems with double-tiered pearl beads. Perfect for pastel styling and everyday elegance.",
    features: ["Dual-tone blush pink & white", "Double pearl embellishment", "Handmade in Kashmir", "Comfortable all-day wear"]
  },
  {
    id: "earrings-peppermint-swirl-studs",
    title: "Peppermint Swirl Fuzzy Button Studs",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920966/poshsaaz/earrings_peppermint_swirl_studs.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920966/poshsaaz/earrings_peppermint_swirl_studs.png"
    ],
    description: "Playful red and white spiral swirl fuzzy chenille button stud earrings with tactile plush texture.",
    details: "Handmade circular spiral pattern twisted from red and white chenille stems, creating a festive aesthetic.",
    features: ["Red & white swirl pattern", "Plush button stud design", "Unique handcrafted gift", "Lightweight"]
  },
  {
    id: "earrings-chocolate-brown-heart",
    title: "Chocolate Brown Velvet Heart Studs",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920967/poshsaaz/earrings_chocolate_brown_heart.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920967/poshsaaz/earrings_chocolate_brown_heart.jpg"
    ],
    description: "Warm chocolate brown fuzzy chenille velvet heart-shaped earrings on signature Poshsaaz card.",
    details: "Minimalist plush heart design in rich earthy brown, ideal for autumn & winter wardrobe styling.",
    features: ["Rich chocolate brown hue", "Soft velvet chenille texture", "Minimalist heart silhouette", "Signature Poshsaaz card"]
  },
  {
    id: "earrings-black-heart-classic-pearl",
    title: "Classic Noir Velvet Heart Studs",
    category: "Earrings",
    badge: "Best Seller",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920969/poshsaaz/earrings_black_heart_classic_pearl.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920969/poshsaaz/earrings_black_heart_classic_pearl.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920961/poshsaaz/earrings_black_heart_pearl.jpg"
    ],
    description: "Sculpted black chenille velvet heart stud earrings adorned with gleaming centered pearls.",
    details: "Elegant high-contrast noir and ivory pearl combination on cream branded presentation card.",
    features: ["Classic noir & ivory pearl", "Tactile velvety finish", "Pairs with any outfit", "Handcrafted in Kashmir"]
  },

  // BOUQUETS COLLECTION
  {
    id: "bouquet-lavender",
    title: "Lavender Dreams Bouquet",
    category: "Bouquets",
    badge: "Custom Order",
    price: "Starting ₹599",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg",
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
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg",
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
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242054/poshsaaz/rose_bouquet.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242054/poshsaaz/rose_bouquet.jpg",
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
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg"
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
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242071/poshsaaz/single_stem_flower.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242071/poshsaaz/single_stem_flower.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg"
    ],
    description: "Elegantly sculpted single-stem pipe cleaner flower with detailed leaves. Minimalist beauty for single vases or favors.",
    details: "Choose from rose, lily, tulip, or daisy single stems.",
    features: ["Minimalist aesthetic", "Flexible wire stem", "Great for party favors"]
  },

  // BOOKMARKS COLLECTION
  {
    id: "bookmark-pink",
    title: "Pink Cherry Blossom Bookmark",
    category: "Bookmarks",
    badge: "Made to Order",
    price: "Starting ₹249",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241652/poshsaaz/bookmark_flower_pink.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241652/poshsaaz/bookmark_flower_pink.jpg", "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241742/poshsaaz/handmade_bookmark.jpg"],
    description: "Mark your moments with handmade beauty. Every page deserves a little bloom. Delicate pink pipe cleaner cherry blossom stem with soft satin tassel.",
    details: "Slim profile designed to fit inside hardcovers and paperbacks smoothly without damaging pages. Handcrafted in Kashmir with love.",
    instagramUrl: "https://www.instagram.com/reel/DbOTtopyZaa/",
    features: ["Slim page-safe design", "Silky satin tassel", "Crafted with love in Kashmir"]
  },
  {
    id: "bookmark-lavender",
    title: "Lavender Blossom Bookmark",
    category: "Bookmarks",
    badge: "Made to Order",
    price: "Starting ₹249",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241674/poshsaaz/bookmark_lavender.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241674/poshsaaz/bookmark_lavender.jpg"],
    description: "Purple chenille lavender sprig bookmark with deep purple satin tassel charm. Perfect for book lovers.",
    details: "Durable pipe cleaner stem wire wrapped in soft velvet yarn.",
    instagramUrl: "https://www.instagram.com/reel/DbLlE8nyJra/",
    features: ["Deep purple satin tassel", "Page-safe slim design", "Hand-twisted chenille"]
  },
  {
    id: "bookmark-daisy",
    title: "Daisy Chain Ribbon Bookmark",
    category: "Bookmarks",
    badge: "Made to Order",
    price: "Starting ₹249",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241697/poshsaaz/bookmark_daisy.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241697/poshsaaz/bookmark_daisy.jpg"],
    description: "Charming white and yellow pipe cleaner daisy chain with dark green satin ribbon marker.",
    details: "Delicate flower chain designed to mark special pages.",
    instagramUrl: "https://www.instagram.com/reel/DbIvGMFy85j/",
    features: ["Triple daisy chain", "Satin ribbon loop", "Aesthetic book accessory"]
  },
  {
    id: "bookmark-sunflower",
    title: "Sunshine Sunflower Bookmark",
    category: "Bookmarks",
    badge: "Made to Order",
    price: "Starting ₹249",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241719/poshsaaz/bookmark_sunflower.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241719/poshsaaz/bookmark_sunflower.jpg"],
    description: "Bright yellow miniature pipe cleaner sunflower with green stem and golden silk tassel.",
    details: "Brings bright golden warmth to every chapter.",
    instagramUrl: "https://www.instagram.com/reel/DbDu9C2yt2r/",
    features: ["Vibrant yellow bloom", "Golden silk tassel", "Handcrafted in Kashmir"]
  },

  // CHARGER COVERS
  {
    id: "charger-cover-pastel",
    title: "Pastel Blossom Charger Cover",
    category: "Charger Covers",
    badge: "Custom Order",
    price: "Starting ₹399",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241776/poshsaaz/charger_cover_pastel.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241776/poshsaaz/charger_cover_pastel.jpg", "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241756/poshsaaz/charger_cover.jpg"],
    description: "Handmade with love, crafted to protect. Make your charger look as beautiful as you are. Spiral chenille floral coils with pearl embellishments.",
    details: "Fits iPhone and Android lightning/USB-C cables. Protects cord ends from fraying.",
    instagramUrl: "https://www.instagram.com/reel/Dapkh2mSd3Z/",
    features: ["Anti-fraying cable protection", "Pearl blossom details", "Universal cable fit"]
  },
  {
    id: "charger-cover-rose",
    title: "Rose Vine Charger Cover",
    category: "Charger Covers",
    badge: "Custom Order",
    price: "Starting ₹399",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241795/poshsaaz/charger_cover_rose.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241795/poshsaaz/charger_cover_rose.jpg"],
    description: "Handcrafted red and pink pipe cleaner rose vine cable protector wrapped neatly around phone charger cords.",
    details: "Plush chenille roses with leafy vines protect cable joints.",
    instagramUrl: "https://www.instagram.com/reel/Dapkh2mSd3Z/",
    features: ["Red & blush roses", "Durable wire spiral", "Fits all chargers"]
  },
  {
    id: "charger-cover-lavender",
    title: "Lavender Garden Charger Cover",
    category: "Charger Covers",
    badge: "Custom Order",
    price: "Starting ₹399",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241819/poshsaaz/charger_cover_lavender.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241819/poshsaaz/charger_cover_lavender.jpg"],
    description: "Soft purple chenille lavender floral cable sleeve wrap designed to protect and decorate charger cords.",
    details: "Coiled fuzzy chenille stems provide cushioned protection.",
    instagramUrl: "https://www.instagram.com/reel/Dapkh2mSd3Z/",
    features: ["Coiled lavender wrap", "Fuzzy chenille texture", "Prevents cable bent stress"]
  },
  {
    id: "charger-cover-floral",
    title: "Spiral Chenille Cable Sleeve",
    category: "Charger Covers",
    badge: "Custom Order",
    price: "Starting ₹399",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241756/poshsaaz/charger_cover.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241756/poshsaaz/charger_cover.jpg"],
    description: "Pastel pipe cleaner cable wrap with cute miniature flower blossoms and pearl drops.",
    details: "Full cable coverage with flexible pipe cleaner coils.",
    instagramUrl: "https://www.instagram.com/reel/Dapkh2mSd3Z/",
    features: ["Full length wrap", "Cute flower accents", "Handmade craft"]
  },

  // MOBILE COVERS
  {
    id: "mobile-cover-blue-chenille",
    title: "Handcrafted Blue Rosette Mobile Cover",
    category: "Mobile Covers",
    badge: "Best Seller",
    price: "Starting ₹599",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241861/poshsaaz/mobile_cover_blue.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241861/poshsaaz/mobile_cover_blue.jpg", "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241875/poshsaaz/mobile_cover_blue_real.jpg"],
    description: "Carry your style everywhere. Signature Poshsaaz handcrafted sky blue chenille stem phone case with royal blue 3D rosette and daisy blossoms.",
    details: "Custom-wrapped in soft vertical pipe cleaner stems with plush border framing and 3D floral accents.",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
    features: ["Sky blue chenille stem wrap", "3D royal blue rosette flower", "Custom fit for any phone model"]
  },
  {
    id: "mobile-cover-pearl-pink",
    title: "3D Floral Pink Mobile Cover",
    category: "Mobile Covers",
    badge: "Custom Order",
    price: "Starting ₹599",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241900/poshsaaz/mobile_cover_pearl_pink.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241900/poshsaaz/mobile_cover_pearl_pink.jpg", "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241921/poshsaaz/mobile_cover_poshsaaz_exact.jpg"],
    description: "Handcrafted mobile cover adorned with 3D pipe cleaner pink roses, white daisies, and pearl accents.",
    details: "Custom-fitted to your exact phone model. Lightweight, tactile, and completely unique.",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
    features: ["Custom phone fit", "Tactile 3D floral art", "Pearl accent embellishments"]
  },
  {
    id: "mobile-cover-lavender",
    title: "Lavender Fields 3D Mobile Cover",
    category: "Mobile Covers",
    badge: "Custom Order",
    price: "Starting ₹599",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241940/poshsaaz/mobile_cover_lavender.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241940/poshsaaz/mobile_cover_lavender.jpg"],
    description: "Elegant phone case embellished with 3D purple pipe cleaner lavender sprigs and cascading pearl drops.",
    details: "Handcrafted chenille stem embroidery on protective clear phone case.",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
    features: ["Handcrafted lavender sprigs", "Protective clear case", "Pearl drop accents"]
  },
  {
    id: "mobile-cover-sunflower",
    title: "Sunflower Garden Mobile Cover",
    category: "Mobile Covers",
    badge: "Custom Order",
    price: "Starting ₹599",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241958/poshsaaz/mobile_cover_sunflower.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241958/poshsaaz/mobile_cover_sunflower.jpg"],
    description: "Vibrant smartphone case featuring 3D handcrafted yellow chenille sunflowers and green leaves.",
    details: "Bright and joyful accessory handmade in Kashmir.",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
    features: ["Vibrant sunflower art", "Sturdy chenille stems", "Custom fit"]
  },

  // KEYCHAINS
  {
    id: "keychain-tulip",
    title: "Handmade Tulip Floral Keychain",
    category: "Keychains",
    badge: "Made to Order",
    price: "Starting ₹199",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241978/poshsaaz/keychain_tulip.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241978/poshsaaz/keychain_tulip.jpg", "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241992/poshsaaz/handmade_keychain.jpg"],
    description: "Every key deserves a beautiful companion. Custom handmade tulip flower keychain with gold hardware and dangling pearl charm.",
    details: "Durable pipe cleaner construction backed with protective coating.",
    instagramUrl: "https://www.instagram.com/p/Dahs4ULSWex/",
    features: ["Gold metal keyring", "Lightweight & durable", "Great aesthetic gift"]
  },
  {
    id: "keychain-blossom",
    title: "Handcrafted Blossom Keychain",
    category: "Keychains",
    badge: "Made to Order",
    price: "Starting ₹199",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241992/poshsaaz/handmade_keychain.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241992/poshsaaz/handmade_keychain.jpg"],
    description: "Colorful multi-petal pipe cleaner flower keychain with pearl center and gold clasp.",
    details: "Lightweight accessory for keys, purses, and backpacks.",
    instagramUrl: "https://www.instagram.com/p/Dahs4ULSWex/",
    features: ["Multi-color petals", "Gold lobster clasp", "Handmade in Kashmir"]
  },
  {
    id: "keychain-sunflower",
    title: "Mini Sunflower Key Ring",
    category: "Keychains",
    badge: "Made to Order",
    price: "Starting ₹199",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg"],
    description: "Cute miniature yellow sunflower chenille key charm with golden leaf accent.",
    details: "Bright flower charm for keyrings.",
    instagramUrl: "https://www.instagram.com/p/Dahs4ULSWex/",
    features: ["Yellow sunflower charm", "Gold ring", "Compact size"]
  },
  {
    id: "keychain-lavender",
    title: "Lavender Sprig Charm Keychain",
    category: "Keychains",
    badge: "Made to Order",
    price: "Starting ₹199",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241674/poshsaaz/bookmark_lavender.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241674/poshsaaz/bookmark_lavender.jpg"],
    description: "Delicate purple pipe cleaner lavender sprig keyring with dangling pearl drop.",
    details: "Everlasting lavender mini charm.",
    instagramUrl: "https://www.instagram.com/p/Dahs4ULSWex/",
    features: ["Lavender sprig", "Pearl drop", "Durable wire base"]
  },

  // WALL DECOR
  {
    id: "wall-decor-hoop",
    title: "Handcrafted Floral Wall Hoop",
    category: "Wall Décor",
    badge: "Custom Order",
    price: "Starting ₹899",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242098/poshsaaz/wall_decor.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242098/poshsaaz/wall_decor.jpg"],
    description: "Bohemian handcrafted wall hanging featuring pipe cleaner flowers woven into a natural wooden hoop with trailing green foliage.",
    details: "Adds cozy Kashmir artisan warmth to bedrooms, nurseries, or living room accent walls.",
    instagramUrl: "https://www.instagram.com/p/Dag3gc1ShDn/",
    features: ["Natural wooden hoop", "Cascading greenery & ribbons", "Ready to hang"]
  },
  {
    id: "wall-decor-wreath",
    title: "Botanical Wreath Wall Hanging",
    category: "Wall Décor",
    badge: "Custom Order",
    price: "Starting ₹899",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242054/poshsaaz/rose_bouquet.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242054/poshsaaz/rose_bouquet.jpg"],
    description: "Woven wooden ring decorated with red and blush chenille roses and golden ribbons.",
    details: "Handmade wall art for cozy home interiors.",
    instagramUrl: "https://www.instagram.com/p/Dag3gc1ShDn/",
    features: ["Rose floral arrangement", "Wooden hoop", "Satin ribbon accent"]
  },
  {
    id: "wall-decor-tapestry",
    title: "Cascading Chenille Flower Tapestry",
    category: "Wall Décor",
    badge: "Custom Order",
    price: "Starting ₹999",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg"],
    description: "Hanging wooden branch arrangement with trailing pipe cleaner lavender and wildflowers.",
    details: "Artisan Kashmiri handwork for nursery or living rooms.",
    instagramUrl: "https://www.instagram.com/p/Dag3gc1ShDn/",
    features: ["Branch hanging", "Cascading lavender", "Natural rustic aesthetic"]
  },
  {
    id: "wall-decor-sunburst",
    title: "Sunburst Floral Wall Hoop",
    category: "Wall Décor",
    badge: "Custom Order",
    price: "Starting ₹899",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg"],
    description: "Bright yellow sunflower and daisy wooden hoop wall hanging with macrame fringe.",
    details: "Handwoven chenille flowers on bamboo ring.",
    instagramUrl: "https://www.instagram.com/p/Dag3gc1ShDn/",
    features: ["Bright sunflower bloom", "Macrame fringe", "Handmade in Kashmir"]
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
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754123/poshsaaz/lavender_dreams_hairband.jpg"],
    description: "Soft lavender purple florals made of fuzzy chenille wire with delicate pearl centers. A dreamy accessory for weddings.",
    details: "Hand-twisted lavender flowers set on comfortable headband structure.",
    features: ["Soft lavender hue", "Comfortable all-day wear", "Bridal favorite"]
  },
  {
    id: "hairband-sunflower",
    title: "Sunflower Crown Hairband",
    category: "Hairbands",
    badge: "Made to Order",
    price: "Starting ₹499",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg"],
    description: "Joyful yellow sunflower crown headband made with pipe cleaner petals and green wire band.",
    details: "Lightweight and flexible for long wear.",
    features: ["Yellow sunflower arrangement", "Comfortable fit", "Handmade"]
  },
  {
    id: "hairband-daisy",
    title: "White Pearl Daisy Hairband",
    category: "Hairbands",
    badge: "Made to Order",
    price: "Starting ₹499",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241652/poshsaaz/bookmark_flower_pink.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241652/poshsaaz/bookmark_flower_pink.jpg"],
    description: "Delicate white chenille daisy headband with pearl centers and gold wire accents.",
    details: "Perfect for bridal showers, events, and everyday styling.",
    features: ["White daisy petals", "Pearl accents", "Velvet band"]
  },

  // CLIPS & COMBS
  {
    id: "clips-set",
    title: "Floral Clips Collection",
    category: "Clips & Combs",
    badge: "Made to Order",
    price: "Starting ₹349",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754165/poshsaaz/floral_clips_collection.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754165/poshsaaz/floral_clips_collection.jpg"],
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
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754182/poshsaaz/pearl_blossom_comb.jpg"],
    description: "Decorative hair comb with cascading floral design. Gold leaves and pearl accents create timeless bridal elegance.",
    details: "Precision golden hair comb embellished with white and blush chenille blossoms.",
    features: ["Golden hair comb", "Cascading pearls & leaves", "Elegant updo accent"]
  },
  {
    id: "clips-rose",
    title: "Mini Rose Alligator Pins",
    category: "Clips & Combs",
    badge: "Made to Order",
    price: "Starting ₹299",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242054/poshsaaz/rose_bouquet.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242054/poshsaaz/rose_bouquet.jpg"],
    description: "Pair of handcrafted red and blush pink pipe cleaner rose alligator hair pins.",
    details: "Sturdy grip gold clips with miniature rose rosettes.",
    features: ["Set of 2 clips", "Miniature roses", "Gold-tone hardware"]
  },
  {
    id: "mobile-cover-8-collection",
    title: "Custom 8-Design Chenille Phone Case Collection",
    category: "Mobile Covers",
    badge: "New Arrival",
    price: "Starting ₹599",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335554/poshsaaz/mobile_covers_collection_8.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335554/poshsaaz/mobile_covers_collection_8.jpg"],
    description: "Choose from 8 distinct handcrafted pipe cleaner designs: Blue Tulips with Bow, White Daisy, Cherry Bow, Pink Lilies, Purple Jasmine, and Mint Green Bows.",
    details: "Available for all iPhone, Samsung, and Android phone models. Custom hand-twisted fuzzy chenille embroidery.",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
    features: ["8 unique floral styles", "3D pipe cleaner embroidery", "Soft protective texture"]
  },

  // WALL DECOR
  {
    id: "curtain-tieback-purple",
    title: "Handcrafted Floral Curtain Tie-Backs",
    category: "Wall Décor",
    badge: "Best Seller",
    price: "Starting ₹699",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335556/poshsaaz/curtain_tieback_single.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335556/poshsaaz/curtain_tieback_single.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335557/poshsaaz/curtain_tieback_pair.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335565/poshsaaz/curtain_tieback_interior.png"
    ],
    description: "Elegant purple chenille stem floral curtain tie-backs with hanging pom-poms and pearl centers.",
    details: "Adds luxurious Kashmiri artisan charm to curtains, drapes, and living room interiors.",
    features: ["3D Purple chenille blossom", "Pearl center accent", "Hanging pom-pom tassels"]
  },

  // HAIRBANDS
  {
    id: "hairband-purple-rose-set",
    title: "Purple Velvet Rose Hairband & Clips Set",
    category: "Hairbands",
    badge: "Combo Set",
    price: "Starting ₹649",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335559/poshsaaz/purple_headband_clips_set.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335559/poshsaaz/purple_headband_clips_set.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785335561/poshsaaz/purple_headband_clips_real.jpg"
    ],
    description: "Matching set containing a soft purple velvet chenille headband with miniature roses, plus a pair of gold alligator hair pins with rose rosettes.",
    details: "Beautifully crafted set for girls and women. Includes 1 headband + 2 hair clips.",
    features: ["Matching 3-piece hair set", "Velvet chenille wrap", "Pink pearl drop centers"]
  },
  {
    id: "comb-lavender",
    title: "Lavender Blossom Hair Comb",
    category: "Clips & Combs",
    badge: "Made to Order",
    price: "Starting ₹399",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg",
    images: ["https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg"],
    description: "Side hair comb embellished with purple pipe cleaner lavender and dangling pearl drops.",
    details: "Ideal for bridal updos and formal hairstyles.",
    features: ["Gold hair comb", "Lavender sprigs", "Pearl drops"]
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

