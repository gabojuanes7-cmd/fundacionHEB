const https = require('https');

https.get('https://www.fundacionhechoenbolivia.com/fundacionhb/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Basic extraction without external dependencies
    const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>([^<]+)?/gi;
    let match;
    const links = new Set();
    while ((match = linkRegex.exec(data)) !== null) {
      if(match[2] && match[2].trim() !== '') {
         links.add(`Text: ${match[2].trim()} | URL: ${match[1]}`);
      }
    }
    console.log("=== LINKS FOUND ===");
    links.forEach(l => console.log(l));
    
    // Extract text blocks
    const textRegex = />([^<]{10,})</g;
    let tMatch;
    const texts = new Set();
    while ((tMatch = textRegex.exec(data)) !== null) {
        let t = tMatch[1].trim();
        if(t.length > 10 && !t.includes('function(') && !t.includes('var ') && !t.includes('/*')) {
            texts.add(t);
        }
    }
    console.log("\n=== TEXT CONTENT FOUND ===");
    texts.forEach(t => console.log(t));
  });
}).on('error', (e) => {
  console.error(e);
});
