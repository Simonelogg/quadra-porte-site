import pypdf
import re

pdf_path = "./Quadra Catlago ultimo.pdf"
reader = pypdf.PdfReader(pdf_path)

print("=== SEARCHING FOR CONTACT INFO IN PDF ===")
email_pattern = re.compile(r'[\w\.-]+@[\w\.-]+')
phone_pattern = re.compile(r'(?i)(tel|fax|phone|cell|n\.)[:\s\d\.-]{5,}')
web_pattern = re.compile(r'(?i)(www\.|http)[\w\.-]+')
address_pattern = re.compile(r'(?i)(via|viale|piazza|c\.da|cda|zona ind|z\.i\.)\s+\w+')

for idx, page in enumerate(reader.pages):
    text = page.extract_text()
    if not text:
        continue
    
    lines = text.split('\n')
    for line in lines:
        if "@" in line or "via" in line.lower() or "tel" in line.lower() or "www." in line.lower() or "quadra" in line.lower():
            # Print page number and matching line
            print(f"Page {idx+1}: {line.strip()}")
