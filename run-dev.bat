@echo off
echo Starting Next.js development server with portable Node.js v20...
set PATH=%~dp0..\node-v20.12.2-win-x64;%PATH%
npm run dev
