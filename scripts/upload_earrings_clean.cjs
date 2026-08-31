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

const earrings = [
  { file: 'media_1787920834548.jpg', public_id: 'poshsaaz/earrings_blush_white_bunny_pearl_clean', name: 'Blush & White Bunny Heart Studs' },
  { file: 'media_1787920840570.png', public_id: 'poshsaaz/earrings_peppermint_swirl_clean', name: 'Peppermint Swirl Studs' },
  { file: 'media_1787920845535.jpg', public_id: 'poshsaaz/earrings_chocolate_heart_clean', name: 'Chocolate Heart Studs' },
  { file: 'media_1787920864224.jpg', public_id: 'poshsaaz/earrings_noir_heart_pearl_clean', name: 'Black Heart Pearl Studs' },
  { file: 'media_1787920963633.png', public_id: 'poshsaaz/earrings_black_velvet_gold_drop_clean', name: 'Black Velvet Dangle Gold Center' },
  { file: 'media_1787920969225.png', public_id: 'poshsaaz/earrings_purple_velvet_pearl_drop_clean', name: 'Purple Velvet Dangle Pearl Center' },
  { file: 'media_1787920975931.png', public_id: 'poshsaaz/earrings_sky_blue_bow_pearl_clean', name: 'Sky Blue Bow Pearl Studs' },
  { file: 'media_1787920984534.jpg', public_id: 'poshsaaz/earrings_black_maroon_bow_clean', name: 'Black & Maroon Bow Studs' },
  { file: 'media_1787921320426.jpg', public_id: 'poshsaaz/earrings_tricolor_swirl_clean', name: 'Tricolor Swirl Studs' },
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
  console.log(`🚀 Uploading ${earrings.length} clean earrings...\n`);
  const results = [];
  for (const item of earrings) {
    const res = await uploadFile(item);
    if (res) results.push(res);
  }
  fs.writeFileSync(path.join(__dirname, 'uploaded_earrings_clean.json'), JSON.stringify(results, null, 2));
  console.log(`\n🎉 All earrings uploaded!`);
}
main();
