const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dtcy9bbux';
const API_KEY = process.env.CLOUDINARY_API_KEY || '';
const API_SECRET = process.env.CLOUDINARY_API_SECRET || '';

if (!API_KEY || !API_SECRET) {
  console.error('❌ Missing CLOUDINARY_API_KEY or CLOUDINARY_API_SECRET');
  console.error('Set them as environment variables:');
  console.error('  export CLOUDINARY_API_KEY=your_key');
  console.error('  export CLOUDINARY_API_SECRET=your_secret');
  process.exit(1);
}

const IMAGES_DIR = path.join(__dirname, '..', 'client', 'public', 'images');

// All images to upload with their Cloudinary public IDs
const uploads = [
  { file: 'bookmark_flower_pink.png', public_id: 'poshsaaz/bookmark_flower_pink' },
  { file: 'bookmark_lavender.png', public_id: 'poshsaaz/bookmark_lavender' },
  { file: 'bookmark_daisy.png', public_id: 'poshsaaz/bookmark_daisy' },
  { file: 'bookmark_sunflower.png', public_id: 'poshsaaz/bookmark_sunflower' },
  { file: 'handmade_bookmark.png', public_id: 'poshsaaz/handmade_bookmark' },
  { file: 'charger_cover.png', public_id: 'poshsaaz/charger_cover' },
  { file: 'charger_cover_pastel.png', public_id: 'poshsaaz/charger_cover_pastel' },
  { file: 'charger_cover_rose.png', public_id: 'poshsaaz/charger_cover_rose' },
  { file: 'charger_cover_lavender.png', public_id: 'poshsaaz/charger_cover_lavender' },
  { file: 'mobile_cover.png', public_id: 'poshsaaz/mobile_cover' },
  { file: 'mobile_cover_blue_poshsaaz.png', public_id: 'poshsaaz/mobile_cover_blue' },
  { file: 'mobile_cover_blue_real.jpg', public_id: 'poshsaaz/mobile_cover_blue_real' },
  { file: 'mobile_cover_pearl_pink.png', public_id: 'poshsaaz/mobile_cover_pearl_pink' },
  { file: 'mobile_cover_poshsaaz_exact.png', public_id: 'poshsaaz/mobile_cover_poshsaaz_exact' },
  { file: 'mobile_cover_lavender.png', public_id: 'poshsaaz/mobile_cover_lavender' },
  { file: 'mobile_cover_sunflower.png', public_id: 'poshsaaz/mobile_cover_sunflower' },
  { file: 'keychain_tulip.png', public_id: 'poshsaaz/keychain_tulip' },
  { file: 'handmade_keychain.png', public_id: 'poshsaaz/handmade_keychain' },
  { file: 'lavender_bouquet.png', public_id: 'poshsaaz/lavender_bouquet' },
  { file: 'sunflower_bouquet.png', public_id: 'poshsaaz/sunflower_bouquet' },
  { file: 'rose_bouquet.png', public_id: 'poshsaaz/rose_bouquet' },
  { file: 'single_stem_flower.png', public_id: 'poshsaaz/single_stem_flower' },
  { file: 'wall_decor.png', public_id: 'poshsaaz/wall_decor' },
  { file: 'mobile_covers_collection_8.jpg', public_id: 'poshsaaz/mobile_covers_collection_8' },
  { file: 'curtain_tieback_single.png', public_id: 'poshsaaz/curtain_tieback_single' },
  { file: 'curtain_tieback_pair.jpg', public_id: 'poshsaaz/curtain_tieback_pair' },
  { file: 'purple_headband_clips_set.png', public_id: 'poshsaaz/purple_headband_clips_set' },
  { file: 'purple_headband_clips_real.jpg', public_id: 'poshsaaz/purple_headband_clips_real' },
  { file: 'curtain_tieback_interior.png', public_id: 'poshsaaz/curtain_tieback_interior' },
];

function uploadToCloudinary(filePath, publicId) {
  return new Promise((resolve, reject) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `overwrite=true&public_id=${publicId}&timestamp=${timestamp}`;
    const signature = crypto.createHash('sha1').update(paramsToSign + API_SECRET).digest('hex');

    const fileData = fs.readFileSync(filePath);
    const base64Data = fileData.toString('base64');
    const ext = path.extname(filePath).slice(1);
    const mimeType = ext === 'png' ? 'image/png' : 'image/jpeg';
    const dataUri = `data:${mimeType};base64,${base64Data}`;

    const postData = new URLSearchParams({
      file: dataUri,
      public_id: publicId,
      timestamp: timestamp.toString(),
      api_key: API_KEY,
      signature: signature,
      overwrite: 'true',
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
            resolve(json);
          } else {
            console.error(`❌ ${publicId}:`, json.error?.message || data);
            reject(new Error(json.error?.message || 'Upload failed'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log(`\n🚀 Uploading ${uploads.length} images to Cloudinary (${CLOUD_NAME})...\n`);

  const results = {};
  let success = 0;
  let failed = 0;

  for (const u of uploads) {
    const filePath = path.join(IMAGES_DIR, u.file);
    if (!fs.existsSync(filePath)) {
      console.error(`⚠️  File not found, skipping: ${u.file}`);
      failed++;
      continue;
    }
    const sizeKB = (fs.statSync(filePath).size / 1024).toFixed(0);
    process.stdout.write(`  📤 ${u.file} (${sizeKB}KB) → ${u.public_id}... `);
    try {
      const result = await uploadToCloudinary(filePath, u.public_id);
      console.log(`✅ ${result.secure_url}`);
      results[u.file] = result.secure_url;
      success++;
    } catch (e) {
      console.log(`❌ ${e.message}`);
      failed++;
    }
  }

  console.log(`\n📊 Results: ${success} uploaded, ${failed} failed\n`);

  // Save results to JSON
  const outputPath = path.join(__dirname, 'cloudinary_product_urls.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`💾 URLs saved to: ${outputPath}\n`);

  // Generate products.ts replacement mapping
  console.log('📋 Copy-paste mapping for products.ts:');
  console.log('─'.repeat(60));
  for (const [file, url] of Object.entries(results)) {
    console.log(`  "/images/${file}" → "${url}"`);
  }
  console.log('─'.repeat(60));
}

main();
