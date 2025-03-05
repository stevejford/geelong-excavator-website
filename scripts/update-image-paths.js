const fs = require('fs');
const path = require('path');

// Directories to search for files
const srcDir = path.join(__dirname, '../src');

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

// Function to update image paths in a file
function updateImagePaths(filePath) {
  // Only process TypeScript/JavaScript/JSX/TSX files
  if (!['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(filePath).toLowerCase())) {
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Update image paths with regex
  const newContent = content.replace(
    /(["']\/images\/.*?\.)(jpe?g|png|gif)(["'])/gi,
    (match, prefix, ext, suffix) => {
      updated = true;
      return `${prefix}webp${suffix}`;
    }
  );
  
  // Save the file if changes were made
  if (updated) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated image paths in: ${filePath}`);
  }
}

// Main function
function main() {
  // Get all files
  const files = getAllFiles(srcDir);
  
  console.log(`Found ${files.length} files to check`);
  
  // Update image paths in all files
  let updatedCount = 0;
  for (const file of files) {
    try {
      updateImagePaths(file);
      updatedCount++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  console.log(`Updated ${updatedCount} files`);
  console.log('Update complete!');
}

main();
