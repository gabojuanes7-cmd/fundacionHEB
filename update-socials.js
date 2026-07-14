const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

const socialReplacements = [
  // Facebook
  { from: /href="https:\/\/www\.facebook\.com\/haborigen"/g, to: 'href="https://www.facebook.com/FundacionHechoBolivia/"' },
  { from: /href="javascript:void\(0\)" aria-label="Instagram \(próximamente\)"/g, to: 'href="https://www.tiktok.com/@hechoenbolivia" target="_blank" aria-label="TikTok"' },
  { from: /fa-instagram/g, to: 'fa-tiktok' },
  { from: /href="javascript:void\(0\)" aria-label="LinkedIn \(próximamente\)"/g, to: 'href="https://www.youtube.com/channel/UCmrdnziOy67OzB587EJtAdA" target="_blank" aria-label="YouTube"' },
  { from: /fa-linkedin-in/g, to: 'fa-youtube' },
];

// Contact info updates
const contactReplacements = [
  { from: /info@fundacionhechoenbolivia\.com/g, to: 'fundacionhechoenbolivia@gmail.com' },
];

let totalChanges = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changes = 0;
  
  socialReplacements.forEach(r => {
    const before = content;
    content = content.replace(r.from, r.to);
    if (content !== before) changes++;
  });
  
  contactReplacements.forEach(r => {
    const before = content;
    content = content.replace(r.from, r.to);
    if (content !== before) changes++;
  });
  
  // Add WhatsApp and Twitter links in footer if not already present
  if (content.includes('fa-youtube') && !content.includes('fa-twitter')) {
    content = content.replace(
      /(<a href="https:\/\/www\.youtube\.com\/channel\/UCmrdnziOy67OzB587EJtAdA"[^>]*><i class="fab fa-youtube"><\/i><\/a>)/g,
      '$1\n            <a href="https://x.com/FHechoenBolivia" target="_blank" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>\n            <a href="https://api.whatsapp.com/send?phone=59171411888" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>'
    );
    changes++;
  }
  
  if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalChanges += changes;
    console.log("Updated: " + file + " (" + changes + " changes)");
  } else {
    console.log("No changes: " + file);
  }
});

console.log("\nTotal changes: " + totalChanges);
