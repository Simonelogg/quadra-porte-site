import json

json_path = "/Users/sviluppologuasto/.gemini/antigravity/scratch/quadra-porte-site/catalog_structure.json"

with open(json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total Pages: {data['num_pages']}")
print("\n--- Page Breakdown ---")

current_section = "Unknown / Cover"
for page in data["pages"]:
    p_num = page["page_number"]
    first_lines = page["first_lines"]
    colls = page["collections_mentioned"]
    
    # Check if a new collection is introduced
    for c in colls:
        if "Collezione" in c:
            current_section = c
            
    # Print the page number, section, and a preview of first lines
    print(f"Page {p_num:02d} | Section: {current_section:<25} | Lines: {first_lines[:3]}")
