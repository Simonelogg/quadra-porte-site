import pypdf

pdf_path = "./Quadra Catlago ultimo.pdf"
reader = pypdf.PdfReader(pdf_path)

fonts = set()
for idx, page in enumerate(reader.pages):
    if "/Resources" in page and "/Font" in page["/Resources"]:
        font_dict = page["/Resources"]["/Font"]
        for font_key in font_dict:
            font_obj = font_dict[font_key]
            if "/BaseFont" in font_obj:
                fonts.add(font_obj["/BaseFont"])

print("Found fonts in PDF:")
for f in sorted(fonts):
    print(f)
