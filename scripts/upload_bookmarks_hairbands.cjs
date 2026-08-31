const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CLOUD_NAME = 'dtcy9bbux';
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

const USER_DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/.user_uploaded';

const items = [
  { file: 'media_1787921695385.png', public_id: 'poshsaaz/bookmarks_five_colors_row_real', name: 'Bookmarks 5 Colors Row' },
  { file: 'media_1787921699704.png', public_id: 'poshsaaz/bookmark_purple_in_book_real', name: 'Bookmark Purple in Book' },
  { file: 'media_1787921709965.png', public_id: 'poshsaaz/bookmark_pink_on_book_real', name: 'Bookmark Pink on Book' },
  { file: 'media_1787955088679.jpg', public_id: 'poshsaaz/hairband_clips_red_white_4piece_real', name: 'Hairband Set Red White 4-Piece' },
  { file: 'media_1787921757765.jpg', public_id: 'poshsaaz/hairband_clips_pink_white_4piece_real', name: 'Hairband Set Pink White 4-Piece' },
  { file: 'media_1787921738300.jpg', public_id: 'poshsaaz/hair_bun_ring_collection_real', name: 'Hair Bun Ring Collection with Stick' },
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
  console.log(`🚀 Uploading bookmark & hairband assets...\n`);
  const results = [];
  for (const item of items) {
    const res = await uploadFile(item);
    if (res) results.push(res);
  }
  console.log(`\n🎉 Upload completed!`, JSON.stringify(results, null, 2));
}
main();
