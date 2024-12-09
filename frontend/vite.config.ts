import { UserConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default {
    // config options
    build: {
        outDir: '../server/src/public',
        assetsDir: 'bundle',
        emptyOutDir: true,
        rollupOptions: {
            input: '/src/main.ts',
            output: {
                entryFileNames: 'index.js',
                assetFileNames: 'index.css',
            },
        },
        cssMinify: true,
    },
} satisfies UserConfig;
