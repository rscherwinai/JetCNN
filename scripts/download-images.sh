#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p russell/public/images

# Download placeholder images
curl "https://placehold.co/800x600/333333/FFFFFF/png?text=Rodgers+Practice" > russell/public/images/rodgers-practice.jpg
curl "https://placehold.co/800x600/333333/FFFFFF/png?text=Jets+Defense" > russell/public/images/jets-defense.jpg
curl "https://placehold.co/800x600/333333/FFFFFF/png?text=Garrett+Wilson" > russell/public/images/garrett-wilson.jpg
curl "https://placehold.co/800x600/333333/FFFFFF/png?text=MetLife+Stadium" > russell/public/images/metlife-stadium.jpg 