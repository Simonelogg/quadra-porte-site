import os
import json
import pypdf

pdf_path = "/Users/sviluppologuasto/Desktop/Quadra Porte/Quadra Catlago ultimo.pdf"

reader = pypdf.PdfReader(pdf_path)
num_pages = len(reader.pages)

print(f"Extracting text from all {num_pages} pages...")

pages_summary = []
collections = set()

for i in range(num_pages):
    page = reader.pages[i]
    text = page.extract_text() or ""
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    # Analyze text for collections or sections
    colls_found = []
    for line in lines:
        if "collezione" in line.lower() or "linea" in line.lower():
            colls_found.append(line)
            collections.add(line)
            
    pages_summary.append({
        "page_number": i + 1,
        "text_length": len(text),
        "first_lines": lines[:5],
        "collections_mentioned": colls_found,
        "has_text": len(text.strip()) > 0
    })

# Save to json file
output_json = "/Users/sviluppologuasto/.gemini/antigravity/scratch/quadra-porte-site/catalog_structure.json"
with open(output_json, "w", encoding="utf-8") as f:
    json.dump({
        "num_pages": num_pages,
        "collections": sorted(list(collections)),
        "pages": pages_summary
    }, f, indent=2, ensure_ascii=False)

print(f"Extraction complete. Saved to {output_json}")
print("\nUnique Collections/Lines mentioned in text:")
for c in sorted(list(collections)):
    print(f"  - {c}")
