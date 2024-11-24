const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://placehold.co/800x600/333333/FFFFFF/png?text=Rodgers+Practice',
    filename: 'rodgers-practice.jpg'
  },
  {
    url: 'https://placehold.co/800x600/333333/FFFFFF/png?text=Jets+Defense',
    filename: 'jets-defense.jpg'
  },
  {
    url: 'https://placehold.co/800x600/333333/FFFFFF/png?text=Garrett+Wilson',
    filename: 'garrett-wilson.jpg'
  },
  {
    url: 'https://placehold.co/800x600/333333/FFFFFF/png?text=MetLife+Stadium',
    filename: 'metlife-stadium.jpg'
  }
];

const imagesDir = path.join(__dirname, '../public/images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download each image
images.forEach(image => {
  const filepath = path.join(imagesDir, image.filename);
  https.get(image.url, (response) => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${image.filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${image.filename}:`, err.message);
  });
}); 