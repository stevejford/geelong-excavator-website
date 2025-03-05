const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directory containing images
const imageDir = path.join(__dirname, '../public/images');

// Function to recursively get all files in a directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fileList = getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to convert an image to WebP
async function convertToWebP(filePath) {
  // Skip if already WebP
  if (path.extname(filePath).toLowerCase() === '.webp') {
    console.log(`Skipping already WebP file: ${filePath}`);
    return;
  }
  
  // Skip SVG files
  if (path.extname(filePath).toLowerCase() === '.svg') {
    console.log(`Skipping SVG file: ${filePath}`);
    return;
  }
  
  const outputPath = filePath.replace(/\.(jpe?g|png|gif)$/i, '.webp');
  
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`Converted: ${filePath} -> ${outputPath}`);
    
    // Optionally remove the original file
    // fs.unlinkSync(filePath);
    // console.log(`Removed original: ${filePath}`);
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
  }
}

// Main function
async function main() {
  // Get all image files
  const imageFiles = getAllFiles(imageDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
  });
  
  console.log(`Found ${imageFiles.length} images to convert`);
  
  // Convert all images to WebP
  for (const file of imageFiles) {
    await convertToWebP(file);
  }
  
  console.log('Conversion complete!');
}

main().catch(console.error);
