const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./figma_home.json', 'utf8'));

const root = data.nodes["4:2472"].document;

function traverse(node, depth = 0) {
  if (depth > 4) return; // Keep it somewhat shallow to avoid noise
  const pad = '  '.repeat(depth);
  let out = `${pad}- [${node.id}] ${node.name} (${node.type})`;
  if (node.type === 'TEXT') {
    out += ` => "${node.characters.substring(0, 50).replace(/\n/g, ' ')}"`;
  }
  if (node.fills && node.fills[0] && node.fills[0].color) {
      const c = node.fills[0].color;
      out += ` bg: rgba(${Math.round(c.r*255)},${Math.round(c.g*255)},${Math.round(c.b*255)},${c.a})`;
  }
  console.log(out);
  if (node.children) {
    node.children.forEach(c => traverse(c, depth + 1));
  }
}

traverse(root);
