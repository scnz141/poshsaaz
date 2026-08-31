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
const GEN_DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a';

const uploads = [
  // Green & Yellow Curtain Holder - user photos
  { dir: USER_DIR, file: 'media_1787934252503.jpg', public_id: 'poshsaaz/curtain_holder_green_yellow_close', name: 'Green & Yellow Curtain Holder Close-up' },
  { dir: USER_DIR, file: 'media_1787934288641.jpg', public_id: 'poshsaaz/curtain_holder_green_yellow_collage', name: 'Green & Yellow Curtain Holder Collage' },
  // Generated luxury curtain holder
  { dir: GEN_DIR, file: 'curtain_holder_green_yellow_luxury_1787934760996.jpg', public_id: 'poshsaaz/curtain_holder_green_yellow_luxury', name: 'Green & Yellow Curtain Holder Luxury' },
  // Car Charm - White & Brown
  { dir: USER_DIR, file: 'media_1787934353174.png', public_id: 'poshsaaz/car_charm_white_brown_dashboard', name: 'White & Brown Car Charm on Dashboard' },
  // Car Charm - Lavender Heart
  { dir: USER_DIR, file: 'media_1787934383694.png', public_id: 'poshsaaz/car_charm_lavender_heart_dashboard', name: 'Lavender Heart Car Charm on Dashboard' },
  // Black Hand Cuff - user photo
  { dir: USER_DIR, file: 'media_1787934423273.jpg', public_id: 'poshsaaz/hand_cuff_black_daisy_wrist_real', name: 'Black Daisy Hand Cuff Real Photo' },
  // Generated luxury black hand cuff
  { dir: GEN_DIR, file: 'hand_cuff_black_daisy_luxury_1787934808558.jpg', public_id: 'poshsaaz/hand_cuff_black_daisy_luxury', name: 'Black Daisy Hand Cuff Luxury' },
];

function uploadFile(item) {
  return new Promise((resolve) => {
    const filePath = path.join(item.dir, item.file);
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
  console.log(`🚀 Uploading ${uploads.length} new product images...\n`);
  for (const item of uploads) {
    await uploadFile(item);
  }
  console.log(`\n🎉 Done!`);
}
main();
