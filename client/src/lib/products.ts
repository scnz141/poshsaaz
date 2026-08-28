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
    id: "curtain-tieback-amber-ivory",
    title: "Amber & Ivory Striped Floral Curtain Tieback",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹200 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923127/poshsaaz/curtain_tieback_amber_ivory_blue_drape.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923127/poshsaaz/curtain_tieback_amber_ivory_blue_drape.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923129/poshsaaz/curtain_tieback_amber_ivory_silk.jpg"
    ],
    description: "Warm amber and ivory striped chenille velvet 5-petal flower curtain tieback with sculpted stamen center and flexible magnetic holdback.",
    details: "Hand-twisted bi-color chenille wire petals provide a soft, rich grip for silk, velvet, or sheer drapery.",
    features: ["Bi-color amber & ivory pattern", "Flexible magnetic tieback", "Protects delicate curtain fabric", "Handcrafted in Kashmir"]
  },
  {
    id: "curtain-tieback-crimson-rose",
    title: "Crimson & Rose Striped Velvet Curtain Holdback",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹250 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923137/poshsaaz/curtain_tieback_crimson_rose_black_silk.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923137/poshsaaz/curtain_tieback_crimson_rose_black_silk.png"
    ],
    description: "Opulent twin crimson and blush pink striped velvet flower holdbacks with twisted cord ties on luxury black silk.",
    details: "Layered double flower arrangement designed for grand living rooms and master bedroom drapery.",
    features: ["Dual crimson striped blooms", "Soft twisted braided cord", "No wall drilling required", "Everlasting velvet floral craft"]
  },
  {
    id: "curtain-tieback-purple-pompom",
    title: "Royal Violet Blossom Curtain Tieback with Pom-Poms",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹250 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923145/poshsaaz/curtain_tieback_purple_pompom_pattern.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923145/poshsaaz/curtain_tieback_purple_pompom_pattern.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923157/poshsaaz/curtain_tieback_purple_pompom_sheer.png"
    ],
    description: "Royal purple and white tipped flower curtain tieback centered with turquoise mini petals and pearl beads, finished with playful dangling velvet pom-poms.",
    details: "A breathtaking Kashmiri artisan curtain accessory that adds majestic violet charm to patterned or sheer drapes.",
    features: ["Multi-layer purple petals", "Centered white pearl", "Dangling velvet pom-poms", "Universal curtain fit"]
  },
  {
    id: "curtain-tieback-purple",
    title: "Pastel Lavender Floral Curtain Tieback",
    category: "Curtain Tiebacks",
    badge: "Best Seller",
    price: "Starting ₹299",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1785242200/poshsaaz/curtain_tieback_purple.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1785242200/poshsaaz/curtain_tieback_purple.jpg"
    ],
    description: "Exquisite handmade chenille floral curtain tieback in lavender, cream, and turquoise tones with dangling pearl drops.",
    details: "Gentle on all curtain types. Strong magnetic or wrap closure.",
    features: ["Pastel floral petals", "Cascading pearl drops", "No-slip hold"]
  },

  // 2. FLOWER POTS & CAR CHARMS
  {
    id: "flower-pot-sunflower-mocha",
    title: "Mountain Meadow Sunflower Planter Pot",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923169/poshsaaz/flower_pot_sunflower_mocha.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923169/poshsaaz/flower_pot_sunflower_mocha.png"
    ],
    description: "Everlasting orange sunflowers with plush dark brown centers blossoming from a fully chenille-woven mocha brown planter pot.",
    details: "Handmade Kashmiri floral planter pot for desks, coffee tables, vanity stations, and windowsill decor. Never needs water.",
    features: ["Plush sunflower cluster", "Hand-woven textured planter", "Sturdy freestanding base", "Everlasting botanic art"]
  },
  {
    id: "flower-pot-pastel-striped-heart",
    title: "Pastel Blossom Striped Heart Planter Pot",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923177/poshsaaz/flower_pot_pastel_striped_heart.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923177/poshsaaz/flower_pot_pastel_striped_heart.png"
    ],
    description: "Cheerful bright yellow and bubblegum pink fuzzy blooms seated in a candy cane striped pot decorated with a layered lilac heart motif.",
    details: "Sculpted completely by hand from high-density chenille stems for a tactile, playful aesthetic.",
    features: ["Pink & yellow flower bouquet", "Candy-striped planter with heart", "Zero maintenance decor", "Handmade in Kashmir"]
  },
  {
    id: "flower-pot-orange-blue-pearl",
    title: "Royal Blue & Pearl Floral Desk Planter",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923185/poshsaaz/flower_pot_orange_blue_pearl.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923185/poshsaaz/flower_pot_orange_blue_pearl.png"
    ],
    description: "Vibrant tangerine orange flowers with centered pearl studs emerging from a royal blue velvet pot ringed with a lustrous white pearl necklace garland.",
    details: "High-contrast royal blue and orange botanical decor with delicate side floral charm.",
    features: ["Pearl-centered orange flowers", "Pearl garland pot rim", "Royal blue plush pot", "Premium artisan finish"]
  },
  {
    id: "car-charm-peppermint-planter",
    title: "Peppermint Blossom Car Charm & Mini Planter",
    category: "Car Charms",
    badge: "New Arrival",
    price: "₹250",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923188/poshsaaz/car_charm_peppermint_white_pot.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923188/poshsaaz/car_charm_peppermint_white_pot.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923190/poshsaaz/car_charm_peppermint_cyan_pot.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923193/poshsaaz/car_charm_peppermint_navy_pot.jpg"
    ],
    description: "Adorable miniature red-and-white peppermint blossom planter designed for car dashboards, rearview mirrors, study desks, and compact spaces.",
    details: "Available in White, Cyan-Striped, and Navy-Striped mini pot styles. Crafted from resilient chenille velvet.",
    features: ["Compact car dashboard size", "Red & white spiral petals", "Available in 3 pot colors", "Vibration & heat resilient"]
  },

  // 3. EARRINGS COLLECTION (₹150 - ₹160)
  {
    id: "earrings-noir-blossom-gold",
    title: "Noir Velvet Blossom Dangles (Gold Sphere)",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹160",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921633/poshsaaz/earrings_black_blossom_gold_drop.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921633/poshsaaz/earrings_black_blossom_gold_drop.png"
    ],
    description: "Handcrafted 5-petal black fuzzy chenille blossom dangle earrings centered with gleaming metallic gold spheres on French wire hooks.",
    details: "Exquisite handmade floral statement earrings. Lightweight, comfortable, and presented on luxury silk display.",
    features: ["Plush black chenille petals", "Metallic gold core sphere", "French hook earring wires", "Ultra-lightweight statement piece"]
  },
  {
    id: "earrings-lavender-frosted-blossom",
    title: "Lavender Frosted Blossom Dangles",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹160",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921634/poshsaaz/earrings_purple_blossom_pearl_drop.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921634/poshsaaz/earrings_purple_blossom_pearl_drop.jpg"
    ],
    description: "Artisan-sculpted lavender and white variegated chenille floral dangles with polished pearl centers.",
    details: "Two-tone frosted violet petals hand-twisted into botanical stars with luminous pearl hubs on silver fishhook wires.",
    features: ["Variegated purple & white chenille", "Polished white pearl hub", "Silver-toned fishhook findings", "Handmade in Kashmir"]
  },
  {
    id: "earrings-pastel-blue-bow-pearl",
    title: "Baby Blue Velvet Bow-Tie Pearl Studs",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹160",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921636/poshsaaz/earrings_pastel_blue_bow_pearl.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921636/poshsaaz/earrings_pastel_blue_bow_pearl.jpg"
    ],
    description: "Soft pastel sky-blue fuzzy chenille bow-tie studs adorned with cascading lustrous round pearl beads on Poshsaaz signature card.",
    details: "Whimsical coquette bow aesthetic created with premium chenille wire and smooth pearl drop studs.",
    features: ["Pastel sky blue fuzzy bow", "Lustrous round pearl drop", "Signature Poshsaaz card", "Coquette vintage charm"]
  },
  {
    id: "earrings-noir-crimson-ballerina-heart",
    title: "Noir & Crimson Velvet Ballerina Heart Studs",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹160",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921643/poshsaaz/earrings_noir_crimson_ballerina_heart.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921643/poshsaaz/earrings_noir_crimson_ballerina_heart.png"
    ],
    description: "Dramatic black heart top silhouette paired with rich crimson-maroon ruffled velvet skirt, creating an artistic dress / blossom shape.",
    details: "Dual-color chenille sculpting on presentation card with delicate botanical gold accents.",
    features: ["Dramatic noir & crimson palette", "Sculpted ballerina heart silhouette", "Soft plush texture", "Handcrafted in Kashmir"]
  },
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

  // 4. HAIR ACCESSORIES & SETS
  {
    id: "hair-set-tricolor-heritage",
    title: "Tricolor Kashmir Heritage Hairband & Hairpin Set",
    category: "Hairbands",
    badge: "Heritage Edition",
    price: "₹150 – ₹300",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923205/poshsaaz/hairband_tricolor_flower_set.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923205/poshsaaz/hairband_tricolor_flower_set.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923200/poshsaaz/hair_clips_tricolor_puff_pearl.png"
    ],
    description: "Patriotic saffron, white, and emerald green chenille flower hairband with pearl centers and matching alligator hairpins.",
    details: "Price: Only Hair Pin ₹150, Hair Pin with Hair Band ₹300. Hand-twisted chenille petals with gleaming white pearls.",
    features: ["Saffron, white & emerald green", "Lustrous pearl centers", "Pinch-free comfortable headband", "Complete set options"]
  },
  {
    id: "hair-bun-ring-collection",
    title: "Artisan Floral Hair Bun Ring & Hair Stick",
    category: "Hairbands",
    badge: "Trending",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923214/poshsaaz/hair_bun_ring_collection_showcase.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923214/poshsaaz/hair_bun_ring_collection_showcase.png"
    ],
    description: "Woven chenille sunflower & daisy bun rings paired with matching floral hair sticks for effortless, elegant hair updos.",
    details: "Available in 15 vibrant colorways (sunflower yellow, lavender, royal blue, crimson red, baby pink, mint green).",
    features: ["Fits all hair bun sizes", "Matching flower stick pin", "Gentle on hair — no snagging", "15 color choices"]
  },
  {
    id: "hair-set-crimson-white-boutique",
    title: "Crimson & White Velvet Hairband, Claw Clip & Pin Set",
    category: "Hairbands",
    badge: "Boutique Set",
    price: "₹350",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923219/poshsaaz/hair_set_crimson_white_four_piece.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923219/poshsaaz/hair_set_crimson_white_four_piece.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923221/poshsaaz/hair_set_blush_pink_four_piece.jpg"
    ],
    description: "4-piece luxury hair accessory gift set including a velvet floral headband, a flower claw clip, and 2 gold alligator hairpins.",
    details: "Available in Crimson & White and Blush Pink & White editions. Complete matching set for special occasions.",
    features: ["4-piece matching set", "Flower headband + claw clip + 2 pins", "Velvety chenille finish", "Gift-ready presentation"]
  },
  {
    id: "hair-scrunchies-daisy-collection",
    title: "Chenille Velvet Daisy Hair Scrunchies & Rubber Bands",
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
    description: "Plush multi-petal chenille daisy flowers mounted securely on soft, snag-free elastic rubber hair scrunchies.",
    details: "Available in Lavender, Deep Violet, Amber Orange, and Royal Blue. ₹100 per piece.",
    features: ["Soft elastic rubber band", "Plush chenille daisy flower", "No hair pulling or breakage", "Multiple vibrant shades"]
  },

  // 5. WALL DÉCOR & HANGINGS (₹850 - ₹1,000)
  {
    id: "wall-hanging-cascading-roses",
    title: "Grand Cascading Rose Double-Hoop Wall Hanging",
    category: "Wall Décor",
    badge: "Masterpiece",
    price: "₹1,000",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923244/poshsaaz/wall_hanging_cascading_blush_pink_roses.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923244/poshsaaz/wall_hanging_cascading_blush_pink_roses.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923239/poshsaaz/wall_hanging_cascading_sage_green_roses.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923241/poshsaaz/wall_hanging_cascading_sunshine_yellow_roses.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923245/poshsaaz/wall_hanging_cascading_mocha_brown_roses.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923247/poshsaaz/wall_hanging_cascading_lavender_purple_roses.jpg"
    ],
    description: "Magnificent double-ring wall hanging featuring over 25 hand-sculpted chenille velvet roses cascading down delicate leafy vines.",
    details: "Available in 5 signature colorways: Blush Pink, Sage Green & Cream, Sunshine Yellow, Chocolate Mocha, and Lavender Purple.",
    features: ["Over 25 handmade velvet roses", "Double wrapped hoop frame", "5 curated color palettes", "Heirloom Kashmiri artisan art"]
  },
  {
    id: "wall-decor-autumn-wreath",
    title: "Autumn Bloom Botanical Wall Wreath",
    category: "Wall Décor",
    badge: "New Arrival",
    price: "₹850",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922120/poshsaaz/wall_decor_autumn_wreath.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922120/poshsaaz/wall_decor_autumn_wreath.jpg"
    ],
    description: "Artisan-crafted circular wall hanging wreath adorned with chenille velvet blooms in terracotta, mocha brown, cream, and apricot tones with hanging inscribed ribbon.",
    details: "Handmade Kashmiri floral wreath for door, living room, and bedroom aesthetics. Created with soft chenille wire petals and leaf accents.",
    features: ["Earthy autumn floral palette", "Hanging satin loop ribbon", "Artisan sculpted leaf wings", "Everlasting home wall art"]
  },

  // 6. HAND CUFFS & BRACELETS (₹200)
  {
    id: "hand-cuff-noir-daisy-chain",
    title: "Noir Velvet Daisy Chain Hand Cuff Bracelet",
    category: "Hand Cuffs",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923248/poshsaaz/hand_cuff_noir_daisy_chain.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923248/poshsaaz/hand_cuff_noir_daisy_chain.jpg"
    ],
    description: "Chic noir velvet daisy chain wrist cuff bracelet featuring woven black petals with ivory centers that wrap softly around the wrist.",
    details: "Tactile, comfortable, and lightweight floral wrist jewelry.",
    features: ["Continuous daisy chain design", "Soft velvet feel on skin", "Flexible wrist fit", "Handcrafted in Kashmir"]
  },
  {
    id: "hand-cuff-sky-blue-pearl-chain",
    title: "Sky Blue Velvet Rose & Pearl Strand Hand Chain",
    category: "Hand Cuffs",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923249/poshsaaz/hand_cuff_sky_blue_pearl_chain.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923249/poshsaaz/hand_cuff_sky_blue_pearl_chain.jpg"
    ],
    description: "Two-tone sky blue and white velvet rose bloom centered with a pearl, draped gracefully on a lustrous pearl bead wrist strand.",
    details: "Dreamy bridal, festival, and formal occasion floral hand jewelry.",
    features: ["Two-tone blue velvet rose", "Lustrous pearl bead strand", "Secure clasp finding", "Photogenic statement piece"]
  },

  // 7. BOUQUETS COLLECTION
  {
    id: "bouquet-royal-crimson-pearl",
    title: "Royal Crimson & Pearl Velvet Bouquet",
    category: "Bouquets",
    badge: "Luxury Edition",
    price: "₹700",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923256/poshsaaz/bouquet_royal_crimson_pearl_velvet.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923256/poshsaaz/bouquet_royal_crimson_pearl_velvet.png"
    ],
    description: "Deep crimson red roses with centered pearl studs, crisp white blossom accents, and emerald spiral stems in gold-crested matte black wrap with green planter base.",
    details: "An opulent romantic arrangement combining regal dark aesthetics with artisanal Kashmir chenille craft.",
    features: ["Deep crimson pearl roses", "Gold-foiled Poshsaaz wrap", "Freestanding woven pot base", "Heirloom everlasting blooms"]
  },
  {
    id: "bouquet-monochrome-pearl-daisy",
    title: "Everlasting Pearl Daisy Bouquet (Pink, Yellow, Lavender)",
    category: "Bouquets",
    badge: "Best Seller",
    price: "₹800",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923265/poshsaaz/bouquet_pink_pearl_daisy_monochrome.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923265/poshsaaz/bouquet_pink_pearl_daisy_monochrome.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923269/poshsaaz/bouquet_yellow_pearl_daisy_monochrome.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923272/poshsaaz/bouquet_lavender_pearl_daisy_monochrome.jpg"
    ],
    description: "Lavish monochromatic bouquet of 18+ velvety daisy flowers with gleaming pearl centers wrapped in translucent frosted paper with matching satin ribbon.",
    details: "Available in Blush Pink, Sunshine Yellow, and Lavender Violet.",
    features: ["18+ handmade pearl daisies", "Frosted paper wrapping", "Matching satin bow", "Never wilts or fades"]
  },
  {
    id: "bouquet-peppermint-daisy-cup",
    title: "Peppermint Daisy Stem Hand-Tied Bouquet",
    category: "Bouquets",
    badge: "New Arrival",
    price: "₹500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923260/poshsaaz/bouquet_peppermint_daisy_cup_bench.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923260/poshsaaz/bouquet_peppermint_daisy_cup_bench.jpg"
    ],
    description: "Striking red and white striped daisy stem arrangement seated in a red knit-textured vase cone with candy swirl accents.",
    details: "Delightful boutique gift bouquet designed for birthdays, holidays, and cozy home decor.",
    features: ["Red & white striped petals", "Knit-textured vase cup", "Festive candy swirl details", "Handmade in Kashmir"]
  },
  {
    id: "bouquet-lavender",
    title: "Lavender Dreams Bouquet",
    category: "Bouquets",
    badge: "Custom Order",
    price: "Starting ₹599",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg"
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
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg"
    ],
    description: "Radiant yellow sunflowers sculpted with pipe cleaner petals and rich brown centers, bringing eternal sunshine to any space.",
    details: "Each sunflower head is handcrafted from high-density pipe cleaners with sturdy wire stems. Tied with natural jute twine.",
    features: ["Vibrant yellow petals", "Sturdy stem support", "Custom bundle sizes"]
  },

  // 8. MONEY BOUQUETS (₹1,500)
  {
    id: "money-bouquet-white-bloom",
    title: "Royal Currency Origami Bouquet (White Bloom)",
    category: "Money Bouquets",
    badge: "Luxury Bespoke",
    price: "Starting ₹1,500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921255/poshsaaz/money_bouquet_white_flower.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921255/poshsaaz/money_bouquet_white_flower.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921259/poshsaaz/money_bouquet_purple_mandala.jpg"
    ],
    description: "Exquisite handcrafted origami currency note bouquet arranged in geometric floral petals with a plush ivory chenille center blossom and gold-trimmed matte black wrapping.",
    details: "Custom crafted for weddings, anniversaries, graduations, and high-prestige gifting. Each banknote is folded with precision without damaging currency integrity.",
    features: ["Origami folded currency petals", "Hand-twisted white chenille center", "Gold-bordered luxury black wrap", "Custom note denominations available"]
  },
  {
    id: "money-bouquet-purple-mandala",
    title: "Grand Currency Mandala Bouquet (Purple Bloom)",
    category: "Money Bouquets",
    badge: "Best Seller",
    price: "Starting ₹1,500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921259/poshsaaz/money_bouquet_purple_mandala.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921259/poshsaaz/money_bouquet_purple_mandala.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921257/poshsaaz/money_bouquet_purple_teal.jpg"
    ],
    description: "Symmetrical multi-tiered currency petal mandala bouquet with a handmade lavender velvet flower at the core, wrapped in regal black and gold presentation paper.",
    details: "Our signature multi-ring money bouquet showcasing supreme precision and Kashmiri floral craft.",
    features: ["Multi-tier geometric note mandala", "Velvet chenille purple flower", "Luxury gold-edge paper wrapping", "Starting from ₹1,500 + custom cash value"]
  },

  // 9. BOOKMARKS (₹150)
  {
    id: "bookmarks-five-color-daisy",
    title: "Handmade Floral Stem Bookmarks with Pearl Centers",
    category: "Bookmarks",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923275/poshsaaz/bookmarks_five_color_daisy_row.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923275/poshsaaz/bookmarks_five_color_daisy_row.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923278/poshsaaz/bookmark_lavender_ikigai_open_book.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923280/poshsaaz/bookmark_pink_ikigai_book_cover.jpg"
    ],
    description: "Slender chenille floral stem bookmarks crowned with multi-petal blooms and gleaming white pearl centers.",
    details: "Available in Blossom Pink, Ruby Red, Sunset Orange, Sky Blue, Sunshine Yellow, and Lavender Purple. Fits perfectly between book pages.",
    features: ["Slim page-safe stem", "Lustrous white pearl center", "Available in 6 vibrant colors", "Ideal gift for readers"]
  },
  {
    id: "bookmark-rose",
    title: "Rose Blossom Bookmark with Tassel",
    category: "Bookmarks",
    badge: "Made to Order",
    price: "Starting ₹249",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241742/poshsaaz/handmade_bookmark.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241742/poshsaaz/handmade_bookmark.jpg"
    ],
    description: "Delicate pipe cleaner floral bookmark featuring red and blush roses, gold stem detail, and a silky satin tassel.",
    details: "Handmade bookish companion.",
    features: ["Rose floral head", "Silk tassel", "Page-friendly flat wire"]
  },

  // 10. KEYCHAINS & CHARMS (₹150 - ₹200)
  {
    id: "keychains-lollipop-mouse-rainbow",
    title: "Playful Velvet Shaped Keychains (Lollipop, Mouse, Rainbow)",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹150 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923284/poshsaaz/keychains_lollipop_mouse_rainbow_collection.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923284/poshsaaz/keychains_lollipop_mouse_rainbow_collection.png"
    ],
    description: "Whimsical handcrafted shaped chenille keychains embellished with pearl accents: Swirl Lollipop, Mouse Charm, and Rainbow Cloud Arch.",
    details: "Fabulous bag and key charms for kids, teens, and aesthetic lovers.",
    features: ["Swirl Lollipop, Mouse & Rainbow designs", "Pearl bead embellishments", "Gold & silver keyrings", "Durable wire sculpting"]
  },
  {
    id: "mobile-keychain-daisy-charms",
    title: "Pastel Daisy Mobile Phone Charms",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923290/poshsaaz/mobile_keychain_trio_daisy_charms.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787923290/poshsaaz/mobile_keychain_trio_daisy_charms.jpg"
    ],
    description: "Cute fuzzy daisy flower phone charms with black lanyard cord straps in lavender, sky blue, and fresh mint green.",
    details: "Easily attaches to any phone case lanyard hole, zipper pull, or earbud case.",
    features: ["Pastel daisy flower head", "Lanyard cord for phone cases", "Yellow button center", "Lightweight & tactile"]
  },
  {
    id: "keychain-mini-lavender-bouquet",
    title: "Miniature Lavender Bouquet Keychain",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922632/poshsaaz/keychain_mini_lavender_bouquet.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922632/poshsaaz/keychain_mini_lavender_bouquet.png"
    ],
    description: "Adorable handcrafted pocket-sized lavender bouquet sculpted with fuzzy chenille wire wrapped in cream paper with a miniature purple satin bow.",
    details: "Durable handmade miniature flower bouquet keychain with sturdy keyring and chain.",
    features: ["Pocket-sized floral charm", "Miniature purple bow", "Silver key ring & chain", "High-durability chenille wire"]
  },
  {
    id: "keychain-mini-tulip-bouquet",
    title: "Miniature Pastel Tulip Bouquet Keychain",
    category: "Keychains",
    badge: "Best Seller",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922636/poshsaaz/keychain_mini_tulip_bouquet.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922636/poshsaaz/keychain_mini_tulip_bouquet.png"
    ],
    description: "Tied bundle of blush pink and ivory chenille tulips in a soft pink wrapped cone with matching bow.",
    details: "Charming accessory for bags, backpacks, pouches, or keys.",
    features: ["Soft pink & ivory tulips", "Tied pink mini bow", "Lightweight bag charm", "Handmade in Kashmir"]
  },
  {
    id: "keychain-potted-purple-flower",
    title: "Potted Velvet Blossom Charm Keychain (Purple)",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922647/poshsaaz/keychain_potted_purple_flower.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922647/poshsaaz/keychain_potted_purple_flower.png"
    ],
    description: "Delightful 3D potted flower keychain with a vibrant purple bloom growing from a textured brown pot accented with a pink velvet heart.",
    details: "Artisan 3D miniature planter with soft velvet texture.",
    features: ["3D sculpted plant pot", "Pink heart applique", "Sturdy stem & petals", "Everyday aesthetic accessory"]
  },
  {
    id: "keychain-mini-pink-diary-book",
    title: "Mini Velvet Storybook Charm Keychain",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922654/poshsaaz/keychain_mini_pink_diary_book.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922654/poshsaaz/keychain_mini_pink_diary_book.jpg"
    ],
    description: "Intricately woven 3D miniature pink book/diary charm featuring a white and pink flower cover and a lustrous pearl clasp closure.",
    details: "Coquette aesthetic miniature book charm handcrafted with fluffy chenille wire.",
    features: ["3D miniature velvet book", "Floral cover art", "Pearl clasp closure", "Unique gift for book lovers"]
  },

  // 11. CHARGER & MOBILE COVERS
  {
    id: "charger-cover-spiral",
    title: "Handcrafted Spiral Charger Cable Cover",
    category: "Charger Covers",
    badge: "Made to Order",
    price: "Starting ₹299",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241756/poshsaaz/charger_cover.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241756/poshsaaz/charger_cover.jpg"
    ],
    description: "Handmade with love, crafted to protect. Make your charger look as beautiful as you are. Spiral floral cable protector.",
    details: "Prevents cable fraying while looking gorgeous.",
    features: ["Protective spiral wrap", "Handmade floral topper", "Universal cable fit"]
  },
  {
    id: "mobile-cover-floral",
    title: "3D Floral Texture Phone Cover",
    category: "Mobile Covers",
    badge: "Custom Order",
    price: "Starting ₹499",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241841/poshsaaz/mobile_cover.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241841/poshsaaz/mobile_cover.jpg"
    ],
    description: "Carry art in your pocket. Soft 3D chenille flower bouquet sculpted directly onto clear protective phone case.",
    details: "Custom made for iPhone, Samsung, OnePlus, and other phone models upon request.",
    features: ["3D raised texture", "Drop-protected case", "Available for all models"]
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
