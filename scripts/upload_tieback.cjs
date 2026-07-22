const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dtcy9bbux';
const API_KEY = process.env.CLOUDINARY_API_KEY || '';
const API_SECRET = process.env.CLOUDINARY_API_SECRET || '';

const filePath = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/media__1784756740112.jpg';
const publicId = 'poshsaaz/curtain_tieback';

const timestamp = Math.floor(Date.now() / 1000);
const paramsToSign = `public_id=${publicId}&timestamp=${timestamp}`;
const signature = crypto.createHash('sha1').update(paramsToSign + API_SECRET).digest('hex');

const fileData = fs.readFileSync(filePath);
const base64Data = fileData.toString('base64');
const dataUri = `data:image/jpeg;base64,${base64Data}`;

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
    const json = JSON.parse(data);
    if (json.secure_url) {
      console.log(`✅ Uploaded: ${json.secure_url}`);
    } else {
      console.error('❌ Error:', json.error?.message || data);
    }
  });
});
req.on('error', (e) => console.error('Request error:', e.message));
req.write(postData);
req.end();
