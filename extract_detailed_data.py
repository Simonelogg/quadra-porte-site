import pypdf

pdf_path = "/Users/sviluppologuasto/Desktop/Quadra Porte/Quadra Catlago ultimo.pdf"
reader = pypdf.PdfReader(pdf_path)

key_pages = {
    2: "Finiture Part 1",
    3: "Finiture Part 2",
    4: "Finiture Part 3",
    10: "Flat Description 1",
    15: "Flat Description 2 (Telaio Complanare)",
    19: "Flat - Rototraslante",
    22: "Flat - Magic",
    24: "Insert Description",
    33: "Compact Description",
    34: "Compact Soluzioni",
    45: "Pantografato Description",
    56: "Filo Muro Description",
    68: "Blindate Description"
}

print("=== KEY TEXT EXTRACTIONS ===")
for p_num, desc in sorted(key_pages.items()):
    page = reader.pages[p_num - 1] # 0-indexed
    text = page.extract_text() or ""
    print(f"\n--- PAGE {p_num} ({desc}) ---")
    print(text.strip())
    print("-" * 50)
