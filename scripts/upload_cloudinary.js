import fs from 'fs';
import crypto from 'crypto';

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dtcy9bbux';
const API_KEY = process.env.CLOUDINARY_API_KEY || '';
const API_SECRET = process.env.CLOUDINARY_API_SECRET || '';

const imageFiles = [
  { key: 'hero', path: '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/poshsaaz_hero_1784753223435.png' },
  { key: 'craftsmanship', path: '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/poshsaaz_craftsmanship_1784753258133.png' },
  { key: 'rose_bloom_hairband', path: '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/poshsaaz_rose_bloom_hairband_1784753291771.png' },
  { key: 'lavender_dreams_hairband', path: '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/poshsaaz_lavender_dreams_hairband_1784753324543.png' },
  { key: 'tulip_garden_bouquet', path: '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/poshsaaz_tulip_garden_bouquet_1784753382310.png' },
  { key: 'mixed_floral_bouquet', path: '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/poshsaaz_mixed_floral_bouquet_1784753435933.png' },
  { key: 'floral_clips_collection', path: '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/poshsaaz_floral_clips_collection_1784753568630.png' },
  { key: 'pearl_blossom_comb', path: '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/poshsaaz_pearl_blossom_comb_1784753634116.png' },
];

async function uploadToCloudinary(filePath, publicId) {
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'poshsaaz';

  const paramString = `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`;
  const signature = crypto.createHash('sha1').update(paramString).digest('hex');

  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: 'image/png' });

  const formData = new FormData();
  formData.append('file', blob, `${publicId}.png`);
  formData.append('api_key', API_KEY);
  formData.append('timestamp', timestamp.toString());
  formData.append('folder', folder);
  formData.append('public_id', publicId);
  formData.append('signature', signature);

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data.secure_url;
}

async function main() {
  const results = {};
  console.log('Starting Cloudinary Uploads using native fetch...');
  for (const img of imageFiles) {
    if (!fs.existsSync(img.path)) {
      console.error(`File missing: ${img.path}`);
      continue;
    }
    try {
      console.log(`Uploading ${img.key}...`);
      const secureUrl = await uploadToCloudinary(img.path, img.key);
      results[img.key] = secureUrl;
      console.log(`Uploaded ${img.key} -> ${secureUrl}`);
    } catch (err) {
      console.error(`Failed to upload ${img.key}:`, err.message);
    }
  }

  console.log('\n--- UPLOAD RESULTS JSON ---');
  console.log(JSON.stringify(results, null, 2));

  fs.writeFileSync('./scripts/cloudinary_urls.json', JSON.stringify(results, null, 2));
}

main();
