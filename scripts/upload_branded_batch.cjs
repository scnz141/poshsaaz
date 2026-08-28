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

const brandedUploads = [
  {
    file: 'media_1787921449104.png',
    public_id: 'poshsaaz/wall_hanging_yellow_cascading_logo',
    name: 'Yellow Cascading Wall Hanging with Logo'
  },
  {
    file: 'media_1787921456123.jpg',
    public_id: 'poshsaaz/wall_hanging_pink_cascading_logo',
    name: 'Pink Cascading Wall Hanging with Logo'
  },
  {
    file: 'media_1787921459995.jpg',
    public_id: 'poshsaaz/wall_hanging_mocha_cascading_logo',
    name: 'Mocha Cascading Wall Hanging with Logo'
  },
  {
    file: 'media_1787921465120.png',
    public_id: 'poshsaaz/wall_hanging_purple_cascading_logo',
    name: 'Purple Cascading Wall Hanging with Logo'
  },
  {
    file: 'media_1787921488376.jpg',
    public_id: 'poshsaaz/hand_cuff_noir_daisy_wrist',
    name: 'Noir Daisy Chain Hand Cuff Bracelet'
  },
  {
    file: 'media_1787921495481.jpg',
    public_id: 'poshsaaz/hand_cuff_blue_rose_pearl_logo',
    name: 'Sky Blue Rose & Pearl Hand Chain with Logo'
  },
  {
    file: 'media_1787921526652.jpg',
    public_id: 'poshsaaz/curtain_tieback_maroon_rose_logo',
    name: 'Maroon & Rose Curtain Tieback with Logo'
  },
  {
    file: 'media_1787921695385.png',
    public_id: 'poshsaaz/bookmarks_five_colors_logo',
    name: '5-Color Bookmarks Row with Logo'
  },
  {
    file: 'media_1787921699704.png',
    public_id: 'poshsaaz/bookmark_purple_ikigai_card',
    name: 'Purple Bookmark in Ikigai with Card'
  },
  {
    file: 'media_1787921709965.png',
    public_id: 'poshsaaz/bookmark_pink_ikigai_cover',
    name: 'Pink Bookmark on Ikigai Cover'
  },
  {
    file: 'media_1787921738300.jpg',
    public_id: 'poshsaaz/hair_bun_rings_showcase_logo',
    name: 'Hair Bun Rings Showcase with Model & Logo'
  },
  {
    file: 'media_1787921752572.jpg',
    public_id: 'poshsaaz/hair_set_red_white_four_piece',
    name: 'Red & White Floral Hairband & Clips Set'
  },
  {
    file: 'media_1787921757765.jpg',
    public_id: 'poshsaaz/hair_set_pink_white_four_piece',
    name: 'Pink & White Floral Hairband & Clips Set'
  }
];

function uploadFile(item) {
  return new Promise((resolve) => {
    const filePath = path.join(UPLOAD_DIR, item.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Warning: File not found ${filePath}`);
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
  console.log(`🚀 Uploading ${brandedUploads.length} high-res branded products to Cloudinary...\n`);
  for (const item of brandedUploads) {
    await uploadFile(item);
  }
  console.log(`\n🎉 All branded products uploaded!`);
}

main();
