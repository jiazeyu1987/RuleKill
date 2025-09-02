const fs = require('fs');
const path = require('path');

// Read the modular HTML file
let html = fs.readFileSync('index-modular.html', 'utf8');

// Function to include component files
function includeComponent(match, componentPath) {
    try {
        // Remove the @@include() wrapper and get the actual path
        const cleanPath = componentPath.replace('@@include(\'', '').replace('\')', '');
        const componentContent = fs.readFileSync(cleanPath, 'utf8');
        return componentContent;
    } catch (error) {
        console.error(`Error including component: ${componentPath}`, error);
        return `<!-- Error including component: ${componentPath} -->`;
    }
}

// Replace @@include() directives with actual component content
html = html.replace(/@@include\('([^']+)'\)/g, includeComponent);

// Read all CSS files and combine them
const cssFiles = [
    'styles/main.css',
    'styles/components/rule-navigation.css',
    'styles/components/rule-paper.css',
    'styles/components/game-header.css',
    'styles/components/passage.css',
    'styles/components/choices.css'
];

let combinedCSS = '';
cssFiles.forEach(cssFile => {
    try {
        const cssContent = fs.readFileSync(cssFile, 'utf8');
        // Remove @import statements since we're combining everything
        const cleanedCSS = cssContent.replace(/@import url\([^)]+\);/g, '');
        combinedCSS += cleanedCSS + '\n\n';
    } catch (error) {
        console.error(`Error reading CSS file: ${cssFile}`, error);
    }
});

// Insert combined CSS into the HTML
html = html.replace('<link rel="stylesheet" href="styles/main.css">', 
    `<style>\n${combinedCSS}\n</style>`);

// Read the JavaScript file
try {
    const jsContent = fs.readFileSync('scripts/game.js', 'utf8');
    html = html.replace('<script src="scripts/game.js"></script>', 
        `<script>\n${jsContent}\n</script>`);
} catch (error) {
    console.error('Error reading JavaScript file', error);
}

// Write the final combined HTML file
fs.writeFileSync('dist/index.html', html);
console.log('Build completed! Combined HTML file created at dist/index.html');