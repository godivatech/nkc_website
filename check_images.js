import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectsDir = 'client/src/assets/images/Projects';
const portfolioFile = 'client/src/pages/Portfolio.tsx';
const homeFile = 'client/src/pages/Home.tsx';

if (!fs.existsSync(projectsDir)) {
    console.log("Directory not found", projectsDir);
    process.exit(1);
}

const portfolioContent = fs.readFileSync(portfolioFile, 'utf8');
const homeContent = fs.readFileSync(homeFile, 'utf8');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + '/' + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, '/', file));
        }
    });

    return arrayOfFiles;
}

const allImages = getAllFiles(projectsDir).filter(f => !f.endsWith('.DS_Store'));
const unusedImages = [];

allImages.forEach(img => {
    const posixPath = img.split(path.sep).join('/');
    const searchMatch = posixPath.substring(posixPath.indexOf('Projects/') + 9);

    if (!portfolioContent.includes(searchMatch) && !homeContent.includes(searchMatch)) {
        unusedImages.push(searchMatch);
    }
});

console.log('Unused images:');
unusedImages.forEach(img => console.log("- " + img));
