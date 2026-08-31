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

const GEN_DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a';

const uploads = [
  { file: 'curtain_green_yellow_new_1787935308025.jpg', public_id: 'poshsaaz/curtain_holder_green_yellow_lux', name: 'Curtain Holder Green Yellow Luxury' },
  { file: 'curtain_maroon_grey_1787947007753.jpg', public_id: 'poshsaaz/curtain_holder_maroon_grey_lux', name: 'Curtain Holder Maroon Grey Luxury' },
  { file: 'curtain_grey_black_1787947057027.jpg', public_id: 'poshsaaz/curtain_holder_grey_black_lux', name: 'Curtain Holder Grey Black Luxury' },
  { file: 'car_charm_lavender_heart_1787947112964.jpg', public_id: 'poshsaaz/car_charm_lavender_heart_lux', name: 'Car Charm Lavender Heart Luxury' },
  { file: 'car_charm_white_brown_1787947170843.jpg', public_id: 'poshsaaz/car_charm_white_brown_lux', name: 'Car Charm White Brown Luxury' },
  { file: 'car_charm_magenta_white_1787947608746.jpg', public_id: 'poshsaaz/car_charm_magenta_white_lux', name: 'Car Charm Magenta White Luxury' },
  { file: 'hand_cuff_black_daisy_luxury_1787934808558.jpg', public_id: 'poshsaaz/hand_cuff_black_daisy_lux', name: 'Hand Cuff Black Daisy Luxury' },
];

function uploadFile(item) {
  return new Promise((resolve) => {
    const filePath = path.join(GEN_DIR, item.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Not found: ${filePath}`);
      return resolve(null);
    }
    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${item.public_id}&timestamp=${timestamp}`;
    const signature = crypto.createHash('sha1').update(paramsToSign + API_SECRET).digest('hex');
    const fileData = fs.readFileSync(filePath);
    const dataUri = `data:image/jpeg;base64,${fileData.toString('base64')}`;
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
  console.log(`🚀 Uploading ${uploads.length} luxury variant images...\n`);
  const results = [];
  for (const item of uploads) {
    const res = await uploadFile(item);
    if (res) results.push(res);
  }
  fs.writeFileSync(path.join(__dirname, 'uploaded_generated_variants.json'), JSON.stringify(results, null, 2));
  console.log(`\n🎉 All ${results.length} variant images uploaded!`);
}
main();
