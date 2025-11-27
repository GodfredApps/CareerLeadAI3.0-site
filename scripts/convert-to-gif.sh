#!/bin/bash

# Convert video to optimized GIF for marketing
# Requirements: ffmpeg (install with: brew install ffmpeg)

if [ -z "$1" ]; then
  echo "Usage: ./convert-to-gif.sh <input-video.mp4>"
  echo "Example: ./convert-to-gif.sh output/slider-demo.mp4"
  exit 1
fi

INPUT=$1
OUTPUT="${INPUT%.*}.gif"

echo "🎨 Converting video to GIF..."
echo "Input: $INPUT"
echo "Output: $OUTPUT"

# High quality GIF conversion
ffmpeg -i "$INPUT" \
  -vf "fps=30,scale=1280:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer" \
  -loop 0 \
  "$OUTPUT"

echo "✅ GIF created: $OUTPUT"
echo ""
echo "File sizes:"
ls -lh "$INPUT"
ls -lh "$OUTPUT"
