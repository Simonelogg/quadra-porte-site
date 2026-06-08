import os
import sys

img_dir = "/Users/sviluppologuasto/.gemini/antigravity/scratch/quadra-porte-site/extracted_images"

try:
    from PIL import Image
    print("Pillow (PIL) is available.")
except ImportError:
    print("Pillow is not available. Please install pillow via pip.")
    sys.exit(1)

files = os.listdir(img_dir)
for f in files:
    if f.lower().endswith(".jp2"):
        jp2_path = os.path.join(img_dir, f)
        jpg_name = f[:-4] + ".jpg"
        jpg_path = os.path.join(img_dir, jpg_name)
        
        print(f"Converting {f} to {jpg_name}...")
        try:
            with Image.open(jp2_path) as img:
                # Convert RGBA/CMYK if necessary, but standard RGB for web
                if img.mode != "RGB":
                    img = img.convert("RGB")
                img.save(jpg_path, "JPEG", quality=85)
            print(f"Successfully converted and saved: {jpg_name}")
            # Optionally remove jp2
            os.remove(jp2_path)
            print(f"Removed original jp2: {f}")
        except Exception as e:
            print(f"Failed to convert {f}: {e}")
