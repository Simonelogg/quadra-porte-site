import pypdf

pdf_path = "./Quadra Catlago ultimo.pdf"
reader = pypdf.PdfReader(pdf_path)

total_pages = len(reader.pages)
print(f"Total pages: {total_pages}")

print("=== DUMPING TEXT FROM PAGES 80 TO 86 ===")
for idx in range(max(0, total_pages - 8), total_pages):
    text = reader.pages[idx].extract_text()
    print(f"\n--- PAGE {idx+1} ---")
    if text:
        print(text.strip())
    else:
        print("[No text found / Image only]")
