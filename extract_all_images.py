import os
import pypdf
from PIL import Image

pdf_path = "/Users/sviluppologuasto/Desktop/Quadra Porte/Quadra Catlago ultimo.pdf"
output_dir = "/Users/sviluppologuasto/Desktop/Quadra Porte/Immagini_Catalogo"
os.makedirs(output_dir, exist_ok=True)

print(f"Opening PDF: {pdf_path}")
reader = pypdf.PdfReader(pdf_path)
num_pages = len(reader.pages)
print(f"Total pages: {num_pages}")

extracted_count = 0
failed_count = 0
converted_count = 0

for p_idx in range(num_pages):
    page = reader.pages[p_idx]
    p_num = p_idx + 1
    images = page.images
    
    if len(images) > 0:
        print(f"Page {p_num}: extracting {len(images)} images...")
        for img_idx, img in enumerate(images):
            # Formulate base filename
            base_name = f"pag_{p_num:02d}_img_{img_idx:02d}"
            
            # Identify format or content
            img_data = img.data
            img_name_orig = img.name
            
            # Determine target extension based on origin name or data headers
            ext = ".png" if img_name_orig.lower().endswith(".png") else ".jpg"
            if img_name_orig.lower().endswith(".jp2") or img_name_orig.lower().endswith(".jpx"):
                ext = ".jp2"
                
            temp_path = os.path.join(output_dir, f"{base_name}_temp{ext}")
            
            try:
                # Save raw bytes first
                with open(temp_path, "wb") as f:
                    f.write(img_data)
                
                # If it's a jp2 file, convert to jpg using Pillow
                if ext == ".jp2":
                    jpg_path = os.path.join(output_dir, f"{base_name}.jpg")
                    try:
                        with Image.open(temp_path) as pil_img:
                            if pil_img.mode != "RGB":
                                pil_img = pil_img.convert("RGB")
                            pil_img.save(jpg_path, "JPEG", quality=85)
                        os.remove(temp_path) # remove temp jp2
                        converted_count += 1
                        extracted_count += 1
                    except Exception as e_conv:
                        print(f"   [Conv Error] Failed to convert jp2 {temp_path}: {e_conv}")
                        # Keep the jp2 if conversion failed
                        jp2_path = os.path.join(output_dir, f"{base_name}.jp2")
                        os.rename(temp_path, jp2_path)
                        extracted_count += 1
                else:
                    # Rename to clean name without temp
                    final_path = os.path.join(output_dir, f"{base_name}{ext}")
                    os.rename(temp_path, final_path)
                    extracted_count += 1
            except Exception as e:
                print(f"   [Error] Page {p_num} image {img_idx}: {e}")
                failed_count += 1

print(f"\nExtraction Finished!")
print(f"Successfully saved {extracted_count} images to: {output_dir}")
print(f"Converted {converted_count} JP2 images to standard JPG.")
if failed_count > 0:
    print(f"Failed to extract {failed_count} images.")
