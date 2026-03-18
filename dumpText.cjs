const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./figma_home.json', 'utf8'));

const root = data.nodes["4:2472"].document;

function printTexts(node, prefix = "") {
  if (node.type === 'TEXT') {
    console.log(`${prefix}${node.characters.replace(/\n/g, ' ')}`);
  }
  if (node.children) {
    node.children.forEach(c => printTexts(c, prefix));
  }
}

root.children.forEach(child => {
  if (child.name.startsWith("Header") || child.name.startsWith("Layout") || child.name.startsWith("what we do") || child.name.startsWith("CTA")) {
    console.log('--- ' + child.name + ' ---');
    printTexts(child, "  ");
  }
});
