const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = [
  { name: 'nvidia', url: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg' },
  { name: 'amd', url: 'https://cdn.worldvectorlogo.com/logos/amd-logo-1.svg' },
  { name: 'intel', url: 'https://cdn.worldvectorlogo.com/logos/intel.svg' },
  { name: 'truenas', url: 'https://cdn.worldvectorlogo.com/logos/truenas.svg' },
  { name: 'supermicro', url: 'https://cdn.worldvectorlogo.com/logos/supermicro.svg' },
  { name: 'proxmox', url: 'https://cdn.worldvectorlogo.com/logos/proxmox-1.svg' },
  { name: 'ubuntu', url: 'https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg' },
  { name: 'vmware', url: 'https://cdn.worldvectorlogo.com/logos/vmware-1.svg' },
  { name: 'blender', url: 'https://cdn.worldvectorlogo.com/logos/blender-2.svg' },
  { name: 'davinci', url: 'https://cdn.worldvectorlogo.com/logos/davinci-resolve-1.svg' },
  { name: 'unreal', url: 'https://cdn.worldvectorlogo.com/logos/unreal-engine.svg' },
  { name: 'solidworks', url: 'https://cdn.worldvectorlogo.com/logos/solidworks-1.svg' },
  { name: 'autocad', url: 'https://cdn.worldvectorlogo.com/logos/autocad-1.svg' },
  { name: 'pytorch', url: 'https://cdn.worldvectorlogo.com/logos/pytorch-2.svg' },
  { name: 'tensorflow', url: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg' },
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download() {
  for (const logo of logos) {
    await new Promise((resolve) => {
      https.get(logo.url, (res) => {
        if (res.statusCode !== 200) {
          console.log(`Failed to download ${logo.name}: ${res.statusCode}`);
          resolve();
          return;
        }
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          // Replace black fill with white to be visible on dark bg
          // Very basic heuristic
          let modified = data
            .replace(/fill="#000000"/gi, 'fill="#ffffff"')
            .replace(/fill="#111111"/gi, 'fill="#ffffff"')
            .replace(/fill="#231F20"/gi, 'fill="#ffffff"')
            .replace(/fill="black"/gi, 'fill="white"');
          
          fs.writeFileSync(path.join(dir, `${logo.name}.svg`), modified);
          console.log(`Downloaded ${logo.name}`);
          resolve();
        });
      }).on('error', (e) => {
        console.log(`Error ${logo.name}: ${e.message}`);
        resolve();
      });
    });
  }
}

download();
