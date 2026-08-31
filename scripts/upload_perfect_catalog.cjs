const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CLOUD_NAME = 'dtcy9bbux';
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!API_KEY || !API_SECRET) {
  console.error('Set CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET');
  process.exit(1);
}

const USER_DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/.user_uploaded';

const items = [
  // 1. FLOWER POTS (Fixing the wrong images)
  { file: 'media_1787921184232.jpg', public_id: 'poshsaaz/flower_pot_sunflower_real', name: 'Flower Pot Sunflower Real' },
  { file: 'media_1787921190316.png', public_id: 'poshsaaz/flower_pot_multicolor_real', name: 'Flower Pot Multi Color Real' },
  { file: 'media_1787921198324.jpg', public_id: 'poshsaaz/flower_pot_blue_pearl_real', name: 'Flower Pot Blue Pearl Real' },

  // 2. CURTAIN TIEBACKS (Fixing Orange & White and Maroon & Rose)
  { file: 'media_1787921138941.jpg', public_id: 'poshsaaz/curtain_tie_orange_white_blue_curtain', name: 'Curtain Tie Orange White Blue Curtain' },
  { file: 'media_1787921144549.jpg', public_id: 'poshsaaz/curtain_tie_orange_white_close', name: 'Curtain Tie Orange White Close' },
  { file: 'media_1787921149402.png', public_id: 'poshsaaz/curtain_tie_orange_white_in_hand', name: 'Curtain Tie Orange White In Hand' },
  { file: 'media_1787921153750.jpg', public_id: 'poshsaaz/curtain_tie_orange_white_silk_backdrop', name: 'Curtain Tie Orange White Silk Backdrop' },
  { file: 'media_1787921526652.jpg', public_id: 'poshsaaz/curtain_tie_maroon_rose_pair', name: 'Curtain Tie Maroon Rose Pair' },
  { file: 'media_1787921650680.jpg', public_id: 'poshsaaz/curtain_tie_purple_pompom_pair', name: 'Curtain Tie Purple PomPom Pair' },
  { file: 'media_1787921655609.png', public_id: 'poshsaaz/curtain_tie_purple_pompom_sheer', name: 'Curtain Tie Purple PomPom Sheer' },

  // 3. KEYCHAINS (Fixing Novelty Shaped Keychains vs Mobile Keychain vs Bouquets)
  { file: 'media_1787921583676.jpg', public_id: 'poshsaaz/keychain_shaped_collection_branded', name: 'Keychains Lollipop Mouse Rainbow Branded' },
  { file: 'media_1787921587883.jpg', public_id: 'poshsaaz/keychain_shaped_collection_clean', name: 'Keychains Lollipop Mouse Rainbow Clean' },
  { file: 'media_1787921738300.jpg', public_id: 'poshsaaz/mobile_keychain_green_daisy', name: 'Mobile Keychain Green Daisy' },
  { file: 'media_1787921752572.jpg', public_id: 'poshsaaz/mobile_keychain_lavender_daisy', name: 'Mobile Keychain Lavender Daisy' },
  { file: 'media_1787921757765.jpg', public_id: 'poshsaaz/mobile_keychain_blue_daisy', name: 'Mobile Keychain Blue Daisy' },
  { file: 'media_1787921080184.jpg', public_id: 'poshsaaz/keychain_lavender_bouquet', name: 'Keychain Lavender Bouquet' },
  { file: 'media_1787921087610.jpg', public_id: 'poshsaaz/keychain_tulip_bouquet', name: 'Keychain Tulip Bouquet' },
  { file: 'media_1787921093258.jpg', public_id: 'poshsaaz/keychain_purple_potted', name: 'Keychain Purple Potted' },
  { file: 'media_1787921098900.jpg', public_id: 'poshsaaz/keychain_pink_diary_book', name: 'Keychain Pink Diary Book' },
  { file: 'media_1787921105015.jpg', public_id: 'poshsaaz/keychain_red_potted', name: 'Keychain Red Potted' },
  { file: 'media_1787921260350.jpg', public_id: 'poshsaaz/keychain_tricolor_ribbon_charm', name: 'Keychain Tricolor Ribbon Charm' },

  // 4. SCRUNCHIES / HAIR RUBBER BANDS (Fixing images that were mistakenly named flower pot)
  { file: 'media_1787921404820.png', public_id: 'poshsaaz/scrunchie_lavender_daisy_pink_band', name: 'Scrunchie Lavender Daisy Pink Band' },
  { file: 'media_1787921411229.png', public_id: 'poshsaaz/scrunchie_violet_daisy_pink_band', name: 'Scrunchie Violet Daisy Pink Band' },
  { file: 'media_1787921415347.png', public_id: 'poshsaaz/scrunchie_orange_daisy_cream_band', name: 'Scrunchie Orange Daisy Cream Band' },
  { file: 'media_1787921384127.png', public_id: 'poshsaaz/scrunchie_four_colorway_collection', name: 'Scrunchie 4 Colorway Collection' },

  // 5. HAIR ACCESSORIES
  { file: 'media_1787921247019.jpg', public_id: 'poshsaaz/hair_pin_band_tricolor_set', name: 'Hair Pin with Hair Band Set Tricolor' },
  { file: 'media_1787921239622.jpg', public_id: 'poshsaaz/hair_pins_tricolor_pair', name: 'Hair Pins Tricolor Pair' },
  { file: 'media_1787921330778.jpg', public_id: 'poshsaaz/hairband_clips_tricolor_4piece_set', name: 'Floral Hairband & Clips 4-Piece Set' },
  { file: 'media_1787921695385.png', public_id: 'poshsaaz/hair_bun_ring_pink_rose_stick', name: 'Hair Bun Ring Pink Rose Stick' },
  { file: 'media_1787921699704.png', public_id: 'poshsaaz/hair_bun_ring_yellow_rose_stick', name: 'Hair Bun Ring Yellow Rose Stick' },
  { file: 'media_1787921709965.png', public_id: 'poshsaaz/hair_bun_ring_purple_rose_stick', name: 'Hair Bun Ring Purple Rose Stick' },

  // 6. BOUQUETS
  { file: 'media_1787921558397.png', public_id: 'poshsaaz/bouquet_royal_crimson_pearl_real', name: 'Bouquet Royal Crimson Pearl Real' },
  { file: 'media_1787921572253.jpg', public_id: 'poshsaaz/bouquet_red_white_heart_real', name: 'Bouquet Red White Heart Real' },
  { file: 'media_1787921604483.png', public_id: 'poshsaaz/bouquet_pink_blossoms_real', name: 'Bouquet Pink Blossoms Real' },
  { file: 'media_1787921628230.jpg', public_id: 'poshsaaz/bouquet_yellow_blossoms_real', name: 'Bouquet Yellow Blossoms Real' },
  { file: 'media_1787921634717.png', public_id: 'poshsaaz/bouquet_purple_blossoms_real', name: 'Bouquet Purple Blossoms Real' },

  // 7. WALL DÉCOR
  { file: 'media_1787921059034.png', public_id: 'poshsaaz/wall_wreath_autumn_botanical_real', name: 'Wall Wreath Autumn Botanical Real' },
  { file: 'media_1787921442845.jpg', public_id: 'poshsaaz/wall_hanging_pink_cascading_real', name: 'Wall Hanging Pink Cascading Real' },
  { file: 'media_1787921449104.png', public_id: 'poshsaaz/wall_hanging_yellow_cascading_real', name: 'Wall Hanging Yellow Cascading Real' },
  { file: 'media_1787921456123.jpg', public_id: 'poshsaaz/wall_hanging_mocha_cascading_real', name: 'Wall Hanging Mocha Cascading Real' },
  { file: 'media_1787921459995.jpg', public_id: 'poshsaaz/wall_hanging_purple_cascading_real', name: 'Wall Hanging Purple Cascading Real' },
  { file: 'media_1787921465120.png', public_id: 'poshsaaz/wall_hanging_all_colors_collage', name: 'Wall Hanging All Colors Collage' },
];

function uploadFile(item) {
  return new Promise((resolve) => {
    const filePath = path.join(USER_DIR, item.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Not found: ${filePath}`);
      return resolve(null);
    }
    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${item.public_id}&timestamp=${timestamp}`;
    const signature = crypto.createHash('sha1').update(paramsToSign + API_SECRET).digest('hex');
    const fileData = fs.readFileSync(filePath);
    const ext = path.extname(filePath).slice(1);
    const mimeType = ext === 'png' ? 'image/png' : 'image/jpeg';
    const dataUri = `data:${mimeType};base64,${fileData.toString('base64')}`;
    const postData = new URLSearchParams({
      file: dataUri, public_id: item.public_id, timestamp: timestamp.toString(),
      api_key: API_KEY, signature: signature,
    }).toString();
    const options = {
      hostname: 'api.cloudinary.com', port: 443,
      path: `/v1_1/${CLOUD_NAME}/image/upload`, method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(postData) },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.secure_url) {
            console.log(`✅ [${item.name}]: ${json.secure_url}`);
            resolve({ ...item, secure_url: json.secure_url });
          } else {
            console.error(`❌ ${item.public_id}:`, json.error?.message || data.slice(0, 200));
            resolve(null);
          }
        } catch (e) { resolve(null); }
      });
    });
    req.on('error', (e) => { console.error(`Network error: ${e.message}`); resolve(null); });
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log(`🚀 Uploading ${items.length} properly categorized catalog images...\n`);
  const results = [];
  for (const item of items) {
    const res = await uploadFile(item);
    if (res) results.push(res);
  }
  fs.writeFileSync(path.join(__dirname, 'uploaded_perfect_catalog.json'), JSON.stringify(results, null, 2));
  console.log(`\n🎉 All ${results.length} images uploaded!`);
}
main();
