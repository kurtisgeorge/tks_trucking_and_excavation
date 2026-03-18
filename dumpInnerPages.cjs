const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./figma_pages.json', 'utf8'));

function printTexts(node, prefix = "") {
  if (node.type === 'TEXT') {
    console.log(`${prefix}${node.characters.replace(/\n/g, ' ')}`);
  }
  if (node.children) {
    node.children.forEach(c => printTexts(c, prefix));
  }
}

const pageIds = ["4:1767", "4:2123", "24:562", "4:1418"];
const pageNames = { "4:1767": "About", "4:2123": "Trucking Services", "24:562": "Excavation Services", "4:1418": "Contact" };

pageIds.forEach(id => {
  const root = data.nodes[id].document;
  console.log(`\n========== PAGE: ${pageNames[id]} ==========`);
  root.children.forEach(child => {
    if (child.name.startsWith("Header") || child.name.startsWith("Layout") || child.name.startsWith("CTA") || child.name.startsWith("Hero") || child.name.startsWith("what we do") || child.name.startsWith("Text") || child.name.startsWith("Content") || child.name.startsWith("Contact")) {
      console.log('--- ' + child.name + ' ---');
      printTexts(child, "  ");
    }
  });
});
