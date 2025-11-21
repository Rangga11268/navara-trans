15:51:55.513 Running build in Washington, D.C., USA (East) – iad1
15:51:55.513 Build machine configuration: 2 cores, 8 GB
15:51:55.804 Cloning github.com/Rangga11268/navara-trans (Branch: main, Commit: 56c50bd)
15:51:55.805 Previous build caches not available.
15:51:56.465 Cloning completed: 661.000ms
15:51:56.924 Running "vercel build"
15:51:57.373 Vercel CLI 48.10.3
15:51:57.980 Installing dependencies...
15:52:07.010 
15:52:07.010 added 222 packages in 4s
15:52:07.011 
15:52:07.011 49 packages are looking for funding
15:52:07.011   run `npm fund` for details
15:52:07.055 Running "npm run build"
15:52:07.164 
15:52:07.164 > navara-trans@0.0.0 build
15:52:07.164 > vite build
15:52:07.164 
15:52:07.448 [36mvite v7.2.4 [32mbuilding client environment for production...[36m[39m
15:52:07.505 transforming...
15:52:08.396 [32m✓[39m 9 modules transformed.
15:52:08.398 [31m✗[39m Build failed in 922ms
15:52:08.398 [31merror during build:
15:52:08.399 [31mCould not resolve "./assets/Components/Navbar" from "src/App.jsx"[31m
15:52:08.399 file: [36m/vercel/path0/src/App.jsx[31m
15:52:08.399     at getRollupError (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
15:52:08.399     at error (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
15:52:08.400     at ModuleLoader.handleInvalidResolvedId (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21590:24)
15:52:08.400     at file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21550:26[39m
15:52:08.435 Error: Command "npm run build" exited with 1