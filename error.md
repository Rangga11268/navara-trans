15:56:16.458 Running build in Washington, D.C., USA (East) – iad1
15:56:16.459 Build machine configuration: 2 cores, 8 GB
15:56:16.468 Cloning github.com/Rangga11268/navara-trans (Branch: main, Commit: 56c50bd)
15:56:16.469 Skipping build cache, deployment was triggered without cache.
15:56:17.104 Cloning completed: 636.000ms
15:56:17.514 Running "vercel build"
15:56:17.908 Vercel CLI 48.10.3
15:56:18.518 Installing dependencies...
15:56:23.030 
15:56:23.032 added 222 packages in 4s
15:56:23.032 
15:56:23.032 49 packages are looking for funding
15:56:23.032   run `npm fund` for details
15:56:23.080 Running "npm run build"
15:56:23.189 
15:56:23.189 > navara-trans@0.0.0 build
15:56:23.189 > vite build
15:56:23.190 
15:56:23.476 [36mvite v7.2.4 [32mbuilding client environment for production...[36m[39m
15:56:23.807 transforming...
15:56:24.401 [32m✓[39m 11 modules transformed.
15:56:24.403 [31m✗[39m Build failed in 900ms
15:56:24.404 [31merror during build:
15:56:24.404 [31mCould not resolve "./assets/Components/Navbar" from "src/App.jsx"[31m
15:56:24.404 file: [36m/vercel/path0/src/App.jsx[31m
15:56:24.405     at getRollupError (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
15:56:24.405     at error (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
15:56:24.405     at ModuleLoader.handleInvalidResolvedId (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21590:24)
15:56:24.405     at file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21550:26[39m
15:56:24.440 Error: Command "npm run build" exited with 1







error during build:
src/App.jsx (3:7): "default" is not exported by "src/assets/Components/Hero.jsx", imported by "src/App.jsx".
file: D:/Ngoding/WEB Poject/navara-trans/src/App.jsx:3:7

1: import React from 'react';
2: import Navbar from "./assets/Components/Navbar.jsx";
3: import Hero from "./assets/Components/Hero.jsx";
          ^
4: import BookingWidget from "./assets/Components/BookingWidget.jsx";
5: import Destinations from './assets/Components/Destinations.jsx';

    at getRollupError (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
    at error (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
    at Module.error (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/node-entry.js:16956:16)
    at Module.traceVariable (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/node-entry.js:17412:29)
    at ModuleScope.findVariable (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/node-entry.js:15076:39)
    at ReturnValueScope.findVariable (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/node-entry.js:5649:38)
    at FunctionBodyScope.findVariable (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/node-entry.js:5649:38)
    at Identifier.bind (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/node-entry.js:5423:40)
    at CallExpression.bind (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/node-entry.js:2809:28)
    at CallExpression.bind (file:///D:/Ngoding/WEB%20Poject/navara-trans/node_modules/rollup/dist/es/shared/node-entry.js:12123:15)