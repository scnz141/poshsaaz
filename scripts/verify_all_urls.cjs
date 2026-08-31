const https = require('https');
const fs = require('fs');

const productsTs = fs.readFileSync('client/src/lib/products.ts', 'utf8');
const urlRegex = /https:\/\/res\.cloudinary\.com\/[^\s"']+/g;
const urls = Array.from(new Set(productsTs.match(urlRegex) || []));

console.log(`🔍 Checking ${urls.length} distinct Cloudinary URLs in products.ts...\n`);

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        console.log(`✅ [200 OK] ${url.split('/').slice(-2).join('/')}`);
        resolve({ url, status: 200 });
      } else {
        console.error(`❌ [${res.statusCode}] ${url}`);
        resolve({ url, status: res.statusCode });
      }
    }).on('error', (err) => {
      console.error(`❌ [ERROR] ${url}: ${err.message}`);
      resolve({ url, status: 'ERROR' });
    });
  });
}

async function main() {
  const results = [];
  for (const url of urls) {
    results.push(await checkUrl(url));
  }
  const failed = results.filter(r => r.status !== 200);
  if (failed.length === 0) {
    console.log(`\n🎉 ALL ${urls.length} product images are 100% VALID and loading with 200 OK!`);
  } else {
    console.error(`\n⚠️ ${failed.length} images failed to load:`, failed);
  }
}
main();
