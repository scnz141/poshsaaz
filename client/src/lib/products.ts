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
  features?: string[];
  dimensions?: string;
  materials?: string;
  instagramUrl?: string;
}

export const products: Product[] = [
  // ==========================================
  // 1. CURTAIN TIEBACKS & HOLDERS
  // ==========================================
  {
    id: "curtain-tie-orange-white",
    title: "Floral Curtain Tie (Orange & White)",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹200 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950901/poshsaaz/curtain_tie_orange_white_blue_curtain.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950901/poshsaaz/curtain_tie_orange_white_blue_curtain.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950910/poshsaaz/curtain_tie_orange_white_close.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950933/poshsaaz/curtain_tie_orange_white_silk_backdrop.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950925/poshsaaz/curtain_tie_orange_white_in_hand.png"
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
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950942/poshsaaz/curtain_tie_maroon_rose_pair.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950942/poshsaaz/curtain_tie_maroon_rose_pair.jpg"
    ],
    description: "Twin layered maroon and rose pink striped velvet flower curtain holdbacks with soft braided cord ties.",
    details: "Rich velvet texture designed for living rooms, master bedrooms, and festive drapery.",
    features: ["Twin maroon & rose blooms", "Soft braided cord", "No wall drilling needed", "₹250 per piece"]
  },
  {
    id: "curtain-tie-purple-pompom",
    title: "Floral Curtain Tie with Pom-Poms (Purple)",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹250 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950955/poshsaaz/curtain_tie_purple_pompom_pair.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950955/poshsaaz/curtain_tie_purple_pompom_pair.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950971/poshsaaz/curtain_tie_purple_pompom_sheer.png"
    ],
    description: "Royal purple and white velvet flower curtain tieback centered with a pearl and playful dangling pom-poms.",
    details: "Universal fit for all drapery types. Adds charming floral elegance to curtains.",
    features: ["Purple & white velvet petals", "Centered white pearl", "Dangling velvet pom-poms", "₹250 per piece"]
  },
  {
    id: "curtain-holder-green-yellow",
    title: "Floral Curtain Holder (Green & Yellow)",
    category: "Curtain Tiebacks",
    badge: "New Arrival",
    price: "₹300 per piece",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947695/poshsaaz/curtain_holder_green_yellow_lux.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947695/poshsaaz/curtain_holder_green_yellow_lux.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947698/poshsaaz/curtain_holder_maroon_grey_lux.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947700/poshsaaz/curtain_holder_grey_black_lux.jpg"
    ],
    description: "Bold sunshine yellow and emerald green striped velvet flower curtain holder with delicate pearl stamen center and textured leaf.",
    details: "Available in Yellow & Green, Maroon & Grey, and Grey & Black luxury variants.",
    features: ["Yellow & green striped petals", "Pearl stamen center", "3 luxury colorways available", "₹300 per piece"]
  },

  // ==========================================
  // 2. FLOWER POTS
  // ==========================================
  {
    id: "flower-pot-sunflower",
    title: "Flower Pot (Sunflower)",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950863/poshsaaz/flower_pot_sunflower_real.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950863/poshsaaz/flower_pot_sunflower_real.jpg"
    ],
    description: "Handmade fuzzy orange sunflowers in a hand-woven brown chenille velvet pot for desks and home decor.",
    details: "Freestanding everlasting potted flower. Never wilts and requires zero maintenance.",
    features: ["Handcrafted sunflowers", "Woven chenille pot", "Freestanding base", "₹400"]
  },
  {
    id: "flower-pot-multi-color",
    title: "Flower Pot (Multi Color)",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950883/poshsaaz/flower_pot_multicolor_real.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950883/poshsaaz/flower_pot_multicolor_real.png"
    ],
    description: "Bright yellow and pink fuzzy blossoms in a multi-color candy-striped pot decorated with a purple heart applique.",
    details: "Tactile, playful desk bloom hand-twisted from premium soft velvet stems.",
    features: ["Pink & yellow flowers", "Multi-color striped pot", "Zero maintenance", "₹400"]
  },
  {
    id: "flower-pot-blue-pearl",
    title: "Flower Pot (Blue Pearl)",
    category: "Flower Pots",
    badge: "New Arrival",
    price: "₹400",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950892/poshsaaz/flower_pot_blue_pearl_real.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950892/poshsaaz/flower_pot_blue_pearl_real.jpg"
    ],
    description: "Vibrant orange flowers with pearl centers in a royal blue velvet pot ringed with a lustrous white pearl garland.",
    details: "Opulent color combination with delicate floral side charm.",
    features: ["Pearl-centered flowers", "Pearl garland pot rim", "Royal blue plush pot", "₹400"]
  },

  // ==========================================
  // 3. CAR CHARMS & MINI PLANTERS
  // ==========================================
  {
    id: "car-charm-lavender-heart",
    title: "Flower Car Charm (Lavender Heart)",
    category: "Car Charms",
    badge: "New Arrival",
    price: "₹250",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947702/poshsaaz/car_charm_lavender_heart_lux.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947702/poshsaaz/car_charm_lavender_heart_lux.jpg"
    ],
    description: "Miniature lavender velvet tulip flowers in a brown pot with a pink heart applique for car dashboards and desks.",
    details: "Compact and adorable, fits perfectly on car dashboards, study desks, and bookshelves.",
    features: ["Lavender tulip flowers", "Heart-shaped pot charm", "Dashboard & desktop size", "₹250"]
  },
  {
    id: "car-charm-white-brown",
    title: "Flower Car Charm (White & Brown)",
    category: "Car Charms",
    badge: "New Arrival",
    price: "₹250",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947705/poshsaaz/car_charm_white_brown_lux.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947705/poshsaaz/car_charm_white_brown_lux.jpg"
    ],
    description: "Miniature white velvet blossoms with brown centers in a green chenille pot for car dashboards and study tables.",
    details: "Natural woodland charm. Compact size fits perfectly on any dashboard or desk surface.",
    features: ["White flowers with brown centers", "Green chenille pot", "Dashboard & desktop size", "₹250"]
  },
  {
    id: "car-charm-magenta-white",
    title: "Flower Car Charm (Magenta & White)",
    category: "Car Charms",
    badge: "New Arrival",
    price: "₹300",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947708/poshsaaz/car_charm_magenta_white_lux.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947708/poshsaaz/car_charm_magenta_white_lux.jpg"
    ],
    description: "Vibrant magenta and white velvet rose blossom planter designed for car dashboards and workspaces.",
    details: "Hand-sculpted fuzzy petals with knitted plush mini pot.",
    features: ["Magenta & white rose bloom", "Knitted plush pot", "Dashboard & desktop size", "₹300"]
  },
  {
    id: "car-charm-peppermint",
    title: "Flower Car Charm (Peppermint)",
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

  // ==========================================
  // 4. EARRINGS COLLECTION
  // ==========================================
  {
    id: "earrings-pink-pearl-heart",
    title: "Blush Bunny Heart Velvet Earrings",
    category: "Earrings",
    badge: "Bestseller",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951966/poshsaaz/earrings_blush_white_bunny_pearl_clean.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951966/poshsaaz/earrings_blush_white_bunny_pearl_clean.jpg"
    ],
    description: "Adorable two-tone pastel pink and white bunny-eared heart studs centered with luminous double pearl beads on luxury branded backing.",
    details: "Hypoallergenic posts. Ultra lightweight and comfortable for all-day wear.",
    features: ["Plush chenille velvet heart", "Double faux pearl center", "Hypoallergenic ear posts", "₹150"]
  },
  {
    id: "earrings-peppermint-swirl",
    title: "Peppermint Swirl Fuzzy Stud Earrings",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951971/poshsaaz/earrings_peppermint_swirl_clean.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951971/poshsaaz/earrings_peppermint_swirl_clean.png"
    ],
    description: "Festive red and white candy cane swirl button studs sculpted from plush velvet stems.",
    details: "Playful, tactile statement studs that add instant joy to casual outfits.",
    features: ["Candy swirl pattern", "Soft fuzzy texture", "Secure butterfly backs", "₹150"]
  },
  {
    id: "earrings-chocolate-heart",
    title: "Chocolate Brown Velvet Heart Earrings",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951973/poshsaaz/earrings_chocolate_heart_clean.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951973/poshsaaz/earrings_chocolate_heart_clean.jpg"
    ],
    description: "Rich chocolate mocha fuzzy velvet heart stud earrings on elegant presentation card.",
    details: "Warm earthy tones perfect for autumn wardrobes and everyday understated luxury.",
    features: ["Deep mocha brown velvet", "Sculpted heart shape", "Lightweight stud fitting", "₹150"]
  },
  {
    id: "earrings-black-pearl-heart",
    title: "Classic Black Velvet Heart Pearl Earrings",
    category: "Earrings",
    badge: "Bestseller",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951978/poshsaaz/earrings_noir_heart_pearl_clean.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951978/poshsaaz/earrings_noir_heart_pearl_clean.jpg"
    ],
    description: "Sculpted black chenille velvet heart studs centered with solitary lustrous white pearl accents.",
    details: "Timeless monochrome elegance for evenings, date nights, and formal ensembles.",
    features: ["Jet black chenille velvet", "Lustrous white pearl center", "Hypoallergenic stud post", "₹150"]
  },
  {
    id: "earrings-sky-blue-bow-pearl",
    title: "Baby Blue Velvet Bow-Tie Pearl Studs",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787952006/poshsaaz/earrings_sky_blue_bow_pearl_clean.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787952006/poshsaaz/earrings_sky_blue_bow_pearl_clean.png"
    ],
    description: "Pastel sky blue chenille bow-tie studs featuring a dangling teardrop pearl drop on golden hardware.",
    details: "Delicate coquette aesthetic handcrafted for spring and summer accessorizing.",
    features: ["Pastel sky blue bow", "Dangling pearl drop", "Gold-tone stud finding", "₹150"]
  },
  {
    id: "earrings-black-maroon-bow",
    title: "Noir & Crimson Ballerina Heart Studs",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787952009/poshsaaz/earrings_black_maroon_bow_clean.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787952009/poshsaaz/earrings_black_maroon_bow_clean.jpg"
    ],
    description: "Two-tone jet black and deep crimson velvet ballerina dress motif studs with pleated velvet skirt.",
    details: "Dramatic romantic design inspired by theatrical dance costumes.",
    features: ["Black & crimson velvet", "Ballerina silhouette", "Stud earring back", "₹150"]
  },
  {
    id: "earrings-tricolor-swirl",
    title: "Tricolor Swirl Button Stud Earrings",
    category: "Earrings",
    badge: "New Arrival",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787952014/poshsaaz/earrings_tricolor_swirl_clean.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787952014/poshsaaz/earrings_tricolor_swirl_clean.jpg"
    ],
    description: "Patriotic saffron, white, and green spiral swirl button studs on golden ear findings.",
    details: "Vibrant and festive handcrafted earrings for celebration days and cultural events.",
    features: ["Saffron, white & green swirl", "Gold tone hardware", "Compact button profile", "₹150"]
  },
  {
    id: "earrings-black-velvet-gold-dangle",
    title: "Noir Velvet Blossom Dangle Earrings (Gold)",
    category: "Earrings",
    badge: "Luxury Edition",
    price: "₹160",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951987/poshsaaz/earrings_black_velvet_gold_drop_clean.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951987/poshsaaz/earrings_black_velvet_gold_drop_clean.png"
    ],
    description: "Sculpted 5-petal black chenille velvet flower dangling from polished gold french wire hooks with shiny gold metallic sphere centers.",
    details: "Displayed on gold jewelry stand. High fashion floral drop earrings.",
    features: ["Noir velvet 5-petal flower", "Gold dome center", "French wire ear hooks", "₹160"]
  },
  {
    id: "earrings-purple-velvet-pearl-dangle",
    title: "Lavender Frosted Blossom Dangle Earrings (Pearl)",
    category: "Earrings",
    badge: "Luxury Edition",
    price: "₹160",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951996/poshsaaz/earrings_purple_velvet_pearl_drop_clean.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951996/poshsaaz/earrings_purple_velvet_pearl_drop_clean.png"
    ],
    description: "Frosted purple and white two-tone velvet flower earrings dangling from silver wires with centered white pearls.",
    details: "Charming botanical dangle design with delicate frost petal effect.",
    features: ["Two-tone purple & white petals", "Lustrous white pearl center", "Silver drop wire hooks", "₹160"]
  },

  // ==========================================
  // 5. HAIR ACCESSORIES
  // ==========================================
  {
    id: "hair-pin-band-tricolor-set",
    title: "Hair Pin with Hair Band Set (Tricolor)",
    category: "Hairbands",
    badge: "Combo Set",
    price: "Combo: ₹300 | Pin: ₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951198/poshsaaz/hair_pin_band_tricolor_set.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951198/poshsaaz/hair_pin_band_tricolor_set.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951207/poshsaaz/hair_pins_tricolor_pair.jpg"
    ],
    description: "Matching headband and snap hair clip set adorned with saffron, white, and green chenille flowers with pearl centers.",
    details: "Available as a complete combo set (₹300) or individual hair pin pair (₹150).",
    features: ["Tricolor floral blooms", "Comfort padded band", "Pearl centered flowers", "Combo: ₹300 | Only Pin: ₹150"]
  },
  {
    id: "floral-hairband-clips-set",
    title: "Floral Hairband & Clips Set (4-Piece Set)",
    category: "Hairbands",
    badge: "Complete Set",
    price: "₹350",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955273/poshsaaz/hairband_clips_red_white_4piece_real.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955273/poshsaaz/hairband_clips_red_white_4piece_real.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955275/poshsaaz/hairband_clips_pink_white_4piece_real.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951216/poshsaaz/hairband_clips_tricolor_4piece_set.jpg"
    ],
    description: "4-piece luxury hair accessory set including a wrapped floral hairband, flower claw clip, and two matching floral alligator clips.",
    details: "Available in Red & White, Pastel Pink & White, and Tricolor sets. Soft velvet wrapping prevents headband pinch headaches.",
    features: ["4-piece matching set", "Floral claw clip & alligator clips", "Wrapped comfortable band", "₹350"]
  },
  {
    id: "flower-hair-bun-ring",
    title: "Flower Hair Bun Ring with Hair Stick",
    category: "Hairbands",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955281/poshsaaz/hair_bun_ring_collection_real.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955281/poshsaaz/hair_bun_ring_collection_real.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951238/poshsaaz/hair_bun_ring_pink_rose_stick.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951262/poshsaaz/hair_bun_ring_yellow_rose_stick.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951290/poshsaaz/hair_bun_ring_purple_rose_stick.png"
    ],
    description: "Hand-sculpted velvet rose and sunflower ring for hair buns paired with a matching beaded floral hair stick.",
    details: "Available in 14 vibrant colorways including Sunflower, Blush Pink, Lavender, Orange, Sky Blue, and Deep Crimson.",
    features: ["Handcrafted velvet flower bun ring", "Matching floral hair stick", "Available in 14 colorways", "₹200"]
  },
  {
    id: "flower-hair-rubber-band",
    title: "Flower Hair Rubber Band (Scrunchie)",
    category: "Hairbands",
    badge: "New Arrival",
    price: "₹100",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951186/poshsaaz/scrunchie_four_colorway_collection.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951186/poshsaaz/scrunchie_four_colorway_collection.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951116/poshsaaz/scrunchie_lavender_daisy_pink_band.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951133/poshsaaz/scrunchie_violet_daisy_pink_band.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951158/poshsaaz/scrunchie_orange_daisy_cream_band.png"
    ],
    description: "Plush velvet daisy flowers securely mounted on soft, gentle elastic hair rubber bands / scrunchies.",
    details: "Available in Lavender, Deep Violet, Amber Orange, and Royal Blue shades.",
    features: ["Soft elastic rubber band", "Fuzzy chenille daisy flower", "No hair snagging", "₹100"]
  },

  // ==========================================
  // 6. WALL DÉCOR & HANGINGS
  // ==========================================
  {
    id: "grand-cascading-wall-hanging",
    title: "Grand Cascading Wall Hanging (Double Hoop)",
    category: "Wall Décor",
    badge: "Masterpiece",
    price: "₹1,000",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951383/poshsaaz/wall_hanging_pink_cascading_real.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951383/poshsaaz/wall_hanging_pink_cascading_real.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951420/poshsaaz/wall_hanging_yellow_cascading_real.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951435/poshsaaz/wall_hanging_mocha_cascading_real.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951446/poshsaaz/wall_hanging_purple_cascading_real.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951496/poshsaaz/wall_hanging_all_colors_collage.png"
    ],
    description: "Grand double-hoop wall hanging with over 25 hand-sculpted velvet roses cascading down leafy vines.",
    details: "Available in Blush Pink, Sunshine Yellow, Chocolate Mocha, and Lavender Purple colorways.",
    features: ["25+ handmade velvet roses", "Double wrapped hoop frame", "4 signature colorways", "₹1,000"]
  },
  {
    id: "floral-wall-hanging-small",
    title: "Floral Wall Hanging (Small Ring)",
    category: "Wall Décor",
    badge: "New Arrival",
    price: "₹500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951376/poshsaaz/wall_wreath_autumn_botanical_real.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951376/poshsaaz/wall_wreath_autumn_botanical_real.png"
    ],
    description: "Handcrafted circular floral wall hanging wreath with velvet flowers in terracotta, mocha, and cream tones with hanging ribbon.",
    details: "Compact single-ring design. Handmade Kashmiri floral wreath for door and wall decoration.",
    features: ["Autumn botanical flowers", "Hanging satin loop ribbon", "Everlasting wall decor", "₹500"]
  },
  {
    id: "wall-hanging-big-ring",
    title: "Wall Hanging (Big Ring)",
    category: "Wall Décor",
    badge: "New Arrival",
    price: "₹800",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951376/poshsaaz/wall_wreath_autumn_botanical_real.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951376/poshsaaz/wall_wreath_autumn_botanical_real.png"
    ],
    description: "Large single-hoop floral wall hanging with densely packed velvet roses and trailing greenery on an oversized wrapped ring.",
    details: "Statement wall décor piece for living rooms, bedrooms, and entryways.",
    features: ["Oversized wrapped hoop", "Dense velvet rose arrangement", "Statement wall piece", "₹800"]
  },

  // ==========================================
  // 7. HAND CUFFS & BRACELETS
  // ==========================================
  {
    id: "floral-hand-cuff-black-daisy",
    title: "Floral Hand Cuffs / Bracelet (Black)",
    category: "Hand Cuffs",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947712/poshsaaz/hand_cuff_black_daisy_lux.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947712/poshsaaz/hand_cuff_black_daisy_lux.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787934920/poshsaaz/hand_cuff_black_daisy_wrist_real.jpg"
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

  // ==========================================
  // 8. BOUQUETS COLLECTION
  // ==========================================
  {
    id: "royal-crimson-flower-bouquet",
    title: "Royal Crimson Flower Bouquet",
    category: "Bouquets",
    badge: "Luxury Edition",
    price: "₹700",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951310/poshsaaz/bouquet_royal_crimson_pearl_real.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951310/poshsaaz/bouquet_royal_crimson_pearl_real.png"
    ],
    description: "Opulent handcrafted bouquet with rich crimson velvet flowers, pearl embellishments, and black satin luxury wrapping.",
    details: "Signature presentation bouquet with handmade chenille flowers that stay vibrant forever.",
    features: ["15+ handcrafted crimson roses", "Pearl centered blooms", "Luxury waterproof wrap", "₹700"]
  },
  {
    id: "bouquet-red-white-heart",
    title: "Red & White Heart Blossom Bouquet",
    category: "Bouquets",
    badge: "Romantic Edition",
    price: "₹700",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951318/poshsaaz/bouquet_red_white_heart_real.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951318/poshsaaz/bouquet_red_white_heart_real.jpg"
    ],
    description: "Large two-tone red and white velvet blossom bouquet crowned with a chenille heart and premium white wrapper.",
    details: "Perfect romantic gift for anniversaries, proposals, and Valentine's Day.",
    features: ["Two-tone red & white bloom", "Chenille heart crown", "Translucent frosted wrapping", "₹700"]
  },
  {
    id: "bouquet-pink-blossoms",
    title: "Blush Pink Meadow Blossom Bouquet",
    category: "Bouquets",
    badge: "Bestseller",
    price: "₹700",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951335/poshsaaz/bouquet_pink_blossoms_real.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951335/poshsaaz/bouquet_pink_blossoms_real.png"
    ],
    description: "A lush bunch of over 18 delicate baby pink velvet blossoms with pearl centers, wrapped in soft white and satin pink ribbon.",
    details: "Gentle pastel beauty handcrafted with love in Srinagar.",
    features: ["18+ pink pearl daisies", "Satin ribbon bow", "Everlasting gift bouquet", "₹700"]
  },
  {
    id: "bouquet-yellow-blossoms",
    title: "Sunshine Yellow Meadow Blossom Bouquet",
    category: "Bouquets",
    badge: "New Arrival",
    price: "₹700",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951343/poshsaaz/bouquet_yellow_blossoms_real.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951343/poshsaaz/bouquet_yellow_blossoms_real.jpg"
    ],
    description: "Radiant sunshine yellow velvet blooms with pearl cores, bound in cream frosted paper and golden satin ribbon.",
    details: "Bright and cheerful bouquet for graduations, birthdays, and joyful milestones.",
    features: ["18+ yellow pearl daisies", "Golden satin ribbon", "Zero maintenance flowers", "₹700"]
  },
  {
    id: "bouquet-purple-blossoms",
    title: "Lavender Dream Meadow Blossom Bouquet",
    category: "Bouquets",
    badge: "New Arrival",
    price: "₹700",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951358/poshsaaz/bouquet_purple_blossoms_real.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951358/poshsaaz/bouquet_purple_blossoms_real.png"
    ],
    description: "Enchanting lavender and lilac velvet daisy bouquet finished with pearl centers and royal purple silk bow.",
    details: "Soothing purple palette designed for serene decor and premium gifting.",
    features: ["18+ lavender pearl daisies", "Purple satin ribbon", "Everlasting floral keepsake", "₹700"]
  },
  {
    id: "mixed-tulip-rose-bouquet",
    title: "Mixed Tulip & Rose Garden Bouquet",
    category: "Bouquets",
    badge: "Classic",
    price: "₹500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787953782/poshsaaz/bouquet_mixed_floral_artisan.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787953782/poshsaaz/bouquet_mixed_floral_artisan.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787953777/poshsaaz/bouquet_tulip_garden_handheld.jpg"
    ],
    description: "Artful blend of soft pastel pink tulips, cream roses, and eucalyptus leaves in Korean frosted wrapping.",
    details: "Handmade mixed bouquet for any special occasion.",
    features: ["Pastel tulips & cream roses", "Velvet eucalyptus greenery", "Korean frosted wrapping", "₹500"]
  },

  // ==========================================
  // 9. MONEY BOUQUETS (CURRENCY ORIGAMI)
  // ==========================================
  {
    id: "currency-origami-bouquet-twenty",
    title: "Currency Origami Bouquet (₹20 Notes)",
    category: "Money Bouquets",
    badge: "Exclusive",
    price: "₹1,500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954187/poshsaaz/currency_twenty_fan_live.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954187/poshsaaz/currency_twenty_fan_live.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954190/poshsaaz/currency_twenty_circle_live.jpg"
    ],
    description: "Fifty real ₹20 Indian rupee currency notes meticulously folded into origami petals centered with a velvet flower in black & gold luxury wrapping.",
    details: "Unforgettable cash gift for weddings, Eidi, Shagun, and milestone birthdays.",
    features: ["50 crisp ₹20 notes (₹1,000 value)", "Handmade center bloom", "Gold-trimmed black wrapping", "₹1,500"]
  },
  {
    id: "currency-origami-bouquet-fifty",
    title: "Currency Origami Bouquet (₹50 Notes)",
    category: "Money Bouquets",
    badge: "Exclusive",
    price: "₹1,500",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954192/poshsaaz/currency_fifty_fan_live.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954192/poshsaaz/currency_fifty_fan_live.jpg"
    ],
    description: "Folded crisp blue ₹50 currency notes crafted into an opulent origami floral bouquet with center velvet bloom and black satin bow.",
    details: "Premium shagun / wedding gifting presentation that leaves a lasting impression.",
    features: ["Crisp blue ₹50 banknotes", "Hand-sculpted velvet center bloom", "Luxury black & gold wrap", "₹1,500"]
  },

  // ==========================================
  // 10. KEYCHAINS & CHARMS
  // ==========================================
  {
    id: "shaped-keychains-novelty",
    title: "Shaped Keychains (Lollipop, Mouse, Rainbow)",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950983/poshsaaz/keychain_shaped_collection_branded.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950983/poshsaaz/keychain_shaped_collection_branded.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950994/poshsaaz/keychain_shaped_collection_clean.jpg"
    ],
    description: "Whimsical handcrafted shaped chenille keychains with pearl accents: Swirl Lollipop, Mouse Charm, and Rainbow Arch.",
    details: "Each piece is hand-twisted with high-density velvet chenille and fitted with sturdy keyrings.",
    features: ["Swirl Lollipop, Mouse & Rainbow designs", "Pearl bead accents", "Sturdy metal keychain ring", "₹200"]
  },
  {
    id: "keychain-mini-flower-bouquets",
    title: "Mini Bouquet & Novelty Keychains",
    category: "Keychains",
    badge: "New Arrival",
    price: "₹200",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951049/poshsaaz/keychain_lavender_bouquet.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951049/poshsaaz/keychain_lavender_bouquet.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951056/poshsaaz/keychain_tulip_bouquet.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951062/poshsaaz/keychain_purple_potted.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951071/poshsaaz/keychain_pink_diary_book.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951078/poshsaaz/keychain_red_potted.jpg",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951090/poshsaaz/keychain_tricolor_ribbon_charm.jpg"
    ],
    description: "Collectible pocket botanical art: Mini Lavender Bouquet, Tulip Bouquet, Potted Flowers, Mini Diary Book, and Tricolor Ribbon charms.",
    details: "Detailed miniature replicas crafted from fuzzy velvet stems.",
    features: ["Mini bouquets & potted flowers", "Mini velvet diary charm", "Sturdy metal keychain", "₹200"]
  },

  // ==========================================
  // 11. CUSTOM COVERS & ACCESSORIES
  // ==========================================
  {
    id: "charger-cover-spiral",
    title: "Handcrafted Spiral Charger Cable Cover",
    category: "Charger Covers",
    badge: "Made to Order",
    price: "Starting ₹300",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924156/poshsaaz/charger_cover_luxury.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924156/poshsaaz/charger_cover_luxury.jpg"
    ],
    description: "Velvet floral cable protector coiled with blush pink blossoms and pearl beads. Prevents fraying while looking gorgeous.",
    details: "Universal fit for iPhone, USB-C, and all charging cables.",
    features: ["Protective spiral velvet wrap", "Pearl blossom design", "Universal cable fit", "Starting ₹300"]
  },
  {
    id: "mobile-cover-floral",
    title: "3D Floral Mobile Phone Cover",
    category: "Mobile Covers",
    badge: "Custom Order",
    price: "Starting ₹300",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924159/poshsaaz/mobile_cover_luxury.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924159/poshsaaz/mobile_cover_luxury.jpg"
    ],
    description: "Carry art in your pocket. Soft 3D chenille flower bouquet sculpted directly onto crystal clear protective phone case.",
    details: "Custom made for iPhone, Samsung, OnePlus, and other phone models upon request.",
    features: ["3D raised velvet floral texture", "Transparent protective case", "Pearl-centered daisies", "Starting ₹300"]
  },
  {
    id: "handmade-bookmark-collection",
    title: "Handmade Botanical Bookmarks",
    category: "Bookmarks",
    badge: "Popular Gift",
    price: "₹150",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955265/poshsaaz/bookmarks_five_colors_row_real.png",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955265/poshsaaz/bookmarks_five_colors_row_real.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955268/poshsaaz/bookmark_purple_in_book_real.png",
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955272/poshsaaz/bookmark_pink_on_book_real.png"
    ],
    description: "Delicate 5-petal fuzzy daisy bookmarks with slender green stems and tulip leaf tail ends that mark your pages with tactile Kashmiri elegance.",
    details: "Available in Pink, Crimson Red, Amber Orange, Sky Blue, and Golden Yellow. Pictured resting inside and on Ikigai bestselling book.",
    features: ["5 vibrant pastel colors", "Soft on paper pages", "Tulip leaf bookmark tail", "₹150"]
  },
  {
    id: "gift-hamper-luxury-box",
    title: "Custom Luxury Gift Hamper",
    category: "Hampers",
    badge: "Bespoke",
    price: "Custom Quote",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954197/poshsaaz/hamper_luxury_box_live.jpg",
    images: [
      "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954197/poshsaaz/hamper_luxury_box_live.jpg"
    ],
    description: "Curated gift box with velvet floral bouquet, matching hairband, custom phone charm, and personalized note card in satin-lined luxury packaging.",
    details: "Customized for weddings, birthdays, corporate gifting, and special celebrations.",
    features: ["Bespoke curation", "Satin-lined gift box", "Handmade greeting card", "Custom Quote"]
  }
];

export const categories = [
  "All",
  "Curtain Tiebacks",
  "Flower Pots",
  "Car Charms",
  "Earrings",
  "Hairbands",
  "Wall Décor",
  "Hand Cuffs",
  "Bouquets",
  "Money Bouquets",
  "Keychains",
  "Charger Covers",
  "Mobile Covers",
  "Bookmarks",
  "Hampers",
];

export const testimonials = [
  {
    name: "Zainab Mir",
    role: "Bride, Srinagar",
    text: "The customized velvet rose bouquet and matching hairpiece created for my wedding was beyond perfection. It looked so luxurious and everlasting.",
    rating: 5
  },

  {
    name: "Suhail Rather",
    role: "Verified Buyer, Srinagar",
    text: "Ordered the ₹50 currency origami bouquet for an engagement gift. The craftsmanship and gold-trimmed wrapping made it the highlight of the event.",
    rating: 5
  },
  {
    name: "Mehak Farooq",
    role: "Client, Kashmir",
    text: "The curtain tiebacks and velvet earrings are so unique and beautifully finished. You can feel the love and precision in every single petal.",
    rating: 5
  }
];
