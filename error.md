15:45:40.086 Running build in Washington, D.C., USA (East) – iad1
15:45:40.086 Build machine configuration: 2 cores, 8 GB
15:45:40.212 Cloning github.com/Rangga11268/navara-trans (Branch: main, Commit: ac93448)
15:45:40.213 Previous build caches not available.
15:45:40.894 Cloning completed: 682.000ms
15:45:41.335 Running "vercel build"
15:45:41.774 Vercel CLI 48.10.3
15:45:42.362 Installing dependencies...
15:45:46.995 
15:45:46.996 added 222 packages in 4s
15:45:46.996 
15:45:46.996 49 packages are looking for funding
15:45:46.996   run `npm fund` for details
15:45:47.038 Running "npm run build"
15:45:47.150 
15:45:47.151 > navara-trans@0.0.0 build
15:45:47.151 > vite build
15:45:47.151 
15:45:47.755 [36mvite v7.2.4 [32mbuilding client environment for production...[36m[39m
15:45:47.812 transforming...
15:45:48.661 [32m✓[39m 12 modules transformed.
15:45:48.663 [31m✗[39m Build failed in 882ms
15:45:48.664 [31merror during build:
15:45:48.664 [31mCould not resolve "./assets/Components/Navbar" from "src/App.jsx"[31m
15:45:48.664 file: [36m/vercel/path0/src/App.jsx[31m
15:45:48.665     at getRollupError (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
15:45:48.665     at error (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
15:45:48.665     at ModuleLoader.handleInvalidResolvedId (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21590:24)
15:45:48.665     at file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21550:26[39m
15:45:48.701 Error: Command "npm run build" exited with 1