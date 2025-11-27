/**
 * Automated Slider Recording Script
 * Records the What's New slider animation for marketing materials
 *
 * Requirements:
 * npm install puppeteer puppeteer-screen-recorder
 */

const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

async function recordSlider() {
  console.log('🎬 Starting slider recording...');

  const browser = await puppeteer.launch({
    headless: false, // Show browser window
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  });

  const page = await browser.newPage();

  // Initialize screen recorder
  const recorder = new PuppeteerScreenRecorder(page, {
    followNewTab: false,
    fps: 60,
    videoFrame: {
      width: 1920,
      height: 1080,
    },
    aspectRatio: '16:9',
  });

  try {
    // Navigate to What's New page
    console.log('📍 Navigating to What\'s New page...');
    await page.goto('http://localhost:3001/whats-new', {
      waitUntil: 'networkidle0',
    });

    // Scroll to slider section
    console.log('📜 Scrolling to slider...');
    await page.evaluate(() => {
      const slider = document.querySelector('[class*="carousel"]') ||
                     document.querySelector('[class*="slider"]');
      if (slider) {
        slider.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    await page.waitForTimeout(1000);

    // Start recording
    console.log('🔴 Recording started...');
    const outputPath = `./output/slider-demo-${Date.now()}.mp4`;
    await recorder.start(outputPath);

    // Let slider auto-play through all 4 slides
    // Each slide shows for 6 seconds = 24 seconds total
    console.log('⏱️  Recording 4 slides (24 seconds)...');
    await page.waitForTimeout(25000); // 25 seconds to capture all slides

    // Stop recording
    console.log('⏹️  Stopping recording...');
    await recorder.stop();

    console.log(`✅ Video saved to: ${outputPath}`);
    console.log('🎉 Recording complete!');

  } catch (error) {
    console.error('❌ Error during recording:', error);
  } finally {
    await browser.close();
  }
}

// Run the script
recordSlider().catch(console.error);
