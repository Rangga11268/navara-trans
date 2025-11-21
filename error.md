16:13:56.172 Running build in Washington, D.C., USA (East) – iad1
16:13:56.172 Build machine configuration: 2 cores, 8 GB
16:13:56.289 Cloning github.com/Rangga11268/navara-trans (Branch: main, Commit: 953318a)
16:13:56.290 Previous build caches not available.
16:13:56.920 Cloning completed: 631.000ms
16:13:57.549 Running "vercel build"
16:13:57.953 Vercel CLI 48.10.5
16:13:58.582 Installing dependencies...
16:14:03.829 
16:14:03.830 added 222 packages in 5s
16:14:03.830 
16:14:03.830 49 packages are looking for funding
16:14:03.830   run `npm fund` for details
16:14:03.879 Running "npm run build"
16:14:03.997 
16:14:03.998 > navara-trans@0.0.0 build
16:14:03.998 > vite build
16:14:03.998 
16:14:04.326 [36mvite v7.2.4 [32mbuilding client environment for production...[36m[39m
16:14:04.385 transforming...
16:14:05.286 [32m✓[39m 11 modules transformed.
16:14:05.288 [31m✗[39m Build failed in 934ms
16:14:05.289 [31merror during build:
16:14:05.289 [31mCould not resolve "./assets/Components/Hero.jsx" from "src/App.jsx"[31m
16:14:05.289 file: [36m/vercel/path0/src/App.jsx[31m
16:14:05.290     at getRollupError (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
16:14:05.290     at error (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
16:14:05.290     at ModuleLoader.handleInvalidResolvedId (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21590:24)
16:14:05.290     at file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21550:26[39m
16:14:05.338 Error: Command "npm run build" exited with 1