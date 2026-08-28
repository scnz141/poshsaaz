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

const BRAIN_DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a';

const imagesToUpload = [
  {
    file: path.join(BRAIN_DIR, 'poshsaaz_charger_luxury_1787924106042.jpg'),
    public_id: 'poshsaaz/charger_cover_luxury',
    name: 'Luxury Spiral Floral Charger Cable Cover'
  },
  {
    file: path.join(BRAIN_DIR, 'poshsaaz_phone_luxury_1787924121024.jpg'),
    public_id: 'poshsaaz/mobile_cover_luxury',
    name: 'Luxury 3D Velvet Floral iPhone Case'
  },
  {
    file: path.join(BRAIN_DIR, 'poshsaaz_hamper_luxury_1787924135981.jpg'),
    public_id: 'poshsaaz/gift_hamper_luxury_box',
    name: 'Poshsaaz Luxury Bespoke Gift Hamper Box'
  }
];

function uploadFile(item) {
  return new Promise((resolve) => {
    if (!fs.existsSync(item.file)) {
      console.error(`❌ File not found: ${item.file}`);
      return resolve(null);
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${item.public_id}&timestamp=${timestamp}`;
    const signature = crypto.createHash('sha1').update(paramsToSign + API_SECRET).digest('hex');

    const fileData = fs.readFileSync(item.file);
    const base64Data = fileData.toString('base64');
    const dataUri = `data:image/jpeg;base64,${base64Data}`;

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
      console.error(`Network error:`, e.message);
      resolve(null);
    });
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log(`🚀 Uploading ${imagesToUpload.length} high-class generated imagery to Cloudinary...\n`);
  for (const item of imagesToUpload) {
    await uploadFile(item);
  }
}

main();
