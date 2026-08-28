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
  // 1. CURTAIN TIEBACKS
  {
    id: "curtain-tie-orange-white",
    title: "Floral Curtain Tie (Orange & White)",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹200 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923127/poshsaaz/curtain_tieback_amber_ivory_blue_drape.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923127/poshsaaz/curtain_tieback_amber_ivory_blue_drape.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923129/poshsaaz/curtain_tieback_amber_ivory_silk.jpg"
    ],
    description: "Handcrafted 5-petal orange and white striped chenille velvet flower curtain tieback with flexible holdback.",
    details: "Gentle on all curtain fabrics. Secure wrap and hold without damaging silk or velvet drapes.",
    features: ["Orange & white striped petals", "Magnetic / tieback closure", "Handmade in Kashmir", "₹200 per piece"]
  },
  {
    id: "curtain-tie-maroon-rose",
    title: "Floral Curtain Tie (Maroon & Rose)",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹250 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924834/poshsaaz/curtain_tieback_maroon_rose_logo.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924834/poshsaaz/curtain_tieback_maroon_rose_logo.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923137/poshsaaz/curtain_tieback_crimson_rose_black_silk.png"
    ],
    description: "Twin layered maroon and rose pink striped velvet flower curtain holdbacks with soft braided cord ties.",
    details: "Rich velvet texture designed for living rooms, bedrooms, and festive home drapery.",
    features: ["Twin maroon & rose blooms", "Soft braided cord", "No wall drilling needed", "₹250 per piece"]
  },
  {
    id: "curtain-tie-purple-pompom",
    title: "Floral Curtain Tie with Pom-Poms (Purple)",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹250 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923145/poshsaaz/curtain_tieback_purple_pompom_pattern.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923145/poshsaaz/curtain_tieback_purple_pompom_pattern.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923157/poshsaaz/curtain_tieback_purple_pompom_sheer.png"
    ],
    description: "Royal purple and white velvet flower curtain tieback centered with a pearl and playful dangling pom-poms.",
    details: "Universal fit for all drapery types. Adds charming floral elegance to curtains.",
    features: ["Purple & white velvet petals", "Centered white pearl", "Dangling velvet pom-poms", "₹250 per piece"]
  },

  // 2. FLOWER POTS & CAR CHARMS
  {
    id: "flower-pot-sunflower",
    title: "Flower Pot (Sunflower)",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923169/poshsaaz/flower_pot_sunflower_mocha.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923169/poshsaaz/flower_pot_sunflower_mocha.png"
    ],
    description: "Handmade fuzzy orange sunflowers in a hand-woven brown chenille velvet pot for desks and home decor.",
    details: "Freestanding everlasting potted flower. Never wilts and requires zero maintenance.",
    features: ["Handcrafted sunflowers", "Woven chenille pot", "Freestanding base", "₹400"]
  },
  {
    id: "flower-pot-striped-heart",
    title: "Flower Pot (Striped Heart)",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923177/poshsaaz/flower_pot_pastel_striped_heart.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923177/poshsaaz/flower_pot_pastel_striped_heart.png"
    ],
    description: "Bright yellow and pink fuzzy blossoms in a candy-striped pot decorated with a purple heart applique.",
    details: "Tactile, playful desk bloom hand-twisted from premium soft velvet stems.",
    features: ["Pink & yellow flowers", "Striped pot with heart", "Zero maintenance", "₹400"]
  },
  {
    id: "flower-pot-blue-pearl",
    title: "Flower Pot (Blue Pearl)",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923185/poshsaaz/flower_pot_orange_blue_pearl.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923185/poshsaaz/flower_pot_orange_blue_pearl.png"
    ],
    description: "Vibrant orange flowers with pearl centers in a royal blue velvet pot ringed with a lustrous white pearl garland.",
    details: "Opulent color combination with delicate floral side charm.",
    features: ["Pearl-centered flowers", "Pearl garland pot rim", "Royal blue plush pot", "₹400"]
  },
  {
    id: "flower-car-charm",
    title: "Flower Car Charm",
    category: "Car Charms",
    badge: "New Arrival",
    price: "₹250",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923188/poshsaaz/car_charm_peppermint_white_pot.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923188/poshsaaz/car_charm_peppermint_white_pot.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923190/poshsaaz/car_charm_peppermint_cyan_pot.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923193/poshsaaz/car_charm_peppermint_navy_pot.jpg"
    ],
    description: "Miniature handmade red and white peppermint flower in a mini planter pot for car dashboards and study tables.",
    details: "Available in White, Cyan-Striped, and Navy-Striped mini pot options.",
    features: ["Dashboard & desktop size", "Red & white flower petals", "Available in 3 pot colors", "₹250"]
  },

  // 3. HAIR ACCESSORIES & SETS
  {
    id: "hairpin-hairband-tricolor-set",
    title: "Hair Pin with Hair Band Set (Tricolor)",
    category: "Hairbands",
    badge: "Heritage Edition",
    price: "Hair Pin with Hair Band ₹300 | Only Hair Pin ₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923205/poshsaaz/hairband_tricolor_flower_set.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923205/poshsaaz/hairband_tricolor_flower_set.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923200/poshsaaz/hair_clips_tricolor_puff_pearl.png"
    ],
    description: "Saffron, white, and emerald green chenille flower headband and matching alligator hairpins with pearl centers.",
    details: "Choose between complete combo set (Hair Pin with Hair Band ₹300) or individual hairpins (Only Hair Pin ₹150).",
    features: ["Hair Pin with Hair Band ₹300", "Only Hair Pin ₹150", "Tricolor saffron, white & green", "Pearl center details"]
  },
  {
    id: "hair-bun-ring-stick",
    title: "Flower Hair Bun Ring with Hair Stick",
    category: "Hairbands",
    badge: "Trending",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924849/poshsaaz/hair_bun_rings_showcase_logo.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924849/poshsaaz/hair_bun_rings_showcase_logo.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923214/poshsaaz/hair_bun_ring_collection_showcase.png"
    ],
    description: "Handcrafted flower hair bun ring paired with a matching floral hairpin stick for effortless, elegant hair styling.",
    details: "Available in 15 vibrant colors (sunflower yellow, pink, purple, lavender, blue, green, orange, red, and mocha).",
    features: ["Includes bun ring & matching stick pin", "Available in 15 vibrant colors", "Snag-free velvet finish", "₹200"]
  },
  {
    id: "hairband-clips-boutique-set",
    title: "Floral Hairband & Clips Set (4-Piece Set)",
    category: "Hairbands",
    badge: "Boutique Set",
    price: "₹350",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924850/poshsaaz/hair_set_red_white_four_piece.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924850/poshsaaz/hair_set_red_white_four_piece.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924852/poshsaaz/hair_set_pink_white_four_piece.jpg"
    ],
    description: "4-piece luxury hair accessory boutique gift set including matching floral hairband, claw clip / scrunchies, and hairpins.",
    details: "Available in Red & White and Pink & White color editions.",
    features: ["4-piece matching hair set", "Floral hairband + claw clip + hairpins", "Velvet chenille finish", "₹350"]
  },
  {
    id: "flower-hair-rubber-band",
    title: "Flower Hair Rubber Band",
    category: "Hairbands",
    badge: "Best Seller",
    price: "₹100",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923235/poshsaaz/scrunchies_four_color_collection.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923235/poshsaaz/scrunchies_four_color_collection.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923224/poshsaaz/scrunchie_lavender_pink_band.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923229/poshsaaz/scrunchie_violet_pink_band.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923232/poshsaaz/scrunchie_orange_cream_band.jpg"
    ],
    description: "Plush velvet daisy flowers securely mounted on soft, gentle elastic hair rubber bands / scrunchies.",
    details: "Available in Lavender, Deep Violet, Amber Orange, and Royal Blue shades.",
    features: ["Soft elastic rubber band", "Fuzzy chenille daisy flower", "No hair snagging", "₹100"]
  },

  // 4. WALL DÉCOR & HANGINGS
  {
    id: "grand-cascading-wall-hanging",
    title: "Grand Cascading Wall Hanging",
    category: "Wall Décor",
    badge: "Masterpiece",
    price: "₹1,000",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924820/poshsaaz/wall_hanging_pink_cascading_logo.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924820/poshsaaz/wall_hanging_pink_cascading_logo.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924819/poshsaaz/wall_hanging_yellow_cascading_logo.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924821/poshsaaz/wall_hanging_mocha_cascading_logo.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924827/poshsaaz/wall_hanging_purple_cascading_logo.png"
    ],
    description: "Grand double-hoop wall hanging with over 25 hand-sculpted velvet roses cascading down leafy vines.",
    details: "Available in Blush Pink, Sunshine Yellow, Chocolate Mocha, and Lavender Purple colorways.",
    features: ["25+ handmade velvet roses", "Double wrapped hoop frame", "4 signature colorways", "₹1,000"]
  },
  {
    id: "floral-wall-hanging",
    title: "Floral Wall Hanging",
    category: "Wall Décor",
    badge: "New Arrival",
    price: "₹500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922120/poshsaaz/wall_decor_autumn_wreath.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922120/poshsaaz/wall_decor_autumn_wreath.jpg"
    ],
    description: "Handcrafted circular floral wall hanging wreath with velvet flowers in terracotta, mocha, and cream tones with hanging ribbon.",
    details: "Handmade Kashmiri floral wreath for door and wall decoration.",
    features: ["Autumn botanical flowers", "Hanging satin loop ribbon", "Everlasting wall decor", "₹500"]
  },

  // 5. HAND CUFFS & BRACELETS
  {
    id: "floral-hand-cuff-noir-daisy",
    title: "Floral Hand Cuffs / Bracelet (Noir Daisy)",
    category: "Hand Cuffs",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924829/poshsaaz/hand_cuff_noir_daisy_wrist.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924829/poshsaaz/hand_cuff_noir_daisy_wrist.jpg"
    ],
    description: "Black and ivory velvet daisy chain wrist cuff bracelet handcrafted with soft chenille stems.",
    details: "Lightweight and comfortable floral jewelry for casual and festive wear.",
    features: ["Noir velvet daisy chain", "Flexible wrist fit", "Soft against skin", "₹200"]
  },
  {
    id: "floral-hand-cuff-blue-pearl",
    title: "Floral Hand Cuffs / Bracelet (Blue Rose & Pearl)",
    category: "Hand Cuffs",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924831/poshsaaz/hand_cuff_blue_rose_pearl_logo.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924831/poshsaaz/hand_cuff_blue_rose_pearl_logo.jpg"
    ],
    description: "Sky blue and white velvet rose bloom with pearl center on a lustrous white pearl bead wrist strand.",
    details: "Photogenic bridal and special occasion hand jewelry.",
    features: ["Two-tone blue velvet rose", "Lustrous pearl bead strand", "Secure clasp", "₹200"]
  },

  // 6. BOUQUETS COLLECTION
  {
    id: "royal-crimson-flower-bouquet",
    title: "Royal Crimson Flower Bouquet",
    category: "Bouquets",
    badge: "Luxury Edition",
    price: "₹700",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923256/poshsaaz/bouquet_royal_crimson_pearl_velvet.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923256/poshsaaz/bouquet_royal_crimson_pearl_velvet.png"
    ],
    description: "Deep crimson red roses with pearl centers in a gold-crested matte black wrap with green planter base.",
    details: "Opulent romantic bouquet handcrafted from premium velvet chenille wire.",
    features: ["Deep crimson pearl roses", "Gold-foiled luxury wrap", "Freestanding pot base", "₹700"]
  },
  {
    id: "peppermint-daisy-flower-bouquet",
    title: "Peppermint Daisy Flower Bouquet",
    category: "Bouquets",
    badge: "New Arrival",
    price: "₹500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923260/poshsaaz/bouquet_peppermint_daisy_cup_bench.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923260/poshsaaz/bouquet_peppermint_daisy_cup_bench.jpg"
    ],
    description: "Red and white striped daisy stem arrangement seated in a red knit-textured holder cup.",
    details: "Everlasting boutique gift bouquet for home and office decor.",
    features: ["Red & white striped daisy", "Knit-textured vase cup", "Never wilts or fades", "₹500"]
  },
  {
    id: "pearl-daisy-flower-bouquet",
    title: "Pearl Daisy Flower Bouquet (Pink / Yellow / Lavender)",
    category: "Bouquets",
    badge: "Best Seller",
    price: "₹800",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923265/poshsaaz/bouquet_pink_pearl_daisy_monochrome.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923265/poshsaaz/bouquet_pink_pearl_daisy_monochrome.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923269/poshsaaz/bouquet_yellow_pearl_daisy_monochrome.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923272/poshsaaz/bouquet_lavender_pearl_daisy_monochrome.jpg"
    ],
    description: "Monochromatic bouquet of 18+ velvety daisies with pearl centers wrapped in frosted paper with matching satin bow.",
    details: "Available in Blush Pink, Sunshine Yellow, and Lavender Violet.",
    features: ["18+ handmade pearl daisies", "Frosted paper wrap & ribbon", "3 color choices", "₹800"]
  },
  {
    id: "currency-origami-bouquet",
    title: "Currency Origami Bouquet",
    category: "Money Bouquets",
    badge: "Luxury Bespoke",
    price: "Starting ₹1,500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921259/poshsaaz/money_bouquet_purple_mandala.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921259/poshsaaz/money_bouquet_purple_mandala.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921255/poshsaaz/money_bouquet_white_flower.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921257/poshsaaz/money_bouquet_purple_teal.jpg"
    ],
    description: "Bespoke origami currency note bouquet folded into geometric floral petals with a velvet flower center in gold-bordered black wrap.",
    details: "Custom-made for weddings, anniversaries, and high-prestige gifting. Banknotes folded without damaging currency.",
    features: ["Precision folded currency petals", "Handmade velvet floral core", "Luxury gold-edge wrapping", "Starting ₹1,500 + custom cash"]
  },

  // 7. BOOKMARKS
  {
    id: "floral-stem-bookmark",
    title: "Floral Stem Bookmark",
    category: "Bookmarks",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924838/poshsaaz/bookmarks_five_colors_logo.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924838/poshsaaz/bookmarks_five_colors_logo.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924844/poshsaaz/bookmark_purple_ikigai_card.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924847/poshsaaz/bookmark_pink_ikigai_cover.png"
    ],
    description: "Slim handmade chenille flower stem bookmarks with pearl centers that rest flat between book pages.",
    details: "Available in Pink, Red, Orange, Blue, Yellow, and Lavender.",
    features: ["Slim page-safe stem", "Lustrous white pearl center", "Available in 6 vibrant colors", "₹150"]
  },

  // 8. KEYCHAINS & CHARMS
  {
    id: "flower-mobile-keychain",
    title: "Flower Mobile Keychain",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923290/poshsaaz/mobile_keychain_trio_daisy_charms.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923290/poshsaaz/mobile_keychain_trio_daisy_charms.jpg"
    ],
    description: "Pastel velvet daisy phone charm with lanyard strap for phone cases, keychains, and bag zippers.",
    details: "Available in Lavender, Sky Blue, and Fresh Green.",
    features: ["Pastel daisy flower head", "Phone case lanyard strap", "Lightweight & tactile", "₹150"]
  },
  {
    id: "shaped-keychains-novelty",
    title: "Shaped Keychain (Lollipop / Mouse / Rainbow)",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹150 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923284/poshsaaz/keychains_lollipop_mouse_rainbow_collection.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923284/poshsaaz/keychains_lollipop_mouse_rainbow_collection.png"
    ],
    description: "Whimsical handcrafted shaped chenille keychains with pearl accents: Swirl Lollipop, Mouse Charm, and Rainbow Arch.",
    details: "Sturdy keyrings for bag tags, backpacks, keys, and accessories.",
    features: ["Lollipop, Mouse & Rainbow designs", "Pearl bead embellishments", "Durable wire sculpting", "₹150 per piece"]
  },
  {
    id: "keychain-mini-flower-bouquets",
    title: "Handcrafted Keychain (Mini Bouquets & Potted Flowers)",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922632/poshsaaz/keychain_mini_lavender_bouquet.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922632/poshsaaz/keychain_mini_lavender_bouquet.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922636/poshsaaz/keychain_mini_tulip_bouquet.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922647/poshsaaz/keychain_potted_purple_flower.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922654/poshsaaz/keychain_mini_pink_diary_book.jpg"
    ],
    description: "Pocket-sized handmade miniature bouquets, 3D potted plants, and mini storybook charms with keyrings.",
    details: "Choose from Mini Lavender Bouquet, Mini Tulip Cone, Potted Purple Flower, or Mini Velvet Book.",
    features: ["Mini floral bouquets & potted plants", "Sturdy silver keyring & chain", "High-durability wire craft", "₹200"]
  },

  // 9. EARRINGS COLLECTION
  {
    id: "handmade-velvet-earrings-classic",
    title: "Handmade Velvet Earrings (Classic Styles)",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920961/poshsaaz/earrings_black_heart_pearl.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920961/poshsaaz/earrings_black_heart_pearl.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920963/poshsaaz/earrings_pink_white_bunny_pearl.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920966/poshsaaz/earrings_peppermint_swirl_studs.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920967/poshsaaz/earrings_chocolate_brown_heart.jpg"
    ],
    description: "Handcrafted fuzzy chenille velvet stud earrings with pearl centers on signature Poshsaaz presentation card.",
    details: "Styles available: Black Heart Pearl, Blush & White Heart, Peppermint Swirl, and Chocolate Brown Heart.",
    features: ["Plush chenille velvet", "Lustrous white pearls", "Lightweight hypoallergenic studs", "₹150"]
  },
  {
    id: "handmade-velvet-earrings-dangles",
    title: "Handmade Velvet Earrings (Dangles & Bows)",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹160",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921633/poshsaaz/earrings_black_blossom_gold_drop.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921633/poshsaaz/earrings_black_blossom_gold_drop.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921634/poshsaaz/earrings_purple_blossom_pearl_drop.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921636/poshsaaz/earrings_pastel_blue_bow_pearl.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921643/poshsaaz/earrings_noir_crimson_ballerina_heart.png"
    ],
    description: "Artisan botanical blossom dangles, baby blue velvet bow-ties, and ballerina heart studs with pearls and gold spheres.",
    details: "Styles available: Noir Blossom Gold, Lavender Blossom Pearl, Baby Blue Bow Pearl, and Noir & Crimson Ballerina Heart.",
    features: ["Botanical dangles & bow-ties", "Pearls & metallic gold spheres", "French hook wires & studs", "₹160"]
  },

  // 10. CHARGER & MOBILE COVERS & GIFT HAMPERS
  {
    id: "charger-cover-spiral",
    title: "Handcrafted Spiral Charger Cable Cover",
    category: "Charger Covers",
    badge: "Made to Order",
    price: "Starting ₹299",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924156/poshsaaz/charger_cover_luxury.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924156/poshsaaz/charger_cover_luxury.jpg"
    ],
    description: "Velvet floral cable protector coiled with blush pink blossoms and pearl beads. Prevents fraying while looking gorgeous.",
    details: "Universal fit for iPhone, USB-C, and all charging cables.",
    features: ["Protective spiral velvet wrap", "Pearl blossom design", "Universal cable fit", "Starting ₹299"]
  },
  {
    id: "mobile-cover-floral",
    title: "3D Floral Mobile Phone Cover",
    category: "Mobile Covers",
    badge: "Custom Order",
    price: "Starting ₹499",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924159/poshsaaz/mobile_cover_luxury.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924159/poshsaaz/mobile_cover_luxury.jpg"
    ],
    description: "Carry art in your pocket. Soft 3D chenille flower bouquet sculpted directly onto crystal clear protective phone case.",
    details: "Custom made for iPhone, Samsung, OnePlus, and other phone models upon request.",
    features: ["3D raised velvet floral texture", "Transparent protective case", "Pearl-centered daisies", "Starting ₹499"]
  },
  {
    id: "gift-hamper-luxury-box",
    title: "Poshsaaz Luxury Bespoke Gift Hamper",
    category: "Gift Hampers",
    badge: "Bespoke Luxury",
    price: "Custom Pricing",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924161/poshsaaz/gift_hamper_luxury_box.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924161/poshsaaz/gift_hamper_luxury_box.jpg"
    ],
    description: "Signature Poshsaaz gift hamper box presented in gold-embossed matte cream packaging with champagne silk ribbons and custom product selections.",
    details: "Customized for weddings, bridal showers, corporate gifting, and luxury celebrations.",
    features: ["Gold-embossed gift box", "Curated full collection ensemble", "Champagne satin ribbon", "Fully customizable"]
  }
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amira Khan",
    role: "Bride",
    rating: 5,
    text: "The most beautiful floral pieces I've ever seen. The Kashmir craftsmanship is impeccable and it made our celebration extra special.",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    role: "Event Planner",
    rating: 5,
    text: "Poshsaaz creates magic with every piece. My clients are always amazed by the quality, softness, and attention to detail.",
  },
  {
    id: 3,
    name: "Zara Malik",
    role: "Fashion Designer",
    rating: 5,
    text: "The artistry and Kashmir tradition in every creation is remarkable. I recommend Poshsaaz to everyone looking for unique bespoke gifts.",
  },
  {
    id: 4,
    name: "Noor Hassan",
    role: "Customer",
    rating: 5,
    text: "Exceeded all my expectations. The bouquet and curtain tiebacks arrived beautifully packaged and looked even better in person.",
  },
  {
    id: 5,
    name: "Leila Syed",
    role: "Home Decor Enthusiast",
    rating: 5,
    text: "Every detail was perfect. The team was so helpful and the cascading rose wall hanging is the centerpiece of our living room.",
  },
];
