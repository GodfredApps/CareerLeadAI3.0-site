# Marketing Materials Creation Scripts

Scripts to capture slider animations as videos and GIFs for marketing purposes.

## Quick Start (Recommended - No Setup)

### Option 1: Mac Screen Recording (Easiest)
1. Start dev server: `npm run dev`
2. Open: http://localhost:3001/whats-new
3. Press: `Cmd + Shift + 5`
4. Select "Record Selected Portion"
5. Frame the slider area
6. Click Record
7. Let it play through all 4 slides (~25 seconds)
8. Click Stop in menu bar
9. Video saved to Desktop as .mov

---

## Option 2: Automated Recording (Best Quality)

### Setup

```bash
# Install dependencies
npm install puppeteer puppeteer-screen-recorder --save-dev

# Create output directory
mkdir -p output
```

### Record Video

```bash
# Make sure dev server is running
npm run dev

# In another terminal, run recording script
node scripts/record-slider.js
```

**Output:** `output/slider-demo-{timestamp}.mp4`

---

## Option 3: Convert to GIF

### Setup FFmpeg

```bash
# Install FFmpeg (Mac)
brew install ffmpeg

# Make script executable
chmod +x scripts/convert-to-gif.sh
```

### Convert

```bash
# Convert video to optimized GIF
./scripts/convert-to-gif.sh output/slider-demo-123456.mp4
```

**Output:** `output/slider-demo-123456.gif`

---

## Recommended Workflow

**For Social Media Posts:**
1. Record with Mac screen recording (Cmd + Shift + 5)
2. Trim in QuickTime (Cmd + T)
3. Export as .mov or convert to .mp4

**For Email/Website:**
1. Use automated script: `node scripts/record-slider.js`
2. Convert to GIF: `./scripts/convert-to-gif.sh output/slider-demo.mp4`
3. Optimize GIF size if needed

**For Product Demos:**
1. Record at 1920x1080 resolution
2. Keep as .mp4 for YouTube/Vimeo
3. Add voiceover in post-production

---

## File Sizes

**Video (.mp4):**
- 1920x1080, 25 seconds ≈ 5-10 MB

**GIF:**
- 1280x720, 25 seconds ≈ 10-20 MB
- Can optimize further if needed

---

## Tips

**For Best Results:**
- Record on high-resolution display
- Use Safari/Chrome (not Firefox - animations may differ)
- Let slider complete full cycle (all 4 slides)
- Keep mouse cursor off screen
- Close browser extensions that may interfere

**Optimization:**
- Videos: Use H.264 codec for best compatibility
- GIFs: Reduce colors to decrease size
- Consider WebM format for web use (smaller than GIF)

---

## Troubleshooting

**Script fails to record:**
- Ensure dev server is running at http://localhost:3001
- Check Node.js version (need 16+)
- Try running with `--no-sandbox` flag

**GIF too large:**
- Reduce resolution: `scale=800:-1` instead of `1280:-1`
- Reduce colors: `max_colors=128` instead of `256`
- Reduce FPS: `fps=15` instead of `fps=30`

**Animations not smooth:**
- Increase recording FPS to 60
- Close other applications
- Use discrete GPU if available

---

## Alternative Tools

**Online Screen Recorders:**
- Loom (free, easy)
- CloudApp
- Screencastify

**GIF Tools:**
- GIPHY Capture (Mac)
- LICEcap (Mac/Windows)
- Gifski (Mac - best quality)

**Video Editors:**
- ScreenFlow (Mac - professional)
- Camtasia (Mac/Windows)
- DaVinci Resolve (Free)

---

Last Updated: 2025-11-27
