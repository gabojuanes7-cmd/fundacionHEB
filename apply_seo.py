import os
import re
import glob

SEO_TAGS = """
  <!-- Etiquetas SEO y Open Graph -->
  <meta property="og:title" content="Fundación Hecho en Bolivia">
  <meta property="og:description" content="Impulsamos el desarrollo económico administrando la Marca País y fomentando la producción nacional.">
  <meta property="og:image" content="https://hechoenbolivia.org/assets/images/logo-hecho-en-bolivia.jpg">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/x-icon" href="assets/images/logo.jfif">
"""

def add_seo_tags(content):
    if "og:title" in content:
        return content # Already has SEO tags
    return content.replace("</head>", SEO_TAGS + "</head>")

def add_lazy_loading(content):
    def replacer(match):
        img_tag = match.group(0)
        if 'loading="lazy"' in img_tag or "loading='lazy'" in img_tag:
            return img_tag
        if 'class="' in img_tag and 'hero' in img_tag.split('class="')[1].split('"')[0]:
            return img_tag
        if 'id="hero' in img_tag:
            return img_tag
        return img_tag.replace('<img ', '<img loading="lazy" ', 1)
    
    return re.sub(r'<img\s+[^>]*>', replacer, content)

html_files = glob.glob("*.html")
count = 0
for file in html_files:
    if file == 'admin.html':
        continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = add_seo_tags(content)
    new_content = add_lazy_loading(new_content)
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        print(f"Updated {file}")

print(f"Successfully updated {count} HTML files.")
