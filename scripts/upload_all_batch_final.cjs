const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dtcy9bbux';
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!API_KEY || !API_SECRET) {
  console.error('❌ Error: CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET must be set in environment');
  process.exit(1);
}

const UPLOAD_DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/.user_uploaded';

const allNewItems = [
  // 1. CURTAIN TIEBACKS
  {
    file: 'media_1787921583676.jpg',
    public_id: 'poshsaaz/curtain_tieback_amber_ivory_blue_drape',
    name: 'Amber & Ivory Striped Floral Curtain Tieback (Blue Drape)'
  },
  {
    file: 'media_1787921628230.jpg',
    public_id: 'poshsaaz/curtain_tieback_amber_ivory_silk',
    name: 'Amber & Ivory Striped Floral Curtain Tieback (Silk)'
  },
  {
    file: 'media_1787921634717.png',
    public_id: 'poshsaaz/curtain_tieback_crimson_rose_black_silk',
    name: 'Crimson & Rose Striped Velvet Curtain Holdback'
  },
  {
    file: 'media_1787921650680.jpg',
    public_id: 'poshsaaz/curtain_tieback_purple_pompom_pattern',
    name: 'Royal Violet Blossom Curtain Tieback with Pom-Poms (Pattern Drape)'
  },
  {
    file: 'media_1787921655609.png',
    public_id: 'poshsaaz/curtain_tieback_purple_pompom_sheer',
    name: 'Royal Violet Blossom Curtain Tieback with Pom-Poms (Sheer Drape)'
  },

  // 2. FLOWER POTS & CAR CHARMS
  {
    file: 'media_1787921404820.png',
    public_id: 'poshsaaz/flower_pot_sunflower_mocha',
    name: 'Mountain Meadow Sunflower Planter Pot'
  },
  {
    file: 'media_1787921411229.png',
    public_id: 'poshsaaz/flower_pot_pastel_striped_heart',
    name: 'Pastel Blossom Striped Heart Planter Pot'
  },
  {
    file: 'media_1787921415347.png',
    public_id: 'poshsaaz/flower_pot_orange_blue_pearl',
    name: 'Royal Blue & Pearl Floral Desk Planter'
  },
  {
    file: 'media_1787921351002.jpg',
    public_id: 'poshsaaz/car_charm_peppermint_white_pot',
    name: 'Peppermint Blossom Mini Planter & Car Charm (White)'
  },
  {
    file: 'media_1787921356115.jpg',
    public_id: 'poshsaaz/car_charm_peppermint_cyan_pot',
    name: 'Peppermint Blossom Mini Planter & Car Charm (Cyan Striped)'
  },
  {
    file: 'media_1787921362824.jpg',
    public_id: 'poshsaaz/car_charm_peppermint_navy_pot',
    name: 'Peppermint Blossom Mini Planter & Car Charm (Navy Striped)'
  },

  // 3. HAIR ACCESSORIES (Tricolor, Hairpins, Hairbands, Scrunchies, Bun Rings)
  {
    file: 'media_1787921420733.png',
    public_id: 'poshsaaz/hair_clips_tricolor_puff_pearl',
    name: 'Tricolor Chenille Puff Hair Clips with Pearls'
  },
  {
    file: 'media_1787921426942.jpg',
    public_id: 'poshsaaz/hairband_tricolor_flower_set',
    name: 'Tricolor Floral Hairband & Matching Clips Set'
  },
  {
    file: 'media_1787921384127.png',
    public_id: 'poshsaaz/hair_bun_ring_collection_showcase',
    name: 'Artisan Floral Hair Bun Ring & Hair Stick Collection'
  },
  {
    file: 'media_1787921558397.png',
    public_id: 'poshsaaz/hair_set_crimson_white_four_piece',
    name: 'Crimson & White Velvet Flower Hairband, Claw Clip & Hairpin Set'
  },
  {
    file: 'media_1787921572253.jpg',
    public_id: 'poshsaaz/hair_set_blush_pink_four_piece',
    name: 'Blush Pink Velvet Flower Hairband, Scrunchie & Hairpin Set'
  },
  {
    file: 'media_1787921184232.jpg',
    public_id: 'poshsaaz/scrunchie_lavender_pink_band',
    name: 'Lavender Chenille Daisy Hair Scrunchie'
  },
  {
    file: 'media_1787921190316.png',
    public_id: 'poshsaaz/scrunchie_violet_pink_band',
    name: 'Deep Violet Chenille Daisy Hair Scrunchie'
  },
  {
    file: 'media_1787921198324.jpg',
    public_id: 'poshsaaz/scrunchie_orange_cream_band',
    name: 'Amber Orange Chenille Daisy Hair Scrunchie'
  },
  {
    file: 'media_1787921247019.jpg',
    public_id: 'poshsaaz/scrunchies_four_color_collection',
    name: 'Four-Color Velvet Daisy Hair Scrunchie Set'
  },

  // 4. CASCADING WALL HANGINGS (₹1,000)
  {
    file: 'media_1787921138941.jpg',
    public_id: 'poshsaaz/wall_hanging_cascading_sage_green_roses',
    name: 'Grand Cascading Rose Wall Hanging (Sage Green & Cream)'
  },
  {
    file: 'media_1787921144549.jpg',
    public_id: 'poshsaaz/wall_hanging_cascading_sunshine_yellow_roses',
    name: 'Grand Cascading Rose Wall Hanging (Sunshine Yellow)'
  },
  {
    file: 'media_1787921149402.png',
    public_id: 'poshsaaz/wall_hanging_cascading_blush_pink_roses',
    name: 'Grand Cascading Rose Wall Hanging (Blush Pink)'
  },
  {
    file: 'media_1787921153750.jpg',
    public_id: 'poshsaaz/wall_hanging_cascading_mocha_brown_roses',
    name: 'Grand Cascading Rose Wall Hanging (Chocolate Mocha)'
  },
  {
    file: 'media_1787921105015.jpg',
    public_id: 'poshsaaz/wall_hanging_cascading_lavender_purple_roses',
    name: 'Grand Cascading Rose Wall Hanging (Lavender Purple)'
  },

  // 5. HAND CUFFS & BRACELETS (₹200)
  {
    file: 'media_1787921098900.jpg',
    public_id: 'poshsaaz/hand_cuff_noir_daisy_chain',
    name: 'Noir Velvet Daisy Chain Hand Cuff Bracelet'
  },
  {
    file: 'media_1787921105015.jpg',
    public_id: 'poshsaaz/hand_cuff_sky_blue_pearl_chain',
    name: 'Sky Blue Velvet Rose & Pearl Strand Hand Cuff Bracelet'
  },

  // 6. BOUQUETS (₹700, ₹500, ₹800)
  {
    file: 'media_1787920975931.png',
    public_id: 'poshsaaz/bouquet_royal_crimson_pearl_velvet',
    name: 'Royal Crimson & Pearl Velvet Bouquet (Black & Gold Wrap)'
  },
  {
    file: 'media_1787920984534.jpg',
    public_id: 'poshsaaz/bouquet_peppermint_daisy_cup_bench',
    name: 'Peppermint Daisy Stem Bouquet in Red Knitted Cup'
  },
  {
    file: 'media_1787921320426.jpg',
    public_id: 'poshsaaz/bouquet_pink_pearl_daisy_monochrome',
    name: 'Monochrome Blush Pink Pearl Daisy Bouquet'
  },
  {
    file: 'media_1787921330778.jpg',
    public_id: 'poshsaaz/bouquet_yellow_pearl_daisy_monochrome',
    name: 'Monochrome Sunshine Yellow Pearl Daisy Bouquet'
  },
  {
    file: 'media_1787921260350.jpg',
    public_id: 'poshsaaz/bouquet_lavender_pearl_daisy_monochrome',
    name: 'Monochrome Lavender Violet Pearl Daisy Bouquet'
  },

  // 7. BOOKMARKS (₹150)
  {
    file: 'media_1787921080184.jpg',
    public_id: 'poshsaaz/bookmarks_five_color_daisy_row',
    name: 'Five-Color Daisy Stem Bookmark Collection with Pearls'
  },
  {
    file: 'media_1787921087610.jpg',
    public_id: 'poshsaaz/bookmark_lavender_ikigai_open_book',
    name: 'Lavender Velvet Daisy Bookmark (Inside Ikigai Book)'
  },
  {
    file: 'media_1787921093258.jpg',
    public_id: 'poshsaaz/bookmark_pink_ikigai_book_cover',
    name: 'Blush Pink Velvet Daisy Bookmark (Ikigai Book Cover)'
  },

  // 8. NOVELTY KEYCHAINS & MOBILE PHONE CHARMS (₹150)
  {
    file: 'media_1787921059034.png',
    public_id: 'poshsaaz/keychains_lollipop_mouse_rainbow_collection',
    name: 'Handcrafted Lollipop, Mouse & Rainbow Arch Keychain Collection'
  },
  {
    file: 'media_1787921442845.jpg',
    public_id: 'poshsaaz/mobile_keychain_trio_daisy_charms',
    name: 'Trio Pastel Velvet Daisy Mobile Phone Charms'
  }
];

function uploadFile(item) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(UPLOAD_DIR, item.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Warning: File not found ${filePath}, skipping`);
      return resolve(null);
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${item.public_id}&timestamp=${timestamp}`;
    const signature = crypto.createHash('sha1').update(paramsToSign + API_SECRET).digest('hex');

    const fileData = fs.readFileSync(filePath);
    const base64Data = fileData.toString('base64');
    const ext = path.extname(filePath).slice(1);
    const mimeType = ext === 'png' ? 'image/png' : 'image/jpeg';
    const dataUri = `data:${mimeType};base64,${base64Data}`;

    const postData = new URLSearchParams({
      file: dataUri,
      public_id: item.public_id,
      timestamp: timestamp.toString(),
      api_key: API_KEY,
      signature: signature,
    }).toString();

    const options = {
      hostname: 'api.cloudinary.com',
      port: 443,
      path: `/v1_1/${CLOUD_NAME}/image/upload`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.secure_url) {
            console.log(`✅ Uploaded [${item.name}]: ${json.secure_url}`);
            resolve({ ...item, secure_url: json.secure_url });
          } else {
            console.error(`❌ Error uploading ${item.public_id}:`, json.error?.message || data);
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`Network error on ${item.public_id}:`, e.message);
      resolve(null);
    });
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log(`🚀 Uploading batch of ${allNewItems.length} curated Poshsaaz products to Cloudinary...\n`);
  const results = [];
  for (const item of allNewItems) {
    const res = await uploadFile(item);
    if (res) results.push(res);
  }

  console.log(`\n🎉 Uploaded ${results.length} / ${allNewItems.length} products successfully!`);
  fs.writeFileSync('./scripts/uploaded_all_batch_final.json', JSON.stringify(results, null, 2));
}

main();
