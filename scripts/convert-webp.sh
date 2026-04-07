#!/bin/bash
# Convert JPG images to WebP format for better performance
# Run from project root: bash scripts/convert-webp.sh

cd public/images
for f in *.jpg; do
  if [ -f "$f" ]; then
    sips -s format webp "$f" --out "${f%.jpg}.webp" 2>/dev/null
    echo "Converted: $f → ${f%.jpg}.webp"
  fi
done

cd staff
for f in *.jpg; do
  if [ -f "$f" ]; then
    sips -s format webp "$f" --out "${f%.jpg}.webp" 2>/dev/null
    echo "Converted: staff/$f → staff/${f%.jpg}.webp"
  fi
done

cd ../books
for f in *.jpg; do
  if [ -f "$f" ]; then
    sips -s format webp "$f" --out "${f%.jpg}.webp" 2>/dev/null
    echo "Converted: books/$f → books/${f%.jpg}.webp"
  fi
done
echo "Done! Next.js will serve WebP automatically via next/image."
