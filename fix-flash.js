const fs = require('fs');
const path = require('path');

const scriptContent = `
  <!-- Prevent Dark Mode Flash -->
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  </script>
</head>`;

const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('Prevent Dark Mode Flash')) {
    content = content.replace('</head>', scriptContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Fixed dark mode flash in " + file);
  } else {
    console.log("Already fixed in " + file);
  }
});
