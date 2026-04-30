"""
Run this after saving your logo:
  python remove_bg.py <input_image> [output_image]

Example:
  python remove_bg.py logo_original.png client/public/logo.png
"""
import sys
from PIL import Image

def remove_white_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.load()
    width, height = img.size

    # Flood fill transparent from all 4 corners to remove outer white bg
    def flood_fill(start_x, start_y, threshold=30):
        stack = [(start_x, start_y)]
        visited = set()
        while stack:
            x, y = stack.pop()
            if (x, y) in visited:
                continue
            if x < 0 or x >= width or y < 0 or y >= height:
                continue
            r, g, b, a = data[x, y]
            # If pixel is near-white and not yet transparent
            if r > (255 - threshold) and g > (255 - threshold) and b > (255 - threshold) and a > 0:
                data[x, y] = (255, 255, 255, 0)
                visited.add((x, y))
                stack.extend([(x+1,y),(x-1,y),(x,y+1),(x,y-1)])

    flood_fill(0, 0)
    flood_fill(width - 1, 0)
    flood_fill(0, height - 1)
    flood_fill(width - 1, height - 1)

    img.save(output_path, "PNG")
    print(f"Done! Saved to: {output_path}")

if __name__ == "__main__":
    inp = sys.argv[1] if len(sys.argv) > 1 else "logo_original.png"
    out = sys.argv[2] if len(sys.argv) > 2 else "client/public/logo.png"
    remove_white_background(inp, out)
