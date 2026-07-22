const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CLOUD_NAME = 'dtcy9bbux';
const API_KEY = '568966983365632';
const API_SECRET = 'qCakHchZyElPOgA7oFBWa3nV4FU';

const ARTIFACTS_DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a';

const uploads = [
  { file: 'media__1784756166105.jpg', public_id: 'poshsaaz/hero_clips_marble' },
  { file: 'media__1784755894798.jpg', public_id: 'poshsaaz/gift_box_pink' },
  { file: 'media__1784755895766.jpg', public_id: 'poshsaaz/chenille_bouquet' },
  { file: 'media__1784755896884.jpg', public_id: 'poshsaaz/flatlay_full_collection' },
];

function uploadToCloudinary(filePath, publicId) {
  return new Promise((resolve, reject) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${publicId}&timestamp=${timestamp}`;
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
            console.log(`✅ ${publicId} -> ${json.secure_url}`);
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
  console.log('Uploading 4 images to Cloudinary...\n');
  const results = {};
  for (const u of uploads) {
    const filePath = path.join(ARTIFACTS_DIR, u.file);
    if (!fs.existsSync(filePath)) {
      console.error(`⚠️ File not found: ${filePath}`);
      continue;
    }
    console.log(`Uploading ${u.file} (${(fs.statSync(filePath).size / 1024).toFixed(0)}KB) as ${u.public_id}...`);
    try {
      const result = await uploadToCloudinary(filePath, u.public_id);
      results[u.public_id] = result.secure_url;
    } catch (e) {
      console.error(`Failed: ${e.message}`);
    }
  }
  console.log('\n📋 All URLs:');
  console.log(JSON.stringify(results, null, 2));
}

main();
