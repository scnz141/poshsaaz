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

const itemsToUpload = [
  {
    file: 'media_1787921449104.png',
    public_id: 'poshsaaz/earrings_black_blossom_gold_drop',
    name: 'Noir Velvet Blossom Dangle Earrings (Gold Center)'
  },
  {
    file: 'media_1787921456123.jpg',
    public_id: 'poshsaaz/earrings_purple_blossom_pearl_drop',
    name: 'Lavender Frosted Blossom Dangle Earrings (Pearl Center)'
  },
  {
    file: 'media_1787921459995.jpg',
    public_id: 'poshsaaz/earrings_pastel_blue_bow_pearl',
    name: 'Baby Blue Velvet Bow-Tie Pearl Studs'
  },
  {
    file: 'media_1787921465120.png',
    public_id: 'poshsaaz/earrings_noir_crimson_ballerina_heart',
    name: 'Noir & Crimson Velvet Ballerina Heart Studs'
  },
  {
    file: 'media_1787921488376.jpg',
    public_id: 'poshsaaz/earrings_noir_crimson_heart_alt',
    name: 'Noir & Crimson Velvet Heart Studs (Alt)'
  }
];

function uploadFile(item) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(UPLOAD_DIR, item.file);
    if (!fs.existsSync(filePath)) {
      return reject(new Error(`File not found: ${filePath}`));
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
            reject(new Error(json.error?.message || 'Upload failed'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('💎 Uploading Premium Earrings (₹160) to Cloudinary...\n');
  const results = [];
  for (const item of itemsToUpload) {
    try {
      const res = await uploadFile(item);
      results.push(res);
    } catch (err) {
      console.error(`Failed ${item.name}:`, err.message);
    }
  }

  console.log('\n✨ All Upload Results:');
  console.log(JSON.stringify(results, null, 2));

  fs.writeFileSync('./scripts/uploaded_earrings_160.json', JSON.stringify(results, null, 2));
}

main();
