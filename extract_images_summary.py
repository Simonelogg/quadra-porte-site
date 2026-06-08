import os
import pypdf

pdf_path = "/Users/sviluppologuasto/Desktop/Quadra Porte/Quadra Catlago ultimo.pdf"
reader = pypdf.PdfReader(pdf_path)

output_dir = "/Users/sviluppologuasto/.gemini/antigravity/scratch/quadra-porte-site/extracted_images"
os.makedirs(output_dir, exist_ok=True)

print("Scanning pages for images...")
total_images = 0

# We will count images and save images from a few representative pages:
# Page 1 (Cover), Page 8 (Flat door example), Page 27 (Insert example), Page 35 (Compact example), Page 56 (Filo Muro cover)
target_pages = [1, 8, 15, 27, 35, 56]

for p_num in range(1, len(reader.pages) + 1):
    page = reader.pages[p_num - 1]
    images = page.images
    num_imgs = len(images)
    if num_imgs > 0:
        print(f"Page {p_num} has {num_imgs} images.")
        total_images += num_imgs
        
        if p_num in target_pages:
            print(f"-> Extracting images from Page {p_num}...")
            for idx, img in enumerate(images):
                img_name = f"page_{p_num}_img_{idx}_{img.name}"
                img_path = os.path.join(output_dir, img_name)
                # Ensure the extension is appropriate or keep it as is
                with open(img_path, "wb") as f:
                    f.write(img.data)
                print(f"   Saved: {img_name} ({len(img.data) / 1024:.1f} KB)")

print(f"\nScan complete. Total images found across PDF: {total_images}")
print(f"Selected page images extracted to: {output_dir}")
