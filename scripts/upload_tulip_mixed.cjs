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

const DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a';

const items = [
  { file: 'poshsaaz_tulip_garden_bouquet_1784753382310.png', public_id: 'poshsaaz/bouquet_tulip_garden_handheld', name: 'Tulip Garden Bouquet' },
  { file: 'poshsaaz_mixed_floral_bouquet_1784753435933.png', public_id: 'poshsaaz/bouquet_mixed_floral_artisan', name: 'Mixed Floral Bouquet Artisan' },
];

function uploadFile(item) {
  return new Promise((resolve) => {
    const filePath = path.join(DIR, item.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Not found: ${filePath}`);
      return resolve(null);
    }
    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${item.public_id}&timestamp=${timestamp}`;
    const signature = crypto.createHash('sha1').update(paramsToSign + API_SECRET).digest('hex');
    const fileData = fs.readFileSync(filePath);
    const dataUri = `data:image/png;base64,${fileData.toString('base64')}`;
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
  console.log(`🚀 Uploading tulip & mixed bouquets...\n`);
  const results = [];
  for (const item of items) {
    const res = await uploadFile(item);
    if (res) results.push(res);
  }
  console.log(`\n🎉 Upload completed:`, JSON.stringify(results, null, 2));
}
main();
