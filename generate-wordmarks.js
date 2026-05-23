const fs = require('fs');
const https = require('https');
const path = require('path');

const brands = [
  { id: 'nvidia', name: 'NVIDIA', color: '#76B900' },
  { id: 'amd', name: 'AMD EPYC', color: '#ED1C24' },
  { id: 'intel', name: 'Intel Xeon', color: '#0068B5' },
  { id: 'truenas', name: 'TrueNAS', color: '#0095D5' },
  { id: 'supermicro', name: 'SUPERMICRO', color: '#FFFFFF' },
  { id: 'proxmox', name: 'Proxmox', color: '#E57000' },
  { id: 'ubuntu', name: 'Ubuntu', color: '#E95420' },
  { id: 'vmware', name: 'VMware', color: '#607078' },
  
  { id: 'blender', name: 'Blender', color: '#F5792A' },
  { id: 'davinciresolve', name: 'DaVinci Resolve', color: '#FFFFFF' },
  { id: 'unrealengine', name: 'Unreal Engine', color: '#FFFFFF' },
  { id: 'dassaultsystemes', name: 'SolidWorks', color: '#E32A2F' },
  { id: 'autodesk', name: 'Revit / AutoCAD', color: '#0696D7' },
  { id: 'pytorch', name: 'PyTorch', color: '#EE4C2C' },
  { id: 'tensorflow', name: 'TensorFlow', color: '#FF6F00' },
  { id: 'ollama', name: 'Ollama', color: '#FFFFFF' },
  { id: 'stablediffusion', name: 'Stable Diffusion', color: '#FFFFFF' },
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function generate() {
  for (const brand of brands) {
    const width = 36 + (brand.name.length * 14);
    
    // Fetch the raw SVG from simpleicons
    await new Promise((resolve) => {
      https.get(`https://cdn.simpleicons.org/${brand.id}`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          // Extract the path from the raw SVG
          const pathMatch = data.match(/<path\s+[^>]*d="([^"]+)"/);
          const pathData = pathMatch ? pathMatch[1] : '';
          
          if (!pathData) {
            console.log(`Failed to extract path for ${brand.id}`);
          }
          
          const svg = `<svg width="${width}" height="40" viewBox="0 0 ${width} 40" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 8) scale(1) translate(0, 0)">
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path d="${pathData}" fill="${brand.color}" />
    </svg>
  </g>
  <text x="36" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="20" fill="#ffffff" letter-spacing="0.5">${brand.name}</text>
</svg>`;

          fs.writeFileSync(path.join(dir, `${brand.id}.svg`), svg);
          console.log(`Generated ${brand.id}.svg`);
          resolve();
        });
      }).on('error', (e) => {
        console.log(`Error ${brand.id}: ${e.message}`);
        resolve();
      });
    });
  }
}

generate();
