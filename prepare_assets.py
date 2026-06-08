import os
import shutil
import pypdf
from PIL import Image

src_img_dir = "/Users/sviluppologuasto/.gemini/antigravity/scratch/quadra-porte-site/extracted_images"
dest_img_dir = "/Users/sviluppologuasto/.gemini/antigravity/scratch/quadra-porte-site/web-app/public/images"
os.makedirs(dest_img_dir, exist_ok=True)

# 1. Copy already extracted images with nice names
mapping = {
    "page_8_img_0_Im0.jpg": "flat.jpg",
    "page_27_img_0_Im0.jpg": "insert.jpg",
    "page_35_img_0_Im0.jpg": "compact.jpg",
    "page_56_img_0_Im0.jpg": "filomuro.jpg",
}

for src_name, dest_name in mapping.items():
    src_path = os.path.join(src_img_dir, src_name)
    dest_path = os.path.join(dest_img_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy(src_path, dest_path)
        print(f"Copied {src_name} to {dest_name}")
    else:
        print(f"Warning: {src_path} not found.")

# 2. Extract Pantografato image from Page 51
pdf_path = "/Users/sviluppologuasto/Desktop/Quadra Porte/Quadra Catlago ultimo.pdf"
reader = pypdf.PdfReader(pdf_path)
page_51 = reader.pages[50] # 50 is page 51 (0-indexed)
p51_images = page_51.images

if len(p51_images) > 0:
    print(f"Extracting Pantografato image from page 51...")
    img = p51_images[0]
    ext = ".jpg"
    if img.name.lower().endswith(".jp2"):
        # Save temp and convert
        temp_path = os.path.join(dest_img_dir, "temp_panto.jp2")
        with open(temp_path, "wb") as f:
            f.write(img.data)
        try:
            with Image.open(temp_path) as pil_img:
                if pil_img.mode != "RGB":
                    pil_img = pil_img.convert("RGB")
                pil_img.save(os.path.join(dest_img_dir, "pantografato.jpg"), "JPEG", quality=85)
            os.remove(temp_path)
            print("Extracted and saved: pantografato.jpg")
        except Exception as e:
            print(f"Error converting page 51 image: {e}")
            os.rename(temp_path, os.path.join(dest_img_dir, "pantografato.jp2"))
    else:
        with open(os.path.join(dest_img_dir, f"pantografato{ext}"), "wb") as f:
            f.write(img.data)
        print("Extracted and saved: pantografato.jpg")
else:
    print("No images found on page 51.")
