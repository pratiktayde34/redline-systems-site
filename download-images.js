const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { name: 'hero-bg.jpg', url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2500&auto=format&fit=crop' },
  { name: 'ai-gpu-card.jpg', url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' },
  { name: 'storage-card.jpg', url: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=800&auto=format&fit=crop' },
  { name: 'workstations-card.jpg', url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=800&auto=format&fit=crop' },
  { name: 'ai-gpu-hero.jpg', url: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1000&auto=format&fit=crop' },
  { name: 'ai-gpu-lab.jpg', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop' },
  { name: 'solutions-ai.jpg', url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop' },
  { name: 'solutions-storage.jpg', url: 'https://images.unsplash.com/photo-1601599561096-f87c95fff1e9?q=80&w=1000&auto=format&fit=crop' },
  { name: 'solutions-workstation.jpg', url: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1000&auto=format&fit=crop' },
  { name: 'storage-hero.jpg', url: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1000&auto=format&fit=crop' },
  { name: 'workstations-engineering.jpg', url: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1000&auto=format&fit=crop' },
  { name: 'workstations-rendering.jpg', url: 'https://images.unsplash.com/photo-1618424181497-157f25b6ce5e?q=80&w=1000&auto=format&fit=crop' }
];

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download() {
  for (const img of images) {
    await new Promise((resolve) => {
      https.get(img.url, (res) => {
        // Handle redirects if unsplash uses them
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          https.get(res.headers.location, (redirectRes) => {
            const file = fs.createWriteStream(path.join(dir, img.name));
            redirectRes.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
          });
        } else {
          const file = fs.createWriteStream(path.join(dir, img.name));
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }
      }).on('error', (e) => {
        console.log(`Error downloading ${img.name}: ${e.message}`);
        resolve();
      });
    });
    console.log(`Finished ${img.name}`);
  }
}

download();
