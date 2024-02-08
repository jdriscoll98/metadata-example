To reproduce the bug: 

1. npm i
2. npm run dev
3. Click on "home"
4. Notice that its stuck on loading

My refactor: 
1. checkout to suspense-example

Using suspense instead of loading.tsx doesn't have the bug! 
   
To fix the bug: 
1. npm i next@14.1.1-canary.37
2. Bug fixed!

Release: https://github.com/vercel/next.js/releases/tag/v14.1.1-canary.37
