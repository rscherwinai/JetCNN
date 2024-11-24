const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Jets brand colors
const JETS_GREEN = '#125740';
const JETS_BLACK = '#000000';
const JETS_WHITE = '#FFFFFF';

const imageNames = [
  { name: 'rodgers-recovery.jpg', type: 'player', pattern: 'diagonal' },
  { name: 'jets-draft.jpg', type: 'draft', pattern: 'grid' },
  { name: 'wilson-interview.jpg', type: 'player', pattern: 'diagonal' },
  { name: 'defense-analysis.jpg', type: 'team', pattern: 'dots' },
  { name: 'saleh-presser.jpg', type: 'coach', pattern: 'diagonal' },
  { name: 'hall-comeback.jpg', type: 'player', pattern: 'diagonal' },
  { name: 'offseason-moves.jpg', type: 'team', pattern: 'grid' },
  { name: 'schedule-preview.jpg', type: 'team', pattern: 'dots' },
  { name: 'rookie-impact.jpg', type: 'player', pattern: 'diagonal' },
  { name: 'stadium-upgrades.jpg', type: 'facility', pattern: 'grid' },
  { name: 'fan-experience.jpg', type: 'facility', pattern: 'dots' },
  { name: 'team-chemistry.jpg', type: 'team', pattern: 'grid' },
  { name: 'coaching-changes.jpg', type: 'coach', pattern: 'diagonal' },
  { name: 'playoff-push.jpg', type: 'team', pattern: 'dots' },
  { name: 'training-camp.jpg', type: 'team', pattern: 'grid' }
];

async function generatePattern(width, height, pattern) {
  const svg = `
    <svg width="${width}" height="${height}">
      <defs>
        <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          ${pattern === 'dots' ? `
            <circle cx="10" cy="10" r="2" fill="${JETS_WHITE}" fill-opacity="0.2"/>
          ` : pattern === 'grid' ? `
            <path d="M 20 0 L 0 0 0 20" stroke="${JETS_WHITE}" stroke-width="0.5" fill="none" stroke-opacity="0.2"/>
          ` : `
            <path d="M-5,5 L15,25 M-5,15 L25,45 M-5,-5 L35,35" stroke="${JETS_WHITE}" stroke-width="0.5" stroke-opacity="0.2"/>
          `}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)"/>
    </svg>`;

  return Buffer.from(svg);
}

async function generateOverlay(width, height, text, type) {
  const svg = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${JETS_WHITE};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${JETS_GREEN};stop-opacity:1" />
        </linearGradient>
      </defs>
      <style>
        .title { 
          fill: white; 
          font-size: 48px; 
          font-weight: bold; 
          font-family: Arial;
          filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5));
        }
        .category { 
          fill: ${JETS_GREEN}; 
          font-size: 24px; 
          font-family: Arial;
          background: ${JETS_WHITE};
          padding: 5px;
        }
        .jets { 
          fill: url(#textGradient); 
          font-size: 32px; 
          font-family: Arial;
          font-weight: bold;
        }
      </style>
      <rect width="100%" height="100%" fill="rgba(0,0,0,0.4)"/>
      <text x="50%" y="45%" text-anchor="middle" class="title">${text.toUpperCase()}</text>
      <text x="50%" y="85%" text-anchor="middle" class="jets">NEW YORK JETS</text>
      <text x="50" y="50" class="category">${type.toUpperCase()}</text>
    </svg>`;

  return Buffer.from(svg);
}

async function generateImage(imageName, type, pattern) {
  const width = 1200;
  const height = 800;
  
  // Create base gradient
  const baseImage = await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 18, g: 87, b: 64 }
    }
  })
  .linear(1.1) // Increase contrast
  .composite([
    {
      input: await generatePattern(width, height, pattern),
      blend: 'over'
    },
    {
      input: await generateOverlay(width, height, imageName.replace('.jpg', '').split('-').join(' '), type),
      blend: 'over'
    }
  ])
  .modulate({
    brightness: 1.1,
    saturation: 1.2
  })
  .sharpen()
  .jpeg({
    quality: 90,
    chromaSubsampling: '4:4:4'
  })
  .toBuffer();

  return baseImage;
}

async function generateImages() {
  const outputDir = path.join(process.cwd(), 'public', 'images', 'articles');
  
  // Create directories if they don't exist
  await fs.mkdir(outputDir, { recursive: true });

  // Generate placeholder images
  for (const image of imageNames) {
    const outputBuffer = await generateImage(image.name, image.type, image.pattern);
    await fs.writeFile(path.join(outputDir, image.name), outputBuffer);
    console.log(`Generated ${image.name}`);
  }
}

generateImages().catch(console.error); 