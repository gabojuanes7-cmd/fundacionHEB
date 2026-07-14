import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text_from_pptx(pptx_path):
    namespaces = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
    text_runs = []
    
    with zipfile.ZipFile(pptx_path, 'r') as z:
        slide_files = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml') and 'slideLayout' not in f and 'slideMaster' not in f]
        # Sort slides by slide number
        slide_files.sort(key=lambda x: int(x.split('ppt/slides/slide')[1].split('.xml')[0]))
        
        for slide_file in slide_files:
            slide_content = z.read(slide_file)
            root = ET.fromstring(slide_content)
            
            slide_text = []
            for node in root.findall('.//a:t', namespaces):
                if node.text:
                    slide_text.append(node.text)
            text_runs.append(f"--- {slide_file} ---\n" + "\n".join(slide_text))
            
    return "\n\n".join(text_runs)

if __name__ == '__main__':
    print(extract_text_from_pptx(sys.argv[1]))
