import{defineConfig}from'vite';
import react from'@vitejs/plugin-react';
import{resolve}from'node:path';

export default defineConfig({
 base:'/moonstonewebsite/',
 plugins:[react()],
 build:{rollupOptions:{input:{market:resolve(__dirname,'index.html'),trail:resolve(__dirname,'ar-trail.html')}}}
});
